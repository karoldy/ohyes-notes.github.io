[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [背景和边框](/css-handbook/properties/bab)

# 背景和边框

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[border](#border)|CSS1|无|简写属性。定义元素边框的外观特性。参阅[outline](/css-handbook/user-interface?id=outline)属性|
|[border-width](#bw)|CSS1|无|简写属性。定义元素的边框厚度|
|[border-style](#bs)|CSS1|无|简写属性。定义元素的边框样式|
|[border-color](#bc)|CSS1|无|简写属性。定义元素的边框颜色|
|[<span class="g-color-css3-new">box-shadow</span>](#bsh)|CSS3|无|定义元素的阴影|
|[<span class="g-color-css3-new">border-radius</span>](#br)|CSS3|无|简写属性。定义元素的圆角|
|[<span class="g-color-css3-new">border-image</span>](#bi)|CSS3|无|简写属性。定义将图像应用到元素的边框上|
|[<span class="g-color-css3-new">border-image-source</span>](#biso)|CSS3|无|定义元素边框样式所使用的图像|
|[<span class="g-color-css3-new">border-image-slice</span>](#bis)|CSS3|无|用以指定从哪 4 个位置分割图像（遵循上右下左的顺序）|
|[<span class="g-color-css3-new">border-image-width</span>](#biw)|CSS3|无|定义元素边框图像的厚度|
|[<span class="g-color-css3-new">border-image-outset</span>](#bio)|CSS3|无|定义边框图像从边框边界向外偏移的距离|
|[<span class="g-color-css3-new">border-image-repeat</span>](#bir)|CSS3|无|定义分割图像怎样填充边框图像区域|
|[<span class="g-color-css3-change">background</span>](#background)|CSS1/3|无|简写属性。定义元素的背景特性|
|[background-color](#bac)|CSS1|无|定义元素使用的背景颜色|
|[<span class="g-color-css3-change">background-image</span>](#bai)|CSS1/3|无|定义元素使用的背景图像|
|[<span class="g-color-css3-change">background-repeat</span>](#bar)|CSS1/3|无|定义元素的背景图像如何填充|
|[<span class="g-color-css3-change">background-attachment</span>](#baa)|CSS1/3|无|定义滚动时背景图像相对于谁固定|
|[<span class="g-color-css3-change">background-position</span>](#bap)|CSS1/3|无|指定背景图像在元素中出现的位置|
|[<span class="g-color-css3-new">background-origin</span>](#bao)|CSS3|无|指定的背景图像计算[background-position](#bap)时的参考原点(位置)|
|[<span class="g-color-css3-new">background-clip</span>](#bacl)|CSS3|无|指定对象的背景图像向外裁剪的区域|
|[<span class="g-color-css3-new">background-size</span>](#bas)|CSS3|无|定义背景图像的尺寸大小|

## border :id=border

### 简写属性语法

**border**：\<line-width> || \<line-style> || [\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆简写属性语法

**border-\***：\<line-width> || \<line-style> || [\<color>](/css-handbook/value-and-units/color?id=color)

**border-\*** = `border-top`, `border-right`, `border-bottom`, `border-left`

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

**下属独立属性**：[border-*-width](#bw) || [border-*-style](#bs) || [border-*-color](#bc)

\<line-width> = [\<length>](/css-handbook/value-and-units/length?id=length) | thin | medium | thick

\<line-style> = `none` | `hidden` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset`

### 取值

\<line-width>：定义元素的边框厚度

\<line-style>：定义元素的边框样式

[\<color>](/css-handbook/value-and-units/color?id=color)：定义元素的边框颜色

### 说明

**简写属性。定义元素边框的外观特性。参阅[outline](/css-handbook/user-interface?id=outline)属性**

- 如使用 `border` 或 `border-*` 短属性只定义了单个参数值，则其他参数的默认值将无条件覆盖各自对应的单个属性值定义

- 对应的脚本特性分别为：`border`, `borderTop`, `borderRight`, `borderBottom`, `borderLeft`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">定义边框特性</div>
<div class="test2">边框颜色默认使用文本颜色</div>
```

#### **css**

```css
.test {
	border: 5px solid #000;
}
.test2 {
	margin-top: 10px;
	border: 5px solid;
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/01.html"
>
  浏览器不支持iframe
</iframe>

---

## border-width :id=bw

### 简写属性语法

**border-width**：\<line-width>{1,4}

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**border-\*-width**：\<line-width>

**border-\*-width** = `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width`

**默认值**：medium

**适用于**：所有元素

**继承性**：无

**动画性**：当取值为 [\<length>](/css-handbook/value-and-units/length?id=length) 时支持

**计算值**：绝对长度值，如果 [border-style](#bs) 设置为 `none` 或 `hidden`，则计算值为0

**媒　体**：视觉

\<line-width> = [\<length>](/css-handbook/value-and-units/length?id=length) | `thin` | `medium` | `thick`

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义边框的厚度。不允许负值

**medium**：定义默认厚度的边框。计算值为3px

**thin**：定义比默认厚度细的边框。计算值为1px

**thick**：定义比默认厚度粗的边框。计算值为5px

### 说明

**定义元素的边框厚度**

- `border-width` 属性如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边；只提供一个，将用于全部的四边；提供两个，第一个用于上、下，第二个用于左、右；提供三个，第一个用于上，第二个用于左、右，第三个用于下
- 如果[border-style](#bs)设置为 `none` | `hidden`，`border-width` 及其分拆独立属性的计算值将为0
- 对应的脚本特性分别为：`borderWidth`, `borderTopWidth`, `borderRightWidth`, `borderBottomWidth`, `borderLeftWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-width.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">提供1个参数</div>
<div class="test2">提供2个参数</div>
<div class="test3">提供3个参数</div>
<div class="test4">提供4个参数</div>
```

#### **css**

```css
.test {
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}
.test2 {
  margin-top: 10px;
  padding: 10px;
  border-width: 1px 5px;
  border-style: solid;
  border-color: #000 #f00;
}
.test3 {
  margin-top: 10px;
  padding: 10px;
  border-width: 1px 5px 10px;
  border-style: solid;
  border-color: #000 #f00 #090;
}
.test4 {
  margin-top: 10px;
  padding: 10px;
  border-width: 1px 5px 10px 15px;
  border-style: solid;
  border-color: #000 #f00 #090 #0ff;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/02.html"
>
  浏览器不支持iframe
</iframe>

---

## border-style :id=bs

### 简写属性语法

**border-style**：\<line-style>{1,4}

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**border-\*-style**：\<line-style>

**border-\*-style** = `border-top-style`, `border-right-style`, `border-bottom-style`, `border-left-style`

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

\<line-style> = `none` | `hidden` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset`

### 取值

**none**：无轮廓。当定义了该值时，[border-color](#bc) 将被忽略，[border-width](#bw) 计算值为0，除非边框轮廓应用了[border-image](#bi)

**hidden**：隐藏边框

**dotted**：点状轮廓

**dashed**：虚线轮廓

**solid**：实线轮廓

**double**：双线轮廓。两条单线与其间隔的和等于指定的[border-width](#bw)值

**groove**：3D凹槽轮廓

**ridge**：3D凸槽轮廓

**inset**：3D凹边轮廓

**outset**：3D凸边轮廓

### 说明

**定义元素的边框样式**

- `border-style` 如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边；只提供一个，将用于全部的四边；提供两个，第一个用于上、下，第二个用于左、右；提供三个，第一个用于上，第二个用于左、右，第三个用于下
- 如果 `border-width` 等于0，`border-style` 及其分拆独立属性将失效
- 对应的脚本特性分别为：`borderStyle`, `borderTopStyle`, `borderRightStyle`, `borderBottomStyle`, `borderLeftStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-style.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="none">none</div>
<div class="hidden">hidden</div>
<div class="dotted">dotted</div>
<div class="dashed">dashed</div>
<div class="solid">solid</div>
<div class="double">double</div>
<div class="groove">groove</div>
<div class="ridge">ridge</div>
<div class="inset">inset</div>
<div class="outset">outset</div>
```

#### **css**

```css
div {
  float: left;
  margin-right: 5px;
}
.none {
  padding: 10px;
  border: 0 none;
  background: #eee;
}
.hidden {
  padding: 10px;
  border: 3px hidden #000;
  background: #eee;
}
.dotted {
  padding: 10px;
  border: 3px dotted #000;
  background: #eee;
}
.dashed {
  padding: 10px;
  border: 3px dashed #000;
  background: #eee;
}
.solid {
  padding: 10px;
  border: 3px solid #000;
  background: #eee;
}
.double {
  padding: 10px;
  border: 3px double #000;
  background: #eee;
}
.groove {
  padding: 10px;
  border: 3px groove #000;
  background: #eee;
}
.ridge {
  padding: 10px;
  border: 3px ridge #000;
  background: #eee;
}
.inset {
  padding: 10px;
  border: 3px inset #000;
  background: #eee;
}
.outset {
  padding: 10px;
  border: 3px outset #000;
  background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/03.html"
>
  浏览器不支持iframe
</iframe>

---

## border-color :id=bc

### 简写属性语法

**border-color**：[\<color>](/css-handbook/value-and-units/color?id=color){1,4}

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**border-\*-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**border-\*-color** = `border-top-color`, `border-right-color`, `border-bottom-color`, `border-left-color`

**默认值**：currentColor

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**定义元素的边框颜色**

- `border-color` 如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边；只提供一个，将用于全部的四边；提供两个，第一个用于上、下，第二个用于左、右；提供三个，第一个用于上，第二个用于左、右，第三个用于下
- 如果 [border-width](#bw) 等于 0 或 [border-style](#bs) 设置为 `none` | `hidden`，b`order-color` 及其分拆独立属性将失效
- 如果 `border-color` 未被定义，边框颜色将默认取当前最近的文本颜色，即 currentColor
- 对应的脚本特性分别为：`borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-color.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">提供1个参数</div>
<div class="test2">提供2个参数</div>
<div class="test3">提供3个参数</div>
<div class="test4">提供4个参数</div>
```

#### **css**

```css
.test {
  padding:10px;
  border-width:1px;
  border-style:solid;
  border-color:#000;
}
.test2 {
  margin-top:10px;
  padding:10px;
  border-width:1px;
  border-style:solid;
  border-color:#000 #f00;
}
.test3 {
  margin-top:10px;
  padding:10px;
  border-width:1px;
  border-style:solid;
  border-color:#000 #f00 #090;
}
.test4 {
  margin-top:10px;
  padding:10px;
  border-width:1px;
  border-style:solid;
  border-color:#000 #f00 #090 #0ff;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/04.html"
>
  浏览器不支持iframe
</iframe>

---

## box-shadow :id=bsh

### 语法

**box-shadow**：none | \<shadow> [ , \<shadow> ]\*

\<shadow> = inset? && [\<length>](/css-handbook/value-and-units/length?id=length){2,4} && [\<color>](/css-handbook/value-and-units/color?id=color)?

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：是，除了内、外阴影切换时

**计算值**：指定值

**媒　体**：视觉

### 取值

**none**：无阴影

[\<length>](/css-handbook/value-and-units/length?id=length)①：第 1 个长度值定义元素的阴影水平偏移值。正值，阴影出现在元素右侧；负值，则阴影出现在元素左侧

[\<length>](/css-handbook/value-and-units/length?id=length)②：第 2 个长度值定义元素的阴影垂直偏移值。正值，阴影出现在元素底部；负值，则阴影出现在元素顶部

[\<length>](/css-handbook/value-and-units/length?id=length)③：第 3 个长度值定义元素的阴影模糊值半径（如果提供了）。该值越大阴影边缘越模糊，若该值为0，阴影边缘不出现模糊。不允许负值

[\<length>](/css-handbook/value-and-units/length?id=length)④：第 4 个长度值定义元素的阴影外延值（如果提供了）。正值，阴影将向四面扩展；负值，则阴影向里收缩

[\<color>](/css-handbook/value-and-units/color?id=color)：定义元素阴影的颜色。如果该值未定义，阴影颜色将默认取当前最近的文本颜色

**inset**：定义元素的阴影类型为内阴影。该值为空时，则元素的阴影类型为外阴影

### 说明

**定义元素的阴影。参阅 [text-shadow](/css-handbook/text-decoration?id=text-shadow) 属性**

- `box-shadow` 可以设定多组阴影效果，每组参数值以逗号分隔。该属性可以对几乎所有元素的生成框产生阴影。如果元素同时设置了[border-radius](#br)，阴影也会有圆角效果
- 如果定义了多组阴影效果，它们的 `z-ordering` 和多个 [text-shadow](/css-handbook/text-decoration?id=text-shadow) 规则相同，第一个阴影在最上面，以此类推。
- 对应的脚本特性为：`boxShadow`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/box-shadow.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<ul class="test">
	<li class="outset">外阴影常规效果<br />box-shadow:5px 5px rgba(0,0,0,.6);</li>
	<li class="outset-blur">外阴影模糊效果<br />box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>
	<li class="outset-extension">外阴影模糊外延效果<br />box-shadow:5px 5px 5px 10px rgba(0,0,0,.6);</li>
	<li class="inset">内阴影效果<br />box-shadow:2px 2px 5px 1px rgba(0,0,0,.6) inset;</li>
	<li class="multiple-shadow">外阴影模糊效果<br />box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>
</ul>
```

#### **css**

```css
.test li {
	margin-top: 20px;
	list-style: none;
	width: 400px;
	padding: 10px;
	background: #eee;
}
.test .outset {
	box-shadow: 5px 5px rgba(0, 0, 0, .6);
}
.test .outset-blur {
	box-shadow: 5px 5px 5px rgba(0, 0, 0, .6);
}
.test .outset-extension {
	box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, .6);
}
.test .inset {
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .6) inset;
}
.test .multiple-shadow {
	box-shadow:
		0 0 5px 3px rgba(255, 0, 0, .6),
		0 0 5px 6px rgba(0, 182, 0, .6),
		0 0 5px 10px rgba(255, 255, 0, .6);
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/05.html"
>
  浏览器不支持iframe
</iframe>

---

## border-radius :id=br

### 简写属性语法

**border-radius**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ]{1,4} [ / [ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ]{1,4} ]?

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**border-\*-radius**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ]{1,2}

**border-\*-radius** = `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, `border-bottom-left-radius`

**默认值**：0

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：绝对值或百分比

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值定义圆形半径或椭圆的半长轴，半短轴。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比定义圆形半径或椭圆的半长轴，半短轴。水平方向百分比参照元素宽度（非内容宽度），垂直方向参照元素高度。不允许负值

### 说明

**简写属性。定义元素的圆角**

- `border-radius` 属性提供 2 个参数，参数间以/分隔，每个参数允许设置 1~4 个参数值，第 1 个参数表示水平半径或半轴，第 2 个参数表示垂直半径或半轴，如第 2 个参数值省略未定义，则直接复制第 1 个参数值
- 水平半径或半轴：如果提供全部四个参数值，将按上左 `top-left`、上右 `top-right`、下右 `bottom-right`、下左 `bottom-left` 的顺序作用于四个角；提供三个，第一个用于`top-left`，第二个用于 `top-right`和 `bottom-left`，第三个用于 `bottom-right`；提供两个，第一个用于 `top-left` 和 `bottom-right`，第二个用于 `top-right` 和 `bottom-left`；只提供一个，将用于全部的四个角
- 垂直半径或半轴也遵循以上 4 点
- 对应的脚本特性为 `borderRadius`

**分拆独立属性属性。定义元素的单个圆角**

- `border-*-radius` 属性提供 2 个参数，参数间以空格分隔，每个参数允许设置 1 个参数值，第 1 个参数表示水平半径或半轴，第 2 个参数表示垂直半径或半轴，如第 2 个参数值省略未定义，则直接复制第 1 个参数值
- 对应的脚本特性分别为：`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-radius.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<h2>水平与垂直半径相同时：</h2>
<ul class="test">
	<li class="one">提供1个参数<br />border-radius:10px;</li>
	<li class="two">提供2个参数<br />border-radius:10px 20px;</li>
	<li class="three">提供3个参数<br />border-radius:10px 20px 30px;</li>
	<li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px;</li>
</ul>
<h2>水平与垂直半径不同时：</h2>
<ul class="test2">
	<li class="one">提供1个参数<br />border-radius:10px/5px;</li>
	<li class="two">提供2个参数<br />border-radius:10px 20px/5px 10px;</li>
	<li class="three">提供3个参数<br />border-radius:10px 20px 30px/5px 10px 15px;</li>
	<li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px/5px 10px 15px 20px;</li>
</ul>
```

#### **css**

```css
ul {
  margin:0;
  padding:0;
}
li {
  list-style:none;
  margin:10px 0 0 0;
  padding:10px;
  background:#bbb;
}
.test .one {
  border-radius:10px;
}
.test .two {
  border-radius:10px 20px;
}
.test .three {
  border-radius:10px 20px 30px;
}
.test .four {
  border-radius:10px 20px 30px 40px;
}
.test2 .one {
  border-radius:10px/5px;
}
.test2 .two {
  border-radius:10px 20px/5px 10px;
}
.test2 .three {
  border-radius:10px 20px 30px/5px 10px 15px;
}
.test2 .four {
  border-radius:10px 20px 30px 40px/5px 10px 15px 20px;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/06.html"
>
  浏览器不支持iframe
</iframe>

---

## border-image :id=bi

### 语法

**border-image**：[border-image-source](#biso) || [border-image-slice](#bis) [ / [border-image-width](#biw) | / [border-image-width](#biw) ? / [border-image-outset](#bio) ]? || [border-image-repeat](#bir)

**默认值**：看每个独立属性

**适用于**：看每个独立属性

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 取值

[border-image-source](#biso)：定义元素边框背景图像，可以是图片路径或使用渐变创建的“背景图像”

[border-image-slice](#bis)：定义元素边框背景图像从什么位置开始分割

[border-image-width](#biw)：定义元素边框背景图像厚度

[border-image-outset](#bio)：定义元素边框背景图像的外延尺寸

[border-image-repeat](#bir)：定义元素边框背景图像的平铺方式

### 说明

**简写属性。定义将图像应用到元素的边框上**

- 使用图像替代 [border-style](#bs) 去定义边框样式。当 `border-image` 为 `none` 或图像不可见时，将会显示 [border-style](#bs) 所定义的边框样式效果
- `border-image` 属性生效的前提是定义了 [border-width](#bw) 和 [border-style](#bs)
- 对应的脚本特性为：`borderImage`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">用图片来做边框</div>
```

#### **css**

```css
.test {
	border-width: 2px 9px;
	border-style: solid;
	border-color: orange;
	border-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image.png) 2 9 fill repeat;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/07.html"
>
  浏览器不支持iframe
</iframe>

---

## border-image-source :id=biso

### 语法

**border-image-source**：none | [\<image>](/css-handbook/value-and-units/color?id=image)

**默认值**：none

**适用于**：所有元素，除 \<table>元素设置了 [border-collapse](/css-handbook/properties/table?id=bc) 属性值为 `collapse` 之外

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**none**：无背景图片

[\<image>](/css-handbook/value-and-units/color?id=image)：使用绝对或相对地址指或者创建渐变色来确定图像

### 说明

**定义元素边框样式所使用的图像**

- 指定一个图像用来替代 [border-style](#bs) 所定义的边框样式。当 [border-image](#bi) 为 `none` 或图像不可见时，将会显示 [border-style](#bs) 所定义的边框样式效果
- 除了直接使用图片来作为边框样式外，还可以绘制渐变来作为边框样式

<!-- tabs:start -->
#### **例子**

**html**

```html
<div class="test">渐变边框效果</div>
```
**css**

```css
.test {
	border: 10px solid;
	border-image: linear-gradient(red, yellow) 10;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/08.html"
>
  浏览器不支持iframe
</iframe>

!> 在这个例子中，绘制了一个线性渐变作为图像来替代边框样式，我们得到了一个渐变的边框效果

<!-- tabs:end -->

- 对应的脚本特性为：`borderImageSource`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-source.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">用图片来做边框</div>
```

#### **css**

```css
.test {
	padding: 10px;
	border: 27px solid;
	border-image-source: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-source.png);
	border-image-slice: 27;
	border-image-width: 27px;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/09.html"
>
  浏览器不支持iframe
</iframe>

---

## border-image-slice :id=bis

### 语法

**border-image-slice**：[ [\<number>](/css-handbook/value-and-units/numeric?id=number) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ]{1,4} && fill?

**默认值**：100%

**适用于**：所有元素，除 \<table>元素设置了 [border-collapse](/css-handbook/properties/table?id=bc) 属性值为 `collapse` 之外

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用浮点数指定图像分割的位置。数字代表在图像上的像素位置或向量坐标。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定图像分割的位置。垂直和水平方向的百分比分别参照图片的宽和高进行换算。不允许负值

**fill**：保留裁减后的中间区域，其铺排方式遵循 [border-image-repeat](#bir) 的定义

### 说明

**用以指定从哪 4 个位置分割图像（遵循上右下左的顺序）**

- 该属性指定从上，右，下，左 4 个方位来分割图像，将图像分成4个角，4条边和中间区域共9份，中间区域始终是透明的（即没图像填充），除非加上关键字 `fill`
- 除 `fill` 关键字外，该属性接受1~4个参数值，如果提供全部四个参数值，将按上、右、下、左的顺序进行分割；提供三个，第一个用于上，第二个用于左、右，第三个用于下；提供两个，第一个用于上、下，第二个用于左、右；只提供一个，上右下左都使用该值进行分割
- 对应的脚本特性为：`borderImageSlice`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-slice.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test1">不保留裁减后的中间区域</div>
<div class="test2">保留裁减后的中间区域</div>
```

**css**

```css
.test2 {
	margin-top: 10px;
	padding: 5px;
	border-width: 1px 9px;
	border-style: solid;
	border-color: orange;
	border-image-source: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-slice.png);
	border-image-repeat: repeat stretch;
}
.test1 {
	border-image-slice: 1 9;
}
.test2 {
	border-image-slice: 1 9 fill;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/10.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## border-image-width :id=biw

### 语法

**border-image-width**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<number>](/css-handbook/value-and-units/numeric?id=number) | auto ]{1,4}

**默认值**：1

**适用于**：所有元素，除 \<table>元素设置了 [border-collapse](/css-handbook/properties/table?id=bc) 属性值为 `collapse` 之外

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定图像边框的厚度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定图像边框的厚度。参照图像边框区域的大小（包含border和padding）进行换算。不允许负值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用浮点数指定图像边框的厚度。该值表示为border-width的倍数，若值为2，则使用值为2 * border-width。不允许负值

**auto**：如果auto值被设置，则border-image-width采用与border-image-slice相同的值

### 说明

**定义元素边框图像的厚度**

- 该属性用于指定使用多厚的边框来承载被裁剪后的图像
- 当该属性省略未定义时，因为默认值是1，所以该属性的计算值会是 1 * `border-width`，相当于会直接使用 [border-width](#bw) 的定义

<!-- tabs:start -->

#### **例子**

**html**

```html
<div class="demo">border-image-width 该属性省略未定义</div>
```

**css**

```css
.demo {
	border-width: 10px;
	border-style: solid;
	border-image-source: linear-gradient(red, yellow);
	border-image-slice: 5;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/11.html"
>
  浏览器不支持iframe
</iframe>

!> 这个例子中，`border-image-width` 省略未定义，所以 `border-image-width` 将会使用 `border-width` 所定义的值

从这个例子的可以看到，以下三种情况是等效的：

border-image-width 省略未定义；
border-image-width 属性值为1；
border-image-width 属性值为10px；

<!-- tabs:end -->

- 当该属性的值定义为auto，将会直接使用 [border-image-slice](#bis) 的定义

<!-- tabs:start -->

#### **例子**

**css**

```css
.demo {
	border: 10px solid;
	border-image-source: linear-gradient(red, yellow);
	border-image-slice: 5;
}
```

**css**

```css
.demo {
	border: 10px solid;
	border-image-source: linear-gradient(red, yellow);
	border-image-slice: 5;
	border-image-width: auto;
}
```

!> 上面 2 段代码是等效的

<!-- tabs:end -->

- 当该属性的值定义为百分比时，其垂直和水平方向的计算值要分别参照图像边框区域的的宽和高进行换算

<!-- tabs:start -->

#### **例子**

**html**

```html
<div class="demo">border-image-width 属性的值定义为百分比</div>
```

**css**

```css
.demo {
	width: 200px;
	height: 100px;
	padding: 20px;
	border: 10px solid;
	border-image-source: linear-gradient(red, yellow);
	border-image-slice: 5;
	border-image-width: 10%;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/12.html"
>
  浏览器不支持iframe
</iframe>

!> 此时，border-image-width的计算值是16px 26px。即，垂直方向：(100+20\*2+10\*2)*\10%=16px，水平方向：(200+20\*2+10\*2)\*10%=26px

<!-- tabs:end -->

- 对应的脚本特性为：`borderImageWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-width.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">用图片来做边框</div>
```

**css**

```css
.test {
	padding: 10px;
	border: 27px solid;
	border-image-source: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-width.png);
	border-image-slice: 27;
	border-image-width: auto;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/13.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## border-image-outset :id=bio

### 语法

**border-image-outset**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<number>](/css-handbook/value-and-units/numeric?id=number) ]{1,4}

**默认值**：0

**适用于**：所有元素，除 \<table>元素设置了 [border-collapse](/css-handbook/properties/table?id=bc) 属性值为 `collapse` 之外

**继承性**：无

**动画性**：否

**计算值**：数字或者绝对长度

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定边框图像向外偏移的距离。不允许负值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用浮点数指定边框图像向外偏移的距离。该值表示为[border-width](#bw)的倍数，若值为 2，则使用值为 `2 * border-width`。不允许负值

### 说明

**定义边框图像从边框边界向外偏移的距离**

- 该属性接受1~4个参数值，如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边；提供三个，第一个用于上，第二个用于左、右，第三个用于下；提供两个，第一个用于上、下，第二个用于左、右；只提供一个，同时作用于四边
- 该属性用于指定边框图像向外偏移的距离，如果值为10px，则图像在原本的基础上往外延展10px再显示，但并不会影响布局，因为它本身并不占据布局空间。这有点类似 [outline-offset](/css-handbook/properties/user-interface?id=ot)
- 对应的脚本特性为：`borderImageOutset`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-outset.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">用图片来做边框</div>
```

**css**

```css
.test{
	padding: 10px;
	border: 27px solid;
	border-image-source: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-outset.png);
	border-image-slice: 27;
	border-image-width: auto;
	border-image-outset: 10px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/14.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## border-image-repeat :id=bir

### 语法

**border-image-repeat**：[ stretch | repeat | round | space ]{1,2}

**默认值**：stretch

**适用于**：所有元素，除 \<table>元素设置了 [border-collapse](/css-handbook/properties/table?id=bc) 属性值为 `collapse` 之外

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**stretch**：将被分割的图像使用拉伸的方式来填充满边框图像区域

**repeat**：将被分割的图像使用重复平铺的方式来填充满边框图像区域。当图像碰到边界时，如果超过则被截断

**round**：与 repeat 关键字类似。不同在于，当背景图像不能以整数次平铺时，会根据情况缩放图像

**space**：与 repeat 关键字类似。不同在于，当背景图像不能以整数次平铺时，会用空白间隙填充在图像周围

### 说明

**定义分割图像怎样填充边框图像区域**

- 该属性接受1~2个参数值，如果提供两个参数，第一个用于水平方向，第二个用于垂直方向；只提供一个，则水平和垂直方向都应用该值
- 对应的脚本特性为：`borderImageRepeat`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-repeat.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo demo1">使用 stretch 关键字来拉伸填充</div>
<div class="demo demo2">使用 repeat 关键字来重复平铺填充</div>
<div class="demo demo3">使用 round 关键字来拉伸填充</div>
<div class="demo demo4">使用 space 关键字来拉伸填充</div>
```

**css**

```css
.demo{
	margin: 30px;
	padding: 10px;
	border: 27px solid;
	border-image-source: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/border-image-repeat.png);
	border-image-slice: 27;
}
.demo1 {
	border-image-repeat: stretch;
}
.demo2 {
	border-image-repeat: repeat;
}
.demo3 {
	border-image-repeat: round;
}
.demo4 {
	border-image-repeat: space;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/15.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background :id=background

### 语法

**background**：[ \<bg-layer>, ]* \<final-bg-layer>

\<bg-layer> = \<bg-image> || \<position> [ / \<bg-size> ]? || \<repeat-style> || \<attachment> || \<box> || \<box>

\<final-bg-layer> = \<bg-image> || \<position> [ / \<bg-size> ]? || \<repeat-style> || \<attachment> || \<box> || \<box> || `background-color`

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 取值

[background-image](#bai)：指定元素使用的背景图像。可以是图片路径或使用渐变创建的“背景图像”

[background-position](#bap)：指定背景图像在元素中出现的位置

[background-size](#bac)：指定背景图像尺寸

[background-repeat](#bar)：指定背景图像如何填充

[background-attachment](#baa)：定义滚动时背景图像相对于谁固定

[background-origin](#bao)：指定背景图像从元素的哪个区域作为显示的原点

[background-clip](#bacl)：指定背景图像向外裁剪的区域

[background-color](#bac)：指定背景颜色

### 说明

**简写属性。定义元素的背景特性（背景色[background-color](#bac)不能设置多组）**

- 一个元素可以设置多组背景图像，每组属性间使用逗号分隔
- 如果设置的多组背景图之间存在着交集（即存在着重叠关系），前面的背景图会覆盖在后面的背景图之上
- 对应的脚本特性为：`background`

**示例：假设要在同一个元素上定义3个背景图像**

```css
background: url(test1.jpg) no-repeat scroll 10px 20px/50px 60px content-box padding-box,
	   url(test2.jpg) no-repeat scroll 10px 20px/70px 90px content-box padding-box,
	   url(test3.jpg) no-repeat scroll 10px 20px/110px 130px content-box padding-box #aaa;
```

!> 注意，因为 `background-color` 不能设置多组，且前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住

等同于

```css
background-image: url(test1.jpg), url(test2.jpg), url(test3.jpg);
background-repeat: no-repeat, no-repeat, no-repeat;
background-attachment: scroll, scroll, scroll;
background-position: 10px 20px, 10px 20px, 10px 20px;
background-size: 50px 60px, 70px 90px, 110px 130px;
background-origin: content-box, content-box, content-box;
background-clip: padding-box, padding-box, padding-box;
background-color: #aaa;
```

如果定义了多个背景图片，而其他属性只有一个参数值，则表明所有背景图片的该属性都应用同一个参数值。据此可以对上面的例子进行缩写

```css
background-image: url(test1.jpg), url(test2.jpg), url(test3.jpg);
background-repeat: no-repeat;
background-attachment: scroll;
background-position: 10px 20px;
background-size: 50px 60px,70px 90px,110px 130px;
background-origin: content-box;
background-clip: padding-box;
background-color: #aaa;
```

如果定义了多个背景图片，而 `background-origin` 和 `background-clip` 设置了相同的值。可这样缩写

```css
background: url(test1.jpg) no-repeat scroll 10px 20px/50px 60px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px padding-box #aaa;
```

!> 这表示 `background-origin` 和 `background-clip` 都使用了 `padding-box` 参数值

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">定义多重背景图像</div>
```

**css**

```css
.test {
  width: 300px;
  height: 300px;
  background: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background.png) no-repeat 10px 20px/60px 60px padding-box,
        url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background.png) no-repeat 50px 60px/60px 80px padding-box,
        url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background.png) no-repeat 90px 100px/60px padding-box #aaa;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/16.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-color :id=bac

### 语法

**background-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：transparent

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**定义元素使用的背景颜色**

- 在同一组背景定义中，如果背景颜色和背景图像都设置了，那么背景图像会覆盖在背景颜色之上。
- 如果设置了 [background-image](#bai)，同时也建议设置 `background-color` 用于当背景图像不可见时保持与文本颜色有一定的对比度。
- 对应的脚本特性为：`backgroundColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-color.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">灰色背景</div>
```

**css**

```css
.test {
	padding: 10px;
	border: 1px solid #000;
	background-color: #808080;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/17.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-image :id=bai

### 语法

**background-image**：\<bg-image> [ , \<bg-image> ]\*

\<bg-image> = [\<image>](/css-handbook/value-and-units/color?id=image) | none

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**none**：无背景图

[\<image>](/css-handbook/value-and-units/color?id=image)：使用绝对或相对地址指或者创建渐变色来确定图像

### 说明

**定义元素使用的背景图像**

- 在同一组背景定义中，如果背景颜色和背景图像都设置了，那么背景图像会覆盖在背景颜色之上
- 如果设置了 `background-image` ，同时也建议设置 [background-color](#bac) 用于当背景图像不可见时保持与文本颜色有一定的对比度
- 对应的脚本特性为：`backgroundImage`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-image.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="url">
		<strong>使用url()引入背景图像</strong>
		<p>使用url()可以是绝对或相对路径</p>
	</li>
	<li class="gradient">
		<strong>使用渐变绘制背景图像</strong>
		<p>渐变种类有: linear-gradient, radial-gradient, repeating-linear-gradient, repeating-radial-gradient</p>
	</li>
	<li class="multiple">
		<strong>多重背景图</strong>
		<p>多重背景图可以是url()或gradient的混合方式</p>
	</li>
</ul>
```

**css**

```css
.test strong {
	font-size: 16px;
}
.test .url p {
	padding-top: 200px;
	background-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-image.png);
	background-repeat: no-repeat;
}
.test .gradient p {
	height: 100px;
	background-image: linear-gradient(to top, #45B5DA, #0382AD);
}
.test .multiple p {
	padding-top: 200px;
	background-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-image.png),
					  url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-image.png),
					  url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-image.png),
					  linear-gradient(to top, #45B5DA, #0382AD);
	background-repeat: no-repeat;
	background-position: 0 0,
						 100px 0,
						 200px 0;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/18.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-repeat :id=bar

### 语法

**background-repeat**：\<repeat-style> [ , \<repeat-style> ]\*

\<repeat-style> = `repeat-x` | `repeat-y` | [`repeat` | `no-repeat` | <span class="g-color-css3-new">space</span> | <span class="g-color-css3-new">round</span>]{1,<span class="g-color-css3-new">2</span>}

**默认值**：repeat

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**repeat-x**：背景图像在横向上平铺

**repeat-y**：背景图像在纵向上平铺

**repeat**：背景图像在横向和纵向平铺

**no-repeat**：背景图像不平铺

<span class="g-color-css3-new">round</span>：当背景图像不能以整数次平铺时，会根据情况缩放图像。（CSS3）

<span class="g-color-css3-new">space</span>：当背景图像不能以整数次平铺时，会用空白间隙填充在图像周围。（CSS3）

### 说明

**定义元素的背景图像如何填充**

- 该属性接受1~2个参数值，如果提供两个参数值，第一个用于横向，第二个用于纵向；提供一个，则同时应用于横向与纵向，特殊值 `repeat-x` 和 `repeat-y` 除外，因为 `repeat-x` 相当于 `repeat` `no-repeat`，`repeat-y` 相当于 `no-repeat` `repeat`，即其实 `repeat-x` 和 `repeat-y` 等价于提供了2个参数值
- 对应的脚本特性为：`backgroundRepeat`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-repeat.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">横向平铺背景图片</div>
```

**css**

```css
.test {
	padding-top: 200px;
	background-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-repeat.png);
	background-repeat: repeat-x;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/19.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-attachment :id=baa

### 语法

**background-attachment**：\<attachment> [ , \<attachment> ]\*

\<attachment> = `fixed` | `scroll` | <span class="g-color-css3-new">local</span>

**默认值**：scroll

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**fixed**：背景图像相对于视口（viewport）固定

**scroll**：背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动

<span class="g-color-css3-new">local</span>：背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。（CSS3）

### 说明

**定义滚动时背景图像相对于谁固定**

对应的脚本特性为：`backgroundAttachment`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-attachment.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<p>背景图像不随窗体内容滚动始终固定</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>文字内容</p>
<p>背景图像不随窗体内容滚动始终固定</p>
```

**css**

```css
body {
	background-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-attachment.png);
	background-repeat: no-repeat;
	background-position: 50% 200px;
	background-attachment: fixed;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/20.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-position :id=bap

### 语法

**background-position**：\<position> [ , \<position> ]\*

\<position> = [ `left` | `center` | `right` | `top` | `bottom` | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) ] | [ `left` | `center` | `right` | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) ] [ `top` | `center` | `bottom` | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) ] | [ `center` | [ `left` | `right` ] [ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) ]? ] && [ `center` | [ `top` | `bottom` ] [ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) ]? ]

**默认值**：0% 0%，效果等同于 `left` `top`

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定背景图像在元素中出现的位置。可以为负值。参考容器尺寸减去背景图尺寸进行换算

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定背景图像在元素中出现的位置。可以为负值

**center**：背景图像横向或纵向居中

**left**：背景图像从元素左边开始出现

**right**：背景图像从元素右边开始出现

**top**：背景图像从元素顶部开始出现

**bottom**：背景图像从元素底部开始出现

### 说明

**指定背景图像在元素中出现的位置**

- 该属性接受1~4个参数值
- 如果提供三或四个，每个 [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 或 [\<length>](/css-handbook/value-and-units/length?id=length) 偏移量之前都必须跟着一个边界关键字（即 `left` | `right` | `top` | `bottom`，不包括 `center` ），偏移量相对关键字位置进行偏移

**示例：假设要定义背景图像在容器中右下方，并且距离右边和底部各有20px**

```css
background: url(test1.jpg) no-repeat right 20px bottom 20px;
```

也可以设置3个参数值

```css
background: url(test1.jpg) no-repeat left bottom 10px;
```

!> 要注意的是：设置3个或4个值，偏移量前必须有边界关键字。也就是说，形如：10px bottom 20px，这样的参数设置是错误的，因为10px前面没有关键字

- 如果提供两个，第一个用于横坐标，第二个用于纵坐标
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为50%（即 `center` ）
- 对应的脚本特性为：`backgroundPosition`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-position.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">背景图水平垂直居中</div>
```

**css**

```css
.test {
	border: 1px solid #000;
	width: 400px;
	height: 500px;
	background-image: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-position.png);
	background-repeat: no-repeat;
	background-position: center;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/21.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-origin :id=bao

### 语法

**background-origin**：\<box> [ , \<box> ]\*

\<box> = `border-box` | `padding-box` | `content-box`

**默认值**：`padding-box`

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**border-box**：从border区域（含border）开始显示背景图像

**padding-box**：从padding区域（含padding）开始显示背景图像

**content-box**：从content区域开始显示背景图像

### 说明

**指定的背景图像计算 [background-position](#bap) 时的参考原点(位置)**

对应的脚本特性为：`backgroundOrigin`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-origin.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>background-origin</h1>
<ul class="test">
	<li class="border-box">
		<h2>border-box</h2>
		<p>从border区域（含border）开始显示背景图像</p>
	</li>
	<li class="padding-box">
		<h2>padding-box</h2>
		<p>从padding区域（含padding）开始显示背景图像</p>
	</li>
	<li class="content-box">
		<h2>content-box</h2>
		<p>从content区域开始显示背景图像</p>
	</li>
</ul>
```

**css**

```css
h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
}
p {
  border: 10px dashed #666;
  width: 200px;
  height: 200px;
  padding: 20px;
  background: #aaa url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-origin.png) no-repeat;
}
.border-box p {
  background-origin: border-box;
}
.padding-box p {
  background-origin: padding-box;
}
.content-box p {
  background-origin: content-box;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/22.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-clip :id=bacl

### 语法

**background-clip**：\<box> [ , \<box> ]\*

\<box> = `border-box` | `padding-box` | `content-box` | `text`

**默认值**：border-box

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**border-box**：从border区域（含border）开始向外裁剪背景

**padding-box**：从padding区域（含padding）开始向外裁剪背景

**content-box**：从content区域开始向外裁剪背景

**text**：从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果

### 说明

**指定对象的背景图像向外裁剪的区域**

对应的脚本特性为：`backgroundClip`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-clip.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>background-clip</h1>
<ul class="test">
	<li class="border-box">
		<h2>border-box</h2>
		<p>从border区域（不含border）开始向外裁剪背景</p>
	</li>
	<li class="padding-box">
		<h2>padding-box</h2>
		<p>从padding区域（不含padding）开始向外裁剪背景</p>
	</li>
	<li class="content-box">
		<h2>content-box</h2>
		<p>从content区域开始向外裁剪背景</p>
	</li>
	<li class="text">
		<h2>text</h2>
		<p>从前景内容的形状作为裁剪区域向外裁剪背景</p>
	</li>
</ul>
```

**css**

```css
h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
}
p {
  width: 200px;
  height: 200px;
  margin: 0;
  padding: 20px;
  border: 10px dashed #666;
  background: #aaa url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-clip.png) no-repeat;
  background-origin: border-box;
}
.border-box p {
  background-clip: border-box;
}
.padding-box p {
  background-clip: padding-box;
}
.content-box p {
  background-clip: content-box;
}
.text p {
  width: auto;
  height: auto;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 120px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/23.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## background-size :id=bas

### 语法

**background-size**：\<bg-size> [ , \<bg-size> ]\*

\<bg-size> = [ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | `auto` ]{1,2} | `cover` | `contain`

**默认值**：`auto`

**适用于**：所有元素

**继承性**：无

**动画性**：是，除非使用值为关键字

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定背景图像大小。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定背景图像大小。不允许负值

**auto**：背景图像的真实大小

**cover**：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器

**contain**：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内

### 说明

**定义背景图像的尺寸大小**

- 该属性接受1~2个参数值（ `cover`和 `contain` 关键字只接受一个）。如果提供两个，第一个用于定义背景图像宽度，第二个定义高度；只提供一个，该值用于定义背景图像的宽度，高度将依据图像宽度定义进行等比缩放计算得到

- 当属性值为百分比时，参照背景图像的 [background-origin](#bao) 区域大小进行换算（而不是包含块大小）

百分比参照计算

```css
.demo {
	width: 200px;
	height: 200px;
	padding: 20px;
	background-image: url(test.jpg);
	background-repeat: no-repeat;
	background-size: 50% 50%;
}
```

!> 因为background-origin的默认值为padding-box（即包含padding），所以此时，背景图像的计算值为：120px 120px

改变background-origin的取值

```css
.demo {
	background-origin: content-box;
}
```

!> 由于将background-origin设置为了content-box（即内容区域），所以此时，背景图像的计算值为：100px 100px

- 对应的脚本特性为：`backgroundSize`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-size.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>background-size</h1>
<ul class="test">
	<li class="cover">
		<h2>cover</h2>
		<p>将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。</p>
	</li>
	<li class="contain">
		<h2>contain</h2>
		<p>将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。</p>
	</li>
	<li class="length">
		<h2>length</h2>
		<p>自定义背景图像大小</p>
	</li>
</ul>
```

**css**

```css
h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
}
p {
  border: 10px dashed #666;
  width: 300px;
  height: 300px;
  padding: 20px;
  background: url(https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/bab/background-size.png) no-repeat;
}
.cover p {
  background-size: cover;
}
.contain p {
  background-size: contain;
}
.length p {
  background-size: 100px 140px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/bab/24.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
