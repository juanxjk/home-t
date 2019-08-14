const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = (srcPath, publicPath) => {
    return {
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                }, {
                    test: /\.(scss)$/i,
                    loader: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(css)$/i,
                    use: [{
                            loader: 'style-loader'
                        },
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // only enable hot in development
                                hmr: process.env.NODE_ENV === 'development',
                                // if hmr does not work, this is a forceful method.
                                reloadAll: true,
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                            }
                        },
                    ],
                },
                // Image Loader
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: "file-loader",
                    options: {
                        name: 'img/[name]-[hash].[ext]',
                    },
                },
                // Font Loader
                {
                    test: /\.(eot|ttf|woff2?)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name].[ext]'
                        }
                    }]
                },
                // HTML Loader
                {
                    test: /\.html$/i,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: false,
                            collapseWhitespace: false,
                            interpolate: true
                        }
                    }],
                },
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                d3: 'd3',
                'window.jQuery': 'jquery',
                tether: 'tether',
                Tether: 'tether',
                'window.Tether': 'tether',
                Popper: ['popper.js', 'default'],
                'window.Tether': 'tether',
                Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
                Button: 'exports-loader?Button!bootstrap/js/dist/button',
                Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
                Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
                Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
                Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
                Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
                Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
                Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
                Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
                Util: 'exports-loader?Util!bootstrap/js/dist/util'  
            }),
            new CleanWebpackPlugin(),
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                server: {
                    baseDir: ['public']
                }
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        ]
    }
}