var path = require('path')

// __filename 始终是用绝对路径显示一个文件的位置
console.log('__filename', __filename)

// __dirname 则是该文件所在目录的绝对路径
console.log('__dirname', __dirname)


// 格式化路径 链接路径 转换为绝对路径

// path.normalize(p)
// 规范化路径
console.log('path.normalize', path.normalize(__dirname)) // src


// path.join([path1][, path2][, ...])
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
console.log('path.join', path.join(__dirname, '../../')) // debugging


// path.resolve([from ...], to)
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
console.log(path.resolve('/foo/bar', '/tmp/file/'))
// 返回: '/tmp/file'

console.log('path.resolve', path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')) // src + ./src
// 如果当前工作目录为 ./debugging/
// 则返回绝对地址 '/...xxx.../debugging/wwwroot/static_files/gif/image.gif'


// path.relative(from, to)
// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
console.log('path.relative', path.relative('/data/github/debugging', '/data/github/npm/tapable'))
// 在 Linux 上返回: '../npm/tapable'
// 在 Windows 上返回: '..\\npm\\tapable'
