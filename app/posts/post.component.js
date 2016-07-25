(function (app) {
	app.PostComponent =
		ng.core.Component({
			templateUrl: 'app/posts/post.html'
		})
			.Class({
				constructor: function () { }
			});
})(window.app || (window.app = {}));