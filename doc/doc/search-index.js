var N=null,E="",T="t",U="u",searchIndex={};
var R=["bucketerror","samurai::bucket","add_node","result","samurai","samurai::server","tcpstream","usize","from_bytes","as_bytes","samurai::bucket::bucket_list","try_from","try_into","borrow_mut","samurai::bucket::error","type_id","samurai::server::passive","samurai::server::handler","borrow","typeid","samurai::server::threadpool","samurai::id","to_owned","clone_into","samurai::node","samurai::packet","ordering","add_assign","sub_assign","formatter","serialize","deserialize","BucketList","BucketError","ThreadPool","samurai::bootstrap","socketaddr"];
searchIndex["node_test_0"]={"doc":E,"i":[],"p":[]};
searchIndex["samurai"]={"doc":E,"i":[[0,"bucket",R[4],"Data structures shared by other modules",N,N],[3,"Bucket",R[1],E,N,N],[0,"bucket_list",E,"Wrapper to store many buckets",N,N],[3,R[32],R[10],E,N,N],[11,"new",E,"Create a new bucket list. max_bucket: maximum number of…",0,[[[R[7]]],["self"]]],[11,"get_closest",E,"Return the ID of all nodes in the bucket_list sorted by…",0,[[["self"],["id"]],[["id"],["vec",["id"]]]]],[11,R[2],E,"Add a new node to the bucket_list",0,[[["self"],["node"]],[[R[0]],[R[3],[R[0]]]]]],[11,"empty_space",E,"Check if you can add more nodes to the bucket_list",0,[[["self"]],["bool"]]],[11,"node_list",E,E,0,[[["self"]],[["vec",["node"]],["node"]]]],[0,"error",R[1],"Bucket errors",N,N],[4,R[33],R[14],E,N,N],[13,"BucketFull",E,E,1,N],[13,"IncorrectBucket",E,E,1,N],[13,"RepeatedLNode",E,E,1,N],[13,"LNodeNotFound",E,E,1,N],[13,"NodeNotFound",E,E,1,N],[13,"IndexError",E,E,1,N],[11,"new",R[1],E,2,[[["id"],[R[7]]],["self"]]],[11,R[2],E,"Add a new ndoe, can fail if the bucket is full, if the…",2,[[["self"],["node"]],[[R[0]],[R[3],[R[0]]]]]],[11,"rm_node",E,"Remove a node by its ID",2,[[["self"],["id"]]]],[11,"local",E,"Check if the bucket contains the node that represents us",2,[[["self"]],[[R[3],["node",R[0]]],["node"],[R[0]]]]],[11,"divide",E,"Divide bucket and split the ID space between the two. It…",2,[[["self"]],["option"]]],[11,"get",E,"Get a node from the bucket by its index, can fail if index…",2,[[["self"],[R[7]]],[[R[3],["node",R[0]]],["node"],[R[0]]]]],[11,"get_by_id",E,"Get a node from the bucket by its ID.",2,[[["self"],["id"]],[[R[3],["node",R[0]]],["node"],[R[0]]]]],[11,"fits",E,"Check if a node fits inside the bucket (in terms of ID)",2,[[["self"],["id"]],["bool"]]],[11,"nodes",E,"Get list of nodes inside a bucket",2,[[["self"]],["vec"]]],[0,"server",R[4],"Server that listens for packets",N,N],[0,"passive",R[5],E,N,N],[3,"Server",R[16],E,N,N],[11,"new",E,E,3,[[],["self"]]],[11,"queue_stream",E,E,3,[[["self"],[R[6]]]]],[11,"port",E,E,3,[[["self"]],["u16"]]],[11,"save",E,E,3,[[["self"],["str"]]]],[11,"load",E,E,3,[[["self"],["str"]]]],[0,"handler",R[5],E,N,N],[3,"Handler",R[17],E,N,N],[11,"new",E,E,4,[[[R[6]],["mutex",["bucketlist"]],["arc",["mutex"]]],["self"]]],[11,"start",E,E,4,[[["self"]]]],[0,"threadpool",R[5],E,N,N],[3,R[34],R[20],E,N,N],[11,"new",E,E,5,[[[R[7]]],["self"]]],[11,"execute",E,E,5,[[["self"],["f"]]]],[0,"client",R[4],"Functions used to send messages to other peers",N,N],[0,"active","samurai::client",E,N,N],[5,"ping","samurai::client::active",E,N,[[[R[6]]]]],[5,"pong",E,E,N,[[[R[6]],["u32"]]]],[5,"find_node",E,E,N,[[[R[6]],["id"]]]],[5,"send_node",E,E,N,[[[R[6]],["u32"],["vec"]]]],[5,"send_message",E,E,N,[[[R[6]],["string"]]]],[5,"send_echo",E,E,N,[[[R[6]],["u32"]]]],[0,"bootstrap",R[4],"Functions used to get into the network when restarted",N,N],[0,"file",R[35],"Utils for loading and saving peers to a txt file",N,N],[5,"save","samurai::bootstrap::file",E,N,[[["str"],["vec"]]]],[5,"load",E,E,N,[[["str"]],[["vec",["node"]],["node"]]]],[0,"random",R[35],"Utils for random IP probing",N,N],[5,"random_ipv4","samurai::bootstrap::random",E,N,[[],[R[36]]]],[5,"random_ipv6",E,E,N,[[],[R[36]]]],[0,"id",R[4],"Id of a node in the network",N,N],[3,"Id",R[21],E,N,N],[17,"ID_BYTES",E,E,N,N],[17,"HIGH_BITS",E,E,N,N],[17,"LOW_BITS",E,E,N,N],[11,"new",E,E,6,[[["u128"]],["self"]]],[11,R[8],E,E,6,[[],["self"]]],[11,R[9],E,E,6,[[["self"]]]],[11,"zero",E,E,6,[[],["self"]]],[11,"max",E,E,6,[[],["self"]]],[11,"rand",E,E,6,[[],["self"]]],[11,"half",E,E,6,[[],["self"]]],[0,"node",R[4],"Structure representing a node in the network",N,N],[3,"Node",R[24],E,N,N],[11,"new",E,E,7,[[[R[36]],["id"],["bool"]],["self"]]],[11,"is_local",E,E,7,[[["self"]],["bool"]]],[11,"id",E,E,7,[[],["id"]]],[0,"packet",R[4],"Packet structure of the protocol",N,N],[3,"Packet",R[25],E,N,N],[17,"TOTAL_SIZE",E,E,N,N],[17,"DATA_SIZE",E,E,N,N],[17,"PING_HEADER",E,E,N,N],[17,"PONG_HEADER",E,E,N,N],[17,"FINDNODE_HEADER",E,E,N,N],[17,"SENDNODE_HEADER",E,E,N,N],[17,"SENDMSG_HEADER",E,E,N,N],[17,"SENDECHO_HEADER",E,E,N,N],[11,"new",E,E,8,[[["u16"],["u32"]],["self"]]],[11,"new_with_cookie",E,E,8,[[["u16"]],["self"]]],[11,R[8],E,E,8,[[],["self"]]],[11,R[9],E,E,8,[[["self"]]]],[11,"header",E,E,8,[[["self"]],["u16"]]],[11,"cookie",E,E,8,[[["self"]],["u32"]]],[11,"data",E,E,8,[[["self"]]]],[11,"into",R[1],E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[11],E,E,2,[[[U]],[R[3]]]],[11,R[12],E,E,2,[[],[R[3]]]],[11,R[13],E,E,2,[[["self"]],[T]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[15],E,E,2,[[["self"]],[R[19]]]],[11,"vzip",E,E,2,[[],["v"]]],[11,"into",R[10],E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[11],E,E,0,[[[U]],[R[3]]]],[11,R[12],E,E,0,[[],[R[3]]]],[11,R[13],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[15],E,E,0,[[["self"]],[R[19]]]],[11,"vzip",E,E,0,[[],["v"]]],[11,"into",R[14],E,1,[[],[U]]],[11,"to_string",E,E,1,[[["self"]],["string"]]],[11,R[22],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,[[["self"],[T]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[11],E,E,1,[[[U]],[R[3]]]],[11,R[12],E,E,1,[[],[R[3]]]],[11,R[13],E,E,1,[[["self"]],[T]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[15],E,E,1,[[["self"]],[R[19]]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"into",R[16],E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[11],E,E,3,[[[U]],[R[3]]]],[11,R[12],E,E,3,[[],[R[3]]]],[11,R[13],E,E,3,[[["self"]],[T]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[15],E,E,3,[[["self"]],[R[19]]]],[11,"vzip",E,E,3,[[],["v"]]],[11,"into",R[17],E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[11],E,E,4,[[[U]],[R[3]]]],[11,R[12],E,E,4,[[],[R[3]]]],[11,R[13],E,E,4,[[["self"]],[T]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[15],E,E,4,[[["self"]],[R[19]]]],[11,"vzip",E,E,4,[[],["v"]]],[11,"into",R[20],E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[11],E,E,5,[[[U]],[R[3]]]],[11,R[12],E,E,5,[[],[R[3]]]],[11,R[13],E,E,5,[[["self"]],[T]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[15],E,E,5,[[["self"]],[R[19]]]],[11,"vzip",E,E,5,[[],["v"]]],[11,"into",R[21],E,6,[[],[U]]],[11,R[22],E,E,6,[[["self"]],[T]]],[11,R[23],E,E,6,[[["self"],[T]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[11],E,E,6,[[[U]],[R[3]]]],[11,R[12],E,E,6,[[],[R[3]]]],[11,R[13],E,E,6,[[["self"]],[T]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[15],E,E,6,[[["self"]],[R[19]]]],[11,"vzip",E,E,6,[[],["v"]]],[11,"into",R[24],E,7,[[],[U]]],[11,R[22],E,E,7,[[["self"]],[T]]],[11,R[23],E,E,7,[[["self"],[T]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[11],E,E,7,[[[U]],[R[3]]]],[11,R[12],E,E,7,[[],[R[3]]]],[11,R[13],E,E,7,[[["self"]],[T]]],[11,R[18],E,E,7,[[["self"]],[T]]],[11,R[15],E,E,7,[[["self"]],[R[19]]]],[11,"vzip",E,E,7,[[],["v"]]],[11,"into",R[25],E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[11],E,E,8,[[[U]],[R[3]]]],[11,R[12],E,E,8,[[],[R[3]]]],[11,R[13],E,E,8,[[["self"]],[T]]],[11,R[18],E,E,8,[[["self"]],[T]]],[11,R[15],E,E,8,[[["self"]],[R[19]]]],[11,"vzip",E,E,8,[[],["v"]]],[11,"clone",R[14],E,1,[[["self"]],[R[0]]]],[11,"clone",R[21],E,6,[[["self"]],["id"]]],[11,"clone",R[24],E,7,[[["self"]],["node"]]],[11,"partial_cmp",R[21],E,6,[[["self"],["id"]],[["option",[R[26]]],[R[26]]]]],[11,"eq",R[14],E,1,[[["self"],[R[0]]],["bool"]]],[11,"eq",R[21],E,6,[[["self"],["id"]],["bool"]]],[11,"ne",E,E,6,[[["self"],["id"]],["bool"]]],[11,"cmp",E,E,6,[[["self"],["id"]],[R[26]]]],[11,"add",E,E,6,[[[R[7]]],["self"]]],[11,"add",E,E,6,[[["u8"]],["self"]]],[11,"add",E,E,6,[[["u16"]],["self"]]],[11,"add",E,E,6,[[["u32"]],["self"]]],[11,"add",E,E,6,[[["u64"]],["self"]]],[11,"add",E,E,6,[[["u128"]],["self"]]],[11,"add",E,E,6,[[["isize"]],["self"]]],[11,"add",E,E,6,[[["i8"]],["self"]]],[11,"add",E,E,6,[[["i16"]],["self"]]],[11,"add",E,E,6,[[["i32"]],["self"]]],[11,"add",E,E,6,[[["i64"]],["self"]]],[11,"add",E,E,6,[[["i128"]],["self"]]],[11,"add",E,E,6,[[["f32"]],["self"]]],[11,"add",E,E,6,[[["f64"]],["self"]]],[11,"sub",E,E,6,[[[R[7]]],["self"]]],[11,"sub",E,E,6,[[["u8"]],["self"]]],[11,"sub",E,E,6,[[["u16"]],["self"]]],[11,"sub",E,E,6,[[["u32"]],["self"]]],[11,"sub",E,E,6,[[["u64"]],["self"]]],[11,"sub",E,E,6,[[["u128"]],["self"]]],[11,"sub",E,E,6,[[["isize"]],["self"]]],[11,"sub",E,E,6,[[["i8"]],["self"]]],[11,"sub",E,E,6,[[["i16"]],["self"]]],[11,"sub",E,E,6,[[["i32"]],["self"]]],[11,"sub",E,E,6,[[["i64"]],["self"]]],[11,"sub",E,E,6,[[["i128"]],["self"]]],[11,"sub",E,E,6,[[["f32"]],["self"]]],[11,"sub",E,E,6,[[["f64"]],["self"]]],[11,R[27],E,E,6,[[["self"],[R[7]]]]],[11,R[27],E,E,6,[[["self"],["u8"]]]],[11,R[27],E,E,6,[[["self"],["u16"]]]],[11,R[27],E,E,6,[[["self"],["u32"]]]],[11,R[27],E,E,6,[[["self"],["u64"]]]],[11,R[27],E,E,6,[[["self"],["u128"]]]],[11,R[27],E,E,6,[[["self"],["isize"]]]],[11,R[27],E,E,6,[[["self"],["i8"]]]],[11,R[27],E,E,6,[[["self"],["i16"]]]],[11,R[27],E,E,6,[[["self"],["i32"]]]],[11,R[27],E,E,6,[[["self"],["i64"]]]],[11,R[27],E,E,6,[[["self"],["i128"]]]],[11,R[27],E,E,6,[[["self"],["f32"]]]],[11,R[27],E,E,6,[[["self"],["f64"]]]],[11,R[28],E,E,6,[[["self"],[R[7]]]]],[11,R[28],E,E,6,[[["self"],["u8"]]]],[11,R[28],E,E,6,[[["self"],["u16"]]]],[11,R[28],E,E,6,[[["self"],["u32"]]]],[11,R[28],E,E,6,[[["self"],["u64"]]]],[11,R[28],E,E,6,[[["self"],["u128"]]]],[11,R[28],E,E,6,[[["self"],["isize"]]]],[11,R[28],E,E,6,[[["self"],["i8"]]]],[11,R[28],E,E,6,[[["self"],["i16"]]]],[11,R[28],E,E,6,[[["self"],["i32"]]]],[11,R[28],E,E,6,[[["self"],["i64"]]]],[11,R[28],E,E,6,[[["self"],["i128"]]]],[11,R[28],E,E,6,[[["self"],["f32"]]]],[11,R[28],E,E,6,[[["self"],["f64"]]]],[11,"bitxor",E,E,6,[[]]],[11,"fmt",R[10],E,0,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[14],E,1,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[1],E,2,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[21],E,6,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[24],E,7,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[25],E,8,[[["self"],[R[29]]],[R[3]]]],[11,"fmt",R[14],E,1,[[["self"],[R[29]]],[R[3]]]],[11,R[30],R[10],E,0,[[["self"],["__s"]],[R[3]]]],[11,R[30],R[1],E,2,[[["self"],["__s"]],[R[3]]]],[11,R[30],R[21],E,6,[[["self"],["__s"]],[R[3]]]],[11,R[30],R[24],E,7,[[["self"],["__s"]],[R[3]]]],[11,R[31],R[10],E,0,[[["__d"]],[R[3]]]],[11,R[31],R[1],E,2,[[["__d"]],[R[3]]]],[11,R[31],R[21],E,6,[[["__d"]],[R[3]]]],[11,R[31],R[24],E,7,[[["__d"]],[R[3]]]]],"p":[[3,R[32]],[4,R[33]],[3,"Bucket"],[3,"Server"],[3,"Handler"],[3,R[34]],[3,"Id"],[3,"Node"],[3,"Packet"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);