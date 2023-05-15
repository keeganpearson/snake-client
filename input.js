// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      // check for Ctrl + C input
      process.exit();
    }
  };
  // register event listener
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;