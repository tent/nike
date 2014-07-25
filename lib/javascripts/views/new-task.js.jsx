/** @jsx React.DOM */
//= require ../actions/new-task

(function () {

"use strict";

var NewTaskActions = Nike.Actions.NewTask;

Nike.Views.NewTask = React.createClass({
	displayName: "Nike.Views.NewTask",

	render: function () {
		return (
			<form className="new-task" onSubmit={this.__handleFormSubmit}>
				<input ref="name" type="text" />
				<button type="submit">Add</button>
			</form>
		);
	},

	__handleFormSubmit: function (e) {
		e.preventDefault();
		var nameEl = this.refs.name.getDOMNode();
		var data = {
			name: nameEl.value.trim()
		};
		if (this.props.parentTaskId) {
			data.parentId = this.props.parentTaskId;
		}
		nameEl.value = "";
		nameEl.focus();
		NewTaskActions.createTask(data);
	}
});

})();
