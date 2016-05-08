(function(app) {
  app.ContentComponent =
    ng.core.Component({
      selector: 'ngx-app-content',
      templateUrl: 'app/content/content.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));