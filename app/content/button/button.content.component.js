var ButtonExampleComponent = require('./example/button.example.component.js');
var ButtonApiComponent = require('./api/button.api.component.js');

var ButtonContentComponent =
    ng.core.Component({
        template: require('./button.content.html'),
        directives: [
            ng.router_deprecated.RouterOutlet,
            ng.router_deprecated.RouterLink
        ],
        providers: [

        ]
    })
        .Class({
            constructor: [ng.router_deprecated.Router, function (router) {
                this.router = router;
            }]
        });

ng.router_deprecated.RouteConfig([
    { path: '/', name: 'ExampleContent', component: ButtonExampleComponent, useAsDefault: true },
    { path: '/api', name: 'ApiContent', component: ButtonApiComponent }
])(ButtonContentComponent);

module.exports = ButtonContentComponent;