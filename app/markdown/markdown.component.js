var MarkdownComponent = ng.core.Component({
  selector: 'ngx-markdown',
  styleUrls: ['app/markdown/markdown.css'],
  templateUrl: 'app/markdown/markdown.html',
  inputs: ['html', 'js', 'css'],
  providers: [
  ]
}).Class({
  constructor: [function () {
    var self = this;
  }]
});

module.exports = MarkdownComponent;