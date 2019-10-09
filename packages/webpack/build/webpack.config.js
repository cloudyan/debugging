const path = require('path')
const HelloWorldPlugin = require('../plugins/HelloWorldPlugin')
const FileListPlugin = require('../plugins/FileListPlugin')

class AA {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    console.log('AA', this.options)
  }
}

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './'),
  entry: '../src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    publicPath: 'https://img1.haoshiqi.net/',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
  },
  // loader
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  // 插件
  plugins: [
    new AA({ test: true }),
    new HelloWorldPlugin({ show: true }),
    new FileListPlugin(),
  ],
}
