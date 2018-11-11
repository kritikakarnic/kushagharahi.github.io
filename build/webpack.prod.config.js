var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var SitemapPlugin = require('sitemap-webpack-plugin').default
var path = require('path')
var config = require('./webpack.dev.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var paths = ['/', '/blog', '/resume', '/contact', '/projects', '/blog/first_blog_post', '/blog/access_localhost_from_vm_in_host_computer', '/blog/git_command_line_cheat_sheet', '/blog/asrock_z77_extreme4_gtx_970_high_sierra_hackintosh']

// config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
//   name: 'vendor',
//   minChunks: function (module) {
//     // assumes vendor imports exist in the node_modules directory
//     return module.context && module.context.indexOf('node_modules') !== -1
//   }
// }));
config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
config.plugins.push(new webpack.optimize.UglifyJsPlugin())
config.plugins.push(new PrerenderSpaPlugin(
  // Absolute path to compiled SPA
  path.resolve(__dirname, '../dist'),
  // List of routes to prerender
  paths,
  {
    ignoreJSErrors: true
  }
))
config.plugins.push(new SitemapPlugin(
  'https://kusha.me', paths, {
    skipGzip: true
  }))

module.exports = config
