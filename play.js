// import modules
const connect = require("./client");
const setupInput = require("./input");

// create the connection object
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

// register data event handler
conn.on("data", data => console.log('Server says: ', data));

// log connection message
console.log("Connecting ...");

// call 
setupInput(conn);