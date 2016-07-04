(function(app) {
  app.SidebarComponent =
    ng.core.Component({
      selector: 'ngx-app-sidebar',
      templateUrl: 'app/sidebar/sidebar.html',
      directives: [
          app.AlertContentComponent,
          app.ButtonContentComponent,
          ng.router_deprecated.RouterLink
      ],
        providers: [
        ]
    })
    .Class({
      constructor: [app.commonService,function(commonService) {
          var self = this;
          self.commonService = commonService;
      }],
      changeComponent: function(comp) {
            var self = this;
           console.log(comp);
            self.commonService.currentComponent = comp;
      }
    });
   
})(window.app || (window.app = {}));