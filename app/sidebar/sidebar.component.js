(function(app) {
  app.SidebarComponent =
    ng.core.Component({
      selector: 'ngx-app-sidebar',
      templateUrl: 'app/sidebar/sidebar.html',
      directives: [
          app.AlertContentComponent,
          app.ButtonContentComponent,
          ng.router_deprecated.RouterLink
         /* ng.router_deprecated.ROUTER_DIRECTIVES,*/
      ],
        providers: [
            /*ng.router_deprecated.ROUTER_PROVIDERS,*/
        ]
    })
    .Class({
      constructor: function() {}
    });
   
})(window.app || (window.app = {}));