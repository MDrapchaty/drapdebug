
const fs = require('fs'); // require fs for logging

  // if .env var DEBUG=true run function
// function for debug
  function debug(msg) {
// Creates log info that is logged to logs/log.log
   	if (process.env.DEBUG === 'true') {
      const date = new Date();
      const logMsg = date + ', ' + msg + '\n\n';
      console.log(msg);
    }
  }

   exports.debug = debug;

 
