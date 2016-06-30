(function(app) {
  app.ButtonContentComponent =
    ng.core.Component({
      templateUrl: 'app/content/button/button.content.html',
      directives: [
            ng.router_deprecated.RouterOutlet,
            ng.router_deprecated.RouterLink
      ],
      providers: [

      ]
    })
    .Class({
            constructor: [ng.router_deprecated.Router, function (router) {
                this.router = router;
                console.log("Button Content");
            }]
        });
    ng.router_deprecated.RouteConfig([
        { path: '/', name: 'ExampleContent', component: app.ButtonExampleComponent, useAsDefault: true },
        { path: '/api', name: 'ApiContent', component: app.ButtonApiComponent }
    ])(app.ButtonContentComponent)
})(window.app || (window.app = {}));