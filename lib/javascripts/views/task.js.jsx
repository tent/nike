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
			<article onClick={this.__handleClick} className={"task"+ (task.complete ? " complete" : "") + (this.props.selected ? " selected" : "")}>
				<input type="checkbox" ref="checkbox" onChange={this.__handleCheckedChange} checked={task.complete} />
				{task.name}
				<button onClick={this.__handleDeleteBtnClick} ref="deleteBtn" className="delete-btn">&times;</button>
			</article>
		);
	},

	__handleCheckedChange: function (e) {
		TaskActions.setTaskCompletion(this.props.task.id, e.target.checked);
	},

	__handleDeleteBtnClick: function (e) {
		e.preventDefault();
		TaskActions.deleteTask(this.props.task.id);
	},

	__handleClick: function (e) {
		if (e.target === this.refs.checkbox.getDOMNode() || e.target === this.refs.deleteBtn.getDOMNode()) {
			return;
		}
		e.preventDefault();
		this.props.onSelected(this.props.task);
	}
});

})();
