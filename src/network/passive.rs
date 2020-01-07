use crate::network::packet::{Packet, TOTAL_SIZE};
use std::collections::VecDeque;
use std::net::UdpSocket;
use std::thread;

pub struct Server {
    socket: UdpSocket, // Server's socket
    port: u16,         // List of packets not yet processed
}

impl Server {
    pub fn new(port: u16) -> Self {
        Server {
            socket: UdpSocket::bind(format!("127.0.0.1:{}", port))
                .expect("Could not bind to that address"),
            port: port,
        }
    }

    pub fn start(self) {
        thread::spawn(move || {
            let mut buf = [0; TOTAL_SIZE];
            let mut packets = VecDeque::new();
            loop {
                let (number_of_bytes, src_addr) = self
                    .socket
                    .recv_from(&mut buf)
                    .expect("Did not receive data");
                let packet = Packet::from_bytes(&buf);
                println!("<<< RECV {} [{:?}]", src_addr, packet);
                packets.push_back(packet);
            }
        });
    }
}
