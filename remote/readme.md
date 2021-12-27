# 远程调试

nodejs 应用如果在服务器出了问题，怎么调试？

## server(remote.example.com)

```bash
node --inspect server.js
```

## local

```bash
ssh -L 9221:localhost:9229 user@remote.example.com
```

ssh 管道启动，在你机器上连接到 9221 端口将被重定向到 9229 的 remote.example.com 地址上。你可以附加一个调试器，例如 Chrome 开发工具或者是指向 localhost:9221 的 Visual Studio Code。如果 Node.js 本地正在运行，应该可以调试了。


参考：

- https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/#enabling-remote-debugging-scenarios
