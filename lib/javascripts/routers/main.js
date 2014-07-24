//= require ../views/main

(function () {

"use strict";

Nike.routers.main = new (Marbles.Router.createClass({
	displayName: "Nike.routers.main",

	routes: [
		{ path: "", handler: "root" },
		{ path: "/tasks", handler: "tasks" },
		{ path: "/tasks/*", handler: "tasks" }
	],

	root: function () {
		this.tasks.apply(this, arguments);
	},

	tasks: function (params) {
		var taskIds = [];
		if (params[0].splat) {
			taskIds = params[0].splat.split("/");
		}
		React.renderComponent(Nike.Views.Main({
			taskIds: taskIds
		}), Nike.el);
	},

	__handleEvent: function (event) {
		switch (event.name) {
			case "TASK_SELECTED":
				var taskIds = [];
				var path = Marbles.history.getPath();
				var handler = Marbles.history.getHandler(path);
				var splat;
				if (handler.name === "tasks") {
					splat = this.extractNamedParams(handler.route, path, this.routeParamNames("/tasks/*")).splat || null;
				}
				if (splat) {
					taskIds = splat.split("/");
				}
				taskIds[event.paneIndex] = event.taskId;
				taskIds = taskIds.slice(0, event.paneIndex + 1);
				this.navigate("/tasks/"+ taskIds.map(encodeURIComponent).join("/"));
			break;
		}
	}
}))();

Nike.routers.main.dispatcherIndex = Nike.Dispatcher.register(Nike.routers.main.__handleEvent.bind(Nike.routers.main));

})();
