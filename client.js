const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT, 
  });

  // Register the "connect" event handler
  conn.on('connect', () => {
    // callback function when 'connect' even is triggered
    console.log("Successfully connected to game server");
    // sending the name message (3 letter max)
    conn.write("Name: XYZ");
  });

  return conn;
};

module.exports = connect;