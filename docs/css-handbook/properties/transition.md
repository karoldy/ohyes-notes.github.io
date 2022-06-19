[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [过渡](/css-handbook/properties/transition)

# 过渡

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">transition</span>](#transition)|CSS3|无|复合属性。检索或设置对象变换时的过渡效果|
|[<span class="g-color-css3-new">transition-property</span>](#tp)|CSS3|无|检索或设置对象中的参与过渡的属性|
|[<span class="g-color-css3-new">transition-duration</span>](#td)|CSS3|无|检索或设置对象过渡的持续时间|
|[<span class="g-color-css3-new">transition-timing-function</span>](#ttf)|CSS3|无	检索或设置对象中过渡的类型|
|[<span class="g-color-css3-new">transition-delay</span>](#tde)|CSS3|无|检索或设置对象延迟过渡的时间|

## transition :id=transition

### 语法

**transition**：\<single-transition>[, \<single-transition> ]*

\<single-transition> = [ `none` | [transition-property](#tp) ] || [\<time>](/css-handbook/value-and-units/time?id=time) || [transition-timing-function](#ttf) || [\<time>](/css-handbook/value-and-units/time?id=time)

**默认值**：看每个独立属性

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

**媒体**：交互

### 取值

[transition-property](#tp)：检索或设置对象中的参与过渡的属性

[transition-duration](#td)：检索或设置对象过渡的持续时间

[transition-timing-function](#ttf)：检索或设置对象中过渡的动画类型

[transition-delay](#td)：检索或设置对象延迟过渡的时间

### 说明

**复合属性。检索或设置对象变换时的过渡**

- 注意：如果只提供一个[\<time>](/css-handbook/value-and-units/time?id=time)参数，则为 [transition-duration](#td) 的值定义；如果提供二个[\<time>](/css-handbook/value-and-units/time?id=time)参数，则第一个为 [transition-duration](#td) 的值定义，第二个为 [transition-delay](#tde) 的值定义
- 对应的脚本特性为 `transition`

**可以为同一元素的多个属性定义过渡效果**

缩写方式

```css
.demo {
  transition: border-color .5s ease-in .1s,
		background-color .5s ease-in .1s,
		color .5s ease-in .1s;
}
```

拆分方式

```css
.demo {
  transition-property: border-color, background-color, color;
  transition-duration: .5s, .5s, .5s;
  transition-timing-function: ease-in, ease-in, ease-in;
  transition-delay: .1s, .1s, .1s;
}
```

如果定义了多个过渡的属性，而其他属性只有一个参数值，则表明所有需要过渡的属性都应用同一个参数值。据此可以对上面的例子进行缩写

```css
.demo {
  transition-property: border-color, background-color, color;
  transition-duration: .5s;
  transition-timing-function: ease-in;
  transition-delay: .1s;
}
```

如果需要定义多个过渡属性且不想指定具体是哪些属性过渡，同时其他属性只有一个参数值，据此可以对上面的例子进行缩写

缩写方式

```css
.demo {
  transition: all .5s ease-in .1s;
}
```

拆分方式

```css
.demo {
  transition-property:all;
  transition-duration: .5s;
  transition-timing-function: ease-in;
  transition-delay: .1s;
}
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
</ul>
```

**css**

```css
h1 {
	font-size:16px;
}
.test {
	overflow:hidden;
	width:100%;
	margin:0;
	padding:0;
	list-style:none;
}
.test li {
	float:left;
	width:100px;
	height:100px;
	margin:0 5px;
	border:1px solid #ddd;
	background-color:#eee;
	text-align:center;
	-webkit-transition:background-color .5s ease-in;
	-moz-transition:background-color .5s ease-in;
	transition:background-color .5s ease-in;
}
.test li:nth-child(1):hover {
	background-color:#bbb;
}
.test li:nth-child(2):hover {
	background-color:#999;
}
.test li:nth-child(3):hover {
	background-color:#630;
}
.test li:nth-child(4):hover {
	background-color:#090;
}
.test li:nth-child(5):hover {
	background-color:#f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/146.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transition-property :id=tp

### 语法

**transition-property**：`none` | \<single-transition-property>[ , \<single-transition-property> ]*

\<single-transition-property> = `all` | `<IDENT>(有过渡效果的属性)`

**默认值**：all

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**none**：不指定过渡的css属性

**all**：所有可以进行过渡的css属性

\<IDENT>：指定要进行过渡的css属性

### 说明

**检索或设置对象中的参与过渡的属性**

- 默认值为：all。默认为所有可以进行过渡的css属性
- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `transitionProperty`

### 有过渡效果的属性

|属性名称|类型|
|:---|:---|
|transform|all|
|background-color|color|
|background-image|only gradients|
|background-position|percentage, length|
|border-bottom-color|color|
|border-bottom-width|length|
|border-color|color|
|border-left-color|color|
|border-left-width|length|
|border-right-color|color|
|border-right-width|length|
|border-spacing|length|
|border-top-color|color|
|border-top-width|length|
|border-width|length|
|bottom|length, percentage|
|color|color|
|crop|rectangle|
|font-size|length, percentage|
|font-weight|number|
|grid-*|various|
|height|length, percentage|
|left|length, percentage|
|letter-spacing|length|
|line-height|number, length, percentage|
|margin-bottom|length|
|margin-left|length|
|margin-right|length|
|margin-top|length|
|max-height|length, percentage|
|max-width|length, percentage|
|min-height|length, percentage|
|min-width|length, percentage|
|opacity|number|
|outline-color|color|
|outline-offset|integer|
|outline-width|length|
|padding-bottom|length|
|padding-left|length|
|padding-right|length|
|padding-top|length|
|right|length, percentage|
|text-indent|length, percentage|
|text-shadow|shadow|
|top|length, percentage|
|vertical-align|keywords, length, percentage|
|visibility|visibility|
|width|length, percentage|
|word-spacing|length, percentage|
|z-index|integer|
|zoom|number|

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>本次设置过渡的属性： border-color, background-color, color</li>
</ul>
```

**css**

```css
.test {
	overflow:hidden;
	width:100%;
	margin:0;
	padding:0;
	list-style:none;
}
.test li {
	float:left;
	width:170px;
	height:100px;
	margin:0 5px;
	padding:10px;
	border:1px solid #ddd;
	background-color:#eee;
	color:#000;
	-moz-transition-property:border-color,background-color,color;
	-moz-transition-duration:.5s;
	-moz-transition-timing-function:ease-in;
	-webkit-transition-property:border-color,background-color,color;
	-webkit-transition-duration:.5s;
	-webkit-transition-timing-function:ease-in;
	transition-property:border-color,background-color,color;
	transition-duration:.5s;
	transition-timing-function:ease-in;
}
.test li:hover {
	border-color:#999;
	background-color:#bbb;
	color:#999;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/147.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transition-duration :id=td

### 语法

**transition-duration**：[\<time>](/css-handbook/value-and-units/time?id=time)[ ,[\<time>](/css-handbook/value-and-units/time?id=time) ]*

**默认值**：0

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：交互

### 取值

[\<time>](/css-handbook/value-and-units/time?id=time)：指定对象过渡的持续时间

### 说明

**检索或设置对象过渡的持续时间**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `transitionDuration`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>请将鼠标移动到下面的矩形上：</h1>
<div class="test">矩形在0.5s内慢慢向右移动<br />transition-duration:.5s;</div>
```

**css**

```css
h1 {
	font-size:16px;
}
.test {
	position:absolute;
	left:8px;
	width:200px;
	height:100px;
	margin:0 5px;
	padding:10px;
	border:1px solid #ddd;
	background-color:#eee;
	color:#000;
	-webkit-transition-timing-function:ease-in;
	-moz-transition-timing-function:ease-in;
	transition-timing-function:ease-in;
	-webkit-transition-property:left;
	-moz-transition-property:left;
	transition-property:left;
	-webkit-transition-duration:.5s;
	-moz-transition-duration:.5s;
	transition-duration:.5s;
}
.test:hover {
	left:100px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/148.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transition-timing-function :id=ttf

### 语法

**transition-timing-function**：\<single-transition-timing-function>[,\<single-transition-timing-function>]*
\<single-transition-timing-function> = `ease` | `linear` | `ease-in` | `ease-out` | `ease-in-out` | `step-start` | `step-end` | `steps`([\<integer>](/css-handbook/value-and-units/length?id=length)[, [ `start` | `end` ] ]?) | `cubic-bezier`([\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number))

**默认值**：ease

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：交互

### 取值

**linear**：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)

**ease**：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)

**ease-in**：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)

**ease-out**：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)

**ease-in-out**：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)

**step-start**：等同于 steps(1, start)

**step-end**：等同于 steps(1, end)

**steps**([\<integer>](/css-handbook/value-and-units/length?id=length)[, [ start | end ] ]?)：接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end

**cubic-bezier**([\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number))：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内

### 说明

**检索或设置对象中过渡的动画类型**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `transitionTimingFunction`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>linear: 线性过渡</li>
	<li>ease: 平滑过渡</li>
	<li>ease-in: 由慢到快</li>
	<li>ease-out: 由快到慢</li>
	<li>ease-in-out: 由慢到快再到慢</li>
</ul>
```

**css**

```css
h1 {
	font-size:16px;
}
.test {
	overflow:hidden;
	width:100%;
	margin:0;
	padding:0;
	list-style:none;
}
.test li {
	position:relative;
	left:8px;
	width:220px;
	height:100px;
	margin:1px 5px;
	padding:10px;
	border:1px solid #ddd;
	background-color:#eee;
	color:#000;
	-webkit-transition-duration:.5s;
	-moz-transition-duration:.5s;
	transition-duration:.5s;
	-webkit-transition-property:left;
	-moz-transition-property:left;
	transition-property:left;
}
.test li:nth-child(1) {
	-webkit-transition-timing-function:linear;
	-moz-transition-timing-function:linear;
	transition-timing-function:linear;
}
.test li:nth-child(2) {
	-webkit-transition-timing-function:ease;
	-moz-transition-timing-function:ease;
	transition-timing-function:ease;
}
.test li:nth-child(3) {
	-webkit-transition-timing-function:ease-in;
	-moz-transition-timing-function:ease-in;
	transition-timing-function:ease-in;
}
.test li:nth-child(4) {
	-webkit-transition-timing-function:ease-out;
	-moz-transition-timing-function:ease-out;
	transition-timing-function:ease-out;
}
.test li:nth-child(5) {
	-webkit-transition-timing-function:ease-in-out;
	-moz-transition-timing-function:ease-in-out;
	transition-timing-function:ease-in-out;
}
.test li:hover {
	left:100px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/149.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transition-delay :id=tde

### 语法

**transition-delay**：[\<time>](/css-handbook/value-and-units/time?id=time)[ ,[\<time>](/css-handbook/value-and-units/time?id=time) ]*

**默认值**：0

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：交互

### 取值

[\<time>](/css-handbook/value-and-units/time?id=time)：指定对象过渡的延迟时间

### 说明

**检索或设置对象延迟过渡的时间**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `transitionDelay`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>延迟0.1s后开始过渡</li>
	<li>延迟0.3s后开始过渡</li>
	<li>延迟0.5s后开始过渡</li>
	<li>延迟0.7s后开始过渡</li>
	<li>延迟0.9s后开始过渡</li>
</ul>
```

**css**

```css
h1 {
	font-size:16px;
}
.test {
	overflow:hidden;
	width:100%;
	margin:0;
	padding:0;
	list-style:none;
}
.test li {
	width:220px;
	height:100px;
	margin:1px 5px;
	padding:10px;
	border:1px solid #ddd;
	background-color:#eee;
	color:#000;
	-moz-transition-property:all;
	-moz-transition-duration:.5s;
	-moz-transition-timing-function:ease;
	-webkit-transition-property:all;
	-webkit-transition-duration:.5s;
	-webkit-transition-timing-function:ease;
	transition-property:all;
	transition-duration:.5s;
	transition-timing-function:ease;
}
.test li:nth-child(1) {
	-moz-transition-delay:.1s;
	-webkit-transition-delay:.1s;
	transition-delay:.1s;
}
.test li:nth-child(2) {
	-moz-transition-delay:.3s;
	-webkit-transition-delay:.3s;
	transition-delay:.3s;
}
.test li:nth-child(3) {
	-moz-transition-delay:.5s;
	-webkit-transition-delay:.5s;
	transition-delay:.5s;
}
.test li:nth-child(4) {
	-moz-transition-delay:.7s;
	-webkit-transition-delay:.7s;
	transition-delay:.7s;
}
.test li:nth-child(5) {
	-moz-transition-delay:.9s;
	-webkit-transition-delay:.9s;
	transition-delay:.9s;
}
.test li:hover {
	border-color:#999;
	background-color:#bbb;
	color:#999;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/150.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
