const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./js/dashboard_main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
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
    mode: "production",
}