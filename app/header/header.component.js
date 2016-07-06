var commonService = require('app/app/app.service.js');

var HeaderComponent =
  ng.core.Component({
    selector: 'ngx-app-header',
    styleUrls: ['app/header/header.css'],
    templateUrl: 'app/header/header.html',
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