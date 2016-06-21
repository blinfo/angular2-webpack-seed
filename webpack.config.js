const validate = require('webpack-validator');
var webpack = require('webpack');
var config = {
    context: __dirname + '/src',
    entry: './main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    debug:true,
    devtool: 'source-map',
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports = validate(config);
//module.exports = config;