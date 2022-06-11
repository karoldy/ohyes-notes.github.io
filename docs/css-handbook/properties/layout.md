[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [定位](/css-handbook/properties/layout)

# 布局

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-change">display</span>](#display)|CSS2/3|无|定义了元素是否显示，及生成哪种盒用于显示|
|[float](#float)|CSS1|无|定义了元素向左或者向右浮动放置。请参阅[clear](#clear)属性|
|[clear](#clear)|CSS1|无|定义了一个元素是否可以放置在它之前的浮动元素旁边，或者必须向下移动在新行中放置。请参阅[float](#float)属性|
|[visibility](#visibility)|CSS2|有|定义了元素是否可见。与display属性不同，此属性为隐藏的对象保留其占据的物理空间|
|[<span class="g-color-css3-change">overflow</span>](#overflow)|CSS2/3|无|简写属性。定义了元素处理溢出内容的方式|

## display :id=display

### 语法

**display**：none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column |table-column-group | table-footer-group | table-header-group | <span class="g-color-css3-new">run-in</span> | <span class="g-color-css3-new">box</span> | <span class="g-color-css3-new">inline-box</span> | <span class="g-color-css3-new">flexbox</span> | <span class="g-color-css3-new">inline-flexbox</span> | <span class="g-color-css3-new">flex</span> | <span class="g-color-css3-new">inline-flex</span>

**默认值**：inline

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值，除浮动，绝对定位和根元素外

**媒体**：视觉

### 取值

**none**：隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间

**inline**：指定对象为内联元素。

**block**：指定对象为块元素。

**list-item**：指定对象为列表项目。

**inline-block**：指定对象为内联块元素。(CSS2)

**table**：指定对象作为块元素级的表格。类同于html标签\<table> (CSS2)

**inline-table**：指定对象作为内联元素级的表格。类同于html标签\<table> (CSS2)

**table-caption**：指定对象作为表格标题。类同于html标签\<caption> (CSS2)

**table-cell**：指定对象作为表格单元格。类同于html标签\<td> (CSS2)

**table-row**：指定对象作为表格行。类同于html标签\<tr> (CSS2)

**table-row-group**：指定对象作为表格行组。类同于html标签\<tbody> (CSS2)

**table-column**：指定对象作为表格列。类同于html标签\<col> (CSS2)

**table-column-group**：指定对象作为表格列组显示。类同于html标签\<colgroup> (CSS2)

**table-header-group**：指定对象作为表格标题组。类同于html标签\<thead> (CSS2)

**table-footer-group**：指定对象作为表格脚注组。类同于html标签\<tfoot> (CSS2)

<strong><span class="g-color-css3-new">run-in</span></strong>：根据上下文决定对象是内联对象还是块级对象。(CSS3)

<strong><span class="g-color-css3-new">box</span></strong>：将对象作为弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒最老版本)</span> (CSS3)

<strong><span class="g-color-css3-new">inline-box</span></strong>：将对象作为内联块级弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒最老版本)</span> (CSS3)

<strong><span class="g-color-css3-new">flexbox</span></strong>：将对象作为弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒过渡版本)</span> (CSS3)

<strong><span class="g-color-css3-new">inline-flexbox</span></strong>：将对象作为内联块级弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒过渡版本)</span> (CSS3)

<strong><span class="g-color-css3-new">flex</span></strong>：将对象作为弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒最新版本)</span> (CSS3)

<strong><span class="g-color-css3-new">inline-flex</span></strong>：将对象作为内联块级弹性伸缩盒显示。<span style="color: #C30;">(伸缩盒最新版本)</span> (CSS3)

!> CSS3新增属性可能存在描述错误及变更，仅供参考，持续更新

### 说明

**设置或检索对象是否及如何显示**

