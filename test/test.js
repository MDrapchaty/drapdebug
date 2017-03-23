const util = require('../src/debug');

// Bump versions (patch, minor, major)

util.verBump('2.0.0', 'patch');
util.verBump('2.0.0', 'minor');
util.verBump('2.0.0', 'major');
