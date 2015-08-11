var Task = require('../lib/task.js'),
    chai = require('chai'),
    expect = chai.expect;

describe('Task', function () {
  describe('.all', function () {
    it('should be empty at first', function (done) {
      console.log(Task.tasks);
      expect(Task.all()).to.equal([])
      done();
    });
  });

  describe('#init', function () {
    it('returns the description', function (done) {
      var testTask = new Task();
      testTask.init('this is a description');
      expect(testTask).to.have.property('description');
      done();
    });

    it('increments the collection of tasks', function (done) {
      var testTask = new Task();
      testTask.init("this is a task");
      expect(testTask.tasks.length).to.equal([1]);
      done();
    });
  });
});
