require('./router.js');

var AppComponent = require('./app/app.component.js');

document.addEventListener('DOMContentLoaded', function() {
  ng.platformBrowserDynamic.bootstrap(AppComponent);
});