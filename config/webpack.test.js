var path = require("path");
var webpack = require("webpack");

 module.exports =   {    
         context: path.resolve(__dirname, "../src"),
         entry: {
             'polyfills': './polyfills.ts',
            'vendors': './vendors.ts',
            'app': './main.ts'
         },
         debug: true,
         output: {
             filename: "bundle.js",
             path: path.resolve(__dirname, "dist")
         },
         devtool: 'inline-source-map',
         stats: {
             colors: true,
             reasons: true
         },
         resolve: {
             extensions: [".webpack.js", ".web.js", ".ts", ".js"]
         },
         module: {
             preLoaders:[
                 {
                 test: /\.ts$/, loader: 'source-map-loader', 
                 exclude: /node_modules/}],
             loaders: [
                {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/},
                  {test: /\.css$/, loader:   'style-loader!css-loader'},
                  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
                  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                  {test: /\.html$/, loader: 'raw',exclude: /node_modules/},
                  {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'},
                 {test: /\.json$/, loader: "json-loader"}
             ],postLoaders: [
                   // instrument only testing sources with Istanbul 
                {
                test: /\.ts$/, loader: 'istanbul-instrumenter-loader',
                include: path.resolve('src/app'),
                exclude: /node_modules/
                
            }
            ]
         }
    };