[Vim](/vim-docs/) / [模式](/vim-docs/mode/) / [插入模式](/vim-docs/mode/insert)

# 插入模式

**本章出现的命令**

|命令|描述|
|:---|:---|
|`zz`|重绘屏幕|
|`yt,`|复制至逗号之前的文本到寄存器|
|`R`|普通模式进入替换模式|

---

## 技巧13 在插入模式中可即更正错误

|按键错误|用途|
|:---|:---|
|`<C-h>`|删除前一个字符(同退格键)|
|`<C-w>`|删除前一个单词|
|`<C-u>`|删至行首|

![13](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/13.gif)

?> 这些模式不是插入模式独有的，甚至也不是 vim 独有的，在 vim 的命令模式中，以及在 bash shell 中，也可以使用它们

---

## 技巧14 返回普通模式

切回普通模式的经典方式是使用 `<esc>` 键，但在许多键盘上这个键的距离似乎有点远。作为替代，也可以用 `<C-[>`，它的效果与 `<esc>` 完全相同，(参见 `:h hi_CTRL-[]`)

|按键错误|用途|
|:---|:---|
|`<esc>`|切换到普通模式|
|`<C-[>`|切换到普通模式|
|`<C-o>`|切换到插入模式|

![14](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/14.gif)

---

## 技巧15 不离开插入模式，粘贴寄存器中的文本

?> vim 的复制和粘贴操作一般都在普通模式中执行，不过有时我们也许想不离开插入模式，就能往文档里粘贴文本

操作文本

```tex
Practical Vim, by Drew Neil
Read Drew Neil's
```

把文本的两个单词插入到最后一行，以补全该行，由于已经出现过，所以把它复制到一个寄存器，然后在插入模式添加到第二行结尾

操作: <kbd>yt,</kbd> -> <kbd>jA空格键</kbd> -> <kbd>ctrl+r</kbd> -> <kbd>0</kbd> -> <kbd>.</kbd> -> <kbd>esc</kbd>

![15](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/15.gif)

---

## 技巧16 随时随地做运算

?> 表达式寄存器允许我们做一些运算，并把运算结果直接插入文档中

操作文本

```tex
6 chairs, each costing $35, total $
```

操作: <kbd>A</kbd> -> <kbd>ctrl</kbd> -> <kbd>r</kbd> -> <Kbd>=</kbd> -> <kbd>6*35</kbd> -> <kbd>enter</kbd>

![16](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/16.gif)

---

## 技巧17 用字符编码插入非常用字符

?> vim 可以用字符编码插入任意字符。使用此功能可以很方便地输入键盘上找不到的符号

只需要知道某个字符的编码，就可以在插入模式中输入 `<C-v>{code}` 其中 {code} 是要插入字符的编码

vim 接受的字符编码共包含3位数字。假如，想输入大写 "A" 它的字符编码是65，因此，需要输入 `<C-v>065`;

**总结**

|按键操作|描述|
|:---|:---|
|`<C-v>123`|以十进制字符编码插入字符|
|`<C-v>u1234`|以十六进制字符编码插入字符|
|`<C-v>{nondigit}`|以原义插入非数字字符
|`<C-k>{char1}{char2}`|插入以二合子母`{char1}` `{char2}`表示的字符|

---

## 技巧18 用二合字母插入非常用字符

?> 虽然 vim 允许我们用数字编码插入任意字符，不过既难记忆也难输入。可以用二合字母来插入非常用字符，成对的字符更容易记忆

二合字母用起来很方便。在插入模式中，只需要输入 `<C-k>{char1}{char2}` 即可

用命令 (`:digraphs`) 可以查看可用的二合字母列表，不过给命令的输出不太好阅读。也可以用 (`: h digraph-table`) 查看另一个更为有用的列表

---

## 技巧19 用文本模式替换已有文本

?> 在替换模式中输入会替换文档中的已有文本，除此之外，该模式与插入模式完全相同

操作文本

```tex
Typing in Insert mode extends the line. But in Replace mode
the line length doesn't change.
```

把这两个单独的句子合并成一句话为此，需要把句号改成逗号，并将单词 "But" 改为小写

操作: <kbd>f.</kbd> -> <kbd>R</kbd> -> <kbd>,</kbd> -> <kbd>space</kbd> -> <kbd>b</kbd> -> <kbd>esc</kbd>

![19](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/vim/mode/19.gif)

### 虚拟替换模式替换制表符

vim 也提供了单词版本的替换模式及虚拟替换模式。`r{char}` 和 `gr{char}` 命令

参见(`:h r`)
