[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [文本](/css-handbook/properties/td)

# 文本装饰

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-change">text-decoration</span>](#td)|CSS1/3|无|简写属性。定义元素文本装饰|
|[<span class="g-color-css3-new">text-decoration-line</span>](#tdl)|CSS3|无|定义元素文本装饰线条位于文本的哪个位置|
|[<span class="g-color-css3-new">text-decoration-color</span>](#tdc)|CSS3|无|指定元素文本装饰线条的颜色|
|[<span class="g-color-css3-new">text-decoration-style</span>](#tds)|CSS3|无|定义元素文本装饰线条的形状|
|[<span class="g-color-css3-new">text-decoration-skip</span>](#tdsk)|CSS3|有|定义元素文本装饰线条必须跳过内容中的哪些部分|
|[<span class="g-color-css3-new">text-underline-position</span>](#tup)|CSS3|有|定义元素装饰线的位置|
|[<span class="g-color-css3-new">text-shadow</span>](#ts)|CSS3|有|定义文字是否有阴影及模糊效果|

## text-decoration :id=td

### 语法

**text-decoration**：[text-decoration-line](#tdl) || [text-decoration-style](#tds) || [text-decoration-color](#tdc)

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

**相关属性**：[text-decoration-skip](#tdsk) || [text-underline-position](#tup)

### 取值

[text-decoration-line](#tdl)：指定文本装饰的种类。<span class="g-color-css3-new">相当于CSS2.1的text-decoration属性，可取值</span>：`none` | `underline` | `overline` | `line-through` | `blin`

[text-decoration-style](#tds)：指定文本装饰的样式

[text-decoration-color](#tdc)：指定文本装饰的颜色

### 说明

**简写属性。定义元素文本装饰**

- 所有浏览器均支持 CSS2.1 中的 `text-decoration` 属性，在CSS3中，该属性定义被移植到其新的分解属性 [text-decoration-line](#tdl) 上；
- 对应的脚本特性为：`textDecoration`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/66.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="none">无装饰文字</li>
	<li class="underline">带下划线文字</li>
	<li class="overline">带上划线文字</li>
	<li class="line-through">带贯穿线文字</li>
	<li class="blink">带闪烁文字</li>
	<li class="text-decoration-css3">如果你的浏览器支持text-decoration在CSS3下的改变，将会看到本行文字有一条红色的下划实线</li>
</ul>
```

**css**

```css
.test li {
  margin-top: 10px;
}
.test .none {
  text-decoration: none;
}
.test .underline {
  text-decoration: underline;
}
.test .overline {
  text-decoration: overline;
}
.test .line-through {
  text-decoration: line-through;
}
.test .blink {
  text-decoration: blink;
}
.test .text-decoration-css3 {
	-webkit-text-decoration: #f00 wavy underline;
	-moz-text-decoration: #f00 solid underline;
	text-decoration: #f00 solid underline;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/75.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-decoration-line :id=tdl

### 语法

**text-decoration-line**：`none` | [ `underline` || `overline` || `line-through` || `blink` ]

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定的值

**媒　体**：视觉

### 取值

**none**：指定文字无装饰

**underline**：指定文字的装饰是下划线

**overline**：指定文字的装饰是上划线

**line-through**：指定文字的装饰是贯穿线

**blink**：指定文字的装饰是闪烁。

### 说明

**定义元素文本装饰线条位于文本的哪个位置**

- 相当于CSS2.1的 `text-decoration` 属性
- 需要注意的是大部分浏览器都不支持 `blink` 值，因为规范允许用户代理忽略该效果
- 对应的脚本特性为：`textDecorationLine`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/67.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
    <li>没有文本装饰</li>
    <li>文本带有下划线装饰</li>
    <li>文本带有上划线装饰</li>
    <li>文本带有贯穿线装饰</li>
    <li>文本带有闪烁装饰</li>
</ul>
```

**css**

```css
.test li {
  margin-top: 10px;
}
.test li:nth-child(1) {
	-webkit-text-decoration-line: none;
  -moz-text-decoration-line: none;
  text-decoration-line: none;
}
.test li:nth-child(2) {
  -webkit-text-decoration-line: underline;
  -moz-text-decoration-line: underline;
  text-decoration-line: underline;
}
.test li:nth-child(3) {
  -webkit-text-decoration-line: overline;
  -moz-text-decoration-line: overline;
  text-decoration-line: overline;
}
.test li:nth-child(4) {
  -webkit-text-decoration-line: line-through;
  -moz-text-decoration-line: line-through;
  text-decoration-line: line-through;
}
.test li:nth-child(5) {
  -webkit-text-decoration-line: blink;
  -moz-text-decoration-line: blink;
  text-decoration-line: blink;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/76.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-decoration-color :id=tdc

### 语法

**text-decoration-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：currentColor

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：计算后颜色值

**媒　体**：视觉

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**指定元素文本装饰线条的颜色**

对应的脚本特性为：`textDecorationColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/68.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
    <li>红色的文本装饰线</li>
    <li>蓝色的文本装饰线</li>
    <li>黄色的文本装饰线</li>
</ul>
```

**css**

```css
.test li {
  margin-top: 10px;
  -webkit-text-decoration-line: underline;
  -moz-text-decoration-line: underline;
  text-decoration-line: underline;
}
.test li:nth-child(1) {
  -webkit-text-decoration-color: red;
  -moz-text-decoration-color: red;
  text-decoration-color: red;
}
.test li:nth-child(2) {
  -webkit-text-decoration-color: blue;
  -moz-text-decoration-color: blue;
  text-decoration-color: blue;
}
.test li:nth-child(3) {
  -webkit-text-decoration-color: yellow;
  -moz-text-decoration-color: yellow;
  text-decoration-color: yellow;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/77.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-decoration-style :id=tds

### 语法

**text-decoration-style**：`solid` | `double` | `dotted` | `dashed` | `wavy`

**默认值**：`solid`

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定的值

**媒　体**：视觉

### 取值

**solid**：实线

**double**：双线

**dotted**：点状线条

**dashed**：虚线

**wavy**：波浪线

### 说明

**定义元素文本装饰线条的形状**

对应的脚本特性为：`textDecorationStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/69.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li>文本装饰实线</li>
  <li>文本装饰双线</li>
  <li>文本装饰密虚线</li>
  <li>文本装饰疏虚线</li>
  <li>文本装饰波浪线</li>
</ul>
```

**css**

```css
.test li {
  margin-top: 10px;
  -webkit-text-decoration-line: underline;
  -moz-text-decoration-line: underline;
  text-decoration-line: underline;
}
.test li:nth-child(1) {
  -webkit-text-decoration-style: solid;
  -moz-text-decoration-style: solid;
  text-decoration-style: solid;
}
.test li:nth-child(2) {
  -webkit-text-decoration-style: double;
  -moz-text-decoration-style: double;
  text-decoration-style: double;
}
.test li:nth-child(3) {
  -webkit-text-decoration-style: dotted;
  -moz-text-decoration-style: dotted;
  text-decoration-style: dotted;
}
.test li:nth-child(4) {
  -webkit-text-decoration-style: dashed;
  -moz-text-decoration-style: dashed;
  text-decoration-style: dashed;
}
.test li:nth-child(5) {
  -webkit-text-decoration-style: wavy;
  -moz-text-decoration-style: wavy;
  text-decoration-style: wavy;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/78.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-decoration-skip :id=tdsk

### 语法

**text-decoration-skip**：`none` | [ `objects` || `spaces` || `ink` || `edges` || `box-decoration` ]

**默认值**：objects

**适用于**：所有元素

**继承性**：是

**动画性**：否

**计算值**：指定的值

**媒　体**：视觉

### 取值

**none**：不跳过：文本装饰将绘制在所有文本及原子内联级盒上。

**objects**：跳过原子内联级盒（例如图片或内联块）

**spaces**：跳过空白：包括常规空白（U+0020）、制表符（U+0009）以及不间断空格（U+00A0）、表意空格（U+3000）、所有固定宽度空格（U+2000至U+200A、U+202F和U+205F）、以及相邻的字母间隔或单词间隔。

**ink**：跳过字符绘制处：中断装饰线，以显示文本装饰件将穿过该字形的文本。用户代理可能还会在该字形轮廓的两侧额外的跳过一段距离。

**edges**：用户代理应当将装饰线的起始、结束放置在文本内容边缘更靠内的位置，使得诸如两个紧密相邻的元素的下划线不会显示为一条下划线。（这在中文里很重要，对于中文，下划线是一种标点符号。）

**box-decoration**：跳过盒子的 margin, border, padding 区域。需要注意的是，这只针对祖先的装饰效果，装饰盒不会绘制自身的装饰。

### 说明

**定义元素文本装饰线条必须跳过内容中的哪些部分**

对应的脚本特性为：`textDecorationSkip`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/70.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">文本装饰将在<span>每一行</span>都出现</div>
```

**css**

```css
.test {
  width: 120px;
  margin-top: 10px;
  -webkit-text-decoration: underline;
  -moz-text-decoration: underline;
  text-decoration: underline;
  -webkit-text-decoration-skip: objects;
  -moz-text-decoration-skip: objects;
  text-decoration-skip: objects;
  padding: 0 50px;
}
.test span {
  display: inline-block;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/79.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## text-underline-position :id=tup

### 语法

**text-underline-position**：`auto` | [ `under` || [ `left` | `right` ] ]

**默认值**：auto

**适用于**：所有元素

**继承性**：是

**动画性**：否

**计算值**：特定值

**媒　体**：视觉

### 取值

**auto**：用户代理可能会使用任意算法确定下划线的位置

**under**：下划线的定位与元素内容盒子的下边缘相关

**left**：下划线的定位与元素内容盒子的左边缘相关

**right**：下划线的定位与元素内容盒子的右边缘相关

### 说明

**定义元素装饰线的位置**

对应的脚本特性为：`textUnderlinePosition`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/71.png)

---

## text-shadow :id=ts

### 语法

**text-shadow**：`none` | \<shadow> [ , \<shadow> ]*

\<shadow> = [\<length>](/css-handbook/value-and-units/length?id=length){2,3} && [\<color>](/css-handbook/value-and-units/color?id=color)?

**默认值**：none

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：1个颜色加3个绝对长度

**媒　体**：视觉

### 取值

none：无阴影

[\<length>](/css-handbook/value-and-units/length?id=length)①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值

[\<length>](/css-handbook/value-and-units/length?id=length)②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值

[\<length>](/css-handbook/value-and-units/length?id=length)③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值

[\<color>](/css-handbook/value-and-units/color?id=color)：设置对象的阴影的颜色

### 说明

**定义文字是否有阴影及模糊效果。参阅 [box-shadow]() 属性**

- 可以设定多组效果，每组参数值以逗号分隔。多组阴影特殊效果
- 如果定义了多组阴影效果，它们的 `z-ordering` 和多个 `box-shadow` 规则相同，第一个阴影在最上面，以此类推
- 对应的脚本特性为：`textShadow`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/72.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="mormal">
		<strong>普通文字阴影</strong>
		<p>测试普通文字阴影效果</p>
	</li>
	<li class="blur">
		<strong>模糊文字阴影效果</strong>
		<p>测试模糊文字阴影效果</p>
	</li>
	<li class="group">
		<strong>多重模糊文字阴影效果</strong>
		<p>测试多重模糊文字阴影效果</p>
	</li>
</ul>
```

**css**

```css
.test li {
  margin-top: 10px;
}
.test .mormal p {
  text-shadow: 1px 1px rgba(0,0,0,.3);
}
.test .blur p {
  text-shadow: 1px 1px 1px rgba(0,0,0,.3);
}
.test .group p {
  text-shadow: 1px 1px 0 rgba(255,255,255,1),
    1px 1px 2px rgba(0,85,0,.8);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/80.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---