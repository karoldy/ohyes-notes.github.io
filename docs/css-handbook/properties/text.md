[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [文本](/css-handbook/properties/text)

# 文本

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-change">text-transform</span>](#tt)|CSS1/3|有|定义元素的文本如何转换大小写|
|[white-space](#ws)|CSS1|有|指定元素是否保留文本间的空格、换行；指定文本超过边界时是否换行|
|[<span class="g-color-css3-new">tab-size</span>](#ts)|CSS3|有|定义元素内容中制表符的长度|
|[<span class="g-color-css3-new">word-break</span>](#wb)|CSS3|有|定义元素内容文本的字间与字符间的换行行为|
|[<span class="g-color-css3-new">word-wrap/overflow-wrap</span>](#ww)|CSS3|有|定义元素内容文本遇到边界时如何换行|
|[<span class="g-color-css3-change">text-align</span>](#ta)|CSS1/3|有|定义元素内容的水平对齐方式|
|[<span class="g-color-css3-new">text-align-last</span>](#tal)|CSS3|有|定义块内文本内容的最后一行（包括块内仅有一行文本的情况，这时既是第一行也是最后一行）或者被强制打断的行的对齐方式|
|[<span class="g-color-css3-new">text-justify</span>](#tj)|CSS3|有|定义使用什么方式实现文本内容两端对齐|
|[<span class="g-color-css3-change">word-spacing</span>](#wsp)|CSS1/3|有|指定单词之间的额外间隙|
|[<span class="g-color-css3-change">letter-spacing</span>](#ls)|CSS1/3|有|指定字符之间的额外间隙|
|[<span class="g-color-css3-change">text-indent</span>](#ti)|CSS1/3|有|定义块内文本内容的缩进|
|[vertical-align](#va)|CSS1/2|无|定义行内元素在行框内的垂直对齐方式|
|[line-height](#lh)|CSS1|有|定义元素中行框的最小高度|
|[<span class="g-color-css3-new">text-size-adjust</span>](#tsa)|CSS3|有|定义移动端页面中元素文本的大小如何调整|

## text-transform :id=tt

### 语法

**text-transform**：`none` | `capitalize` | `uppercase` | `lowercase` | <span class="g-color-css3-new">full-width</span>

**默认值**：none

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**none**：无转换

**capitaliz**e：将每个单词的第一个字母转换成大写

**uppercase**：将每个单词转换成大写

**lowercase**：将每个单词转换成小写

<span class="g-color-css3-new">full-width</span>：将所有字符转换成fullwidth形式。如果字符没有相应的fullwidth形式，将保留原样。这个值通常用于排版拉丁字符和数字等表意符号。（CSS3）

### 说明

**定义元素的文本如何转换大小写**

对应的脚本特性为：`textTransform`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/52.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li>
		<strong>将每个单词的首字母转换成大写</strong>
		<div>原　文： <span>how do you do.</span></div>
		<div class="capitalize">转换后： <span>how do you do.</span></div>
	</li>
	<li>
		<strong>转换成大写</strong>
		<div>原　文： <span>how do you do.</span></div>
		<div class="uppercase">转换后： <span>how do you do.</span></div>
	</li>
	<li>
		<strong>转换成小写</strong>
		<div>原　文： <span>HOW ARE YOU.</span></div>
		<div class="lowercase">转换后： <span>HOW ARE YOU.</span></div>
	</li>
</ul>
```

**css**

```css
.capitalize span {
  text-transform: capitalize;
}
.uppercase span {
  text-transform: uppercase;
}
.lowercase span {
  text-transform: lowercase;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/58.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## white-space :id=ws

### 语法

**white-space**：`normal` | `pre` | `nowrap` | `pre-wrap` | `pre-line`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**normal**：默认处理方式。会将序列的空格合并为一个，内部是否换行由换行规则决定

**pre**：原封不动的保留你输入时的状态，空格、换行都会保留，并且当文字超出边界时不换行。等同 pre 元素效果

**nowrap**：与normal值一致，不同的是会强制所有文本在同一行内显示

**pre-wrap**：与pre值一致，不同的是文字超出边界时将自动换行

**pre-line**：与normal值一致，但是会保留文本输入时的换行

### 说明

**指定元素是否保留文本间的空格、换行；指定文本超过边界时是否换行**

对应的脚本特性为：`whiteSpace`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/53.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>轻轻地我走了
	正如我轻轻地来</p>
	</li>
	<li class="pre">
		<strong>pre：</strong>
		<p>轻轻地我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="pre-wrap">
		<strong>pre-wrap：</strong>
		<p>轻轻地    我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="pre-line">
		<strong>pre-line</strong>
		<p>轻轻地    我走了（这里接很多测试文字）
	正如我轻轻地来</p>
	</li>
	<li class="nowrap">
		<strong>nowrap：</strong>
		<p>轻轻地我走了
	正如我轻轻地来</p>
	</li>
</ul>
```

**css**

```css
.test p {
  width: 200px;
  border: 1px solid #000;
}
.normal p {
  word-wrap: normal;
}
.pre p {
  white-space: pre;
}
.pre-wrap p {
  white-space: pre-wrap;
}
.pre-line p {
  white-space: pre-line;
}
.nowrap p {
  white-space: nowrap;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/59.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## tab-size :id=ts

### 语法

**tab-size**：[\<number>](/css-handbook/value-and-units/numeric?id=number) | [\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：8

**适用于**：块容器

**继承性**：有

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用整数值指定制表符的长度。不允许负值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定制表符的长度。不允许负值

### 说明

**定义元素内容中制表符的长度**

- 该属性决定了制表符(U+0009)的宽度，number代表空格(U+0020)的倍数(如：tab-size:4; 表示制表符宽度是4个空格的宽度)
- 只有当 `white-space` 的属性值为：`pre` | `pre-wrap` 时，该属性的定义才有效
- 对应的脚本特性为：`tabSize`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/54.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<pre>
你站在桥上看风景，
	看风景的人在楼上看你。
明月装饰了你的窗子，
	你装饰了别人的梦。
</pre>
```

**css**

```css
pre {
  background: #eee;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/60.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## word-break :id=wb

### 语法

**word-break**：`normal` | `keep-all` | `break-all` | `break-word`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**相关属性**：[word-wrap/overflow-wrap](#ww)

**媒　体**：视觉

### 取值

**normal**：默认的换行规则。依据各自语言的规则，允许在字间发生换行

**keep-all**：对于 CJK（中文，韩文，日文）文本不允许在字符内发生换行。Non-CJK 文本表现同normal

**break-all**：对于 Non-CJK 文本允许在任意字符内发生换行。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字符断行

**break-word**：与 `break-all` 相同，不同的地方在于它要求一个没有断行破发点的词必须保持为一个整体单位。这与 [word-wrap](#ww) 的 `break-word` 值效果相同

### 说明

**定义元素内容文本的字间与字符间的换行行为**

- 作为IE的私有属性之一，IE5.5率先实现了 `word-break`，后期被w3c采纳成标准属性
- 对于解决防止页面中出现连续无意义的长字符打破布局，应该使用 `break-all` | `break-word` 属性值
- 同为强制打断单词的 `break-all`与 `break-word` 的两个值，需要了解她们间的主要区别

!> break-all会在文本内容遇见边界时，强制将文本打断换行，而不考虑单词是否是完整的一个单位
!> break-word同样也会在文本内容遇见边界时，强制将文本打断换行，不同的在于它会考虑单词是否完整，如果当前行无法放下需要被打断的单词，为了保持完整性，会将整个单词放到下一行进行展示

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/55.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-all">
		<strong>break-all：</strong>
		<p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="keep-all">
		<strong>keep-all：</strong>
		<p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-word">
		<strong>break-word：</strong>
		<p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
</ul>
```

**css**

```css
.test p {
  width: 100px;
  border: 1px solid #000;
  background-color: #eee;
}
.normal p {
  word-break: normal;
}
.break-all p {
  word-break: break-all;
}
.keep-all p {
  word-break: keep-all;
}
.break-word p {
  word-break: break-word;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/61.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## word-wrap/overflow-wrap :id=ww

### 语法

**word-wrap, overflow-wrap**：`normal` | `break-word` | `break-spaces`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**相关属性**：[word-break](#wb)

**媒　体**：视觉

### 取值

**normal**：允许内容顶开或溢出指定的容器边界

**break-word**：内容将在边界内换行，如果需要，单词内部允许断行。它要求一个没有断行破发点的词必须保持为一个整体单位，如果当前行无法放下需要被打断的单词，为了保持完整性，会将整个单词放到下一行进行展示。这与 [word-break](#wb) 的 `break-word` 值效果相同

### 说明

**设置或检索当内容超过指定容器的边界时是否断行**

- 作为IE的私有属性之一，IE5.5率先实现了 `word-wrap`，后期被w3c采纳成标准属性
- CSS3中将 `word-wrap` 改名为 `overflow-wrap`
- 对应的脚本特性为：`wordWrap`, `overflowWrap`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/56.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>normal：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-word">
		<strong>break-word：</strong>
		<p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
	</li>
	<li class="break-word">
		<strong>break-word：</strong>
		<p>中英混排的时候abcdefghijklmnopqrst</p>
	</li>
</ul>
```

**css**

```css
.test p {
  width: 100px;
  border: 1px solid #000;
  background-color: #eee;
}
.normal p {
  word-wrap: normal;
}
.break-word p {
  word-wrap: break-word;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/62.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-align :id=ta

### 语法

**text-align**：<span class="g-color-css3-new">start</span> | <span class="g-color-css3-new">end</span> | `left` | `right` | `center` | <span class="g-color-css3-new">justify</span> | <span class="g-color-css3-new">match-parent</span> | <span class="g-color-css3-new">justify-all</span>

**默认值**：start

**适用于**：块容器

**继承性**：有

**动画性**：否

**计算值**：指定值，除 match-parent 值外

**媒　体**：视觉

### 取值

**left**：内容左对齐

**center**：内容居中对齐

**right**：内容右对齐

<span class="g-color-css3-new">justify</span>：内容两端对齐，但对于强制打断的行（被打断的这一行）及最后一行（包括仅有一行文本的情况，因为它既是第一行也是最后一行）不做处理。（CSS3）

<span class="g-color-css3-new">start</span>：内容对齐开始边界。（CSS3）

<span class="g-color-css3-new">end</span>：内容对齐结束边界。（CSS3）

<span class="g-color-css3-new">match-parent</span>：这个值和inherit表现一致，只是该值继承的start或end关键字是针对父母的direction值并计算的，计算值可以是 left 和 right 。（CSS3）

<span class="g-color-css3-new">justify-all</span>：效果等同于justify，不同的是最后一行也会两端对齐。（CSS3）

### 说明

**定义元素内容的水平对齐方式**

- 块级元素的文本内容是一些堆叠的线框
- 块内文本内容的最后一行（包括仅有一行文本的情况，这时它既是第一行也是最后一行），其两端对齐需使用 [text-align-last](#tal)（当浏览器不支持`text-align`的 `justify-all` 值时）
- IE浏览器下，如果 [text-align-last](#tal) 要生效，必须先定义 `text-align`为 `justify`

**依据上述的一些描述，我们可以来实现一个两端对齐的示例**

- 首先，所有主流浏览器都支持 `text-align` 的 `justify` 属性值
- 其次，在这个例子中每个 p 都只有一行（所以既是第一行也是最后一行），所以无法通过定义 `text-align: justify` 来实现两端对齐，因为`text-align: justify` 不会处理块级内容文本的最后一行。
- 再次，好在有一个专门用来处理最后一行对齐的属性 `text-align-last`，可以通过定义 `text-align-last: justify` 来实现单行文本两端对齐。遗憾的是，不少浏览器尚不支持该属性。
- 综上所述，我们无法简单的通过使用 `text-align` 或者 `text-align-last` 来实现单行文本两端对齐。那么可以换个思路，想办法让它们变成多行文本，使用伪元素派生一行新的占位内容是个不错的选择，此时再实现两端对齐，只需要 `text-align` 就行了。但是 IE7 及以下浏览器不支持伪元素，如果要支持的话，可以直接使用`text-align-last`。实现及效果如下：

<!-- tabs:start -->

#### **例子**

**html**

```html
<div class="demo">
	<p>我是谁</p>
	<p>你又是谁</p>
	<p>世界末日2012</p>
</div>
```

**css**

```css
.demo p {
	text-align: justify;
	text-align-last: justify;
}
.demo p::after {
  display: inline-block;
  width: 100%;
  height: 0;
  content: "\0020";
  overflow: hidden;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/63.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/57.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="left">
		<strong>left</strong>
		<p>我是左对齐内容</p>
	</li>
	<li class="center">
		<strong>center</strong>
		<p>我是居中对齐内容</p>
	</li>
	<li class="right">
		<strong>right</strong>
		<p>我是右对齐内容</p>
	</li>
	<li class="justify">
		<strong>justify</strong>
		<p>我 是一段可以两端对齐的文字， 你 仔细看看， 我 的对齐方式都贴着 容器左右的边缘。</p>
	</li>
	<li class="start">
		<strong>start</strong>
		<p>start效果</p>
	</li>
	<li class="end">
		<strong>end</strong>
		<p>end效果</p>
	</li>
</ul>
```

**css**

```css
.test p {
  border: 1px solid #000;
}
.left p {
  text-align: left;
}
.center p {
  text-align: center;
}
.right p {
  text-align: right;
}
.justify p {
  width:200px;
  text-align: justify;
}
.start p {
  text-align: start;
}
.end p {
  text-align: end;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/64.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-align-last :id=tal

### 语法

**text-align-last**：`auto` | `start` | `end` | `left` | `right` | `center` | `justify`

**默认值**：auto

**适用于**：块容器

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**auto**：无特殊对齐方式

**left**：内容左对齐

**center**：内容居中对齐

**right**：内容右对齐

**justify**：内容两端对齐

**start**：内容对齐开始边界

**end**：内容对齐结束边界

### 说明

**定义块内文本内容的最后一行（包括块内仅有一行文本的情况，这时既是第一行也是最后一行）或者被强制打断的行的对齐方式**

- 对于`text-align-last`来讲，一个块内文本内容可能会存在多个最后一行，如下例：

<!-- tabs:start -->

#### **例子**

**html**

```html
<div class="demo">
  一个块内文本内容可能会存在多个所谓的最后一行<br />
  这些最后一行都是 text-align-last 的服务范围
</div>
```

**css**

```css
.demo {
	width: 200px;
	background: #eee;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/65.html"
>
  浏览器不支持iframe
</iframe>

如上，我们将一段文本置入宽度为 200px 的 .demo 元素中，这段文本被 br 元素强制打断了，所有我们能看到这段文本最终显示为了 4 行，此时对于 text-align-last 来讲，将有 2 个最后一行：

- 最后一行（即例子中的第4行，真实的最后一行）
- 第二行（因为第二行是被 br 强制打断的，所以该行也将被当成最后一行）

这意味着第2行与第4行都无法通过 text-align: justify 来实现两端对齐，而需要使用 text-align-last

```css
.demo {
  width: 200px;
	background: #eee;
	text-align: justify; /* 作用于1，3两行 */
	text-align-last: justify; /* 作用于2，4两行 */
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/66.html"
>
  浏览器不支持iframe
</iframe>

- 作为IE的私有属性之一，IE5.5率先实现了 `text-align-last`，后期被w3c采纳成标准属性
- IE7及以下浏览器只实现了块内最后一行的对齐方式，没有处理被强制打断的行的对齐方式，从IE8开始，这两种形式的行对齐都被支持
- IE浏览器下，如果 `text-align-last` 要生效，必须先定义 [text-align](#ta) 为 `justify`
- 对应的脚本特性为：`textAlignLast`

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/58.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
  我是第一行，后面紧接着强制换行<br />
  一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容我后面紧跟着强制换行<br />
  一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容一些随意的文字内容我是最后一行
</div>
```

**css**

```css
div {
  width: 300px;
  margin-top: 10px;
  background: #aaa;
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/67.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-justify :id=tj

### 语法

**text-justify**：`auto` | `none` | `inter-word` | `inter-ideograph` | `inter-cluster` | `distribute` | `kashida`

**默认值**：auto

**适用于**：块容器及某些内联元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**auto**：允许浏览器用户代理确定使用的两端对齐法则

**none**：禁止两端对齐

**inter-word**：通过增加字之间的空格对齐文本。该行为是对齐所有文本行最快的方法，它的两端对齐行为对段落的最后一行无效

**inter-ideograph**：为表意字文本提供完全两端对齐，增加或减少表意字和词间的空格

**inter-cluster**：调整文本无词间空格的行。这种模式的调整是用于优化亚洲语言文档的

**distribute**：通过增加或减少字或字母之间的空格对齐文本，适用于东亚文档，尤其是泰国

**kashida**：通过拉长选定点的字符调整文本。这种调整模式是特别为阿拉伯脚本语言提供的。需要IE5.5+支持

### 说明

**定义使用什么方式实现文本内容两端对齐**

- 因为这个属性影响文本布局，所以 `text-align` 属性必须被设置为 `justify`
- 对应的脚本特性为：`textJustify`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/59.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
  我是第一行，后面紧接着强 制换行一些随意的文字 内容一些随意的文字内容一些随意的文字内容一些随意的文 字内容一些随意的文字内容一些随意的文字内容我后 面紧跟着强制换行 一些随意的文字内容一些随意 的文字内容一些随意的文字内容一些随意的文字内容一些 随意的文字内容我是最后一行
</div>
```

**css**

```css
div {
  width: 300px;
  margin-top: 10px;
  background: #aaa;
  text-align: justify;
  text-justify: inter-word;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/68.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## word-spacing :id=wsp

### 语法

**word-spacing**：`normal` | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：非normal值时

**计算值**：指定值

**相关属性**：[letter-spacing](#ls)

**媒　体**：视觉

### 取值

`normal`：默认间隔。计算值为0

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定单词间隔。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定单词间隔。可以为负值。（CSS3）

### 说明

**指定单词之间的额外间隙**

- 该属性可以将指定的额外间隙添加到每个单词之后，最后一个单词不添加，这意外着可以通过该属性控制单词间的间隙大小
- 判断是否为单词的依据是单词间是否有单词分割符，比如：空格
- 对应的脚本特性为：`wordSpacing`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/60.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>默认间隔</strong>
		<p>how are you!</p>
	</li>
	<li class="length">
		<strong>自定义的间隔大小</strong>
		<p>how are you!</p>
	</li>
</ul>
```

**css**

```css
.test p {
  border:1px solid #000;
}
.normal p {
  word-spacing:normal;
}
.length p {
  word-spacing:20px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/69.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## letter-spacing :id=ls

### 语法

**letter-spacing**：`normal` | [\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：非normal值时

**计算值**：指定值

**相关属性**：[word-spacing](#wsp)

**媒　体**：视觉

### 取值

**normal**：默认间隔。计算值为0

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定字符间隔。可以为负值

### 说明

**指定字符之间的额外间隙**

- 该属性可以将指定的额外间隙添加到每个字符之后，最后一个单词也会被添加
- 对应的脚本特性为：`letterSpacing`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/61.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>默认间隔</strong>
		<p>默认情况下的文字间间隔</p>
	</li>
	<li class="length">
		<strong>自定义的间隔大小</strong>
		<p>自定义的文字间隔大小Hello world</p>
	</li>
</ul>
```

**css**

```css
.test p {
  border: 1px solid #000;
}
.normal p {
  letter-spacing: normal;
}
.length p {
  letter-spacing: 10px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/70.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-indent :id=ti

### 语法

**text-indent**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ] && <span class="g-color-css3-new">hanging</span>? && <span class="g-color-css3-new">each-line</span>?

**默认值**：0

**适用于**：块容器

**继承性**：有

**动画性**：当使用值为非关键字时

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定文本的缩进。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定文本的缩进。可以为负值

<span class="g-color-css3-new">each-line</span>：定义缩进作用在块容器的第一行或者内部的每个强制换行的首行，软换行不受影响。（CSS3）

<span class="g-color-css3-new">hanging</span>：反向所有被缩进作用的行。（CSS3）

### 说明

**定义块内文本内容的缩进**

- 行内元素要使用该属性必须先定义该元素为块级或行内块级
- `hanging` 和 `each-line` 关键字紧随在缩进数值之后
- 对应的脚本特性为：`textIndent`

```css
div { text-indent: 2em each-line; }
```

!> 以上代码将使得 div 内部的每个块级文本内容的第一行及每个强制换行的首行都拥有 2em 的缩进

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/62.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="inline">
		<strong>内联元素span</strong>
		<p><span>看看我的左边有没有30px的缩进</span></p>
	</li>
	<li class="inline-block">
		<strong>被设置为内联块级元素的span</strong>
		<p><span>看看我的左边有没有30px的缩进</span></p>
	</li>
	<li class="block">
		<strong>被设置为块级元素的span</strong>
		<p><span>看看我的左边有没有30px的缩进</span></p>
	</li>
	<li class="other">
		<strong>包含有内联块的块级元素</strong>
		<p><span>看看我的左边有没有30px的缩进</span><ins>我是一个被插入的内联块元素</ins></p>
	</li>
</ul>
```

**css**

```css
.test p {
  border: 1px solid #000;
}
.test span,
.test ins {
  text-indent: 30px;
}
.inline-block span {
  display: inline-block;
}
.block span {
  display: block;
}
.other ins {
  display: inline-block;
  background: #eee;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/71.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## vertical-align :id=va

### 语法

**vertical-align**：`baseline` | `sub` | `super` | `top` | `text-top` | `middle` | `bottom` | `text-bottom` | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：baseline

**适用于**：内联级与 table-cell 元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) 时

**计算值**：指定值

**媒　体**：视觉

### 取值

**baseline**：把当前盒的基线与父级盒的基线对齐。如果该盒没有基线，就将底部外边距的边界和父级的基线对齐

**sub**：把当前盒的基线降低到合适的位置作为父级盒的下标（该值不影响该元素文本的字体大小）

**super**：把当前盒的基线提升到合适的位置作为父级盒的上标（该值不影响该元素文本的字体大小）

**text-top**：把当前盒的top和父级的内容区的top对齐

**text-bottom**：把当前盒的bottom和父级的内容区的bottom对齐

**middle**：把当前盒的垂直中心和父级盒的基线加上父级的半x-height对齐

**top**：把当前盒的top与行盒的top对齐

**bottom**：把当前盒的bottom与行盒的bottom对齐

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：把当前盒提升（正值）或者降低（负值）这个距离，百分比相对line-height计算。当值为0%时等同于baseline

[\<length>](/css-handbook/value-and-units/length?id=length)：把当前盒提升（正值）或者降低（负值）这个距离。当值为0时等同于baseline。（CSS2

### 说明

**定义行内元素在行框内的垂直对齐方式**

对应的脚本特性为：`verticalAlign`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/63.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="baseline">
		<strong>与基线对齐</strong>
		<p>参考内容<a href="?">基线对齐</a></p>
	</li>
	<li class="sub">
		<strong>与参考内容的下标对齐</strong>
		<p>参考内容<a href="?">下标对齐</a></p>
	</li>
	<li class="super">
		<strong>与参考内容的上标对齐</strong>
		<p>参考内容<a href="?">上标对齐</a></p>
	</li>
	<li class="top">
		<strong>对象的内容与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="text-top">
		<strong>对象的文本与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="middle">
		<strong>对象的内容与对象中部对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="bottom">
		<strong>对象的内容与对象底端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="text-bottom">
		<strong>对象的文本与对象顶端对齐</strong>
		<p>参考内容<a href="?">要对齐的内容</a></p>
	</li>
	<li class="length">
		<strong>与基线算起的偏移量</strong>
		<p>参考内容<a href="?">偏移量对齐</a></p>
	</li>
</ul>
```

**css**

```css
.test p {
  border: 1px solid #000;
  font-size: 16px;
  line-height: 2;
}
.test a {
  margin-left: 5px;
  font-size: 12px;
}
.baseline a {
  vertical-align: baseline;
}
.sub a {
  vertical-align: sub;
}
.super a {
  vertical-align: super;
}
.top a {
  vertical-align: top;
}
.text-top a {
  vertical-align: text-top;
}
.middle a {
  vertical-align: middle;
}
.bottom a {
  vertical-align: bottom;
}
.text-bottom a {
  vertical-align: text-bottom;
}
.length a {
  vertical-align: 10px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/72.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## line-height :id=lh

### 语法

**line-height**：`normal` | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<number>](/css-handbook/value-and-units/numeric?id=number) 时

**计算值**：指定值

**媒　体**：视觉

### 取值

**normal**：允许内容顶开或溢出指定的容器边界

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定行高。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定行高，其百分比基于文本的 `font-size` 进行换算。不允许负值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用乘积因子指定行高。不允许负值

### 说明

**定义元素中行框的最小高度**

- 在块容器元素内，其内容由行内级元素组成，`line-height` 用来指定块容器内行框的最小高度。行框的最小高度由基线上升部的最小高度加下伸部的最小深度组成，这就像把每个行框想象成是以一个带有元素字体和行高属性的零宽内联盒开始是完全一致的。我们把这个想象盒称之为strut（支柱）
- 对应的脚本特性为：`lineHeight`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/64.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="fixed">
		<strong>固定数值方式：</strong> - {line-height:20px;}
		<div><p>使用固定数值的方式定义line-height，如设置行高为18px类似这样的固定数值，可能会引发文字重叠的现象。</p></div>
	</li>
	<li class="percentage">
		<strong>百分比方式：</strong> - {line-height:130%;}
		<div>
			如果是这种情况
			<p>使用百分比的方式定义line-height，与使用固定数值方式一样，也可能会引发文字重叠的现象。</p>
		</div>
	</li>
	<li class="gene">
		<strong>因子方式：</strong> - {line-height:1.5;}
		<div>
			如果是这种情况
			<p>使用因子方式定义line-height是非常安全的方式，将可以避免文字重叠的现象。</p>
		</div>
	</li>
</ul>
```

**css**

```css
.test div {
  width: 300px;
  margin: 15px 0;
  border: 1px solid #000;
}
.test p {
  margin:0;
  font-size: 30px;
}
.fixed div {
  line-height: 20px;
}
.percentage div {
  line-height: 130%;
}
.gene div {
  line-height: 1.5;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/1.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-size-adjust :id=tsa

### 语法

**text-size-adjust**：`auto` | `none` | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：所有元素

**继承性**：有

**动画性**：当取值为 [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定值

**媒　体**：视觉

### 取值

**auto**：文本大小根据设备尺寸进行调整

**none**：文本大小不会根据设备尺寸进行调整

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来指定文本大小在设备尺寸不同的情况下如何调整

### 说明

**定义移动端页面中元素文本的大小如何调整**

- 该属性只在移动设备上生效
- 如果你的页面没有定义 `meta` `viewport`，此属性定义将无效
- 如果不希望页面的文本大小随手持设备尺寸变化（比如横竖屏旋转）而发生变化（这可能会导致页面布局错乱），可以定义值为 `none` 或者 `100%`（早期版本的 Safari 会忽略 none 取值）
- 对应的脚本特性为：`textSizeAdjust`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/65.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo1">
  <p>请在移动设备上查看本例，设备尺寸的变化将会使得文本大小变化</p>
</div>
```

**css**

```css
.demo1 {
	-webkit-text-size-adjust: auto;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/74.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
