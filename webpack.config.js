const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
        'lodash-es': 'lodash',
    },
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(sa|sc|le|c|)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
  ],
};