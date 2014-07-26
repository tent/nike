/** @jsx React.DOM */
//= require ./tasks-pane

(function () {

"use strict";

Nike.Views.TaskPanes = React.createClass({
	displayName: "Nike.Views.TaskPanes",

	render: function () {
		return (
			<section className="tasks-panes">
				{this.props.taskPaneTasks.map(function (tasks, paneIndex) {
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

	componentDidMount: function () {
		var el = this.getDOMNode();
		var width = el.scrollWidth;
		this.__minWidth = width;
		el.style.minWidth = width + "px";
	},

	componentDidUpdate: function () {
		var el = this.getDOMNode();
		var scrollX = window.scrollX;
		var scrollY = window.scrollY;
		el.style.minWidth = null;
		var width = el.scrollWidth + scrollX;
		el.style.minWidth = width + "px";
		window.scrollTo(scrollX, scrollY);
	}
});

})();
