(function () {

"use strict";

Nike.Actions.Task = {
	setTaskCompletion: function (taskId, taskComplete) {
		Nike.Dispatcher.handleViewAction({
			name: "SET_TASK_COMPLETION",
			taskId: taskId,
			taskComplete: taskComplete
		});
	}
};

})();
