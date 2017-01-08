var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var publicPath = 'http://localhost:3000/';
/**代表开启热加载模式  ？后的参数代表，不能热加载的情况就整页刷新 */
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';


var devConfig = {
    entry: {
        page1: [path.resolve(__dirname, './recourse/login'),hotMiddlewareScript],
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
                exclude: /node_modules/,
                loader: 'url?limit=8192&name=public/images/[name].[ext]'
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css"
            },{
                test: /\.jsx?$/,//这里需要注意，要有？，代表loader js以及jsx结尾的文件，但是要注意，这回加载node_modules中文件。
                                //所以要有exclude。
                exclude: /node_modules/,
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