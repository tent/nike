/** @jsx React.DOM */
//= require ./new-task
//= require ./tasks-list
//= require ../actions/tasks-pane

(function () {

"use strict";

var TasksPaneActions = Nike.Actions.TasksPane;

Nike.Views.TasksPane = React.createClass({
	displayName: "Nike.Views.TasksPane",

	render: function () {
		return (
			<section className="tasks-pane">
				<Nike.Views.TasksList
					tasks={this.props.tasks}
					selectedTaskId={this.props.selectedTaskId}
					onTaskSelected={this.__handleTaskSelected} />
				<Nike.Views.NewTask parentTaskId={this.props.parentTaskId} />
			</section>
		);
	},

	__handleTaskSelected: function (task) {
		TasksPaneActions.handleTaskSelected(this.props.index, task.id);
	}
});

})();
