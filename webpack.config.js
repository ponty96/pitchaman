var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var BundleTracker = require('webpack-bundle-tracker');
var build_dir = path.resolve(__dirname,'static/bundles/');
var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('vendors','common.js');

module.exports = {
  context: __dirname,

  entry: {
      index :[ './static/react/components/home-page/index'
        ],
      profileNewPage :[ './static/react/components/profile-new-page/index'
        ],

        vendors: ['react','react-dom','react-bootstrap']

  },

  output: {
      path: build_dir,
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
      commonsPlugin
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
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.json', '.coffee','.jsx','.css']
  }
}