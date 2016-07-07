var MarkdownComponent = require('app/markdown/markdown.component.js');

var AlertExampleComponent = ng.core.Component({
    selector: 'ngx-alert-example',
    template: require('./alert.example.component.html'),
    directives: [
      MarkdownComponent
    ]
  })
    .Class({
      constructor: function () {
        this.alertSuccess = {
          html: '<div class="alert alert-success" role="alert">'
              + '<strong>Well done!</strong> You successfully read this important alert message.'
              + '</div>'
        };

        this.alertInfo = {
          html: '<div class="alert alert-info" role="alert"></div>'
        };

        this.alertWarning = {
          html: '<div class="alert alert-warning" role="alert"></div>'
        };

        this.alertDanger = {
          html: '<div class="alert alert-danger" role="alert"></div>'
        };
      }
    });

module.exports = AlertExampleComponent;