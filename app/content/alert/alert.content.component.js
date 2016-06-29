(function(app) {
  app.AlertContentComponent =
    ng.core.Component({
      templateUrl: 'app/content/alert/alert.content.html',
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
                console.log("Alert Content");
            }]
        });
    ng.router_deprecated.RouteConfig([
        { path: '/', name: 'ExampleContent', component: app.AlertExampleComponent, useAsDefault: true },
        { path: '/api', name: 'ApiContent', component: app.AlertApiComponent }
    ])(app.AlertContentComponent)
})(window.app || (window.app = {}));