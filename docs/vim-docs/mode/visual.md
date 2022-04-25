[Vim](/vim-docs/) / [模式](/vim-docs/mode/) / [可视模式](/vim-docs/mode/visual)

# 可视模式

**本章出现的命令**

|命令|描述|
|:---|:---|
|`viw`|选中整个单词|
|`vit`|高亮选中标签内部的内容，其中 `it` 命令是一种文本对象的命令|
|`U`|把选中的字符转为大写(参见 `:h v_U`)|
|`gU`|等效于可视模式下的 `U`|
|`gv`|重复之前的选区|

---

## 技巧20 深入理解可视化模式

?> 可视模式允许选中一个文本区域并在其上操作。

操作文本

```tex
March
```

修改单词为 "April"

操作: <kbd>viw</kbd> -> <kbd>c</kbd> -> <kbd>输入April</kbd>

![20]()

参见 (`: h Select-mode`)

---

## 技巧21 选择高亮选区

?> 可视模式的3个字模式用于处理不同类型的文本。

### 激活可视模式

|命令|描述|
|:---|:---|
|`v`|激活面向字符的可视模式|
|`V`|激活面向行的可视模式|
|`<C-v>`|激活面向列块的可视模式|
|`gv`|重选上次的高亮选区|

### 在可视模式间切换

|按键操作|描述|
|:---|:---|
|`<esc>` / `<C-[>`|回道普通模式|
|`v` / `V` / `<C-v>`|切换到普通模式，在可视模式中使用|
|`v`|切换到面向字符的可视模式|
|`V`|切换到面向字行的可视模式|
|`<C-v>`|切换到面向字列块的可视模式|
|`o`|切换高亮选择的活动端|

### 切换选择的活动端

高亮选区的范围由其两个端点界定。其中一端固定，另一端可以随光标自由移动，可以用 `o` 键来切换其活动的端点。

操作文本

```tex
Select from here to here
```

假设光标在最后一个 here 单词的 词首上，以此起点，选中 `here to here`

操作 <kbd>vbb</kbd> -> <kbd>o</kbd> -> <kbd>e</kbd>

![21]()

---

## 技巧22 重复执行面向行的可视命令

操作文本

```python
def fib(n):
  a,b = 0,1
  while a < n:
print a
a, b = b, a + b

fib(42)
```

这段代码的缩进有点问题，做出修改，使之符合缩进风格

### 准备工作

让 `<` 和 `>` 正常工作

```
:set shiftwidth=4 softtabstop=4 expandtab
```

### 先缩进一次，然后重复

操作: <kbd>Vj</kbd> -> <Kbd>>.</kbd>

![22]()

---

## 技巧23 只要可能，最好用操作符命令，而不是可视命令

?> 可视模式可能比vim的普通模式操作起来更自然一些，但它又一个缺点；在这个模式下， `.` 命令会有一些异常的表现

操作文本

```html
<a href="#">one</a>
<a href="#">two</a>
<a href="#">three</a>
```

把链接文字转为大写

### 使用可视化模式下的命令

操作: <kbd>vit</kbd> -> <kbd>U</kbd> -> <kbd>j.</kbd> -> <kbd>j.</kbd>

![23-1]()

发现了吧，最后的结果看起来有点怪

```html
<a href="#">ONE</a>
<a href="#">TWO</a>
<a href="#">THRee</a>
```

!> 当一条可视模式命令重复执行时，它会影响相同数量的文本(参见 `:h visual_repeat`)

### 使用普通模式下的操作符命令

可视模式下的 `U` 命令有一个等效的普通模式命令 `gU{motion}` (参见 `:h gU`)

操作: <kbd>gUit</kbd> -> <kbd>j.</kbd> -> <kbd>j.</kbd>

![23-2]()

---

## 技巧24 用面向列块的可视模式编辑表格数据

?> 在任何编辑器中，都能够操作以行为单位的文本，但以列为单位进行文本操作就需要更为专业的工具了。vim 面向列块的可视模式就提供了这种能力，可以用它来对纯文本表格进行转换

操作文本

```tex
Chapter          Page
Normal mode      15
Insert mode      31
Visual mode      44
```

用管道符画一条竖线来隔开这两列文本

操作: <kbd>ctrl</kbd> -> <kbd>v</kbd> -> <kbd>3j</kbd> -> <kbd>x...</kbd> -> <kbd>gv</kbd> -> <kbd>r|</kbd> -> <kbd>yyp</kbd> -> <kbd>Vr-</kbd>

![24]()

<!-- 这里可以在列块选中模式下进入插入模式进行多行操作，例如多行注释

操作: <kbd>ctrl</kbd> -> <kbd>v</kbd> -> <kbd>I</kbd> -> <kbd>输入文本</kbd> -> <kbd>esc</kbd> -> <kbd>j</kbd>

![24-2]() -->

---

## 技巧25 修改列文本

?> 用列块可视模式可以同时往若干行中插入文本

操作文本

```css
li.one a { background-image: url('/image/sprite.png'); }
li.two a { background-image: url('/image/sprite.png'); }
li.three a { background-image: url('/image/sprite.png'); }
```

把 "image" 目录 改为 "components" 目录

操作: <kbd>ctrl</kbd> -> <kbd>v</kbd> -> <kbd>jje</kbd> -> <kbd>c</kbd> -> <kbd>输入component</kbd> -> <kbd>esc</kbd> -> <kbd>j</kbd>

![25]()

---

## 技巧26 在长短不一的高亮块后添加文本

?> 列块可视模式在操作由行列组成的方形代码块时表现得很好，然而，它并不限于操作方形的文本区域

操作文本

```js
var foo = 1
var bar = 'a'
var foobar = foo + bar
```

每行的结尾增加分号

操作: <kbd>ctrl</kbd> -> <kbd>v</kbd> -> <kbd>jj$</kbd> -> <kbd>A;</kbd> -> <kbd>esc</kbd> -> <kbd>j</kbd>

![26]()
