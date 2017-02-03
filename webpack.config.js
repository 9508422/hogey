const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')

const PATHS = {
  app: resolve(__dirname, 'app'),
  build: resolve(__dirname, 'dist'),
}

const outputPath = PATHS.build

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: 'body',
  template: `${PATHS.app}/index.html`,
})

module.exports = {
  context: PATHS.app,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    hot: true,
    inline: true,
    publicPath: '/',
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.json', '.jsx'],
    modules: [resolve('./app'), 'node_modules'],
  },
}
