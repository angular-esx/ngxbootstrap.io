var AlertContentComponent =
    ng.core.Component({
      template: require('./alert.content.html'),
      directives: [
        ng.router_deprecated.RouterOutlet,
        ng.router_deprecated.RouterLink
      ],
      providers: [

      ]
    })
      .Class({
        constructor: [ng.router_deprecated.Router, ng.common.Location, function (router, location) {
          this.router = router;
          this.location = location;
          this.tabActive = "example";
        }],
        /*  routerOnActivate : function() {
              var self = this;
              console.log(self.location.path());
          }*/
        changeTab: function (tab) {
          var self = this;
          self.tabActive = tab;
        }
      });
  ng.router_deprecated.RouteConfig([
    { path: '/', name: 'ExampleContent', component: app.AlertExampleComponent, useAsDefault: true },
    { path: '/api', name: 'ApiContent', component: app.AlertApiComponent }
  ])(AlertContentComponent)

module.exports = AlertContentComponent;