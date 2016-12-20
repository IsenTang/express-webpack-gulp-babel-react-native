var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');

var publicPath = 'http://localhost:3000/';
/**代表开启热加载模式  ？后的参数代表，不能热加载的情况就整页刷新 */
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';


var devConfig = {
    entry: {
        page1: [path.resolve(__dirname, './recourse/page1'),hotMiddlewareScript],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
            loaders: [{
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            }, {
                test: /\.css$/,
                loader: "style!css"
            },{
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;