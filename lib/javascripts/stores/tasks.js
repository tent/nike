(function () {

"use strict";

Nike.Stores.Tasks = Marbles.Store.createClass({
	displayName: "Nike.Stores.Tasks",

	getTasks: function (taskId) {
		if (taskId) {
			var task = this.__findTask(taskId, this.state.tasks);
			return task ? task.tasks : [];
		} else {
			return this.state.tasks;
		}
	},

	getInitialState: function () {
		var nTasks = 0;
		function genTasks(level, maxLevel) {
			var tasks = [];
			for (var i = 0, n; i <= 10; i++) {
				n = nTasks++;
				tasks.push({
					id: "task-"+ n,
					name: "task "+ n,
					tasks: []
				});

				if (level < maxLevel) {
					tasks[i].tasks = genTasks(level + 1, maxLevel);
				}
			}
			return tasks;
		}

		return {
			tasks: genTasks(0, 3)
		};
	},

	__findTask: function (taskId, tasks) {
		var task = null;
		for (var i = 0, ref, len = tasks.length; i < len; i++) {
			if (tasks[i].id === taskId) {
				task = tasks[i];
				break;
			}
			ref = this.__findTask(taskId, tasks[i].tasks);
			if (ref) {
				return ref;
			}
		}
		return task;
	}
});

Nike.Stores.Tasks.registerWithDispatcher(Nike.Dispatcher);

})();
