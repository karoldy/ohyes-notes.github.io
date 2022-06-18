[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [内容](/css-handbook/properties/content)

# 内容

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[content](#content)|CSS2|无|用来和 `:after` 及 `:before` 伪元素一起使用，在对象前或后显示内容|
|[counter-increment](#ci)|CSS2|无|设定当一个selector发生时计数器增加的值|
|[counter-reset](#cr)|CSS2|无|将指定selector的计数器复位|
|[quotes](#quotes)|CSS2|有|设置或检索对象内使用的嵌套标记|

## content :id=content

### 语法

**content**：[ [\<uri> | `icon` ] ',' ]* [ `normal` | `none` | `inhibit` | \<content-list> ]

\<content-list> = [ pending([\<identifier>](/css-handbook/value-and-units/textual?id=identifier)) | [\<string>](/css-handbook/value-and-units/textual?id=string) | `contents` | `footnote` | `endnote` | `section-note` | `list-item` | \<counter> | \<named-string> | `open-quote` | `close-quote` | `no-open-quote` | `no-close-quote` | `icon` | \<glyph> | \<uri> | \<datetime> | document-url | \<target> ]+

\<counter> = `counter(name)` | `counter(name,list-style-type)` | `counters(name,string)` | `counters(name,string,list-style-type)`

**默认值**：normal

**适用于**：所有元素，`::before`, `::after`, `::alternate`, `::marker,` `::line-marker`, `margin areas`, `@footnote areas`

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**normal**：默认值。表现与none值相同

**none**：不生成任何值

\<attr>：插入标签属性值

[\<url>](/css-handbook/value-and-units/textual?id=url)：使用指定的绝对或相对地址插入一个外部资源（图像，声频，视频或浏览器支持的其他任何资源）

[\<string>](/css-handbook/value-and-units/textual?id=string)：插入字符串

**counter**(name)：使用已命名的计数器

**counter**(name,list-style-type)：使用已命名的计数器并遵从指定的 `list-style-type` 属性

**counters**(name,string)：使用所有已命名的计数器

**counters**(name,string,list-style-type)：使用所有已命名的计数器并遵从指定的 `list-style-type` 属性

**no-close-quote**：并不插入 `quotes` 属性的后标记。但增加其嵌套级别

**no-open-quote**：并不插入 `quotes` 属性的前标记。但减少其嵌套级别

**close-quote**：插入 `quotes` 属性的后标记

**open-quote**：插入 `quotes` 属性的前标记

### 说明

**用来和 `:after` 及 `:before` 伪元素一起使用，在对象前或后显示内容**

对应的脚本特性为 `content`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/82.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="string">
		<strong>string：</strong>
		<p>你的浏览器是否支持content属性：否</p>
	</li>
	<li class="attr">
		<strong>attr：</strong>
		<p title="如果你看到我则说明你目前使用的浏览器支持content属性"></p>
	</li>
	<li class="url">
		<strong>url()：</strong>
		<p>如果你看到文字前面的图标则说明你目前使用的浏览器支持content属性</p>
	</li>
	<li class="counter1">
		<strong>counter(name)：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter2">
		<strong>counter(name,list-style-type)：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter3">
		<strong>counter(name)拓展应用：</strong>
		<ol>
			<li>列表项
				<ol>
					<li>列表项
						<ol>
							<li>列表项</li>
							<li>列表项</li>
						</ol>
					</li>
					<li>列表项</li>
				</ol>
			</li>
			<li>列表项
				<ol>
					<li>列表项</li>
					<li>列表项</li>
				</ol>
			</li>
			<li>列表项
				<ol>
					<li>列表项</li>
					<li>列表项</li>
				</ol>
			</li>
		</ol>
	</li>
</ul>
```

**css**

```css
.string p:after {
	margin-left:-16px;
	background:#fff;
	content:"是";
	color:#f00;
}
.attr p:after {
	content:attr(title);
}
.url p:before {
	content:url(../../skin/ico.png);
}
.test ol {
	margin:16px 0;
	padding:0;
	list-style:none;
}
.counter1 li {
	counter-increment:testname;
}
.counter1 li:before {
	content:counter(testname);
	color:#f00;
	font-family:georgia,serif,sans-serif;
}
.counter2 li {
	counter-increment:testname2;
}
.counter2 li:before {
	content:counter(testname2,lower-roman);
	color:#f00;
	font-family:georgia,serif,sans-serif;
}
.counter3 ol ol {
	margin:0 0 0 28px;
}
.counter3 li {
	padding:2px 0;
	counter-increment:testname3;
}
.counter3 li:before {
	content:counter(testname3,decimal)".";
	color:#f00;
	font-family:georgia,serif,sans-serif;
}
.counter3 li li {
	counter-increment:testname4;
}
.counter3 li li:before {
	content:counter(testname3,decimal)"."counter(testname4,decimal)".";
}
.counter3 li li li {
	counter-increment:testname5;
}
.counter3 li li li:before {
	content:counter(testname3,decimal)"."counter(testname4,decimal)"."counter(testname5,decimal)".";
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/93.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## counter-increment :id=ci

### 语法

**counter-increment**：`none` | [ [\<identifier>](/css-handbook/value-and-units/textual?id=identifier) [\<integer>](/css-handbook/value-and-units/length?id=length) ]+

**默认值**：none

**适用于**：所有元素，`::before`, `::after`, `::alternate`, `::marker`, `::line-marker`, `margin areas`, `@footnote areas`, and `@page context`

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

none：阻止计数器增加

[\<identifier>](/css-handbook/value-and-units/textual?id=identifier)：identifier定义一个或多个将被增加的selector，id，或者class

[\<integer>](/css-handbook/value-and-units/length?id=length)：定义计算器每次增加的数值，可以为负值，默认值是1

### 说明

**设定当一个selector发生时计数器增加的值**

对应的脚本特性为 `counterIncrement`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/82.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="counter1">
		<strong>默认时的计数器：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter2">
		<strong>修改计数器每次增加的值为2：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter3">
		<strong>修改计数器每次增加的值为-1：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
</ul>
```

**css**

```css
.test ol {
	margin:16px 0;
	padding:0;
	list-style:none;
}
.test li li:before {
	color:#f00;
	font-family:georgia,serif,sans-serif;
}
.counter1 li {
	counter-increment:testname;
}
.counter1 li:before {
	content:counter(testname)".";
}
.counter2 li {
	counter-increment:testname2 2;
}
.counter2 li:before {
	content:counter(testname2)".";
}
.counter3 li {
	counter-increment:testname3 -1;
}
.counter3 li:before {
	content:counter(testname3)".";
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/94.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## counter-reset :id=cr

### 语法

**counter-reset**：`none` | [ [\<identifier>](/css-handbook/value-and-units/textual?id=identifier) [\<integer>](/css-handbook/value-and-units/length?id=length) ]+

**默认值**：none

**适用于**：所有元素，`::before`, `::after`, `::alternate`, `::marker`, `::line-marker`, `margin areas`, `@footnote areas`, and `@page context`

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

none：阻止计数器复位

[\<identifier>](/css-handbook/value-and-units/textual?id=identifier)：identifier定义一个或多个将被复位的selector，id，或者class

[\<integer>](/css-handbook/value-and-units/length?id=length)：定义被复位的数值，可以为负值，默认值是0

### 说明

**将指定selector的计数器复位**

对应的脚本特性为 `counterReset`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/82.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="counter1">
		<strong>默认时被复位的计数器：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter2">
		<strong>将计算器复位为20：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter3">
		<strong>将计算器复位为-1：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
</ul>
```

**css**

```css
.test ol {
	margin:16px 0;
	padding:0;
	list-style:none;
}
.test li li:before {
	color:#f00;
	font-family:georgia,serif,sans-serif;
}
.counter1 li {
	counter-increment:testname;
}
.counter1 li:before {
	content:counter(testname)".";
	counter-reset:testname;
}
.counter2 li {
	counter-increment:testname2;
}
.counter2 li:before {
	content:counter(testname2)".";
	counter-reset:testname2 20;
}
.counter3 li {
	counter-increment:testname3;
}
.counter3 li:before {
	content:counter(testname3)".";
	counter-reset:testname3 -1;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/95.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## quotes :id=quotes

### 语法

**quotes**：`none` | [ [\<string>](/css-handbook/value-and-units/textual?id=string) [\<string>](/css-handbook/value-and-units/textual?id=string) ]+

**默认值**：none

**适用于**：所有元素，`::before`, `::after`, `::alternate`, `::marker`, `::line-marker`, `margin areas`, `@footnote areas`, and `@page context`

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**none**：content属性的open-quote和close-quote值将不会生成任何标记

[\<string>](/css-handbook/value-and-units/textual?id=string)：定义content属性的open-quote和close-quote值的标记，2个为一组

### 说明

**设置或检索对象内使用的嵌套标记**

对应的脚本特性为quotes

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/82.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<p lang="en"><q>Quote me <q>Quote me</q> Quote me!</q></p>
<p lang="zh-cmn-Hans"><q>Quote me <q>Quote me</q> Quote me!</q></p>
```

**css**

```css
q:lang(en) {
	quotes:'[' ']' "<" ">";
}
q:lang(zh-cmn-Hans) {
	quotes:"«" "»" '"' '"';
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/96.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---
