const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: ["./src/index.jsx", "./src/_index.scss"], // Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
        filename: "bundle.js", // Tên file được build ra
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: ["babel-loader"]
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
};