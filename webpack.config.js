const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports =  env =>  {
     const addPlugin = (add, plugin) => add ? plugin : undefined;
     const ifProd = plugin => addPlugin(env.prod, plugin);
     const removeEmpty = array => array.filter(i => !!i);
     return {
         context: resolve(__dirname, "src"),
         entry: {
             app: "./main.ts",
             vendor: ["./vendors.ts"]
         },
         debug: true,
         output: {
             filename: "bundle.[hash].[name].js",
             path: resolve(__dirname, "dist"),
             pathinfo: !env.prod
         },
         devtool: this.prod ? 'source-map' : 'eval',
         stats: {
             colors: true,
             reasons: true
         },
         resolve: {
             extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
         },
         module: {
             loaders: [
                 {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/},
                 {test: /\.json$/, loader: "json-loader"}
             ]
         }, plugins: removeEmpty([
             // doesn"t save anything in this small app. npm@3 mostly takes care of this
             ifProd(new webpack.optimize.DedupePlugin()),
             // saves a couple of kBs
             /*ifProd(new webpack.LoaderOptionsPlugin({
                 minimize: true,
                 debug: false,
                 quiet: true
             })),*/
             // saves 65 kB with Uglify!! Saves 38 kB without
             ifProd(new webpack.DefinePlugin({
                 "process.env": {
                     NODE_ENV: '"production"'
                 }
             })),
             // saves 711 kB!!
             ifProd(new webpack.optimize.UglifyJsPlugin({
                 compress: {
                     screw_ie8: true, // eslint-disable-line
                     warnings: false
                 }
             })),

             new HtmlWebpackPlugin({
                 template: "./index.html",
                 favicon:"favicon.ico",
                 minify:false

             }),
             new webpack.optimize.CommonsChunkPlugin({
                 name:"common",
                 filename:"bundle.common.js",
                 chunks: ['app', 'vendor']
             })
         ])
     }
    };





