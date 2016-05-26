(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.NgxBlogComponent);
  });
})(window.app || (window.app = {}));