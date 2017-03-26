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

//
exports.verBump = (currVer, bump) => {
  // Major index is verArr [0]
  // Minor index is verArr[1]
  // Patch index is verArr[2]
  const verArr = currVer.split('.');

  for (const i in verArr) {
    verArr[i] = parseInt(verArr[i], 10);
  }

  if (bump === 'patch') {
    verArr[2] += 1; // patch index
    console.log('Patch update, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  } else if (bump === 'minor') {
    verArr[2] = 0; // patch index
    verArr[1] += 1; // minor index
    console.log('Minor update, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  } else if (bump === 'major') {
    verArr[2] = 0; // patch index
    verArr[1] = 0; // minor index
    verArr[0] += 1; // minor index
    console.log('Major update, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  }

  return verArr.join('.');
};
