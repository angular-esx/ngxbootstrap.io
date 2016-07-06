module.exports = {
  entry: './app/main.js',
  output: {
    publicPath: "/dist/",
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "css-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "svg-url-loader?noquotes" },
      { test: /\.html$/, loader: 'html-loader?interpolate' }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      assets: 'assets',
      app: 'app',
    },
    extensions: ['', '.js']
  },
};