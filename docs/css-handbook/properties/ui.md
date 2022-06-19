[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [用户界面](/css-handbook/properties/ui)

# 用户界面

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">appearance</span>](#appearance)|CSS3|无|设置或检索外观按照本地默认样式|
|[<span class="g-color-css3-new">text-overflow</span>](#to)|CSS3|无|当块容器 `overflow` 为非 `visible`时，定义内联内容溢出其块容器是否截断或者添加(...)及自定义字符|
|[outline](#outline)|CSS2|无|复合属性|设置或检索对象外的线条轮廓|
|[outline-width](#ow)|CSS2|无|设置或检索对象外的线条轮廓的宽度|
|[outline-style](#os)|CSS2|无|设置或检索对象外的线条轮廓的样式|
|[outline-color](#oc)|CSS2|无|设置或检索对象外的线条轮廓的颜色|
|[<span class="g-color-css3-new">outline-offset</span>](#oo)|CSS3|无|设置或检索对象外的线条轮廓偏移位置的数值|
|[<span class="g-color-css3-new">nav-index</span>](#ni)|CSS3|无|设置或检索对象的导航顺序|
|[<span class="g-color-css3-new">nav-up</span>](#nu)|CSS3|无|设置或检索对象的导航方向|
|[<span class="g-color-css3-new">nav-right</span>](#nr)|CSS3|无|设置或检索对象的导航方向|
|[<span class="g-color-css3-new">nav-down</span>](#nd)|CSS3|无|设置或检索对象的导航方向|
|[<span class="g-color-css3-new">nav-left</span>](#nl)|CSS3|无|设置或检索对象的导航方向|
|[cursor](#cursor)|CSS2|有|设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状|
|[<span class="g-color-css3-new">zoom</span>](#zoom)|CSS3|有|设置或检索对象的缩放比例|
|[<span class="g-color-css3-new">box-sizing</span>](#bs)|CSS3|无|设置或检索对象的盒模型组成模式|
|[<span class="g-color-css3-new">resize</span>](#resize)|CSS3|无|设置或检索对象的区域是否允许用户缩放，调节元素尺寸大小|
|[<span class="g-color-css3-new">ime-mode</span>](#im)|CSS3|无|设置或检索是否允许用户激活输入中文，韩文，日文等的输入法（IME）状态|
|[<span class="g-color-css3-new">user-select</span>](#us)|CSS3|无|设置或检索是否允许用户选中文本|
|[<span class="g-color-css3-new">pointer-events</span>](#pe)|CSS3|有|设置或检索在何时成为属性事件的target|

## appearance :id=appearance

### 语法

**appearance**：`none` | `button` | `button-bevel` ...

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：去除系统默认appearance的样式

**button**：以按钮的风格渲染

...

### 说明

**设置或检索外观按照本地默认样式**

- 如果你想去除元素本身的外观并进行自定义，可以设置为 `none`
- 对应的脚本特性为 `appearance`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/83.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
请选择要测试的appearance值：
<select id="choice"></select><br>
<span></span>
<script>
(function() {
	var $ = opener.$,
	choice = document.getElementById("choice");
	choice.onchange = function() {
		var val = this.value,
		span = $("span", document).css("appearance", val);
		span.html(val === span.css("appearance") ? "" : "不支持");
	}
	$("#value dt").each(function(i) {
		var val = this.innerHTML.replace(/[^\w-]/g, "");
		choice.options[i] = new Option(val, val);
	});
})();
</script>
```

<!-- tabs:end -->

---

## text-overflow :id=to

### 语法

**text-overflow**：`clip` | `ellipsis`

**默认值**：clip

**适用于**：块级容器元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**clip**：当内联内容溢出块容器时，将溢出部分裁切掉

**ellipsis**：当内联内容溢出块容器时，将溢出部分替换为（...）

### 说明

**当块容器 [overflow]() 为非 `visible` 时，定义内联内容溢出其块容器是否截断或者添加(...)及自定义字符**

对应的脚本特性为 `textOverflow`

要使得 `text-overflow` 属性生效，块容器必须显式定义 `overflow` 为非 `visible` 值，同时显式或者隐式的定义 `width` 为非 `auto` 值， `white-space` 为 `nowrap` 值

用代码来解释这段话

**case 1：**

```html
<style>
  .demo p {
    overflow: hidden;
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<div class="demo">
	<p>这是一句非常非常长的话，被用来做text-overflow属性测试。</p>
</div>
```

!> case 1，我们将text-overflow生效必备的3个属性： <' overflow '> , <' width '> 和 <' white-space '> 都直接定义在了内联内容的父级块容器上

**case 2：**

```html
<style>
 .demo {
    width: 200px;
    white-space: nowrap;
  }
 .demo p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
<div class="demo">
	<p>这是一句非常非常长的话，被用来做text-overflow属性测试。</p>
</div>
```

!> case 2，我们将 <' width '> 和 <' white-space '> 定义在了更外层的块容器上，但case 1和case 2的效果是一样的。因为这2个属性可以被继承

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/84.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="clip">
		<strong>clip: 直接将溢出的文字裁剪</strong>
		<p>测试用文字测试用文字测试用文字测试用文字测试用文字测试用文字</p>
	</li>
	<li class="ellipsis">
		<strong>ellipsis: 将溢出的文字显示省略标记（...）</strong>
		<p>测试用文字测试用文字测试用文字测试用文字测试用文字测试用文字</p>
	</li>
</ul>
```

**css**

```css
.test li {
	margin-top:10px;
}
.test .clip p {
	overflow:hidden;
	width:200px;
	white-space:nowrap;
	text-overflow:clip;
}
.test .ellipsis p {
	overflow:hidden;
	width:200px;
	white-space:nowrap;
	text-overflow:ellipsis;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/97.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## outline :id=outline

### 语法

**outline**：[outline-width](#ow) || [outline-style](#os) || [outline-color](#oc)

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**相关属性**: [outline-offset](#oo)

### 取值

[outline-width](#ow)：指定轮廓边框的宽度

[outline-style](#os)：指定轮廓边框的样式

[outline-color](#oc)：指定轮廓边框的颜色

### 说明

**复合属性。设置或检索对象外的线条轮廓** outline画在 [border]() 外面

- outlines相关属性不占据布局空间，不会影响元素的尺寸
- outlines可能是非矩形
- 不允许类似 [border]() 属性那样能将自身拆分为 `border-top` , `border-right` , `border-bottom` , `border-left`
- 对应的脚本特性为 `outline`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/84.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">注意边框线外面的红色轮廓</div>
```

**css**

```css
.test {
	width:100px;
	padding:10px;
	outline:2px solid #f00;
	border:3px solid #333;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/98.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## outline-width :id=ow

### 语法

**outline-width**：[\<length>](/css-handbook/value-and-units/length?id=length) | `thin` | `medium` | `thick`

**默认值**：medium

**适用于**：所有元素

**继承性**：无

**动画性**：当取值为 [\<length>](/css-handbook/value-and-units/length?id=length) 时

**计算值**：绝对长度；如果 [outline-style](#os) 的值为none时，则计算值为0

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义轮廓的厚度。不允许负值

**medium**：定义默认宽度的轮廓

**thin**：定义比默认宽度细的轮廓

**thick**：定义比默认宽度粗的轮廓

### 说明

**设置或检索对象外的线条轮廓的宽度。参阅 [outline](#outline) 属性**

对应的脚本特性为 `outlineWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/84.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
  注意边框线外面的红色轮廓<br />
  outline-width:10px;
</div>
```

**css**

```css
.test {
	width:200px;
	padding:10px;
	outline-width:10px;
	outline-style:solid;
	outline-color:#f00;
	border:3px solid #333;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/99.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## outline-style :id=os

### 语法

**outline-style**：`none` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset`

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：无轮廓。与任何指定的 [outline-width](#ow) 值无关

**dotted**：点状轮廓

**dashed**：虚线轮廓

**solid**：实线轮廓

**double**：双线轮廓。两条单线与其间隔的和等于指定的 [outline-width](#ow) 值

**groove**：3D凹槽轮廓

**ridge**：3D凸槽轮廓

**inset**：3D凹边轮廓

**outset**：3D凸边轮廓

### 说明

**设置或检索对象外的线条轮廓的样式**

对应的脚本特性为 `outlineStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/84.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
  注意边框线外面的虚线轮廓<br />
  outline-style:dashed;
</div>
```

**css**

```css
.test {
	width:200px;
	padding:10px;
	outline-width:1px;
	outline-style:dashed;
	outline-color:#f00;
	border:3px solid #333;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/100.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## outline-color :id=oc

### 语法

**outline-color**：[\<color>](/css-handbook/value-and-units/color?id=color) | `invert`

**默认值**：invert

**适用于**：所有元素

**继承性**：无

**动画性**：当取值为 [\<color>](/css-handbook/value-and-units/color?id=color) 时

**计算值**：invert; 当指定为半透明时则对应一个 rgba() 计算值；如果非半透明值则对应一个 rgb() 计算值，transparent 对应 rgb(0,0,0,0)

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

**invert**：使用背景色的反色。该参数值目前仅在IE及Opera下有效

### 说明

**设置或检索对象外的线条轮廓的颜色**

对应的脚本特性为 `outlineColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/84.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
  注意边框线外面的橙色轮廓<br />
  outline-color:#f90;
</div>
```

**css**

```css
.test {
	width:200px;
	padding:10px;
	outline-width:5px;
	outline-style:solid;
	outline-color:#f90;
	border:3px solid #333;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/101.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## outline-offset :id=oo

### 语法

**outline-offset**：[\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：0

**适用于**：所有元素

**继承性**：无

**动画性**：当取值为 [\<length>](/css-handbook/value-and-units/length?id=length) 时

**计算值**：绝对长度

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义轮廓偏移。允许负值

### 说明

**设置或检索对象外的线条轮廓偏移容器的值**

- `outline-offset` 是以 `border` 边界作为参考点的，从0开始，正值从 `border` 边界往外延，负值从 `border` 边界往里缩
- 对应的脚本特性为 `outlineOffset`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/85.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
  注意虚线轮廓偏移容器的距离<br />
  outline-offset:4px;
</div>
```

**css**

```css
.test {
	width:220px;
	padding:10px;
	outline:1px dashed #333;
	outline-offset:4px;
	border:3px solid #333;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/102.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## nav-index :id=ni

### 语法

**nav-index**：`auto` | [\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：auto

**适用于**：所有 `enabled` 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**相关属性**: [nav-up](#nu) || [nav-right](#nr) || [nav-down](#nd) || [nav-left](#nl)

### 取值

**auto**：元素的导航焦点顺序由客户端自动分配

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用浮点数来定义元素的导航焦点顺序。若某元素的该值等于1则意味着该元素最先被导航。当若干个元素的nav-index值相同时，则按照文档的先后顺序进行导航

### 说明

**设置或检索对象的导航顺序**

- 该属性是HTML4/XHTML1中标签属性 `tabindex` 的替代品
- 只有支持 `nav-index` 属性的元素才能参与导航排序
- 被禁用的元素将不参与导航排序
- <span style="color: red;">该属性有被w3c标准移除的风险</span>
- 对应的脚本特性为 `navIndex`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/86.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
```

**css**

```css
html,body {
	margin:0;
}
button {
	position:absolute;
}
button#b1 {
	top:0;
	left:50%;
	nav-index:1;
	nav-right:#b2;
	nav-left:#b4;
	nav-down:#b2;
	nav-up:#b4;
}
button#b2 {
	top:50%;
	right:0;
	nav-index:2;
	nav-right:#b3;
	nav-left:#b1;
	nav-down:#b3;
	nav-up:#b1;
}
button#b3 {
	left:50%;
	bottom:0;
	nav-index:3;
	nav-right:#b4;
	nav-left:#b2;
	nav-down:#b4;
	nav-up:#b2;
}
button#b4 {
	top:50%;
	left:0;
	nav-index:4;
	nav-right:#b1;
	nav-left:#b3;
	nav-down:#b1;
	nav-up:#b3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/103.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## nav-up :id=nu

### 语法

**nav-up**：`auto` | \<id> [ `current` | `root` | \<target-name> ]?

**默认值**：auto

**适用于**：所有 enabled 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**相关属性**: [nav-index](#ni) || [nav-right](#nr) || [nav-down](#nd) || [nav-left](#nl)

### 取值

**auto**：默认顺序

\<id>：被导航元素的id

\<target-name>：框架目标页面之间的元素焦点导航

### 说明

**设置或检索对象的导航方向**

对应的脚本特性为 `navUp`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/86.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
```

**css**

```css
html,body {
	margin:0;
}
button {
	position:absolute;
}
button#b1 {
	top:0;
	left:50%;
	nav-index:1;
	nav-right:#b2;
	nav-left:#b4;
	nav-down:#b2;
	nav-up:#b4;
}
button#b2 {
	top:50%;
	right:0;
	nav-index:2;
	nav-right:#b3;
	nav-left:#b1;
	nav-down:#b3;
	nav-up:#b1;
}
button#b3 {
	left:50%;
	bottom:0;
	nav-index:3;
	nav-right:#b4;
	nav-left:#b2;
	nav-down:#b4;
	nav-up:#b2;
}
button#b4 {
	top:50%;
	left:0;
	nav-index:4;
	nav-right:#b1;
	nav-left:#b3;
	nav-down:#b1;
	nav-up:#b3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/103.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## nav-right :id=nr

### 语法

**nav-right**：`auto` | \<id> [ `current` | `root` | \<target-name> ]?

**默认值**：auto

**适用于**：所有 `enabled` 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**相关属性**: [nav-index](#ni) || [nav-up](#nu) || [nav-down](#nd) || [nav-left](#nl)

### 取值

**auto**：默认顺序

\<id>：被导航元素的id

\<target-name>：框架目标页面之间的元素焦点导航

### 说明

**设置或检索对象的导航方向**

对应的脚本特性为 `navUp`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/86.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
```

**css**

```css
html,body {
	margin:0;
}
button {
	position:absolute;
}
button#b1 {
	top:0;
	left:50%;
	nav-index:1;
	nav-right:#b2;
	nav-left:#b4;
	nav-down:#b2;
	nav-up:#b4;
}
button#b2 {
	top:50%;
	right:0;
	nav-index:2;
	nav-right:#b3;
	nav-left:#b1;
	nav-down:#b3;
	nav-up:#b1;
}
button#b3 {
	left:50%;
	bottom:0;
	nav-index:3;
	nav-right:#b4;
	nav-left:#b2;
	nav-down:#b4;
	nav-up:#b2;
}
button#b4 {
	top:50%;
	left:0;
	nav-index:4;
	nav-right:#b1;
	nav-left:#b3;
	nav-down:#b1;
	nav-up:#b3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/103.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## nav-down :id=nd

### 语法

**nav-down**：`auto` | \<id> [ `current` | `root` | \<target-name> ]?

**默认值**：auto

**适用于**：所有 `enabled` 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**相关属性**: [nav-index](#ni) || [nav-up](#nu) || [nav-right](#nr) || [nav-left](#nl)

### 取值

**auto**：默认顺序

\<id>：被导航元素的id

\<target-name>：框架目标页面之间的元素焦点导航

### 说明

**设置或检索对象的导航方向**

对应的脚本特性为 `navDown`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/86.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
```

**css**

```css
html,body {
	margin:0;
}
button {
	position:absolute;
}
button#b1 {
	top:0;
	left:50%;
	nav-index:1;
	nav-right:#b2;
	nav-left:#b4;
	nav-down:#b2;
	nav-up:#b4;
}
button#b2 {
	top:50%;
	right:0;
	nav-index:2;
	nav-right:#b3;
	nav-left:#b1;
	nav-down:#b3;
	nav-up:#b1;
}
button#b3 {
	left:50%;
	bottom:0;
	nav-index:3;
	nav-right:#b4;
	nav-left:#b2;
	nav-down:#b4;
	nav-up:#b2;
}
button#b4 {
	top:50%;
	left:0;
	nav-index:4;
	nav-right:#b1;
	nav-left:#b3;
	nav-down:#b1;
	nav-up:#b3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/103.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---


## nav-left :id=nl

### 语法

**nav-left**：`auto` | \<id> [ `current` | `root` | \<target-name> ]?

**默认值**：auto

**适用于**：所有 `enabled` 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**相关属性**: [nav-index](#ni) || [nav-up](#nu) || [nav-right](#nr) || [nav-down](#nl)

### 取值

**auto**：默认顺序

\<id>：被导航元素的id

\<target-name>：框架目标页面之间的元素焦点导航

### 说明

**设置或检索对象的导航方向**

对应的脚本特性为 `navLeft`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/86.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<button id="b1">button1</button>
	<button id="b2">button2</button>
	<button id="b3">button3</button>
	<button id="b4">button4</button>
</div>
```

**css**

```css
html,body {
	margin:0;
}
button {
	position:absolute;
}
button#b1 {
	top:0;
	left:50%;
	nav-index:1;
	nav-right:#b2;
	nav-left:#b4;
	nav-down:#b2;
	nav-up:#b4;
}
button#b2 {
	top:50%;
	right:0;
	nav-index:2;
	nav-right:#b3;
	nav-left:#b1;
	nav-down:#b3;
	nav-up:#b1;
}
button#b3 {
	left:50%;
	bottom:0;
	nav-index:3;
	nav-right:#b4;
	nav-left:#b2;
	nav-down:#b4;
	nav-up:#b2;
}
button#b4 {
	top:50%;
	left:0;
	nav-index:4;
	nav-right:#b1;
	nav-left:#b3;
	nav-down:#b1;
	nav-up:#b3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/103.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## cursor :id=cursor

### 语法

**cursor**：[[\<url>](/css-handbook/value-and-units/textual?id=url) [\<x> \<y>]?,]*[ `auto` | `default` | `none` | `context-menu` | `help` | `pointer` | `progress` | `wait` | `cell` | `crosshair` | `text` | `vertical-text` | `alias` | `copy` | `move` | `no-drop` | `not-allowed` | `e-resize` | `n-resize` | `ne-resize` | `nw-resize` | `s-resize` | `se-resize` | `sw-resize` | `w-resize` | `ew-resize` | `ns-resize` | `nesw-resize` | `nwse-resize` | `col-resize` | `row-resize` | `all-scroll` | `zoom-in` | `zoom-out` | `grab` |` grabbing`]

**默认值**：auto

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

[\<url>](/css-handbook/value-and-units/textual?id=url)：使用绝对或者相对地址引入外部图像作为光标形状

[\<url>](/css-handbook/value-and-units/textual?id=url) \<x> \<y>：通过\<x> \<y>两个值指定具体需要显示的图像位置。类似 [background-position]()

**auto**：用户代理基于当前上下文决定光标形状

**default**：相关平台的默认光标形状，通常为箭头

**none**：没有光标形状

其他待完成...

### 说明

**设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状**

- 使用自定义图像作为光标类型，IE, Opera只支持*.cur等特定的图片格式；Firefox, Chrome, Safari既支持特定图片类型也支持常见的*.png, *.gif, *.jpg等图片格式
- 对应的脚本特性为 `cursor`

**cursor的属性值可以是一个序列**

```css
:link,:visited {
	cursor: url(example.svg#linkcursor),
    url(hyper.cur),
    url(hyper.png) 2 3,
    pointer;
}
```

!> 本例用来给所有的超链接定义光标类型，客户端如果不支持SVG类型的光标，则使用下个"hyper.cur"；如果cur类型也不支持，则使用下个"hyper.png"；依次类推

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/87.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<table class="test">
	<caption>cursor光标类型</caption>
	<tbody>
		<tr>
			<td class="auto">auto</td>
			<td class="default">default</td>
			<td class="none">none</td>
			<td class="context-menu">context-menu</td>
			<td class="help">help</td>
			<td class="pointer">pointer</td>
			<td class="progress">progress</td>
		</tr>
		<tr>
			<td class="wait">wait</td>
			<td class="cell">cell</td>
			<td class="crosshair">crosshair</td>
			<td class="text">text</td>
			<td class="vertical-text">vertical-text</td>
			<td class="alias">alias</td>
			<td class="copy">copy</td>
		</tr>
		<tr>
			<td class="move">move</td>
			<td class="no-drop">no-drop</td>
			<td class="not-allowed">not-allowed</td>
			<td class="e-resize">e-resize</td>
			<td class="n-resize">n-resize</td>
			<td class="ne-resize">ne-resize</td>
			<td class="nw-resize">nw-resize</td>
		</tr>
		<tr>
			<td class="s-resize">s-resize</td>
			<td class="se-resize">se-resize</td>
			<td class="sw-resize">sw-resize</td>
			<td class="w-resize">w-resize</td>
			<td class="ew-resize">ew-resize</td>
			<td class="ns-resize">ns-resize</td>
			<td class="nesw-resize">nesw-resize</td>
		</tr>
		<tr>
			<td class="nwse-resize">nwse-resize</td>
			<td class="col-resize">col-resize</td>
			<td class="row-resize">row-resize</td>
			<td class="all-scroll">all-scroll</td>
			<td class="url">url</td>
			<td class="zoom-in">zoom-in</td>
			<td class="zoom-out">zoom-out</td>
		</tr>
	</tbody>
</table>
```

**css**

```css
.test {
	width:400px;
	border-collapse:collapse;
	font:14px/1.5 georgia,arial,serif,sans-serif;
}
.test td {
	padding:2px 10px;
	border:1px solid #ddd;
}
.test td:hover {
	background:#eee;
}
.auto {
	cursor:auto;
}
.default {
	cursor:default;
}
.none {
	cursor:none;
}
.context-menu {
	cursor:context-menu;
}
.help {
	cursor:help;
}
.pointer {
	cursor:pointer;
}
.progress {
	cursor:progress;
}
.wait {
	cursor:wait;
}
.cell {
	cursor:cell;
}
.crosshair {
	cursor:crosshair;
}
.text {
	cursor:text;
}
.vertical-text {
	cursor:vertical-text;
}
.alias {
	cursor:alias;
}
.copy {
	cursor:copy;
}
.move {
	cursor:move;
}
.no-drop {
	cursor:no-drop;
}
.not-allowed {
	cursor:not-allowed;
}
.e-resize {
	cursor:e-resize;
}
.n-resize {
	cursor:n-resize;
}
.ne-resize {
	cursor:ne-resize;
}
.nw-resize {
	cursor:nw-resize;
}
.s-resize {
	cursor:s-resize;
}
.se-resize {
	cursor:se-resize;
}
.sw-resize {
	cursor:sw-resize;
}
.w-resize {
	cursor:w-resize;
}
.ew-resize {
	cursor:ew-resize;
}
.ns-resize {
	cursor:ns-resize;
}
.nesw-resize {
	cursor:nesw-resize;
}
.nwse-resize {
	cursor:nwse-resize;
}
.col-resize {
	cursor:col-resize;
}
.row-resize {
	cursor:row-resize;
}
.all-scroll {
	cursor:all-scroll;
}
.zoom-in {
	cursor:zoom-in;
}
.zoom-out {
	cursor:zoom-out;
}
.url {
	cursor:url(skin/cursor.gif),url(skin/cursor.png),url(skin/cursor.jpg),pointer;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/104.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## zoom :id=zoom

### 语法

**zoom**：`normal` | [\<number>](/css-handbook/value-and-units/numeric?id=number) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：绝对长度

### 取值

normal：使用对象的实际尺寸

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用浮点数来定义缩放比例。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义缩放比例。不允许负值

### 说明

**设置或检索对象的缩放比例**

对应的脚本特性为 `zoom`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/88.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>zoom:normal</h1>
<div class="test">zoom:normal</div>

<h1>zoom:5</h1>
<div class="test2">zoom:5</div>

<h1>zoom:300%</h1>
<div class="test3">zoom:300%</div>
```

**css**

```css
body {
	line-height:1.5;
}
h1 {
	margin:0;
	font-size:16px;
	font-family:Arial;
}
.test {
	zoom:normal;
}
.test2 {
	zoom:5;
}
.test3 {
	zoom:300%;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/105.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## box-sizing :id=bs

### 语法

**box-sizing**：`content-box` | `border-box`

**默认值**：content-box

**适用于**：所有接受 [width]() 和 [height]() 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**content-box**：`padding` 和 `border` 不被包含在定义的 `width` 和 `height` 之内。对象的实际宽度等于设置的 `width` 值和 `border`、`padding` 之和，即 ( Element width = `width` + `border` + `padding` ) **此属性表现为标准模式下的盒模型**

border-box：`padding` 和 `border` 被包含在定义的 `width` 和 `height` 之内。对象的实际宽度就等于设置的 `width` 值，即使定义有 `border` 和 `padding` 也不会改变对象的实际宽度，即 ( Element width = `width` ) **此属性表现为怪异模式下的盒模型**

### 说明

**设置或检索对象的盒模型组成模式**

**标准模式**

```css
.test1{
	box-sizing: content-box;
	width: 200px;
	padding: 10px;
	border: 15px solid #eee;
}
```

![标准模式](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/89.png)

**怪异模式**

```css
.test1{
	box-sizing:border-box;
	width:200px;
	padding:10px;
	border:15px solid #eee;
}
```

![怪异模式](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/90.png)

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/91.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">content-box</div>
<div class="test2">border-box</div>
```

**css**

```css
.test {
	width:200px;
	height:70px;
	padding:10px;
	border:15px solid #999;
	-moz-box-sizing:content-box;
	-ms-box-sizing:content-box;
	box-sizing:content-box;
	background:#eee;
}
.test2 {
	width:200px;
	height:70px;
	padding:10px;
	border:15px solid #999;
	-moz-box-sizing:border-box;
	-ms-box-sizing:border-box;
	box-sizing:border-box;
	background:#eee;
	margin-top:20px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/106.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## resize :id=resize

### 语法

**resize**：`none` | `both` | `horizontal` | `vertical`

**默认值**：none

**适用于**：所有 [overflow]() 设置为非 `visible` 的元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：不允许用户调整元素大小

**both**：用户可以调节元素的宽度和高度

**horizontal**：用户可以调节元素的宽度

**vertical**：用户可以调节元素的高度

### 说明

**设置或检索对象的区域是否允许用户缩放，调节元素尺寸大小**

- 如果希望此属性生效，需要设置对象的 [overflow]() 属性，值可以是 `auto`, `hidden` 或 `scroll`
- 对应的脚本特性为 `resize`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/92.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<ul>
		<li>新闻列表</li>
		<li>新闻列表</li>
		<li>新闻列表</li>
	</ul>
</div>
```

**css**

```css
.test {
	overflow:auto;
	width:200px;
	height:100px;
	resize:both;
	background:#eee;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/107.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## ime-mode :id=im

### 语法

**ime-mode**：`auto` | `normal` | `active` | `inactive` | `disabled`

**默认值**：auto

**适用于**：所有输入文本框

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：不影响IME(input method editor)的状态

**normal**：正常的IME状态

**active**：指定所有使用ime输入的字符。即激活本地语言输入法。用户仍可以撤销激活ime

**inactive**：指定所有不使用ime输入的字符。即激活非本地语言。用户仍可以撤销激活ime

**disabled**：完全禁用ime。对于有焦点的控件(如输入框)，用户不可以激活ime

### 说明

**设置或检索是否允许用户激活输入中文，韩文，日文等的输入法（IME）状态**

- 该属性用于控制文本域输入法状态
- <span style="color: red;">该属性有被w3c标准移除的风险</span>
- 对应的脚本特性为 `imeMode`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/93.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1 class="title">在下列输入框输入试试每个值的作用：</h1>
<form id="test" action="#" method="post">
	<fieldset>
		<legend>简单的表单</legend>
		<ul>
			<li><label>auto：<input type="text" class="writebox auto" /></label></li>
			<li><label>normal：<input type="text" class="writebox normal" /></label></li>
			<li><label>active：<input type="text" class="writebox active" /></label></li>
			<li><label>inactive：<input type="text" class="writebox inactive" /></label></li>
			<li><label>disabled：<input type="text" class="writebox disabled" /></label></li>
		</ul>
	</fieldset>
</form>
```

**css**

```css
#test{
	padding:50px;
	font:14px/1.231 georgia,宋体,arial,verdana,helvetica,sans-serif;
}
#test fieldset{
	margin:0;
	padding:10px;
	border-radius:5px;
}
#test fieldset legend{
	padding:3px 6px;
	border-radius:3px;
	background:#ddd;
}
#test ul{
	list-style:none;
	margin:0;
	padding:0;
}
#test li{
	padding:5px 10px;
}
#test .writebox{
	position:relative;
	overflow:visible;
	outline:none;
	width:200px;
	padding:4px 3px 5px;
	border:1px solid #999;
	border-radius:3px;
	box-shadow:1px 1px 2px rgba(0,0,0,.2) inset;
	background-color:#FFFFFF;
	color:#666666;
	font:14px/1.231 georgia,宋体,arial,verdana,helvetica,sans-serif;
}
#test .writebox:hover{
	border-color:#777;
	box-shadow:1px 1px 2px rgba(0,0,0,.4) inset;
}
#test .writebox:focus{
	border-color:#666;
	box-shadow:0 0 5px rgba(0,0,0,.5);
}
.auto{
	ime-mode:auto;
}
.normal{
	ime-mode:normal;
}
.active{
	ime-mode:active;
}
.inactive{
	ime-mode:inactive;
}
.disabled{
	ime-mode:disabled;
}
.title{
	font:bold 16px/1.5 georgia,simsun,sans-serif;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/108.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## user-select :id=us

### 语法

**user-select**：`none` | `text` | `all` | `element`

**默认值**：text

**适用于**：除替换元素外的所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：文本不能被选择

**text**：可以选择文本

**all**：当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素

**element**：可以选择文本，但选择范围受元素边界的约束

### 说明

**设置或检索是否允许用户选中文本**

- IE6-9不支持该属性，但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果；Safari和Chrome也支持该标签属性；
直到Opera12.5仍然不支持该属性，但和IE6-9一样，也支持使用私有的标签属性 unselectable="on" 来达到 user-select:none 的效果；unselectable 的另一个值是 off
- 除Chrome和Safari外，在其它浏览器中，如果将文本设置为 -ms-user-select:none;，则用户将无法在该文本块中开始选择文本。不过，如果用户在页面的其他区域开始选择文本，则用户仍然可以继续选择将文本设置为 -ms-user-select:none; 的区域文本
- 对应的脚本特性为 `userSelect`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/94.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test" onselectstart="return false;" unselectable="on">选择我试试，你会发现怎么也选择不到我，哈哈哈哈</div>
```

**css**

```css
.test {
	padding:10px;
	-webkit-user-select:none;
	-moz-user-select:none;
	-o-user-select:none;
	user-select:none;
	background:#eee;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/109.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## pointer-events :id=pe

### 语法

**pointer-events**：`auto` | `none` | `visiblepainted` | `visiblefill` | `visiblestroke` | `visible` | `painted` | `fill` | `stroke` | `all`

**默认值**：auto

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**auto**：与 `pointer-events` 属性未指定时的表现效果相同。在svg内容上与visiblepainted值相同

**none**：元素永远不会成为鼠标事件的target。但是，当其后代元素的 `pointer-events` 属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶触发父元素的事件侦听器

**其他值只能应用在SVG上**

### 说明

**设置或检索在何时成为属性事件的target**

- 使用 `pointer-events` 来阻止元素成为鼠标事件目标不一定意味着元素上的事件侦听器永不会触发。如果元素后代明确指定了 `pointer-events` 属性并允许其成为鼠标事件的目标，那么指向该元素的任何事件在事件传播过程中都将通过父元素，并以适当的方式触发其上的事件侦听器。当然位于屏幕上在父元素上但不在后代元素上的鼠标活动都不会被父元素和后代元素捕获（将会穿过父元素而指向位于其下面的元素）
- 对应的脚本特性为 `pointerEvents`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/95.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li><a href="https://developer.mozilla.org/">MDN</a></li>
	<li><a href="http://example.com">一个不能点击的链接</a></li>
</ul>
```

**css**

```css
a[href="http://example.com"] {
	pointer-events: none;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/110.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
