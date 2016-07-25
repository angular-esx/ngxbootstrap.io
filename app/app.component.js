(function (app) {
	app.AppComponent =
		ng.core.Component({
			selector: 'blog-app',
			templateUrl: 'app/blog.html',
			directives: [
				ng.router_deprecated.ROUTER_DIRECTIVES,
				ng.router_deprecated.RouterLink
			],
			providers: [
				ng.router_deprecated.ROUTER_PROVIDERS,
			]
		})
			.Class({
				constructor: function () { }
			});
})(window.app || (window.app = {}));