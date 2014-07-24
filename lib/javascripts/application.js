//= require_self
//= require ./config
//= require ./dispatcher
//= require_tree ./routers
//= require ./boot

(function () {

"use strict";

window.Nike = {
	Stores: {},
	Views: {},
	routers: {},
	config: {},

	run: function () {
		if ( !Marbles.history || Marbles.history.started ) {
			throw new Error("Nike: run() called multiple times!");
		}

		this.el = document.getElementById("main");

		Marbles.history.start({
			root: (this.config.PATH_PREFIX || '') + '/'
		});
	}
};

})();
