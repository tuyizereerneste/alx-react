const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        header: './js/header/header.js',
        body: './js/body/body.js',
        footer: './js/footer/footer.js',
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Holberton Dashboard",
})
    ],
    module: {
        rules: [
          {
            test: /\.css$/,  // Use regex to test for .css files
            use: [
              'style-loader',  // Injects CSS into the DOM
              'css-loader'     // Allows Webpack to understand and bundle CSS
            ],

          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name].[hash][ext]',
            },
            use: [
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 75,
                        },
                        optipng: {
                            enabled: true,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        svgo: {
                            plugins: [
                              { removeViewBox: false },
                              { cleanupIDs: false }
                            ],
                        },

                    }
                }
            ]
          }
        ]
      },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: './public',
        port: 8564
    },
    optimization: {
        splitChunks: {
          chunks: 'all', // Split both synchronous and asynchronous chunks
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/, // Test for files from node_modules (e.g., Lodash, jQuery)
              name: 'vendors', // Create a 'vendors' chunk for external libraries
              chunks: 'all',
              enforce: true, // Ensure the chunk is created even if it's used only once
            },
          },
        },
    },
}