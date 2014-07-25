(function () {

"use strict";

Nike.Actions.Task = {
	setTaskCompletion: function (taskId, taskComplete) {
		Nike.Dispatcher.handleViewAction({
			name: "SET_TASK_COMPLETION",
			taskId: taskId,
			taskComplete: taskComplete
		});
	},

	deleteTask: function (taskId) {
		Nike.Dispatcher.handleViewAction({
			name: "DELETE_TASK",
			taskId: taskId
		});
	}
};

})();
