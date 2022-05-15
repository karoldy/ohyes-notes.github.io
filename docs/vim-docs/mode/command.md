[Vim](/vim-docs/) / [模式](/vim-docs/mode/) / [命令行模式](/vim-docs/mode/command)

# 命令行模式

**本章出现的命令**

|命令|描述|
|:---|:---|

## 技巧27 认识vim的命令行模式

?> 命令行模式会提示我们输入一条Ex命令、一个查找模式、或一个表达式

在按下 `:` 键时，vim 会切换到命令行模式。在任意时刻，都可以按 `esc` 键从命令行切换回普通模式

vim 为几乎所有功能都提供了相应的Ex命令(参见 `:h ex-cmd-index` 可获得完整列表)

**操作缓冲区文本的Ex命令**

|命令|描述|
|:---|:---|
|:[range] delete [x]|删除指定范围内的行[到寄存器x中]|
|:[range] yank [x]|复制指定范围内的行[到寄存器x中]|
|:[line] put [x]|在指定行后粘贴寄存器x中的内容|
|:[range] copy {address}|把指定范围内的行拷贝到 {address} 指定的行之下|
|:[range] move {address}|把指定范围内的行移动到 {address} 指定的行之下|
|:[range] join|连接指定范围内的行|
|:[range] normal {commands}|对指定范围内出现的每一行执行普通模式命令 {commands}|
|:[range] substitute/{pattern}/{string}/[flags]|把指定范围内出现{pattern}的地方替换成{string}|
|:[range] global/{pattern}/[cmd]|对指定范围内匹配{pattern}的所有行执行Ex命令{cmd}|


## 技巧28 在一行或多个连续行上执行命令

?> 很多Ex命令可以用 [range] 指定要操作的范围。可以用行号、位置标记或是查找模式来指定范围的开始位置及结束位置

操作文本

```html
<!DOCTYPE html>
<html>
  <head><title>Practical Vim</title></head>
  <body><h1>Pracatical Vim</h1></body>
</html>
```

### 用行号作为地址

![28-1]()

### 用地址指定一个范围

![28-2]()

### 用高亮选区指定范围

![28-3]()

### 用模式指定范围

![28-4]()

### 用偏移对地址进行修正

![28-5]()

### 结论

定义范围的语法非常灵活，既可以混合搭配行号、位置标记以及查找模式，也可以对它们加以偏移。

|符号|地址|
|:---|:---|
|1|文件的第一行|
|$|文件的最后一行|
|0|虚拟行，位于文件第一行上方|
|.|光标所在行|
|'m|包含位置标记m的行|
|'<|高亮选区的起始行|
|'>|高梁选区的结束行|
|%|整个文件(:1,$的简写形式)

## 技巧29 使用 ':t' 和 ':m' 复制和移动行

?> :copy 命令(及其间歇形式 :t) 可以把一行或者多行从文档的一部分复制到另一部分, :move 命令则可以把一行或者多行文本移动到文档的其他地方

操作文本

```tex
Shopping list
    Hardware Store
        Buy new hammer
    Beauty Parlor
        Buy nail polish remover
        Buy nails
```

### 用 ':t' 命令复制行

copy 命令的格式 参见 (`:h copy`)

复制最后一行到 Hardware Store 下面

操作: <kbd>:</kdb> -> <kbd>6</kdb> -> <kbd>copy</kdb> -> <kbd>.</kdb>

![29-1]()

:t命令的一些应用实例

|命令|描述|
|:---|:---|
|:6t.|把第6行复制到当前行下方|
|:t6|把当前行复制到第6行下方|
|:t.|为当前行创建一个副本(类似于普通模式下的`yyp`)|
|:t$|把当前行复制到文本结尾|
|:'<,'>t0|把高亮选中的行复制到文件开头|

### 用 ':m' 命令移动行

:mode 命令看上去和 :copy 命令很相似 (参见 `:h move`)

操作文本

```tex
Shopping list
    Hardware Store
        Buy new hammer
    Beauty Parlor
        Buy nail polish remover
        Buy nails
```

假设想把Hardware Store 一节移动到 Beauty Parlor 一节的下方

操作: <kbd>Vjj</kdb> -> <kbd>:</kdb> -> <kbd>'<,'></kdb> -> <kbd>m$</kdb>

![29-2]()

## 技巧30 在指定范围上执行普通模式命令

?> 如果想在一系列连续行上执行一条普通模式命令，可以用 :normal命令。此命令在与 `.` 命令或宏结合使用时，只需花费很少的时间就能完成大量重复性任务

操作文本

```js
var foo = 1
var bar = 'a'
var baz = 'z'
var foobar = foo + bar
var foobarbaz = foo + bar + baz
```

操作: <kbd>A;</kdb> -> <kbd>esc</kdb> -> <kbd>jVG</kbd> -><kbd>:'<,'></kdb> -> <kbd>normal</kdb> -> <kbd>.</kbd>

![30-1]()

更快捷的方法

操作: <kbd>:</kdb> -> <kbd>%normal</kdb> -> <kbd>A;</kdb>

![30-2]()

## 技巧31 重复上次的Ex命令

`.` 命令可以重复上次的普通模式命令。然而，如果想重复上次的Ex命令，得使用 `@:` 才行。(参见 `:h @:`)

## 技巧32 自动补全Ex命令

如同在 shell 中一样，在命令行上也可以用 `<Tab>` 键自动补全命令

## 技巧33 把当前单词插入命令行

?> 即使是在命令行模式下，vim 也始终知道光标位置何处以及哪个分割窗口处于活动状态。为节省时间，可以把活动窗口中的当前单词(或字符串)插入命令行中

`<C-r>` `<C-w>` 映射项会复制光标下的单词并把它插入命令行中

操作文本

```js
var tally;
for (tally=1; tally <= 10; tally++>) {
  // do something with tally
}
```

操作: <kbd>*</kdb> -> <kbd>cw</kdb> -> <kbd>输入counter</kdb> -> <kbd>esc</kdb> -> <kbd>:%s//</kdb> -> <kbd>ctrl + r</kdb> -> <kbd>ctrl + w</kdb> -> <kbd>/g</kdb> -> 

![33]()

参见 (`:h <C-r><C-w>`)

## 技巧34 回溯历史命令

