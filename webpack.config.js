var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var embedFileSize = 65536

var output = {
  path: path.join(__dirname, 'app'),
  filename: 'bundle.js',
  publicPath: '/'
}

var assetLoaders = [
  {test: /\.css$/, loader: 'style!css!postcss'},
  {test: /\.styl$/, loader: 'style!css!postcss!stylus?dest='},
  {test: /\.json$/, loader: 'json'},
  {test: /\.svg(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url?name=[name].[ext]!url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=[name].[ext]!url?limit=' + embedFileSize}
]

var lintLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader'
}

var babelLoader = {
  loader: 'babel-loader',
  include: [
    path.resolve(__dirname, 'app')
  ],
  test: /\.jsx?$/,
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime', 'babel-plugin-add-module-exports'],
    presets: ['es2015', 'stage-0', 'react']
  }
}

var commonConfig = {
  output: output,
  resolve: {extensions: ['', '.js', '.styl']},
  stats: {chunkModules: false, colors: true},
  standard: {parser: 'babel-eslint'},
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}

var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
]

var production = Object.assign({
  devtool: 'eval',
  entry: [
    './app/index'
  ],
  plugins: plugins.concat([
    new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]),
  module: {loaders: [].concat(assetLoaders, babelLoader)}
}, commonConfig)

var development = Object.assign({
  port: 3000,
  devtool: 'inline-source-map',
  debug: true,
  entry: [
    './app/index',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server'
  ],
  plugins: plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]),
  module: {
    loaders: [].concat(
      assetLoaders, {
        test: /\.jsx?$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, 'app')
      }, babelLoader
    ),
    preLoaders: [].concat(lintLoader)
  }
}, commonConfig)

module.exports = production
module.exports.development = development
