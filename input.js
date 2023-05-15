// store active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  // assig passed connection object to out scope 'connection' variable
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    // Ctrl C, exit the process
    if (key === '\u0003') {
      process.exit();
    }

    // w = "Move: up"
    if (key === 'w') {
      connection.write("Move: up");
    }

    // a = "Move: left"
    if (key === 'a') {
      connection.write("Move: left");
    }

    // s = "Move: down"
    if (key === 's') {
      connection.write("Move: down");
    }

    // d = "Move: right"
    if (key === 'd') {
      connection.write("Move: right");
    }
  };

  // register event listener
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;