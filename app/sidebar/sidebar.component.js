var commonService = require('app/app/app.service.js');
var AlertContentComponent = require('app/content/alert/alert.content.component.js');
var ButtonContentComponent = require('app/content/button/button.content.component.js');

var SidebarComponent =
  ng.core.Component({
    selector: 'ngx-app-sidebar',
    template: require('./sidebar.html'),
    directives: [
      AlertContentComponent,
      ButtonContentComponent,
      ng.router_deprecated.RouterLink
    ]
  })
    .Class({
      constructor: [commonService, function (commonService) {
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