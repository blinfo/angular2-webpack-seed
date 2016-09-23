var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

 module.exports =  {        
         entry: {
            'polyfills': './src/polyfills.ts',
            'vendors': './src/vendors.ts',
            'app': './src/main.ts'
         },                                  
         resolve: {
             extensions: [".ts", ".js"]
         },
         module: {
             loaders: [
                 {test: /\.ts$/, loaders: ["ts","angular2-template-loader"]},
                  {test: /\.css$/, loader:   ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })},
                  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
                  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                  {
                        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                        loader: 'url-loader?limit=10000',
                    },
                  {test: /\.html$/, loader: 'html'},
                  {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'},
                  {test: /\.json$/, loader: "json-loader"},
                  //{test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw'}
             ]
         }, plugins: [          
             new HtmlWebpackPlugin({
                 template: "./src/index.html",
                 favicon:"./src/favicon.ico",
                 minify:false

             }),
              new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
             }), 
             new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
            })
        ]     
    };
