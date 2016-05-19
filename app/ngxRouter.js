  (function(app) {
      ng.router.RouteConfig([
        {
            path: '/alert',
            name: 'Alert',
            component: app.ContentComponent
        },{
            path: '/button',
            name: 'Buttons',
            component: app.ContentComponent
        },{
            path: '/collapse',
            name: 'Collapse',
            component: app.ContentComponent
        },{
            path: '/carousel',
            name: 'Carousel',
            component: app.ContentComponent
        },{
            path: '/dropdown',
            name: 'Dropdown',
            component: app.ContentComponent
        },{
            path: '/modal',
            name: 'Modal',
            component: app.ContentComponent
        },{
            path: '/progressbar',
            name: 'Progressbar',
            component: app.ContentComponent
        },{
            path: '/tab',
            name: 'Tab',
            component: app.ContentComponent
        }
    ])(app.AppComponent)
  })(window.app || (window.app = {}));
  