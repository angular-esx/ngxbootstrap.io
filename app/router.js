var AppComponent = require('./app/app.component.js');
var GettingStartedComponent = require('./getting-started/getting-started.component.js');
var AlertContentComponent = require('app/content/alert/alert.content.component.js');
var ButtonContentComponent = require('app/content/button/button.content.component.js');

ng.router_deprecated.RouteConfig([
  {
    path: '/',
    name: 'GettingStarted',
    component: GettingStartedComponent
  },
  {
    path: '/alert/...',
    name: 'Alert',
    component: AlertContentComponent
  },
  {
    path: '/button/...',
    name: 'Buttons',
    component: ButtonContentComponent
  },
  {
    path: '/collapse/...',
    name: 'Collapse',
    component: AlertContentComponent
  },
  {
    path: '/carousel/...',
    name: 'Carousel',
    component: AlertContentComponent
  },
  {
    path: '/dropdown/...',
    name: 'Dropdown',
    component: AlertContentComponent
  },
  {
    path: '/modal/...',
    name: 'Modal',
    component: AlertContentComponent
  },
  {
    path: '/progressbar/...',
    name: 'Progressbar',
    component: AlertContentComponent
  },
  {
    path: '/tab/...',
    name: 'Tab',
    component: AlertContentComponent
  }
])(AppComponent)