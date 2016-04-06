var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');


var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      } , {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },  {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },  {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }]
  }
};

module.exports = config;
