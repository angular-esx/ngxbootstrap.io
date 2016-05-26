(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'ngx-app',
      templateUrl: 'app/app/app.html',
      directives: [
        app.ContentComponent,
        app.HeaderComponent,
        app.SidebarComponent,
        ng.router.ROUTER_DIRECTIVES 
      ],
      providers: [
        ng.router.ROUTER_PROVIDERS,
      ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));