const webpack = require("webpack"),
      helpers = require('./helpers'),
      webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common.js'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const devConfig = {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      DEVMODE: JSON.stringify("runing development")
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};

module.exports = webpackMerge(commonConfig, devConfig);