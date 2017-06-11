const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/index.ts'),
        vendor: path.join(__dirname, 'src/vendor.ts')
    },

    target: 'node',
    output: {
        filename: "[name].angular-substance.js",
        path: path.join(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    // externals: [[nodeExternals({
    //     // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
    //     whitelist: ['express', 'morgan', 'body-parser', 'cookie-parser', 'path']
    // })]],
    module: {

        loaders: [
            // Typescript loader
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/node_modules\/(?!(ng2-.+|ngx-.+))/]
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    plugins: [
        new CleanWebpackPlugin([
            path.join(__dirname, 'dist')
        ]),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve('./src'),
            {}
        )
    ]
};
