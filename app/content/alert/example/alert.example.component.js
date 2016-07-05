(function (app) {
  app.AlertExampleComponent = ng.core.Component({
    selector: 'ngx-alert-example',
    templateUrl: 'app/content/alert/example/alert.example.component.html',
    directives: [
      app.MarkdownComponent
    ]
  })
    .Class({
      constructor: function () {
        this.alertSuccess = {
          html: `<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>`
        };

        this.alertInfo = {
          html: `<div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</div>`
        };

        this.alertWarning = {
          html: `<div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>`
        };

        this.alertDanger = {
          html: `<div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>`
        };
      }
    });

})(window.app || (window.app = {}));