var SidebarComponent =
  ng.core.Component({
    selector: 'ngx-app-sidebar',
    template: require('./sidebar.html'),
    directives: [
      app.AlertContentComponent,
      app.ButtonContentComponent,
      ng.router_deprecated.RouterLink
    ]
  })
    .Class({
      constructor: [app.commonService, function (commonService) {
        var self = this;
        self.commonService = commonService;
      }],
      changeComponent: function (comp) {
        var self = this;
        // console.log(comp);
        self.commonService.currentComponent = comp;
      }
    });

module.exports = SidebarComponent;