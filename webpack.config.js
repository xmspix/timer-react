const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const isDevelopment = process.env.NODE_ENV !== "production";

const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const sassWebpackPlugin = new MiniCssExtractPlugin({
  filename: isDevelopment ? "[name].css" : "[name].[hash].css",
  chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
});

const copyFiles = new CopyPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, "./public/img"),
      to: path.resolve(__dirname, "./build/img"),
    },
  ],
});

const postfixPlugin = new webpack.LoaderOptionsPlugin({
  options: {
    postcss: [autoprefixer()],
  },
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".scss"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    sassWebpackPlugin,
    postfixPlugin,
    // copyFiles,
  ],
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    stats: "errors-only",
    host: "localhost",
  },
  // performance: {
  //   maxEntrypointSize: 712000,
  //   maxAssetSize: 712000,
  // },
};
