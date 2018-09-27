const path = require('path');
const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
    mode: 'development',
    devtool: 'inline-sourcemap',
    entry: PATHS.src,
    output: {
        path: __dirname + "/public",
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "/public",
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true
    }
};