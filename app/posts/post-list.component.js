(function (app) {
	app.PostListComponent =
		ng.core.Component({
			templateUrl: 'app/posts/listpost.html',
			directives: [
				ng.router_deprecated.RouterLink
			]
		})
			.Class({
				constructor: function () { }
			});
})(window.app || (window.app = {}));