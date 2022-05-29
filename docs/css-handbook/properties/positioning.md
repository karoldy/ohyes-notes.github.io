[首页](/) / [CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [定位](/css-handbook/properties/positioning)

# 定位

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-change">position</span>](#position)|CSS2/3|无|用于指定一个元素在文档中的定位方式|
|[z-index](#z-index)|CSS2|无|定义一个元素在文档中的层叠顺序|
|[top](#top)|CSS2|无|定义了元素的上外边距边界与其包含块上边界之间的偏移|
|[right](#right)|CSS2|无|定义了元素的右外边距边界与其包含块右边界之间的偏移|
|[bottom](#bottom)|CSS2|无|定义了元素的底外边距边界与其包含块底边界之间的偏移|
|[left](#left)|CSS2|无|定义了元素的左外边距边界与其包含块左边界之间的偏移|
|[<span class="g-color-css3-change">clip</span>](#clip)|CSS2/3|无|定义了元素的哪一部分是可见的。区域外的部分是透明的|

## position :id=position

### 语法

**position**：static | relative | absolute | fixed | <span class="g-color-css3-new">sticky</span>

**默认值**：static

**适用于**：除[display](/css-handbook/properties/layout?id=display)属性定义为`table-column-group | table-column`之外的所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**static**：对象遵循常规流。此时4个定位偏移属性不会被应用。

**relative**：对象遵循常规流，并且参照自身在常规流中的位置通过[`top`](#top)，[`right`](#right)，[`bottom`](#bottom)，[`left`](#left)这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。

**absolute**：对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其`margin`不与其他任何`margin`折叠。

**fixed**：与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。

<strong class="g-color-css3-new">sticky</strong>：对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）

### 说明

用于指定一个元素在文档中的定位方式
当`position`的值为非`static`时，其层叠级别通过[`z-index`](#z-index)属性定义。
绝对定位的元素，在[`top`](#top)，[`right`](#right)，[`bottom`](#bottom)，[`left`](#left)属性未设置时，会紧随在其前面的兄弟元素之后，但在位置上不影响常规流中的任何元素。

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/position.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div id="position">水平垂直居中的对象</div>
```

#### **css**

```css
#position {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 150px;
	height: 40px;
	margin: -20px 0 0 -75px;
	padding: 0 10px;
	background: #eee;
	line-height: 2.4;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/01.html"
>
  浏览器不支持iframe
</iframe>

---

## z-index :id=z-index

### 语法

**z-index**: auto | \<integer>

**默认值**：auto

**适用于**：定位元素。即定义了position为非static的元素

**继承性**：无

**动画性**：当值为\<integer>时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**auto**：元素在当前层叠上下文中的层叠级别是0。元素不会创建新的局部层叠上下文，除非它是根元素

<strong>\<integer></strong>：用整数值来定义堆叠级别。可以为负值

### 说明

**定义一个元素在文档中的层叠顺序**

- z-index用于确定元素在当前层叠上下文中的层叠级别，并确定该元素是否创建新的局部层叠上下文
- 每个元素层叠顺序由所属的层叠上下文和元素本身的层叠级别决定（每个元素仅属于一个层叠上下文）
- 同一个层叠上下文中，层叠级别大的显示在上面，反之显示在下面
- 同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的将会覆盖前面的
- 不同层叠上下文中，元素的显示顺序依据祖先的层叠级别来决定，与自身的层叠级别无关
- 当`z-index`未定义或者值为`auto`时，在IE6,7下会创建新的局部层叠上下文，而在高级浏览器中，按照规范不产生新的局部层叠上下文

例子

<!-- tabs:start -->

#### **html**

```html
<div class="test">
	<p class="a">asdas</p>
</div>
<div class="test2">
	<p class="b">asdas</p>
</div>
```

#### **css**

```css
div {
	position: relative;
}
p {
	position: absolute;
}
.a {
	background: #f00;
	z-index: 10;
}
.b {
	background: #0ff;
	z-index: 3;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/02.html"
>
  浏览器不支持iframe
</iframe>

!> 细心的你会发现上述代码在IE6,7下的呈现与高级浏览器下不同。.test1和.test2未设置z-index，在高级浏览器下不会产生新的局部层叠上下文，也就是说它们的子元素没有被新的局部层叠上下文包裹，那么它们的子元素就处在同一个层叠上下文中，可以直接通过自身的层叠级别来决定显示顺序，所以结果是.a 覆盖了.b，因为.a的层叠级别比.b高；而在IE6,7下，.test1和.test2会产生新的局部层叠上下文，即它们的子元素被新的局部层叠上下文包裹，于是子元素显示顺序只能依赖.test1和.test2层叠级别来确定。所以结果是.b 覆盖了.a，因为.b的父元素.test2在HTML文档流中排在.test1之后，后来者居上覆盖前者

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/z-index.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="z1">z-index:1</div>
<div class="z2">z-index:2</div>
<div class="z3">z-index:3</div>
```

#### **css**

```css
.z1,
.z2,
.z3 {
	position: absolute;
	width: 200px;
	height: 100px;
	padding: 5px 10px;
	color: #fff;
	text-align: right;
}
.z1 {
	z-index: 1;
	background: #000;
}
.z2 {
	z-index: 2;
	top: 30px;
	left: 30px;
	background: #C00;
}
.z3 {
	z-index: 3;
	top: 60px;
	left: 60px;
	background: #999;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/03.html"
>
  浏览器不支持iframe
</iframe>

---

## top :id=top



## right :id=right

## bottom :id=bottom

## left :id=left

## clip :id=clip