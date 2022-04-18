[首页](/#index) / [Vim](/vim-docs/)

# vim

本书参考了 《vim实用技巧》 这本书，里面有大量的例子和高级技巧，我主要是总结，并记录下来，加深学习记忆

[参考](https://blog.csdn.net/saying0101_0010_0000/article/details/114528186)

Vim 掌握有五 (5) 个级别：

**0 级**：不了解 Vim

**1 级**：了解 Vim 基础知识

**2 级**：了解界面模式

**3 级**：了解各种动作

**4 级**：不需要界面模式

## 阅读须知

**命令**

在普通模式中，我们按次序输入一个或多个按键组成一条命令。这些命令看起来像下面这样：

|标记|含义|
|:---|:---|
|`x`|按一次 <kbd>x</kbd> |
|`dw`|依次按 <kbd>d</kbd> 、 <kbd>w</kbd> |
|`dap`|依次按 <kbd>d</kbd> 、 <kbd>a</kbd> 、 <kbd>p</kbd> |

**组合键**

当看到`<C-p>`这样的键时，它的意思不是先按 <kbd><</kbd> ，然后按 <kbd>C</kbd> ，在按 <kbd>-</kbd> ，等等。

`<C-p>`标记等同于 <kbd>ctrl</kbd> - <kbd>p</kbd> ，意为同时按 <kbd>ctrl</kbd> 和 <kbd>p</kbd> 

?> (:h key-notation) vim文档展示了这种用法

|标记|含义|
|:---|:---|
|`<C-n>`|同时按 <kbd>ctrl</kbd> 和 <kbd>n</kbd> |
|`g<C-]>`|按 <kbd>g</kbd> ，然后同时按 <kbd>ctrl</kbd> 和 <kbd>]</kbd> |
|`<C-r>0`|同时按 <kbd>ctrl</kbd> 和 <kbd>r</kbd> ，然后按 <kbd>0</kbd> |
|`<C-w><C-=>`|同时按 <kbd>ctrl</kbd> 和 <kbd>w</kbd> ，然后同时按 <kbd>ctrl</kbd> 和 <kbd>=</kbd> |

**占位符**

|标记|含义|
|:---|:---|
|`f{char}`|按 <kbd>f</kbd> ，后面跟任意字符|
|<code>`{a-z}</code>|按 <kbd>\`</kbd> ，后面跟任意小写字母|
|`m{a-zA_Z}}`|按 <kbd>m</kbd> ，后面跟任意小写字母或大写字母|
|`d{motion}`|按 <kbd>m</kbd> ，后面跟任意动作命令|
|`<C-r>{register}`|同时按 <kbd>ctrl</kbd> 和 <kbd>r</kbd> 、后面跟一个寄存器地址|

**显示特殊按键**

|标记|含义|
|:---|:---|
|`<Esc>`|按 <kbd>esc</kbd> 退出键|
|`<CR>`|按 <kbd>enter</kbd> 回车键|
|`<Ctrl>`|按 <kbd>ctrl</kbd> 控制键|
|`<Tab>`|按 <kbd>tab</kbd> 制表键|
|`<Shift>`|按 <kbd>shift</kbd> 切换键|
|`<S-Tab>`|同时按 <kbd>shift</kbd> 和 <kbd>tab</kbd> |
|`<Up>`|按 <kbd>up</kbd> 上光标键|
|`<Down>`|按 <kbd>down</kbd> 下光标键|
|`<Space>`|按 <kbd>space</kbd> 空格键|

**在命令行操作**

下面是在shell(外部shell)中执行grep命令

```bash
$ grep -n Waldo *
```

下面是vim内置的:grep 命令的格式

```shell
:grep Wallo *
```

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
