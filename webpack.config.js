let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let phaserModule = path.join(__dirname, '/node_modules/phaser/');
let phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
let pixi = path.join(phaserModule, 'build/custom/pixi.js');
let p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = [
    {
        name: 'client',
        entry: './src/index.js',
        output: {
            pathInfo: true,
            filename: '[name].bundle.js',
            path: path.resolve('./dist'),
            publicPath: '/'
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './src/assets',
                    to: './assets'
                }
            ]),
            new CopyWebpackPlugin([
                {
                    from: './index-electron.html',
                    to: './index-electron.html'
                }
            ]),
            new HtmlWebpackPlugin({
                template: './index.html',
                inject: 'body',
            }),
            // new webpack.NoErrorsPlugin(),
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                {test: /pixi\.js/, loader: 'expose?PIXI'},
                {test: /phaser-split\.js$/, loader: 'expose?Phaser'},
                {test: /p2\.js/, loader: 'expose?p2'},
                // {test: /\.ts?$/, loader: 'ts', exclude: '/node_modules/'}
            ]
        },
        node: {
            fs: 'empty'
        },
        resolve: {
            extensions: ['', '.js'],
            alias: {
                'phaser': phaser,
                'pixi': pixi,
                'p2': p2,
            }
        },
        devtool: 'source-map'
    }
];