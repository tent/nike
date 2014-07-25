/** @jsx React.DOM */
//= require ../actions/task

(function () {

"use strict";

var TaskActions = Nike.Actions.Task;

Nike.Views.Task = React.createClass({
	displayName: "Nike.Views.Task",

	render: function () {
		var task = this.props.task;
		return (
			<article onClick={this.__handleClick} className={"task"+ (task.complete ? " complete" : "")}>
				<input type="checkbox" ref="checkbox" onChange={this.__handleCheckedChange} checked={task.complete} />
				{task.name}
			</article>
		);
	},

	__handleCheckedChange: function (e) {
		TaskActions.setTaskCompletion(this.props.task.id, e.target.checked);
	},

	__handleClick: function (e) {
		if (e.target === this.refs.checkbox.getDOMNode()) {
			return;
		}
		e.preventDefault();
		this.props.onSelected(this.props.task);
	}
});

})();
