use samurai::network::active::Client;
use samurai::network::passive::Server;
use samurai::network::packet::{Packet, TOTAL_SIZE};
use samurai::types::id::Id;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::thread::sleep;

const CLIENT_NUMNODES: usize = 10;

#[test]
fn test_sending() {
    // Create client and server
    let client = Client::new(CLIENT_NUMNODES);
    let server = Server::new(CLIENT_NUMNODES, client.requests());

    server.start();

    // Send UDP packet to the server
    let addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 1024);
    
    client.ping(addr);
    sleep(std::time::Duration::new(1, 0));
    
    client.find_node(addr, &Id::rand());
    sleep(std::time::Duration::new(1, 0));
}

#[test]
fn test_packet() {
    let buf = [0u8; TOTAL_SIZE];

    let packet = Packet::from_bytes(&buf);
    let packet2 = Packet::from_bytes(&packet.as_bytes());

    assert_eq!(packet.header(), packet2.header());
    assert_eq!(packet.cookie(), packet2.cookie());
    
    for i in 0..packet.data().len() {
        assert_eq!(packet.data()[i], packet2.data()[i]);
    }
}