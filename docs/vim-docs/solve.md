[首页](/#index) / [Vim](/vim-docs/) / [vim解决问题的方式](solve)

# vim解决问题的方式

**本章出现的命令**

|命令|描述|
|:---|:---|
|`.`|重复上次的操作|
|`u`|撤销上一次的操作|
|`x`|删除光标下的字符|
|`dd`|删除光标当前行|
|`>G`|增加从当前行到文档末尾处的缩进层级|
|`$`|移动到当前行的行尾|
|`a`|在当前光标之后添加内容|
|`j`|移动到光标的下一行|
|`A`|当前行的结尾添加内容。不管光标当前处于什么位置|
|`f{char}`|行内查找下一个指定的字符，使用 `；`与 `,` 进行前进与退回|
|`s`|它先删除光标下的字符，然后进入insert模式|
|`*`|查找当前光标下的单词|
|`cw`|删除从光标位置到单词结尾的字符，并进入插入模式|

## 技巧1 认识 . 命令

?> `.` 命令可以让我们重复上次的修改，它是vim中最为强大的多面手

操作文本

```tex
Line one
Line two
Line three
Line four
```

`.` 命令可以让我们重复上次的修改

`x` 命令会删除光标下的字符，在这种情况下使用 `.` 命令“重复上次修改”时，就会让Vim删除光标下的字符。

![例子1-1](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/1-1.gif)

> 提示: 按 <kbd>u</kbd> 可以撤销上一次的操作，多按几次恢复初始状态

`dd` 命令会删除光标当前行，按 `dd` 后再按 `.` 也会删除当前行

![例子1-2](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/1-2.gif)

最后 `>G` 命令会增加从当前行到文档末尾处的缩进层级。可以按 `>G` 后换一行使用 `.`，看看效果

![例子1-3](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/1-3.gif)

!> `x`、`dd` 以及 `>` 命令都是在普通模式中执行的命令，不过，每次进入插入模式，也会形成一次修改。从进入插入模式的那一刻起(按 `i`)，直到按 `<Esc>` 回到普通模式为止，vim会记录每一个按键操作。做出这样一个修改后再用 `.` 命令的话，它将会重新执行所有这些按键操作

---

## 技巧2 不要自我重复

操作文本

```js
var foo = 1
var bar = 'a'
var foobar = foo + bar
```

操作: <kbd>$</kbd> -> <kbd>a</kbd> -> <kbd>;</kbd> -> <kbd>esc</kbd> -> <kbd>j</kbd> -> <kbd>$</kbd> -> <kbd>.</kbd> -> <kbd>j</kbd> -> <kbd>$</kbd> -> <kbd>.</kbd>

![例子2-1](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/2-1.gif)

### 减少无关的移动

`a` 命令在当前光标之后添加内容， `A` 命令则在当前行的结尾添加内容。不管光标当前处于什么位置，输入 `A` 都会进入插入模式，并把光标移到行尾。

`A` 把 `$a` 封装成了一个按键操作。

操作: <kbd>A</kbd> -> <kbd>;</kbd> -> <kbd>esc</kbd> + <kbd>j</kbd> -> <kbd>.</kbd> -> <kbd>j</kbd> -> <kbd>.</kbd>

![例子2-2](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/2-2.gif)

### 一箭双雕

我们可以这样说 `A` 命令把两个动作(`$a`)合并成了一次按键。不过它不是唯一一个这样的命令，很多vim的单键命令都可以被看到两个或多个其他命令的组合，下表列出了类似的例子

|复合命令|等效的长命令|
|:---|:---|
|`C`|`c$` 删空光标后面的所有东西，并进入插入模式|
|`s`|`cl` 往后删一个字符，并进入插入模式|
|`S`|`^C` 删空这行，并进入插入模式|
|`I`|`$i` 到达行首，并进入插入模式|
|`A`|`$a` 到达行尾，并进入插入模式|
|`o`|`A<CR>` 下面插入一个空行，并进入插入模式|
|`O`|`ko` 在上面新建一个空行，并进入插入模式|

---

## 技巧3 以退为进

我们可以用一种常用的Vim操作习惯在一个字符前后各添加一个空格。
假设有一行代码看起来是这样的：

```js
var foo = "method("+argument1+","+argument2+")";
```

在 JavaScript 里把字符串连接到一起从来都不美观，但可以像下面这样在 + 号前后各添加一个空格，让肉眼更容易识别。

```js
var foo = "method(" + argument1 + "," + argument2 + ")";
```

### 使修改可重复

`f{char}`在行内查找下一个指定的字符，使用 `；`与 `,` 进行前进与退回

`s` 命令把两个操作合并为一个: 它先删除光标下的字符，然后进入insert模式。

操作: <kbd>f</kbd> -> <kbd>+</kbd> -> <kbd>s</kbd> + <kbd>space</kbd> -> <kbd>+</kbd> -> <kbd>space</kbd> -> <kbd>esc</kbd> -> <kbd>;</kbd> -> <kbd>.</kbd> -> <kbd>;</kbd> -> <kbd>.</kbd> -> <kbd>;</kbd> -> <kbd>.</kbd>

![例子3](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/3.gif)



## 技巧4 执行、重复、回退

**可重复的操作和如何回退**

|目的|操作|重复|回退|
|:---|:---|:---|:---|
|做出一个修改|{edit}|`.`|`u`|
|在行内查找下一个指定字符|`f{char}/t{char}`|`;`|`,`|
|在行内查找上一个指定字符|`F{char}/T{char}`|`;`|`,`|
|在文档中查找下一处匹配项|/pattern`<CR>`|`n`|`N`|
|在文档中查找上一处匹配项}|?pattern`<CR>`|`n`|`N`|
|执行替换|:s/target/replacement|`&`|`u`|
|执行一系列修改|`qx{changes}q`|`@x`|`u`|

