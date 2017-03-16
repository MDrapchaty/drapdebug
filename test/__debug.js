/* global beforeEach */
const expect = require('chai').expect;
const util = require('../src/debug');
require('mocha-sinon');

describe('Testing Debugger', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'log');
  });


  it('This is a test', (done) => {
    util.debug('testing');
    /* eslint-disable no-unused-expressions */
    expect(console.log.calledOnce).to.be.true;
    done();
  });
});
