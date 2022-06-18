[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [表格](/css-handbook/properties/table)

# 表格

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[table-layout](#tl)|CSS2|无|设置或检索表格的布局算法|
|[border-collapse](#bc)|CSS2|有|设置或检索表格的行和单元格的边是合并在一起还是按照标准的HTML样式分开|
|[border-spacing](#bs)|CSS2|有|设置或检索当表格边框独立时，行和单元格的边框在横向和纵向上的间距|
|[caption-side](#cs)|CSS2|有|设置或检索表格的caption对象是在表格的那一边|
|[empty-cells](#ec)|CSS2|有|设置或检索当表格的单元格无内容时，是否显示该单元格的边框|

## table-layout :id=tl

### 语法

**table-layout**：`auto` | `fixed`

**默认值**：auto

**适用于**：table系元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**auto**：默认的自动算法。布局将基于各单元格的内容，换言之，可能你给某个单元格定义宽度为100px，但结果可能并不是100px。表格在每一单元格读取计算之后才会显示出来，速度很慢

**fixed**：固定布局的算法。在这算法中，水平布局是仅仅基于表格的宽度，表格边框的宽度，单元格间距，列的宽度，而和表格内容无关。也就是说，内容可能被裁切

### 说明

**设置或检索表格的布局算法**

- 通常 `fixed` 算法会比 `auto` 算法高效，尤其是对于那些长表格来说。`fixed` 算法使得表格可以像其它元素一样一行一行的渲染
- 对应的脚本特性为 `tableLayout`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/80.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>auto: 表格自动算法</h1>
<table border="1" class="auto">
<tbody>
	<tr>
		<td>表格自动算法，宽度将基于单元格的内容自动拉伸</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
	<tr>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
</tbody>
</table>

<h1>fixed: 表格固定算法</h1>
<table border="1" class="fixed">
<tbody>
	<tr>
		<td>表格固定算法布局</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
	<tr>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
</tbody>
</table>
```

**css**

```css
h1 {
  font-size: 16px;
  font-family: Arial;
}
.auto {
  table-layout: auto;
  width: 350px;
}
.fixed {
  table-layout: fixed;
  width: 350px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/88.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## border-collapse :id=tc

### 语法

**border-collapse**：`separate` | `collapse`

**默认值**：`separate`

**适用于**：table系元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**separate**：边框独立

**collapse**：相邻边被合并

### 说明

**设置或检索表格的行和单元格的边是合并还是独立**

- 只有当表格边框独立（即 `border-collapse` 属性等于 `separate` 时）， [border-spacing](#bs) 和 [empty-cells](#ec) 才起作用

- 对应的脚本特性为 `borderCollapse`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/80.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>separate: 边框独立</h1>
<table border="1" class="separate">
<tbody>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
</tbody>
</table>

<h1>collapse: 相邻边框被合并</h1>
<table border="1" class="collapse">
<tbody>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
</tbody>
</table>
```

**css**

```css
h1 {
  font-size:16px;
  font-family:Arial;
}
.separate {
  border-collapse: separate;
}
.collapse {
  border-collapse: collapse;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/89.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## border-spacing :id=bs

### 语法

**border-spacing**：[\<length>](/css-handbook/value-and-units/length?id=length){1,2}

**默认值**：0

**适用于**：table系元素

**继承性**：有

**动画性**：否

**计算值**：两个绝对长度值

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义行和单元格的边框在横向和纵向上的间距。不允许负值

### 说明

**设置或检索当表格边框独立时，行和单元格的边框在横向和纵向上的间距**

- 该属性作用等同于标签属性 `cellspacing`(单元格边距)。`border-spacing: 0` 等同于 `cellspacing="0"`
- 只有当表格边框独立（即 [border-collapse](#bc) 属性等于 `separate` 时）此属性才起作用。
- 如果提供全部两个length值时，第一个作用于横向间距，第二个作用于纵向间距
- 如果只提供一个length值时，这个值将作用于横向和纵向上的间距
- 对应的脚本特性为 `borderSpacing`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/81.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>边框独立时border-spacing生效(IE6/7 是无效的)</h1>
<table border="1" class="test1">
<tbody>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
</tbody>
</table>

<h1>相邻边被合并时border-spacing无效</h1>
<table border="1" class="test2">
<tbody>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
	<tr>
		<td>合并边框</td>
		<td>合并边框</td>
		<td>合并边框</td>
	</tr>
</tbody>
</table>
<h1>边框独立时border-spacing生效（IE6/7 通过标签属性 cellspacing="20" 设置）</h1>
<table border="1" class="test3" cellspacing="20">
<tbody>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
	<tr>
		<td>独立边框</td>
		<td>独立边框</td>
		<td>独立边框</td>
	</tr>
</tbody>
</table>
<p>IE6/7下通过标签属性 cellspacing="20" 替代 border-spacing:10px 20px; 设置单元格边距，可能你也注意到了 border-spacing 可以设置两个值，但是标签属性cellspacing只能设一个值，但通常情况下，我们最常用的是设置 cellspacing="0" 清除单元格边距。</p>
```

**css**

```css
h1 {
  font-size: 16px;
  font-family: Arial;
}
.test1,.test3 {
  border-collapse: separate;
  border-spacing: 10px 20px;
}
.test2 {
  border-collapse: collapse;
  border-spacing: 10px 20px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/90.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## caption-side :id=cs

### 语法

**caption-side**：`top` | `bottom`

**默认值**：top

**适用于**：table系元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**top**：指定caption在表格上边

**bottom**：指定caption在表格下边

### 说明

**设置或检索表格的caption对象是在表格的那一边**

- 要在IE7及以下浏览器中实现 `top` 与 `bottom` 参数值的效果，可直接在 `caption` 标签内定义标签属性 `valign` 为 `top` 和 `bottom`
- Firefox还额外支持 `right` 和 `left` 两个非标准值
- 对应的脚本特性为 `captionSide`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/81.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>caption在上边</h1>
<table border="1" class="test1">
<caption>caption在上边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>

<h1>caption在右边</h1>
<table border="1" class="test2">
<caption>caption在右边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>

<h1>caption在下边</h1>
<table border="1" class="test3">
<caption>caption在下边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>

<h1>caption在左边</h1>
<table border="1" class="test4">
<caption>caption在左边</caption>
<tbody>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
	<tr>
		<td>这是某一单元格</td>
		<td>这是某一单元格</td>
	</tr>
</tbody>
</table>
```

**css**

```css
h1 {
	font-size: 16px;
	font-family: Arial;
}
.test1 {
	caption-side: top;
}
.test2 {
	caption-side: right;
}
.test3 {
	caption-side: bottom;
}
.test4 {
	caption-side: left;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/91.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## empty-cells :id=ec

### 语法

**empty-cells**：`hide` | `show`

**默认值**：show

**适用于**：table系元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**hide**：指定当表格的单元格无内容时，隐藏该单元格的边框

**show**：指定当表格的单元格无内容时，显示该单元格的边框

### 说明

**设置或检索当表格的单元格无内容时，是否显示该单元格的边框**

- IE7及以下浏览器中默认隐藏无内容的单元格边框，要想使其获得与show参数值相同的效果，可以变相给该空单元格加个占位且不可见的元素，例如全角空格或&nbsp;等等。
- 只有当表格边框独立（即 [border-collapse](#bc) 属性等于 `separate` 时）此属性才起作用
- 对应的脚本特性为 `emptyCells`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/81.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>show:</h1>
<table border="1" class="test">
<tbody>
	<tr>
		<td>序号</td>
		<td>姓名</td>
		<td>年龄</td>
	</tr>
	<tr>
		<td>1</td>
		<td>Joy</td>
		<td>26</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Kate</td>
		<td></td>
	</tr>
</tbody>
</table>

<h1>hide:</h1>
<table border="1" class="test2">
<tbody>
	<tr>
		<td>序号</td>
		<td>姓名</td>
		<td>年龄</td>
	</tr>
	<tr>
		<td>1</td>
		<td>Joy</td>
		<td>26</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Kate</td>
		<td></td>
	</tr>
</tbody>
</table>
```

**css**

```css
h1 {
	font-size:16px;
	font-family:Arial;
}
.test {
	empty-cells:show;
}
.test2 {
	empty-cells:hide;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/92.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
