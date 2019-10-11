const path = require('path')
const HelloWorldPlugin = require('../plugins/HelloWorldPlugin')
const FileListPlugin = require('../plugins/FileListPlugin')
const MyPlugin = require('../plugins/MyPlugin')

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
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30,
      maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // automaticNameMaxLength: 30,
      cacheGroups: {
        // libs: {
        //   name: 'chunk-lib',
        //   test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios)[\\/]/,
        //   priority: 0,
        //   chunks: 'initial'
        // },
        vendors: {
          name: 'chunk-vendors', // 提取 npm 模块为独立文件
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 1, // 默认为 2，改为 1 模块只要被引用就提取成独立文件
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
  },
  // 插件
  plugins: [
    new AA({ test: true }),
    new HelloWorldPlugin({ show: true }),
    new FileListPlugin(),
    new MyPlugin(),
  ],
}
