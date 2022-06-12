[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [定位](/css-handbook/properties/positioning)

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

**用于指定一个元素在文档中的定位方式**

- 当`position`的值为非`static`时，其层叠级别通过[`z-index`](#z-index)属性定义。
- 绝对定位的元素，在[`top`](#top)，[`right`](#right)，[`bottom`](#bottom)，[`left`](#left)属性未设置时，会紧随在其前面的兄弟元素之后，但在位置上不影响常规流中的任何元素。

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

**z-index**: auto | [\<integer>](/css-handbook/value-and-units/length?id=length)

**默认值**：auto

**适用于**：定位元素。即定义了[position](#position)为非static的元素

**继承性**：无

**动画性**：当值为[\<integer>](/css-handbook/value-and-units/length?id=length)时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**auto**：元素在当前层叠上下文中的层叠级别是0。元素不会创建新的局部层叠上下文，除非它是根元素

<strong>[\<integer>](/css-handbook/value-and-units/length?id=length)</strong>：用整数值来定义堆叠级别。可以为负值

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

### 语法

**top**: auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：定位元素。即定义了position为非static的元素

**继承性**：无

**动画性**：当值为[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时

**计算值**：当position为static时，计算值是auto。
为relative时，如果top和bottom都是auto，则它们的计算值是0；如果top和bottom其中一个为auto，则auto相当于另一个的负值，即top = -bottom；如果top和bottom的值都不为auto，则忽略bottom。
否则在其它情况下，当指定值为[\<length>](/css-handbook/value-and-units/length?id=length)时，计算值为指定值，当指定值为[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时，计算值为计算后的绝对值。除去这些情况，都为auto

**媒　体**：视觉

### 取值

**auto**：无特殊定位，根据HTML定位规则在文档流中分配

<strong>[\<integer>](/css-handbook/value-and-units/length?id=length)</strong>：用长度值来定义距离顶部的偏移量。可以为负值

</strong>[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)</strong>：用百分比来定义距离顶部的偏移量。百分比参照包含块的高度。可以为负值

### 说明

**定义了元素的上外边距边界与其包含块上边界之间的偏移**

- 该属性用来指定盒子参照相对物顶边界向下偏移。相对定位元素的相对物是自身，绝对定位和居中定位元素是从包含块的padding边界开始计算偏移值
- 对应的脚本特性为top

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/top.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在浏览器顶部</div>
```

#### **css**

```css
.test {
	position: absolute;
	top: 0;
	padding: 5px 10px;
	color: #c00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/04.html"
>
  浏览器不支持iframe
</iframe>

---

## right :id=right

### 语法

**right**：auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：定位元素。即定义了 [`position`](#position) 为非 `static` 的元素

**继承性**：无

**动画性**：当值为[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时

**计算值**：当[`position`](#position)为 `static` 时，计算值是 `auto`。为 `relative` 时，如果 `right` 和 `left` 都是 `auto` ，则它们的计算值是 `0`；如果 `right` 和 `left` 其中一个为 `auto` ，则 `auto` 相当于另一个的负值，即 `left = -right`；如果 `right` 和 `left` 的值都不为 `auto`，则忽略 `right`。否则在其它情况下，当指定值为[\<length>](/css-handbook/value-and-units/length?id=length)时，计算值为指定值，当指定值为[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时，计算值为计算后的绝对值。除去这些情况，都为 `auto`

**媒　体**：视觉

### 取值

**auto**：无特殊定位，根据HTML定位规则在文档流中分配

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义距离右边的偏移量。可以为负值。

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义距离右边的偏移量。百分比参照包含块的宽度。可以为负值。

### 说明

**定义了元素的右外边距边界与其包含块右边界之间的偏移**

- 该属性用来指定盒子参照相对物右边界向左偏移。相对定位元素的相对物是自身，绝对定位和居中定位元素是从包含块的padding边界开始计算偏移值
- 对应的脚本特性为right

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/right.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在浏览器右上角</div>
```

#### **css**

```css
.test {
	position: absolute;
	right: 0;
	padding: 5px 10px;
	color: #c00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/05.html"
>
  浏览器不支持iframe
</iframe>

---

## bottom :id=bottom

### 语法

**bottom**: auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：定位元素。即定义了 [`position`](#position) 为非 `static` 的元素

**继承性**：无

**动画性**：当值为[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时

**计算值**：当 [`position`](#position) 为 `static` 时，计算值是 `auto` 。为 `relative` 时，如果 `top` 和 `bottom` 都是 `auto` ，则它们的计算值是 `0`；如果 `top` 和 `bottom` 其中一个为 `auto` ，则 `auto` 相当于另一个的负值，即 `top = -bottom` ；如果 `top` 和 `bottom` 的值都不为 `auto` ，则忽略 `bottom` 。否则在其它情况下，当指定值为[\<length>](/css-handbook/value-and-units/length?id=length)时，计算值为指定值，当指定值为[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时，计算值为计算后的绝对值。除去这些情况，都为 `auto`

**媒　体**：视觉

### 取值

**auto**：无特殊定位，根据HTML定位规则在文档流中分配

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义距离底部的偏移量。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义距离底部的偏移量。百分比参照包含块的高度。可以为负值

### 说明

**定义了元素的底外边距边界与其包含块底边界之间的偏移**

- 该属性用来指定盒子参照相对物底边界向上偏移。相对定位元素的相对物是自身，绝对定位和居中定位元素是从包含块的padding边界开始计算偏移值
- 对应的脚本特性为bottom

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/bottom.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在浏览器底部</div>
```

#### **css**

```css
.test {
	position: absolute;
	bottom: 0;
	padding: 5px 10px;
	color: #c00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/06.html"
>
  浏览器不支持iframe
</iframe>

---

## left :id=left

### 语法

**left**: auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：定位元素。即定义了 [`position`](#position) 为非 `static` 的元素

**继承性**：无

**动画性**：当值为[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时

**计算值**：当 [`position`](#position) 为 `static` 时，计算值是 `auto`。为 `relative` 时，如果 `right` 和 `left` 都是 `auto`，则它们的计算值是 `0`；如果 `right` 和 `left` 其中一个为 `auto`，则 `auto` 相当于另一个的负值，即 `left = -right`；如果 `right` 和 `left` 的值都不为 `auto`，则忽略 `right`。否则在其它情况下，当指定值为[\<length>](/css-handbook/value-and-units/length?id=length)时，计算值为指定值，当指定值为[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)时，计算值为计算后的绝对值。除去这些情况，都为 `auto`

**媒　体**：视觉

### 取值

**auto**：无特殊定位，根据HTML定位规则在文档流中分配

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义距离左边的偏移量。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义距离左边的偏移量。百分比参照包含块的宽度。可以为负值

### 说明

**定义了元素的左外边距边界与其包含块左边界之间的偏移**

- 该属性用来指定盒子参照相对物左边界向右偏移。相对定位元素的相对物是自身，绝对定位和居中定位元素是从包含块的padding边界开始计算偏移值
- 对应的脚本特性为left

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/left.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我将出现在浏览器左上角</div>
```

#### **css**

```css
.test {
	position: absolute;
	left: 0;
	padding: 5px 10px;
	color: #c00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/07.html"
>
  浏览器不支持iframe
</iframe>

---

## clip :id=clip

### 语法

**clip**：auto | \<shape>

<strong>\<shape></strong>：rect([\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto)

**默认值**：auto

**适用于**：绝对定位元素

**继承性**：无

**动画性**：当值为<strong>\<shape></strong>时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**auto**：对象无剪切

**rect**([\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto [\<number>](/css-handbook/value-and-units/numeric?id=number)|auto)：依据上-右-下-左的顺序提供自对象左上角为(0,0)坐标计算的四个偏移数值，其中任一数值都可用auto替换，即此边不剪切。
上-左 方位的裁剪：从0开始剪裁直到设定值，即 上-左 方位的 `auto` 值等同于0；
右-下 方位的裁剪：从设定值开始剪裁直到最右边和最下边，即 右-下 方位的 `auto` 值为盒子的实际宽度和高度；

**示例**：`clip: rect(auto 50px 20px auto)`

**说明**：上边不剪切，右边从左起第50个像素开始剪切直至最右边，下边从上起第20个像素开始剪切直至最底部，左边不剪切

!> CSS3新增属性可能存在描述错误及变更，仅供参考，持续更新

### 说明

**定义了元素的哪一部分是可见的。区域外的部分是透明的**

- <span style="color: red;">这个属性将被废弃，推荐使用 `clip-path` 代替，在过渡阶段，仍然会存在一段时间</span>
- 必须将 [`position`](#position) 的值设为 `absolute` 或者 `fixed`，此属性方可使用
- 对应的脚本特性为clip

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/positioning/clip.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">看看被剪切后的效果</div>
```

#### **css**

```css
.test {
	position: absolute;
	height: 50px;
	line-height: 50px;
	clip: rect(0 auto 35px 10px);
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/positioning/08.html"
>
  浏览器不支持iframe
</iframe>

---