[首页](/#index) / [Vim](/vim-docs/)

# vim

笔记参考了《vim实用技巧》这本书，里面有大量的例子和高级技巧，我主要是总结，并把书中的例子以动图的形式记录下来，加深学习记忆

## 前言

**使用vim的出厂配置**

```bash
$ vim -u NONE -N [filename]
```

?> -u NONE 命令让 vim 启动时不加载你的vimrc，这样，定制项就不会生效，插件也会失效。当不同 vimrc 文件启动时，vim 会切换到 vi 兼容模式，这导致很多有用的功能被禁用，-N 命令会使用 `nocompatible` 选项，防止进入vi兼容模式

在启动 vim 时，可以执行如下命令，用该文件取代你的 vimrc

```bash
$ vim -u 路径/{name}.vim [filename]
```

!> ok，接下来我们就开始学习vim了，如果对vim有一定认识，可以直接阅读，如果是初学vim，建议一边阅读，然后根据命令动作操作一次，加深记忆和理解

## 目录

- [vim解决问题的方式](solve)

- [模式](mode/)

- [文件](file/)

- [更快地移动和跳转](faster/)

- [寄存器](register/)

- [高级](senior/)

- [工具](tools/)
