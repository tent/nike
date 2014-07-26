/** @jsx React.DOM */
//= require ./tasks-pane
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
		var taskPaneTasks = this.state.taskPaneTasks;
		return (
			<section className="tasks-panes">
				{taskPaneTasks.map(function (tasks, paneIndex) {
					return (
						<Nike.Views.TasksPane
							key={paneIndex}
							index={paneIndex}
							parentTaskId={this.props.taskIds[paneIndex-1]}
							selectedTaskId={this.props.taskIds[paneIndex]}
							tasks={tasks} />
					);
				}, this)}
				<section className="h-spacer">&nbsp;</section>
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
