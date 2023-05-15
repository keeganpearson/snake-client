const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

// create the connection object
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log('Server says: ', data);
});

console.log("Connecting ...");

// call 
setupInput();