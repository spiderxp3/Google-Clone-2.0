const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/javascripts/index.js'),
    images: path.resolve(__dirname, 'src/javascripts/images.js'),
    advanced: path.resolve(__dirname, 'src/javascripts/advanced.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      filename: 'index.html',
      template: 'src/views/index.ejs',
      chunks: ['index'],
    }),
    new htmlPlugin({
      filename: 'images.html',
      template: 'src/views/images.ejs',
      chunks: ['images'],
    }),
    new htmlPlugin({
      filename: 'advanced_search.html',
      template: 'src/views/advanced_search.ejs',
      chunks: ['advanced'],
    }),
  ],
};
