(function(app) {
  app.SidebarComponent =
    ng.core.Component({
      selector: 'ngx-app-sidebar',
      templateUrl: 'app/sidebar/sidebar.html',
      directives: [
          app.ContentComponent,
          ng.router.ROUTER_DIRECTIVES,
      ],
        providers: [
            ng.router.ROUTER_PROVIDERS,
        ]
    })
    .Class({
      constructor: function() {}
    });
   
})(window.app || (window.app = {}));