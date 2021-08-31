# 调试 c++

VSCode 编译 c++

原 [cpp](https://github.com/cloudyan/cpp)

学习 C++

- http://www.runoob.com/cplusplus/cpp-tutorial.html

## 编译配置

vscode 编译 cpp 文件，需要配置以下内容，之后执行 编译即可

`launch.json`

```js
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "cpp: (lldb) Launch",
      "type": "cppdbg",
      "request": "launch",
      "preLaunchTask": "cpp:build", // 在launch之前运行的任务名，这个名字一定要跟tasks.json中的任务名字大小写一致
      "program": "${workspaceFolder}/packages/cpp/a.out", // 需要运行的是当前打开文件的目录中，名字和当前编译输出文件相同
      "args": [],
      "stopAtEntry": false, // 选为true则会在打开控制台后停滞，暂时不执行程序
      "cwd": "${workspaceFolder}", // 当前工作路径：当前文件所在的工作空间
      "environment": [],
      "externalConsole": false, // 是否使用外部控制台，选false的话，我的vscode会出现错误
      "MIMode": "lldb"
    },
  ]
}
```

`tasks.json`

```js
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "cpp:build", // 任务的名字叫 cpp:build，注意是大小写区分的，等会在launch中调用这个名字
      "type": "shell",
      // "command": "gcc",
      "command": "g++", // g++ xxx.cpp -o a.out
      "args": [
          "-g", // 调试程序必须设置的参数
          "-o", // 输出名称，不进行编译优化
          "./cpp/a.out",
          "./cpp/main.cpp" // 编译文件
      ],
      // 所以以上部分，就是在shell中执行
      "group": {
        "kind": "build",
        "isDefault": true
        // 任务分组，因为是tasks而不是task，意味着可以连着执行很多任务
        // 在build组的任务们，可以通过在Command Palette(F1) 输入run build task来运行
        // 当然，如果任务分组是test，你就可以用run test task来运行
      },
      "problemMatcher": [
        "$gcc" // 使用gcc捕获错误
      ],
    }
  ]
}
```

## 编译调试

`command + shift + b` 即可调试了

关于命令行执行编译

```bash
g++ ./hello.cpp
```

`g++`=`gcc -xc++ -lstdc++ -shared-libgcc`

- gcc -xc++表示默认语言为C++，gcc默认把`.c`文件当做c语言来编译，g++默认把`.c`文件当做cpp来编译
- -lstdc++：gcc不会自动添加C++的标准库，需要手动指明

clang和clang++的关系，跟gcc和g++的关系一样。

参考：

- https://code.visualstudio.com/docs/languages/cpp
- https://www.zhihu.com/question/30315894
- https://www.cnblogs.com/lianshuiwuyi/p/8094388.html
- https://blog.csdn.net/yangzuo_chester/article/details/80644226
