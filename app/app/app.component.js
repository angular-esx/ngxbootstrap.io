var SidebarComponent = require('app/sidebar/sidebar.component.js');
var HeaderComponent = require('app/header/header.component.js');
var commonService = require('./app.service.js');

var AppComponent =
  ng.core.Component({
    selector: 'ngx-app',
    template: require('./app.html'),
    directives: [
      HeaderComponent,
      SidebarComponent,
      ng.router_deprecated.ROUTER_DIRECTIVES
    ],
    providers: [
      commonService,
      ng.router_deprecated.ROUTER_PROVIDERS,
    ]
  })
    .Class({
      constructor: [ng.common.Location, commonService, function (location, commonService) {
        this.location = location;
        this.commonService = commonService;
      }],
      ngOnInit: function () {
        var self = this;
        var curPath = self.location.path();
        // console.log(curPath);
        var array = curPath.split("/");
        // console.log(array);
        if (array.length > 1) {
          this.commonService.currentComponent = array[1];
        } else {
          this.commonService.currentComponent = "gettingStart";
        }


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