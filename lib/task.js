function Task() {

  var tasks = [];

  return {
    init: function (description) {
      this.description = description;
      tasks.push(this);
    }
  }
}

Task.prototype.clear = function () {
  Task.tasks = [];
  return Task.tasks;
}

Task.prototype.all = function () {
  return Task.tasks;
}

module.exports = Task;
