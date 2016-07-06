var SidebarComponent = require('./../sidebar/sidebar.component.js');

var AppComponent =
  ng.core.Component({
    selector: 'ngx-app',
    template: require('./app.html'),
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