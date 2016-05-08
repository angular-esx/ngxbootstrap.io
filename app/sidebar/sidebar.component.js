(function(app) {
  app.SidebarComponent =
    ng.core.Component({
      selector: 'ngx-app-sidebar',
      templateUrl: 'app/sidebar/sidebar.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));