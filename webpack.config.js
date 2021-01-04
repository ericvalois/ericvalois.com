const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const ENV = process.env.NODE_ENV

module.exports = {
  entry: {
	main: ['./src/scripts/main.js'],
  },
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: '[name].js'
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  optimization: {
    minimize: ENV === 'development' ? false : true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
