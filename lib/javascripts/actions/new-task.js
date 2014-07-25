(function () {

"use strict";

Nike.Actions.NewTask = {
	createTask: function (data) {
		Nike.Dispatcher.handleViewAction({
			name: "CREATE_TASK",
			data: data
		});
	}
};

})();
