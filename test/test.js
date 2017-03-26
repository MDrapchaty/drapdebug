const util = require('../src/debug');

// Bump versions (patch, minor, major)

util.verBump('2.0.1', 'patch');
util.verBump('2.0.1', 'minor');
util.verBump('2.0.1', 'major');
