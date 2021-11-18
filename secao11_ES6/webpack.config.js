var path = require('path');
export const entry = './src/main.js';
export const output = {
    path: __dirname + '/public',
    filename: 'bundle.js'
};
export const devServer = {
    contentBase: __dirname + '/public',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }
    ],
};
