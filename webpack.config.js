const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "awesome-typescript-loader", exclude: /node_modules/},
            {test: /\.wast$/, loader: "wast-loader", exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".wast"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};