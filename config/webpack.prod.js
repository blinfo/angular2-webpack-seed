const webpack = require('webpack'),
      helpers = require('./helpers'),
      webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common.js'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const prodConfig = {
  devtool: 'source-map',

  output: {
    publicPath: '/',
    path: helpers.root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: true // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      // Mangling specific options
      mangle: false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      },
      DEVMODE: JSON.stringify("runing production")
    })
  ]
};

module.exports = webpackMerge(commonConfig, prodConfig);