var path = require("path");
var webpack = require("webpack");

 module.exports =  env =>  {    
     return {
         context: path.resolve(__dirname, "src"),
         entry: {
             app: "./main.ts"
         },
         debug: true,
         output: {
             filename: "bundle.js",
             path: path.resolve(__dirname, "dist"),
             pathinfo: !env.prod
         },
         devtool: 'inline-source-map',
         stats: {
             colors: true,
             reasons: true
         },
         resolve: {
             extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
         },
         module: {
             preLoader:[
                 {test: /\.ts$/, loader: 'source-map-loader', 
                 exclude: [ './node_modules/rxjs','./node_modules/@angular' ]
                }],
              postLoaders: [
                // instrument only testing sources with Istanbul 
                {
                test: /\.ts$/, loader: 'istanbul-instrumenter-loader',
                include: path.resolve('src/app'),
                exclude: /node_modules/
                
            }
            ],
             loaders: [
                 {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/},
                 {test: /\.json$/, loader: "json-loader"}
             ]
         }
     }
    };





