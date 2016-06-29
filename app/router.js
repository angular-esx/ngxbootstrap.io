  (function(app) {
      ng.router_deprecated.RouteConfig([
        {
            path: '/alert/...',
            name: 'Alert',
            component: app.AlertContentComponent,
            useAsDefault: true
        },
        {
            path: '/button/...',
            name: 'Buttons',
            component: app.ButtonContentComponent
        },
        {
            path: '/collapse/...',
            name: 'Collapse',
            component: app.AlertContentComponent
        },
        {
            path: '/carousel/...',
            name: 'Carousel',
            component: app.AlertContentComponent
        },
        {
            path: '/dropdown/...',
            name: 'Dropdown',
            component: app.AlertContentComponent
        },
        {
            path: '/modal/...',
            name: 'Modal',
            component: app.AlertContentComponent
        },
        {
            path: '/progressbar/...',
            name: 'Progressbar',
            component: app.AlertContentComponent
        },
        {
            path: '/tab/...',
            name: 'Tab',
            component: app.AlertContentComponent
        }
    ])(app.AppComponent)
  })(window.app || (window.app = {}));
  