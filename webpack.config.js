var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './static/react/index',

  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  module: {
        loaders: [{
            test: /\.js?$/,
            exclude: [node_modules_dir],// A regexp to test the require path. accepts either js or jsx
            loaders: ['babel-loader?stage=0'] // The module to load. "babel" is short for "babel-loader"
        },
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                loaders: ['babel-loader?stage=0'] // The module to load. "babel" is short for "babel-loader"
            },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|ttf|woff|jpg|jpeg)$/, loader: 'file-loader?limit=300000' }
        ]
    },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.json', '.coffee','.jsx','.css']
  }
}