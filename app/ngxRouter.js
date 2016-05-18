  (function(app) {
      ng.router.RouteConfig([
        {
            path: '/alert',
            name: 'Alert',
            component: app.ContentComponent
        },{
            path: '/button',
            name: 'Buttons',
            component: app.ContentComponent,
            useAsDefault: true
        },{
            path: '/collapse',
            name: 'Collapse',
            component: app.ContentComponent
        }
    ])(app.AppComponent)
  })(window.app || (window.app = {}));
  