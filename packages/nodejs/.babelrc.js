module.exports = {
  // 'rootMode': 'upward', // 针对 monorepo 配置
  // 允许这两个子 package 加载 babelrc 相对配置
  // babelrcRoots: ['.', './src'],
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          'esmodules': true
        }
      }
    ]
  ]
}
