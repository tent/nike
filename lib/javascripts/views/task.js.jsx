/** @jsx React.DOM */

(function () {

"use strict";

Nike.Views.Task = React.createClass({
	displayName: "Nike.Views.Task",

	render: function () {
		var task = this.props.task;
		return (
			<article>
				{task.name}
			</article>
		);
	}
});

})();
