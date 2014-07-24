/** @jsx React.DOM */
//= require ./tasks-list

(function () {

"use strict";

Nike.Views.Main = React.createClass({
	displayName: "Nike.Views.Main",

	render: function () {
		var tasks = [];
		for (var i = 1; i <= 100; i++) {
			tasks.push({
				id: "task-"+ i,
				name: "task "+ i
			});
		}

		return (
			<section>
				<Nike.Views.TasksList tasks={tasks} />
			</section>
		);
	}
});

})();
