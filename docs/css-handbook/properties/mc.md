[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [多列](/css-handbook/properties/mc)

# 多列

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">columns</span>](#columns)|CSS3|无|设置或检索对象的列数和每列的宽度。复合属性|
|[<span class="g-color-css3-new">column-width</span>](#cw)|CSS3|无|设置或检索对象每列的宽度|
|[<span class="g-color-css3-new">column-count</span>](#cc)|CSS3|无|设置或检索对象的列数|
|[<span class="g-color-css3-new">column-gap</span>](#cg)|CSS3|无|设置或检索对象的列与列之间的间隙|
|[<span class="g-color-css3-new">column-rule</span>](#cr)|CSS3|无|设置或检索对象的列与列之间的边框。复合属性|
|[<span class="g-color-css3-new">column-rule-width</span>](#crw)|CSS3|无|设置或检索对象的列与列之间的边框厚度|
|[<span class="g-color-css3-new">column-rule-style</span>](#crs)|CSS3|无|设置或检索对象的列与列之间的边框样式|
|[<span class="g-color-css3-new">column-rule-color</span>](#crc)|CSS3|无|设置或检索对象的列与列之间的边框颜色|
|[<span class="g-color-css3-new">column-span</span>](#cs)|CSS3|无|设置或检索对象元素是否横跨所有列|
|[<span class="g-color-css3-new">column-fill</span>](#cf)|CSS3|无|设置或检索对象所有列的高度是否统一|
|[<span class="g-color-css3-new">column-break-before</span>](#cbb)|CSS3|无|设置或检索对象之前是否断行|
|[<span class="g-color-css3-new">column-break-after</span>](#cba)|CSS3|无|设置或检索对象之后是否断行|
|[<span class="g-color-css3-new">column-break-inside</span>](#cbi)|CSS3|无|设置或检索对象内部是否断行|

## columns :id=columns

### 语法

**columns**：[column-width](#cw) || [column-count](#cc)

**默认值**：看每个独立属性

**适用于**：除 table 外的非替换块级元素, `table cells`, `inline-block` 元素

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

### 取值

[column-width](#cw)：设置或检索对象每列的宽度

[column-count](#cc)：设置或检索对象的列数

### 说明

**设置或检索对象的列数和每列的宽度。复合属性**

对应的脚本特性为 `columns`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/96.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>列数及列宽固定:</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列宽固定，根据容器宽度液态分布列数:</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:628px;
	border:10px solid #000;
	-moz-columns:200px 3;
	-webkit-columns:200px 3;
	columns:200px 3;
}
.test2 {
	border:10px solid #000;
	-moz-columns:200px;
	-webkit-columns:200px;
	columns:200px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/111.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-width :id=cw

### 语法

**column-width**：[\<length>](/css-handbook/value-and-units/length?id=length) | auto

**默认值**：auto

**适用于**：除 table 外的非替换块级元素, `table cells`, `inline-block` 元素

**继承性**：无

**动画性**：否

**计算值**：绝对长度值，0或者更大

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义列宽。不允许负值
**auto**：根据 [column-count](#cc) 自定分配宽度

### 说明

**设置或检索对象每列的宽度**

对应的脚本特性为 `columnWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/97.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>列数及列宽固定:</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列宽固定，根据容器宽度液态分布列数:</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列数固定，根据容器宽度液态分布列宽:</h1>
<div class="test3">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:628px;
	border:10px solid #000;
	-moz-column-width:200px;
	-moz-column-count:3;
	-webkit-column-width:200px;
	-webkit-column-count:3;
	column-width:200px;
	column-count:3;
}
.test2 {
	border:10px solid #000;
	-moz-column-width:200px;
	-webkit-column-width:200px;
	column-width:200px;
}
.test3 {
	border:10px solid #000;
	-moz-column-count:5;
	-webkit-column-count:5;
	column-count:5;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/112.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-count :id=cc

### 语法

**column-count**：[\<integer>](/css-handbook/value-and-units/length?id=length) | `auto`

**默认值**：auto

**适用于**：除table外的非替换块级元素, table cells, inline-block元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用整数值来定义列数。不允许负值

**auto**：根据 [column-width](#cw) 自定分配宽度

### 说明

**设置或检索对象的列数**

对应的脚本特性为 `columnCount`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/97.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>列数及列宽固定:</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列宽固定，根据容器宽度液态分布列数:</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>列数固定，根据容器宽度液态分布列宽:</h1>
<div class="test3">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:628px;
	border:10px solid #000;
	-moz-column-width:200px;
	-moz-column-count:3;
	-webkit-column-width:200px;
	-webkit-column-count:3;
	column-width:200px;
	column-count:3;
}
.test2 {
	border:10px solid #000;
	-moz-column-width:200px;
	-webkit-column-width:200px;
	column-width:200px;
}
.test3 {
	border:10px solid #000;
	-moz-column-count:5;
	-webkit-column-count:5;
	column-count:5;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/113.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-gap :id=cg

### 语法

**column-gap**：[\<length>](/css-handbook/value-and-units/length?id=length) | `normal`

**默认值**：normal

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：绝对长度值或者normal

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义列与列之间的间隙。不允许负值

**normal**：与 [font-size]() 大小相同。假设该对象的font-size为16px，则normal值为16px，类推

### 说明

**设置或检索对象的列与列之间的间隙**

对应的脚本特性为 `columnGap`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/97.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>font-size为14px时，列间隙column-gap:normal的计算值也为14px</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>固定列间隙为40px:</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:normal;
	-webkit-column-count:3;
	-webkit-column-gap:normal;
	column-count:3;
	column-gap:normal;
}
.test2 {
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:40px;
	-webkit-column-count:3;
	-webkit-column-gap:40px;
	column-count:3;
	column-gap:40px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/114.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-rule :id=cr

### 语法

**column-rule**：[column-rule-width](#crw) || [column-rule-style](#crs) || [column-rule-color](#crc)

**默认值**：看每个独立属性

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

### 取值

[column-rule-width](#crw)：设置或检索对象的列与列之间的边框厚度

[column-rule-style](#crs)：设置或检索对象的列与列之间的边框样式

[column-rule-color](#crc)：设置或检索对象的列与列之间的边框颜色

### 说明

**设置或检索对象的列与列之间的边框。复合属性**

对应的脚本特性为 `columnRule`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/98.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>绿色边框即是column-rule所定义：</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule:10px solid #090;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule:10px solid #090;
	column-count:3;
	column-gap:20px;
	column-rule:10px solid #090;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/115.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-rule-width :id=crw

### 语法

**column-rule-width**：[\<length>](/css-handbook/value-and-units/length?id=length) | `thin` | `medium` | `thick`

**默认值**：medium

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：绝对长度值或者0（如果 [column-rule-style](#crs) 为 `none` 或者 `hidden`）

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义边框的厚度。不允许负值

**medium**：定义默认厚度的边框

**thin**：定义比默认厚度细的边框

**thick**：定义比默认厚度粗的边框

### 说明

**设置或检索对象的列与列之间的边框厚度**

- 如果 [column-rule-style](#crs) 设置为 `none` 或者 `hidden`，本属性将失去作用
- 对应的脚本特性为 `columnRuleWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/98.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-rule-width:thin</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:medium</h1>
<div class="test2">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:thick</h1>
<div class="test3">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
<h1>column-rule-width:10px</h1>
<div class="test4">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns. </p>
	<p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
div {
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule-style:solid;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-style:solid;
	column-count:3;
	column-gap:20px;
	column-rule-style:solid;
}
.test {
	-moz-column-rule-width:thin;
	-webkit-column-rule-width:thin;
	column-rule-width:thin;
}
.test2 {
	-moz-column-rule-width:medium;
	-webkit-column-rule-width:medium;
	column-rule-width:medium;
}
.test3 {
	-moz-column-rule-width:thick;
	-webkit-column-rule-width:thick;
	column-rule-width:thick;
}
.test4 {
	-moz-column-rule-width:10px;
	-webkit-column-rule-width:10px;
	column-rule-width:10px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/116.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-rule-style :id=crs

### 语法

**column-rule-style**：`none` | `hidden` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset`

**默认值**：none

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：无轮廓。[column-rule-color](#crc) 与 [column-rule-width](#crw) 将被忽略

**hidden**：隐藏边框

**dotted**：点状轮廓

**dashed**：虚线轮廓

**solid**：实线轮廓

**double**：双线轮廓。两条单线与其间隔的和等于指定的 [column-rule-width](#crw) 值

**groove**：3D凹槽轮廓

**ridge**：3D凸槽轮廓

**inset**：3D凹边轮廓

**outset**：3D凸边轮廓

### 说明

**设置或检索对象的列与列之间的边框样式**

- 如果 [column-rule-width](#crw) 等于0，本属性将失去作用
- 对应的脚本特性为 `columnRuleStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/98.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-rule-style:none</h1>
<div class="test">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:hidden</h1>
<div class="test2">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:dotted</h1>
<div class="test3">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:dashed</h1>
<div class="test4">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:solid</h1>
<div class="test5">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:double</h1>
<div class="test6">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:groove</h1>
<div class="test7">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:ridge</h1>
<div class="test8">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:inset</h1>
<div class="test9">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-style:outset</h1>
<div class="test10">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
div {
	width:600px;
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule-width:3px;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-width:3px;
	column-count:3;
	column-gap:20px;
	column-rule-width:3px;
}
.test {
	-moz-column-rule-style:none;
	-webkit-column-rule-style:none;
	column-rule-style:none;
}
.test2 {
	-moz-column-rule-style:hidden;
	-webkit-column-rule-style:hidden;
	column-rule-style:hidden;
}
.test3 {
	-moz-column-rule-style:dotted;
	-webkit-column-rule-style:dotted;
	column-rule-style:dotted;
}
.test4 {
	-moz-column-rule-style:dashed;
	-webkit-column-rule-style:dashed;
	column-rule-style:dashed;
}
.test5 {
	-moz-column-rule-style:solid;
	-webkit-column-rule-style:solid;
	column-rule-style:solid;
}
.test6 {
	-moz-column-rule-style:double;
	-webkit-column-rule-style:double;
	column-rule-style:double;
}
.test7 {
	-moz-column-rule-style:groove;
	-webkit-column-rule-style:groove;
	column-rule-style:groove;
}
.test8 {
	-moz-column-rule-style:ridge;
	-webkit-column-rule-style:ridge;
	column-rule-style:ridge;
}
.test9 {
	-moz-column-rule-style:inset;
	-webkit-column-rule-style:inset;
	column-rule-style:inset;
}
.test10 {
	-moz-column-rule-style:outset;
	-webkit-column-rule-style:outset;
	column-rule-style:outset;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/117.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-rule-color :id=crc

### 语法

**column-rule-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：采用文本颜色

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：与 [\<color>](/css-handbook/value-and-units/color?id=color) 属性一致

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**设置或检索对象的列与列之间的边框颜色**

- 如果 [column-rule-width](#crw) 等于0 或 [column-rule-style](#crs) 设置为 `none` | `hidden`，本属性将被忽略
- 对应的脚本特性为 `columnRuleColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/98.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-rule-color:#f00</h1>
<div class="test">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
<h1>column-rule-color:#090</h1>
<div class="test2">This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
div {
	width:600px;
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule-width:3px;
	-moz-column-rule-style:solid;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule-width:3px;
	-webkit-column-rule-style:solid;
	column-count:3;
	column-gap:20px;
	column-rule-width:3px;
	column-rule-style:solid;
}
.test {
	-moz-column-rule-color:#f00;
	-webkit-column-rule-color:#f00;
	column-rule-color:#f00;
}
.test2 {
	-moz-column-rule-color:#090;
	-webkit-column-rule-color:#090;
	column-rule-color:#090;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/118.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-span :id=cs

### 语法

**column-span**：`none` | `all`

**默认值**：none

**适用于**：除浮动和绝对定位之外的块级元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：不跨列

**all**：横跨所有列

### 说明

**设置或检索对象元素是否横跨所有列**

对应的脚本特性为 `columnSpan`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/99.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-span:all</h1>
<div class="test">
	This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.
	<p>spanning element</p>
	This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:600px;
	border:10px solid #000;
	-moz-column-count:3;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-webkit-column-count:3;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	column-count:3;
	column-gap:20px;
	column-rule:3px solid #090;
}
.test p {
	-moz-column-span:all;
	-webkit-column-span:all;
	column-span:all;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/119.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-fill :id=cf

### 语法

**column-fill**：`auto` | `balance`

**默认值**：auto

**适用于**：定义了多列的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：列高度自适应内容

**balance**：所有列的高度以其中最高的一列统一

### 说明

**设置或检索对象所有列的高度是否统一**

对应的脚本特性为 `columnFill`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/98.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-fill:balance</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
p {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:600px;
	border:10px solid #000;
	-moz-column-count:2;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-moz-column-fill:balance;
	-webkit-column-count:2;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	-webkit-column-fill:balance;
	column-count:2;
	column-gap:20px;
	column-rule:3px solid #090;
	column-fill:balance;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/120.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-break-before :id=cbb

### 语法

**column-break-before**：`auto` | `always` | `avoid` | `left` | `right` | `page` | `column` | `avoid-page` | `avoid-column`

**默认值**：auto

**适用于**：块级元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：既不强迫也不禁止在元素之前断行并产生新列

**always**：总是在元素之前断行并产生新列

**avoid**：避免在元素之前断行并产生新列

### 说明

**设置或检索对象之前是否断行**

对应的脚本特性为 `columnBreakBefore`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/100.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-break-before:always</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
	<div>不管上一列有没有填满，我都另起一列</div>
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
.test p,.test div {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:600px;
	border:10px solid #000;
	-moz-column-count:4;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-webkit-column-count:4;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	column-count:4;
	column-gap:20px;
	column-rule:3px solid #090;
}
.test div {
	-moz-column-break-before:always;
	-webkit-column-break-before:always;
	column-break-before:always;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/121.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-break-after :cba

### 语法

**column-break-after**：`auto` | `always` | `avoid` | `left` | `right` | `page` | `column` | `avoid-page` | `avoid-column`

**默认值**：auto

**适用于**：块级元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：既不强迫也不禁止在元素之后断行并产生新列

**always**：总是在元素之后断行并产生新列

**avoid**：避免在元素之后断行并产生新列

### 说明

**设置或检索对象之后是否断行**

对应的脚本特性为 `columnBreakAfter`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/100.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>column-break-after:always</h1>
<div class="test">
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
	<div>不管本列有没有填满，后面新建一列</div>
	<p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
</div>
```

**css**

```css
body {
	font:14px/1.5 georgia,serif,sans-serif;
}
.test p,.test div {
	margin:0;
	padding:5px 10px;
	background:#eee;
}
h1 {
	margin:10px 0;
	font-size:16px;
}
.test {
	width:600px;
	border:10px solid #000;
	-moz-column-count:4;
	-moz-column-gap:20px;
	-moz-column-rule:3px solid #090;
	-webkit-column-count:4;
	-webkit-column-gap:20px;
	-webkit-column-rule:3px solid #090;
	column-count:4;
	column-gap:20px;
	column-rule:3px solid #090;
}
.test div {
	-moz-column-break-after:always;
	-webkit-column-break-after:always;
	column-break-after:always;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/122.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## column-break-inside :id=cbi

### 语法

**column-break-inside**：`auto` | `avoid` | `avoid-page` | `avoid-column`

**默认值**：auto

**适用于**：块级元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：既不强迫也不禁止在元素内部断行并产生新列

**avoid**：避免在元素内部断行并产生新列

### 说明

**设置或检索对象内部是否断行**

对应的脚本特性为 `columnBreakInside`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/100.png)
