[Vim](/vim-docs/) / [模式](/vim-docs/mode/) / [普通模式](/vim-docs/mode/normal)

# 普通模式

**本章出现的命令**

|命令|描述|
|:---|:---|
|`db`|删除从光标起始位置到单词开头的内容，但会原封不动地留下最后一个字符|
|`b`|反向把光标移动到单词的开头|
|`w`|正向把光标移动到单词的开头|
|`dw`|删除整个单词(光标要在单词的开头)|
|`daw`|删除整个单词(光标单词的任意位置)|
|`gg`|去到文档第一行行首|
|`<C-a>`|对数字执行加|
|`<C-x>`|对数字执行减|
|`cW`|删除从光标位置到单词结尾的字符，并进入插入模式，大写W？|
|`c3w`|删除从光标位置的后三个单词，并进入插入模式|

## 技巧7 停顿时请移开画笔

?> _TODO_

## 技巧8 把撤销单元切成块

`u` 会触发撤销命令，它会撤销最新的一次修改。一次修改可以是改变文档内文本的任意操作，其中包括在普通模式、可视化模式以及命令行模式中所触发的命令，而且一次修改也包括了在插入模式(或删除)的文本，因此我们也可以说，`i`{insert some text}`<esc>` 是一次修改。

## 技巧9 构造可重复的修改

操作文本

```tex
The end is nigh
```

假设光标位于字符 "h" 上，需求是删除单词 "nigh"

### 反向删除

`db` 命令删除从光标起始位置到单词开头的内容，但会原封不动地留下最后一个字符，再按一下 `x` 就删除整个单词

操作: <kbd>$</kbd> -> <kbd>d</kbd> -> <kbd>b</kbd> -> <kbd>x</kbd>

![例子9-1](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/9-1.gif)

### 正向删除

先用 `b` 命令把光标移动到单词的开头，再按 `dw` 命令删除整个单词

操作: <kbd>$</kbd> -> <kbd>b</kbd> -> <kbd>d</kbd> -> <kbd>w</kbd>

![例子9-2](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/9-2.gif)

### 删除整个单词

也可以使用更精准的 `aw` 文本对象，而不是用动作命令

操作: <kbd>$</kbd> -> <kbd>b</kbd> -> <kbd>d</kbd> -> <kbd>a</kbd> -> <kbd>w</kbd>

![例子9-3](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/9-3.gif)

---

## 技巧10 用次数做简单的算术运算

很多普通模式命令都可以带一个次数前缀，例如 `10dd` 删除10行文本，

`<C-a>` 和 `<C-x>` 命令分别对数字执行加和减操作。在不带次数执行时，它们会逐个加减，但如果带一个次数前缀，那么就可以用它们加减任意整数。例如，把光标移动到字符5上，执行 `10<C-a>` 就会把它变成15

![10-1](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/10-1.gif)

但是如果光标不在数字上会发生什么？文档里说，`<C-a>` 命令会 "把当前光标之上或之后的数值加上 [count]" `(参见: h ctrl-a)`。因此，如果光标不在数字上，那么 `<C-a>` 命令将在当前行正向查找一个数字，如果找到了，它就是跳到那里。

操作文本

```css
.blog , .news { background-image: url(/sprite.png); }
.blog { background-position: 0px 10px; }
```

改动: 复制最后一行并且对其做两个小改动，用 "news" 替换 "blog"，以及把 "0px" 改为 "-180px"

操作: <kbd>光标移动到第二行开头</kbd> -> <kbd>yy</kbd> -> <kbd>p</kbd> -> <kbd>cW</kbd> -> <kbd>输入.news</kbd> -> <kbd>180</kbd> -> <kbd>ctrl</kbd> -> <kbd>x</kbd>

![10-2](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/10-2.gif)

---

## 技巧11 能够重复，就别用次数

操作文本

```tex
Delete more than one word
```
把这段文字改成 "Delete one word"

`d2w` 和 `2dw` 命令都可以

操作:

![11-1](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/11-1.gif)

### 只在必要时使用次数

操作文本

```tex
I hava a couple of questions
```

把 "I hava a couple of questions" 改为 "I hava some more questions"

操作: <kbd>c3w</kbd> -> <kbd>输入some more</kbd> -> <kbd>esc</kbd>

![11-2](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/11-2.gif)

---

## 技巧12 双剑合璧，天下无敌

vim的强大很大程度上源自操作符与动作命令相结合。

### 操作符 + 动作命令 = 操作

`d{motion}` 命令可以对一个字符(`dl`)，一个完整单词(`daw`) 或一整个段落 (`dap`) 进行操作，它作用的范围由动作命令决定。`c{motion}`、`y{motion}` 以及其他一些命令也类似，它们被称为操作符。`(:h operator)`

**vim的操作符命令**

|命令|用途|
|:---|:---|
|`c`|修改|
|`d`|删除|
|`y`|复制到寄存器|
|`g~`|反转大小写|
|`gu`|转换为小写|
|`gU`|转换为大写|
|`>`|增加缩进|
|`<`|减少缩进|
|`=`|自动缩进|
|`!`|使用外部过滤器{motion}所跨越的行|

### 自定义操作命令符

?> _TODO_
