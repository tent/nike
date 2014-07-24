/** @jsx React.DOM */
//= require ./task

(function () {

"use strict";

Nike.Views.TasksList = React.createClass({
	displayName: "Nike.Views.TasksList",

	render: function () {
		return (
			<ul className="tasks-list">
				{this.props.tasks.map(function (task) {
					return (
						<li key={task.id}>
							<Nike.Views.Task task={task} />
						</li>
					);
				}, this)}
			</ul>
		);
	}
});

})();
