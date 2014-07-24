(function () {

"use strict";

Nike.Stores.Tasks = Marbles.Store.createClass({
	displayName: "Nike.Stores.Tasks",

	getTasks: function () {
		var tasks = [];
		for (var i = 1, j; i <= 100; i++) {
			tasks.push({
				id: "task-"+ i,
				name: "task "+ i,
				tasks: []
			});

			for (j = 1; j <= (Math.round(Math.random(10) * 50) + 1); j++) {
				tasks[i-1].tasks.push({
					id: "sub-task-"+ j,
					name: "sub-task "+ j,
					tasks: []
				});
			}
		}
		return tasks;
	}
});

Nike.Stores.Tasks.registerWithDispatcher(Nike.Dispatcher);

})();
