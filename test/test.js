var Task = require('../lib/task.js'),
    chai = require('chai'),
    expect = chai.expect;



describe('Task', function () {


  it('returns the description', function (done) {
    var testTask = new Task("this is a task");
    expect(testTask).to.have.property('description');
    done();
  });

});
