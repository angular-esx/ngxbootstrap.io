(function(app) {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'ngx-app-header',
      styleUrls: ['app/header/header.css'],
      templateUrl: 'app/header/header.html',
      providers: [
      ]
    })
    .Class({
            constructor: [app.commonService,function(commonService) {
                var self = this;
                self.commonService = commonService;
            }]
    });
})(window.app || (window.app = {}));