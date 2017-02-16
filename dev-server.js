import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
const config = require('./webpack.config.js').development
const server = new WebpackDevServer(Webpack(config), {
  contentBase: 'app/',
  stats: config.stats,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})
server.listen(config.port, 'localhost', function (err) {
  return err ? console.error(err)
    : console.log('Listening on http://localhost:' + config.port)
})
