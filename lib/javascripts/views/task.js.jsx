/** @jsx React.DOM */

(function () {

"use strict";

Nike.Views.Task = React.createClass({
	displayName: "Nike.Views.Task",

	render: function () {
		var task = this.props.task;
		return (
			<article onClick={this.__handleClick}>
				{task.name}
			</article>
		);
	},

	__handleClick: function (e) {
		e.preventDefault();
		this.props.onSelected(this.props.task);
	}
});

})();
