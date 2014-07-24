(function () {

"use strict";

Nike.Actions.TasksPane = {
	handleTaskSelected: function (paneIndex, taskId) {
		Nike.Dispatcher.handleViewAction({
			name: "TASK_SELECTED",
			paneIndex: paneIndex,
			taskId: taskId
		});
	}
};

})();
