(function(app) {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'ngx-app-header',
      templateUrl: 'app/header/header.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));