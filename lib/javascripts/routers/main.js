//= require ../views/main

(function () {

"use strict";

Nike.routers.main = new (Marbles.Router.createClass({
	displayName: "Nike.routers.main",

	routes: [
		{ path: "", handler: "root" }
	],

	root: function () {
		React.renderComponent(Nike.Views.Main({}), Nike.el);
	}
}))();

})();
