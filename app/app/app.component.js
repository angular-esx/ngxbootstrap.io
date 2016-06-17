(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'ngx-app',
      templateUrl: 'app/app/app.html',
      directives: [
        app.ContentComponent,
        app.HeaderComponent,
        app.SidebarComponent,
        ng.router_deprecated.ROUTER_DIRECTIVES 
      ],
      providers: [
        ng.router_deprecated.ROUTER_PROVIDERS,
      ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));