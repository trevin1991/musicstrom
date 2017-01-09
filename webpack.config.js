module.exports = {
    entry: [
        "webpack-dev-server/client?http://musicstorm.local",
        "webpack/hot/only-dev-server",
        "./src/index.js"
    ],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: "./dist",
        "hot": true,
        historyApiFallback: true
    }
};