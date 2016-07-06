var commonService = require('app/app/app.service.js');

var HeaderComponent =
  ng.core.Component({
    selector: 'ngx-app-header',
    style: [require('./header.css')],
    template: require('./header.html'),
    providers: [
    ]
  })
    .Class({
      constructor: [commonService, function (commonService) {
        var self = this;
        self.commonService = commonService;
      }]
    });

module.exports = HeaderComponent;