const colors = require('colors');

colors.setTheme({
  success: 'green',
  warn: 'yellow',
  error: 'red',
});

  // if .env var DEBUG=true run function
// function for debug
exports.debug = (msg, type) => {
  if (process.env.DEBUG === 'true') {
    if (type === 'warn') {
      // Warnings
      console.warn(colors.warn(msg));
    } else if (type === 'error') {
      // Errors
      console.error(colors.error(msg));
    } else {
      // All other logs will be in green
      console.log(colors.success(msg));
    }
  }
};
