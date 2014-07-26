/** @jsx React.DOM */
//= require ./task-panes
//= require ../stores/tasks

(function () {

"use strict";

var TasksStore = Nike.Stores.Tasks;

function getState(props) {
	var state = {
		tasksStoreId: "main"
	};

	if (props.taskIds.length > 0) {
		state.taskPaneTasks = [TasksStore.getTasks(state.tasksStoreId)].concat(props.taskIds.map(function (taskId) {
				return TasksStore.getTasks(state.tasksStoreId, taskId);
			}));
	} else {
		state.taskPaneTasks = [TasksStore.getTasks(state.tasksStoreId)];
	}

	return state;
}

Nike.Views.Main = React.createClass({
	displayName: "Nike.Views.Main",

	render: function () {
		return (
			<Nike.Views.TaskPanes
				taskPaneTasks={this.state.taskPaneTasks}
				taskIds={this.props.taskIds} />
		);
	},

	getInitialState: function () {
		return getState(this.props);
	},

	componentDidMount: function () {
		var storeId = this.state.tasksStoreId;
		TasksStore.addChangeListener(storeId, this.__handleTasksStoreChange);
	},

	componentWillReceiveProps: function (nextProps) {
		this.setState(getState(nextProps));
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