- 如果 `display` 设置为 `none`，`float` 及 `position` 属性定义将不生效；
- 如果 `position` 既不是 `static` 也不是 `relative` 或者 `float` 不是 `none` 或者该元素是根元素，当 `display: inline-table`时，`display` 的计算值为 `table`；当 `display: inline | inline-block | run-in | table-*系列` 时，`display` 的计算值为 `block`，其它情况为指定值；
- 对应的脚本特性为display。

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/layout/display.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<h1>display构造的table小例子，IE7及以下浏览器不支持本示例</h1>
<div class="table">
	<h2 class="table-caption">花名册：</h2>
	<div class="table-column-group">
		<div class="table-column"></div>
		<div class="table-column"></div>
		<div class="table-column"></div>
	</div>
	<div class="table-header-group">
		<ul class="table-row">
			<li class="table-cell">序号</li>
			<li class="table-cell">姓名</li>
			<li class="table-cell">年龄</li>
		</ul>
	</div>
	<div class="table-footer-group">
		<ul class="table-row">
			<li class="table-cell">footer</li>
			<li class="table-cell">footer</li>
			<li class="table-cell">footer</li>
		</ul>
	</div>
	<div class="table-row-group">
		<ul class="table-row">
			<li class="table-cell">1</li>
			<li class="table-cell">John</li>
			<li class="table-cell">19</li>
		</ul>
		<ul class="table-row">
			<li class="table-cell">2</li>
			<li class="table-cell">Mark</li>
			<li class="table-cell">21</li>
		</ul>
		<ul class="table-row">
			<li class="table-cell">3</li>
			<li class="table-cell">Kate</li>
			<li class="table-cell">26</li>
		</ul>
	</div>
</div>
```

#### **css**

```css
body {
  font: 14px/1.5 georgia,simsun,arial;
}

