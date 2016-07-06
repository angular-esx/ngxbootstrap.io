var AppComponent = require('./app/app.component.js');
var GettingStartedComponent = require('./getting-started/getting-started.component.js');

ng.router_deprecated.RouteConfig([
  {
    path: '/',
    name: 'GettingStarted',
    component: GettingStartedComponent
  },
  {
    path: '/alert/...',
    name: 'Alert',
    component: app.AlertContentComponent
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
])(AppComponent)