// https://webpack.js.org/contribute/writing-a-plugin/
// https://webpack.docschina.org/contribute/writing-a-plugin/
// https://webpack.docschina.org/api/plugins/

class HelloWorldPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.done.tap('HelloWorldPlugin', stats => {
      // stats is passed as argument when done hook is tapped.

      // debugger
      console.log('Hello World!')
      console.log(this.options)
    })
  }
}

module.exports = HelloWorldPlugin
