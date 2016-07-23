var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports =  env =>  {
     const addPlugin = (add, plugin) => add ? plugin : undefined;
     const ifProd = plugin => addPlugin(env.prod, plugin);
     const removeEmpty = array => array.filter(i => !!i);
     return {
         context: path.resolve(__dirname, "src"),
         entry: {
             app: "./main.ts",
             vendor: ["./vendors.ts"]
         },
         debug: true,
         output: {
             filename: "bundle.[hash].[name].js",
             path: path.resolve(__dirname, "dist"),
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
              postLoaders: [
                // instrument only testing sources with Istanbul 
                {
                test: /\.ts$/, loader: 'istanbul-instrumenter-loader',
                include: path.resolve('src/**/*.ts'),
                exclude: [
                /\.(e2e|spec)\.ts$/,
                /node_modules/
                ]
            }
            ],
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
             ]
         }, plugins: removeEmpty([
             // doesn"t save anything in this small app. npm@3 mostly takes care of this
             ifProd(new webpack.optimize.DedupePlugin()),
             // saves a couple of kBs
             ifProd(new webpack.LoaderOptionsPlugin({
                 minimize: true,
                 debug: false,
                 quiet: true
             })),
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

             })
        ])
     }
    };





