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
    mode: "production",
}