---

## 技巧5 查找并手动替换

Vim提供了一个 :substitute 命令专门用于查找替换任务， 不过用上面介绍的技术，也可以手动修改第一处地方，然后再一 个个地查找替换其他匹配项。`.` 命令可以把我们从繁重的工作中解放出来，而即将登场的另一个有用的单键命令则能够让我们方便地在匹配项间跳转。

在下面这段文本中，每一行都出现了单词“content”

```text
...We're waiting for content before the site can go live...
...If you are content with this, let's go ahead with it...
...We'll launch as soon as we have the content...
```

假设想用单词“copy”（意义同“copywriting”）来替代“content”。也许你会想，这太简单了，只要用替换命令就行了，像下面这样：

```shell
:%s/content/copy/g
```

但是，且慢！如果我们运行上面这条命令，就会出现“If you are ‘copy’ with this,”这样的句子，这很荒唐！
 
我们不能想当然地用“copy”替换每一个“content”，而是要时刻留神，对每个地方都要问“这里要修改吗？”，然后回答“修改”或者“不改”。

### 偷懒的方法: 无需输入就可以进行查找

`.` 命令是我最喜爱的Vim单键命令，而排在第二位的是 `*` 命令，此命令可以查找当前光标下的单词(参见`:h *`)
 
当光标位于“content”的开头时，就可以着手修改它。这包括两步操作：首先要删除单词“content”，然后输入替代的单词。

`cw` 命令会删除从光标位置到单词结尾的字符，并进入插入模式，然后就可以输入单词“copy”了。Vim会把我们离开插入模式之前的全部按键操作都记录下来，因此整个 `cw`copy\<Esc> 会被当成一个修改。也就是说，执行 `.` 命令会删除从光标到当前单词结尾间的字符，并把它修改为“copy”。

操作: <kbd>光标移动到content</kbd> -> <kbd>*</kbd> -> <kbd>c</kbd> + <kbd>w</kbd> -> <kbd>输入copy</kbd> -> <kbd>esc</kbd> -> <kbd>n</kbd> -> <kbd>.</kbd> -> <kbd>n</kbd> -> <kbd>.</kbd>

![例子5](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/solve/5.gif)