h1 {
  margin: 10px 0;
  font-size: 20px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.table {
  display: table;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.table-caption {
  display: table-caption;
  margin: 0;padding:0;
  font-size: 16px;
}

.table-column-group {
  display: table-column-group;
}

.table-column {
  display: table-column;
  width: 100px;
}

.table-row-group {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.table-row-group .table-row:hover,
.table-footer-group .table-row:hover{
  background: #f6f6f6;
}

.table-cell {
  display: table-cell;
  padding: 0 5px;
  border: 1px solid #ccc;
}

.table-header-group {
  display: table-header-group;
  background: #eee;
  font-weight: bold;
}

.table-footer-group {
  display: table-footer-group;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/layout/01.html"
>
  浏览器不支持iframe
</iframe>

---

## float :id=float

### 语法

**float**：none | left | right

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**none**：设置元素不浮动

**left**：设置元素浮在左边

**right**：设置元素浮在右边

### 说明

**定义了元素向左或者向右浮动放置。请参阅[clear](#clear)属性**

- 如果 `float` 不是 `none`，当 `display: inline-table` 时，`display` 的计算值为 `table`；当 `display: inline | inline-block | run-in | table-*系列` 时，`display` 的计算值为 `block`，其它情况为指定值；
- 当一个元素是绝对定位元素或者定义了 `display` 为 `none` 时，`float` 定义不生效。
- 对应的脚本特性为styleFloat（IE）或cssFloat（非IE）。(注意这里为styleFloat或cssFloat，而不是float)

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/layout/float.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在屏幕右方</div>
```

#### **css**

```css
.test {
	float: right;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/layout/02.html"
>
  浏览器不支持iframe
</iframe>

---

## clear :id=clear

### 语法

**clear**：none | left | right | both

**默认值**：none

**适用于**：块级元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**none**：允许两边都可以有浮动对象

**both**：不允许有浮动对象

**left**：不允许左边有浮动对象

**right**：不允许右边有浮动对象

### 说明

**定义了一个元素是否可以放置在它之前的浮动元素旁边，或者必须向下移动在新行中放置。请参阅[float](#float)属性**

- 当一个元素定义了 `clear` 值不为 `none` 时，可以被用来清除其之前的浮动元素对自身的影响(不同的取值，对应不同方向的浮动)。
- 对应的脚本特性为clear。

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/layout/clear.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在屏幕右方</div>
<div class="test2">注意我出现的位置</div>
```

#### **css**

```css
.test {
	float: right;
	background: #eee;
}

.test2 {
	clear: right;
	background: #ddd;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/layout/03.html"
>
  浏览器不支持iframe
</iframe>

---

## visibility :id=visibility

### 语法

**visibility**：visible | hidden | collapse

**默认值**：visible

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

**媒体**：视觉

### 取值

**visible**：设置对象可视

**hidden**：设置对象隐藏

**collapse**：主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。对于表格外的其他对象，其作用等同于hidden。

### 说明

**定义了元素是否可见**。与 [`display`](#display) 属性不同，`visibility` 会为隐藏的元素保留其占据的物理空间

- 如果希望某个元素为可见，其父元素也必须是可见的。
- 对应的脚本特性为 `visibility`。

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/layout/visibility.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我不会出现在屏幕上</div>
```

#### **css**

```css
.test {
	visibility: hidden;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/layout/04.html"
>
  浏览器不支持iframe
</iframe>

---

## overflow :id=overflow

### 简写属性语法

**overflow**：visible | hidden | scroll | auto | <span class="g-color-css3-new">clip</span>

**默认值**：看每个独立属性

**适用于**：块容器，伸缩盒容器，grid容器

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**overflow-\***：visible | hidden | scroll | auto | <span class="g-color-css3-new">clip</span>

**overflow-\*** = `overflow-x`, `overflow-y`

**默认值**：visible

**适用于**：块容器，伸缩盒容器，grid容器

**继承性**：无

**动画性**：否

**计算值**：指定值，除了当 `overflow-x` , `overflow-y` 之一设置为非 `visible` 时另一个属性会自动将默认值 `visible` 计算为 `auto` 外

**媒　体**：视觉

### 取值

**visible**：对溢出内容不做处理，内容可能会超出容器

**hidden**：隐藏溢出容器的内容且不出现滚动条

**scroll**：隐藏溢出容器的内容，溢出的内容可以通过滚动呈现

**auto**：当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条。textarea元素的 `overflow` 默认值就是 `auto`

<strong><span class="g-color-css3-new">clip</span></strong>：与 `hidden` 一样，`clip` 也被用来隐藏溢出容器的内容且不出现滚动条。不同的地方在于，`clip` 是一个完全禁止滚动的容器，而 `hidden` 仍然可以通过编程机制让内容可以滚动

!> CSS3新增属性可能存在描述错误及变更，仅供参考，持续更新

### 说明

**定义了元素处理溢出内容的方式**

- `overflow` 的效果等同于 `overflow-x` + `overflow-y`
- 当块级元素定义了 `overflow` 属性(包括`overflow-x`与`overflow-y`)值为非 `visibile` 时，将会为它的内容创建一个新的块格式化上下文(BFC)
- 对于\<table>元素来说，假如其 `table-layout` 属性设置为 `fixed`，则 \<td>、\<th>元素支持将 `overflow` 设为 `hidden`、`scroll` 或 `auto`，此时超出单元格尺寸的内容将被剪切。如果设为 `visible`，将导致额外的文本溢出到右边或左边(视`direction`属性设置而定)的单元格
- `overflow-x` 属性用于指定元素水平方向上的内容溢出时的处理方式，`overflow-y` 属性用于指定元素垂直方向上的内容溢出时的处理方式
- 当 `overflow-x` , `overflow-y` 中任意一个属性值的定义为非 `visible` 时，另一个属性会自动将默认值 `visible` 计算为 `auto`
- 对应的脚本特性分别为：overflow, overflowX, overflowY。

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/layout/overflow.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">
	<p>苏打速度</p>
	<p>苏打速度</p>
	<p>苏打速度</p>
	<p>苏打速度</p>
	<p>苏打速度</p>
</div>
```

#### **css**

```css
.test {
	overflow: auto;
	width: 200px;
	height: 100px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/layout/05.html"
>
  浏览器不支持iframe
</iframe>

---

