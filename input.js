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

    // key 1 = message 1
    if (key === 'j') {
      // Send "Say: Hello everyone!" message to the server
      connection.write("Say: I'm gonna win!");
    }

    // key 2 = message 2
    if (key === 'k') {
      // Send "Say: Good game!" message to the server
      connection.write("Say: You don't stand a chance!");
    }

    // key 3 = message 3
    if (key === 'l') {
      // Send "Say: Nice move!" message to the server
      connection.write("Say: Dang it.");
    }
  };

  // register event listener
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;