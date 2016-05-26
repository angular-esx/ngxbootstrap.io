(function(app) {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'ngx-app-header',
      styleUrls: ['app/header/header.css'],
      templateUrl: 'app/header/header.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));