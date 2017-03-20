
const fs = require('fs'); // require fs for logging
const colors = require('colors');

colors.setTheme({
  success: 'green',
  warn: 'yellow',
  error: 'red'
});

  // if .env var DEBUG=true run function
// function for debug
const date = new Date();
const logMsg = date + ', ' + msg + '\n\n';

  function debug(msg) {
   	if (process.env.DEBUG === 'true') {
      if (type == 'warn') {
      // Warnings
        console.warn(colors.warn(msg));
    } else if (type == 'error') {
      // Errors
        console.error(colors.error(msg));
    } else {
      // All other logs will be in green
        console.log(colors.success(msg));
    }
  }
}
   exports.debug = debug;
