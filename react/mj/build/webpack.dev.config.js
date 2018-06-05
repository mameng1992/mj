const path = require('path')

module.exports = config = {
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: 'http://127.0.0.1:8081/',
        filename: '[name].js',
        chunkFilename: 'js/chunk/[name].[chunkhash:8].chunk.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        compress: true,
        inline: true,
        host: '127.0.0.1',
        port: 8081,
        stats: "errors-only",
        historyApiFallback:{
            index:'/index.html'
        },
    },
}