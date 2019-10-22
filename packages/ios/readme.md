# iOS devices debug

今天同事使用 mac Safari 连接 iPhone 6 调试网页时

Mac 上 safari -> 开发菜单列表， iOS 设备会短暂连接 1 秒，然后就会消失。最新版系统 iPhone 6（iOS 12.3.1） Mac（mac OS Mojave 10.14.6)

搜索也没找到好的解决方法，但是找到如下方案

## 基于 ios-webkit-debug-proxy 的调试

Mac上的safari调试功能不够好，而且不能调试微信中的页面，使用weinre只能简单地调试微信页面，无法进行脚本断点等高级功能

最好的办法莫过于让iPhone可Chrome Devtools进行连接，充分利用好的调试工具与现有的平台，进行调试。

[ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) 支持多平台，这么来说我们可以不借助Mac主机实现调试iPhone的需求。不过配置过程稍微有些繁琐

## 安装

iOS WebKit Debug Proxy works on Linux, MacOS & Windows.

On a MacOS, it's easiest to install with [homebrew](http://brew.sh/):

```bash
brew update
brew unlink libimobiledevice ios-webkit-debug-proxy usbmuxd
brew uninstall --force libimobiledevice ios-webkit-debug-proxy usbmuxd
brew install --HEAD usbmuxd
brew install --HEAD libimobiledevice
brew install --HEAD ios-webkit-debug-proxy
```

On Windows, it's easiest to install with [scoop](http://scoop.sh/):

```bash
scoop bucket add extras
scoop install ios-webkit-debug-proxy
```

On Linux:

```bash
sudo apt-get install autoconf automake libusb-dev libusb-1.0-0-dev libplist-dev libplist++-dev usbmuxd libtool libimobiledevice-dev

git clone https://github.com/google/ios-webkit-debug-proxy.git
cd ios-webkit-debug-proxy

./autogen.sh
make
sudo make install
```

## 用法

详细参见官方文档地址

建议使用 [RemoteDebug/remotedebug-ios-webkit-adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter)

```bash
npm install remotedebug-ios-webkit-adapter -g
```

TODO: 暂未调通

1. ios safari 设置： 设置 -> Safari浏览器 -> 高级 -> Web Inspector
2. ios_webkit_debug_proxy
    `ios_webkit_debug_proxy -f chrome-devtools://devtools/bundled/inspector.html`
3. 在ios设备上，打开safari，访问一个网页 https://xxx.com
4. 在Mac上用Chrome访问 `localhost:9221`, 点击 `localhost:9222`
5. 右击 https://xxx.com 并复制连接地址，粘贴到地址栏访问
6. 此时便可以用chrome的dev tool来调试webView

参考：

- https://www.cnblogs.com/imwtr/p/8675701.html
- https://www.cnblogs.com/dreamhighqiu/p/10995970.html
- https://blog.csdn.net/whackw/article/details/45207551
