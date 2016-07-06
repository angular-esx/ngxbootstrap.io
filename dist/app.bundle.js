/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var AppComponent = __webpack_require__(2);

	document.addEventListener('DOMContentLoaded', function() {
	  ng.platformBrowserDynamic.bootstrap(AppComponent);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var AppComponent = __webpack_require__(2);
	var GettingStartedComponent = __webpack_require__(7);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var SidebarComponent = __webpack_require__(3);

	var AppComponent =
	  ng.core.Component({
	    selector: 'ngx-app',
	    template: __webpack_require__(6),
	    directives: [
	      app.HeaderComponent,
	      SidebarComponent,
	      ng.router_deprecated.ROUTER_DIRECTIVES
	    ],
	    providers: [
	      app.commonService,
	      ng.router_deprecated.ROUTER_PROVIDERS,
	    ]
	  })
	    .Class({
	      constructor: function () {

	      },
	      ngAfterViewInit: function () {
	        $('#toggle-side-bar').click(function () {
	          $('#ngx-sidebar-left').toggleClass('active');
	          $('ngx-backdrop').toggleClass('active');
	        });

	        $('body').click(function () {
	          var ngxSidebarLeft = $(event.target).parents('#ngx-sidebar-left');
	          if ($(event.target).attr('id') != 'toggle-side-bar' && ngxSidebarLeft.attr('id') != 'ngx-sidebar-left' && $('#ngx-sidebar-left').hasClass('active')) {
	            $('#ngx-sidebar-left').removeClass('active');
	            $('ngx-backdrop').removeClass('active');
	          }
	        });
	      }
	    });

	module.exports = AppComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var SidebarComponent =
	  ng.core.Component({
	    selector: 'ngx-app-sidebar',
	    template: __webpack_require__(4),
	    directives: [
	      app.AlertContentComponent,
	      app.ButtonContentComponent,
	      ng.router_deprecated.RouterLink
	    ]
	  })
	    .Class({
	      constructor: [app.commonService, function (commonService) {
	        var self = this;
	        self.commonService = commonService;
	      }],
	      changeComponent: function (comp) {
	        var self = this;
	        console.log(comp);
	        self.commonService.currentComponent = comp;
	      }
	    });

	module.exports = SidebarComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"full-height\">\n    <img class=\"ngx-logo img-fluid\" src=\"" + __webpack_require__(5) + "\" />\n    <div class=\"sidebar-content\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item active\"><a [routerLink]=\"['GettingStarted']\">GETTING START</a></li>\n            <li class=\"list-group-item\">\n                <a data-toggle=\"collapse\" data-target=\"#componentList\" aria-expanded=\"false\" aria-controls=\"componentList\">COMPONENTS</a>\n                <span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n            </li>\n            <li class=\"collapse\" id=\"componentList\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Alert']\" (click)=\"changeComponent('alert')\">Alert</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Buttons']\" (click)=\"changeComponent('button')\">Button</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Collapse']\" (click)=\"changeComponent('collapse')\">Collapse</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Carousel']\" (click)=\"changeComponent('carousel')\">Carousel</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Dropdown']\" (click)=\"changeComponent('dropdown')\">Dropdown</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Modal']\" (click)=\"changeComponent('modal')\">Modal</a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Progressbar']\" (click)=\"changeComponent('progressbar')\">Progressbar </a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a [routerLink]=\"['Tab']\" (click)=\"changeComponent('tab')\">Tab</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 250 250' style='enable-background:new 0 0 250 250;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23DD0031;%7D .st1%7Bfill:%23C3002F;%7D .st2%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpolygon class='st0' points='125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 '/%3E %3Cpolygon class='st1' points='125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 '/%3E %3Cpath class='st2' d='M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1 L125,52.1z M142,135.4H108l17-40.9L142,135.4z'/%3E %3C/g%3E %3C/svg%3E"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<ngx-backdrop></ngx-backdrop>\n<div class=\"ngx-container\">\n    <div id=\"ngx-sidebar-left\" class=\"ngx-sidebar-left\">\n        <ngx-app-sidebar></ngx-app-sidebar>\n    </div>\n    <div class=\"ngx-content-wrapper\">\n        <ngx-app-header></ngx-app-header>\n\n        <div class=\"ngx-main-content clearfix\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <footer class=\"text-xs-center\" style=\"padding: 30px; border-top: 1px solid #ccc;\">\n            <div class=\"container\" style=\"margin-bottom: 25px;\">\n                <div class=\"col-xs-3\">\n                    <a href=\"\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-md-down\">Github</span>\n                    </a>\n                </div>\n                <div class=\"col-xs-3\">\n                    <a href=\"\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-md-down\">Facebook</span>\n                    </a>\n                </div>\n                <div class=\"col-xs-3\">\n                    <a href=\"\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-md-down\">Twitter</span>\n                    </a>\n                </div>\n                <div class=\"col-xs-3\">\n                    <a href=\"\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-md-down\">Google Plus</span>\n                    </a>\n                </div>\n            </div>\n            <p style=\"margin:0px\">Powered by NgxBootstrap ©2016.</p>\n        </footer>\n    </div>\n</div>";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var GettingStartedComponent = ng.core.Component({
	  selector: 'getting-started',
	  template: __webpack_require__(8),
	}).Class({
	  constructor: function () { }
	});

	module.exports = GettingStartedComponent;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "Hello Getting Started";

/***/ }
/******/ ]);