use crate::network::handler::Handler;
use crate::network::packet::{Packet, TOTAL_SIZE};
use crate::types::bucket_list::BucketList;
use std::net::{UdpSocket, Ipv4Addr, SocketAddrV4, IpAddr};
use std::thread;
use std::sync::{Arc, Mutex};
use igd;
use get_if_addrs;
use std::sync::mpsc;
use crate::types::request_list::RequestList;
use crate::bootstrapping::file::{save, load};

static MAX_BUCKETS: usize = 10;
static BUCKET_SIZE: usize = 10;
const STOP_SERVER: u8 = 0;

pub struct Server {
    socket: UdpSocket, // Server's socket (Same as client)
    num_nodes: Arc<Mutex<usize>>, // Number of nodes we send when find_node is received
    bucket_list: Arc<Mutex<BucketList>>, // List of buckets
    requests: Arc<Mutex<RequestList>>, // List of requests
    message_sender: Option<mpsc::Sender<u8>>,
    port: u16, // External port
}

impl Server {
    pub fn new(
        num_nodes: usize,
        requests: Arc<Mutex<RequestList>>,
        socket: UdpSocket,
        internal_port: u16
    ) -> Self {
        // Get local IP
        let mut local_ip: Option<Ipv4Addr> = None;
        let ip_list = get_if_addrs::get_if_addrs().unwrap();
        for ip in ip_list.iter() {
            if let IpAddr::V4(ip) = ip.ip() {
                local_ip = Some(ip);
                break;
            };
        }
        if local_ip.is_none() {
            panic!("Failed to get local IPv4");
        }

        // Get a random external port with UPnP
        let external_port: u16;
        match igd::search_gateway(Default::default()) {
            Err(ref err) => panic!("Error: {}", err),
            Ok(gateway) => {
                match gateway.add_any_port(
                    igd::PortMappingProtocol::UDP,
                    SocketAddrV4::new(local_ip.unwrap(), internal_port),
                    10,
                    "Samurai") {
                    Err(ref e) => panic!("Error getting port: {}", e),
                    Ok(port) => external_port = port,
                }
            }
        }

        // Create the bucket list
        let bucket_list = BucketList::new(MAX_BUCKETS, BUCKET_SIZE);

        Server {
            socket,
            num_nodes: Arc::new(Mutex::new(num_nodes)),
            bucket_list: Arc::new(Mutex::new(bucket_list)),
            requests,
            message_sender: None,
            port: external_port,
        }
    }

    pub fn start(&mut self) {
        // Create copy for the server thread
        let main_socket = self.socket.try_clone().unwrap();
        let handler_socket = self.socket.try_clone().unwrap();

        let num_nodes = *self.num_nodes.lock().unwrap();
        let requests = Arc::clone(&self.requests);
        let bucket_list = Arc::clone(&self.bucket_list);
        let message_receiver;

        let mp = mpsc::channel();
        self.message_sender = Some(mp.0);
        message_receiver = mp.1;

        // Launch thread with main loop
        thread::spawn(move || {
            let mut buf = [0; TOTAL_SIZE];
            let handler = Handler::new(
                num_nodes,
                requests,
                bucket_list,
                handler_socket,
            );

            // Msg handler loop
            loop {
                if let Ok(msg) = message_receiver.try_recv() {
                    if msg == STOP_SERVER {
                        break;
                    }
                }

                let (_number_of_bytes, src_addr) = match main_socket.recv_from(&mut buf) {
                    Ok((n, addr)) => (n, addr),
                    Err(e) => {
                        println!("ERROR {}", e);
                        continue;
                    },
                };

                let packet = Packet::from_bytes(&buf);
                handler.switch(&packet, src_addr);
            }
        });
    }

    pub fn stop(&self) {
        match &self.message_sender {
            Some(msg) => {
                if let Err(e) = msg.send(STOP_SERVER) {
                    println!("Failed to send stop message to server {:?}", e);
                }
            },
            None => return,
        };
    }

    pub fn port(&self) -> u16 {
        self.port
    }

    pub fn save(&self, path: &str) {
        let node_list = self.bucket_list.lock().unwrap().node_list();
        save(path, &node_list);
        println!("{:?}", self.bucket_list.lock().unwrap());
    }

    pub fn load(&self, path: &str) {
        let bucket_list = load(path);
        for node in bucket_list.iter() {
            self.bucket_list.lock().unwrap().add_node(node);
        }
        println!("{:?}", bucket_list);
    }
}
