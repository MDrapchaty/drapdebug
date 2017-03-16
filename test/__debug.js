const expect = require('chai').expect;
const util = require('../src/debug');
require('mocha-sinon');

describe ('Testing Debugger', (done) => {
	beforeEach(function() {
      this.sinon.stub(console, 'log');
    });


	it('This is a test', (done) => {
	    util.debug('testing');
	    expect(util.debug).to.exist;
	    expect(console.log.calledOnce).to.be.true;
	    done();
  });
});