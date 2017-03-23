const verBump = require('../src/debug');

//bump versions (patch, minor, major)
const patch = verBump.verBump('2.0.0', 'patch');
const minor = verBump.verBump('2.0.0', 'minor');
const major = verBump.verBump('2.0.0', 'major');


verBump.verBump('patch', patch, true);
verBump.verBump('minor', minor, true);
verBump.verBump('major', major, false);