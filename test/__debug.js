/* global beforeEach */
const expect = require('chai').expect;
const util = require('../src/debug');
require('mocha-sinon');

describe('Running Debugger Tests:', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'error');
    this.sinon.stub(console, 'warn');
  });

  it('test for error has run', (done) => {
    /* eslint-disable no-unused-expressions */
    util.debug('Error');
    expect(console.error.calledOnce).to.be.true;
    done();
  });

  it('test for warn has run', (done) => {
    /* eslint-disable no-unused-expressions */
    util.debug('Warning!');
    expect(console.warn.calledOnce).to.be.true;
    done();
  });

  it('All tests:', (done) => {
    util.debug('testing');
    /* eslint-disable no-unused-expressions */
    expect(console.log.calledOnce).to.be.true;
    done();
  });
});
