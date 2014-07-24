/** @jsx React.DOM */
//= require ./tasks-list
//= require ../stores/tasks

(function () {

"use strict";

var TasksStore = Nike.Stores.Tasks;

function getState() {
	var state = {
		tasksStoreId: "main"
	};

	state.tasks = TasksStore.getTasks(state.tasksStoreId);

	return state;
}

Nike.Views.Main = React.createClass({
	displayName: "Nike.Views.Main",

	render: function () {
		var tasks = this.state.tasks;
		return (
			<section>
				<Nike.Views.TasksList tasks={tasks} />
			</section>
		);
	},

	getInitialState: function () {
		return getState(this.props);
	},

	componentDidMount: function () {
		var storeId = this.state.tasksStoreId;
		TasksStore.addChangeListener(storeId, this.__handleTasksStoreChange);
	},

	componentWillUnmount: function () {
		var storeId = this.state.tasksStoreId;
		TasksStore.removeChangeListener(storeId, this.__handleTasksStoreChange);
	},

	__handleTasksStoreChange: function () {
		this.setState(getState(this.props));
	}
});

})();
