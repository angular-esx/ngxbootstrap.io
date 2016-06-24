(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'ngx-app',
      templateUrl: 'app/app/app.html',
      directives: [
        app.ContentComponent,
        app.HeaderComponent,
        app.SidebarComponent,
        ng.router_deprecated.ROUTER_DIRECTIVES
      ],
      providers: [
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
})(window.app || (window.app = {}));