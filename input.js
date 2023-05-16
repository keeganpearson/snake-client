// store active TCP connection object
let connection;

// input keys and their commands
const commands = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
  'j': "Say: I'm gonna win!",
  'k': "Say: You don't stand a chance!",
  'l': "Say: Dang it."
};

// Function to setup input from stdin
const setupInput = (conn) => {
  // Assigning passed connection object to the 'connection' variable
  connection = conn;

  // Configuring stdin
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Function to handle user input
  const handleUserInput = (key) => {
    // If key is Ctrl+C, exit the process
    if (key === '\u0003') {
      process.exit();
    }

    // If key is in the commands object, write the corresponding command to the connection
    if (commands[key]) {
      connection.write(commands[key]);
    }
  };
    
  // register event listener
  stdin.on("data", handleUserInput);

  // return stdin
  return stdin;
};

module.exports = setupInput;