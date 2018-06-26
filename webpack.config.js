const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules'),
                loader: 'babel-loader',
            },
        ],
    },
};
