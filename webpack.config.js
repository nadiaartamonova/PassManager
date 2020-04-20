const path = require ('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');
module.exports={
    mode: 'development',
    entry:{
        main: path.resolve(__dirname,'web/js/App.js')
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'web/dist')
    },
    plugins:[
            new HTMLWebpackPlugin({
                filename: path.resolve(__dirname, 'web/index.html'),
                template: path.resolve(__dirname, 'web/template/index.html')
            }),
            new CleanWebpackPlugin()
    ]
}

