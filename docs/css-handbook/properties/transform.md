[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [变换](/css-handbook/properties/transform)

# 变换

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">transform</span>](#transform)|CSS3|无|检索或设置对象的变换|
|[<span class="g-color-css3-new">transform-origin</span>](#to)|CSS3|无|检索或设置对象中的变换所参照的原点|
|[<span class="g-color-css3-new">transform-style</span>](#ts)|CSS3|无|指定某元素的子元素是否位于三维空间内|
|[<span class="g-color-css3-new">perspective</span>](#perspective)|CSS3|无|指定观察者与「z=0」平面的距离|
|[<span class="g-color-css3-new">perspective-origin</span>](#po)|CSS3|无|指定透视点的位置|
|[<span class="g-color-css3-new">backface-visibility</span>](#bv)|CSS3|无|指定元素背面面向用户时是否可见|

## transform :id=transform

### 语法

**transform**：none | \<transform-function>+

**transform-function list**:

**matrix()** = matrix( [\<number>](/css-handbook/value-and-units/numeric?id=number) [, [\<number>](/css-handbook/value-and-units/numeric?id=number) ]{5,5})

**matrix3d()** = matrix3d([\<number>](/css-handbook/value-and-units/numeric?id=number) [, [\<number>](/css-handbook/value-and-units/numeric?id=number) ]{15,15})

**translate()** = translate(\<translation-value>[,\<translation-value>]?)

**translate3d()** = translate3d(\<translation-value>,\<translation-value>,[\<length>](/css-handbook/value-and-units/length?id=length))

**translatex()** = translatex(\<translation-value>)

**translatey()** = translatey(\<translation-value>)

**translatez()** = translatez([\<length>](/css-handbook/value-and-units/length?id=length))

**rotate()** = rotate([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**rotate3d()** = rotate3d([\<number>](/css-handbook/value-and-units/numeric?id=number),[\<number>](/css-handbook/value-and-units/numeric?id=number),[\<number>](/css-handbook/value-and-units/numeric?id=number),[\<angle>](/css-handbook/value-and-units/angle?id=angle))

**rotatex()**= rotatex([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**rotatey()** = rotatey([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**rotatez()** = rotatez([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**scale()** = scale([\<number>](/css-handbook/value-and-units/numeric?id=number)[,[\<number>](/css-handbook/value-and-units/numeric?id=number)]?)

**scale3d()** = scale3d([\<number>](/css-handbook/value-and-units/numeric?id=number),[\<number>](/css-handbook/value-and-units/numeric?id=number),[\<number>](/css-handbook/value-and-units/numeric?id=number))

**scalex()** = scalex([\<number>](/css-handbook/value-and-units/numeric?id=number))

**scaley()** = scaley([\<number>](/css-handbook/value-and-units/numeric?id=number))

**scalez()** = scalez([\<number>](/css-handbook/value-and-units/numeric?id=number))

**skew()** = skew([\<angle>](/css-handbook/value-and-units/angle?id=angle)[,[\<angle>](/css-handbook/value-and-units/angle?id=angle)]?)

**skewx()** = skewx([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**skewy()** = skewy([\<angle>](/css-handbook/value-and-units/angle?id=angle))

**perspective()** = perspective([\<length>](/css-handbook/value-and-units/length?id=length))

\<translation-value> = [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：none

**适用于**：所有块级元素及某些内联元素

**继承性**：无

**动画性**：是

**计算值**：指定值，但相对长度会转换为绝对长度

**媒体**：视觉

### 取值

**none**：无转换

<span style="color: red;">2D Transform Functions：</span>

**matrix()：**以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个\[a,b,c,d,e,f\]变换矩阵

**translate():** 指定对象的2D translation（2D平移）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0

**translatex()：**指定对象X轴（水平方向）的平移

**translatey()：**指定对象Y轴（垂直方向）的平移

**rotate()：**指定对象的2D rotation（2D旋转），需先有 <' transform-origin '> 属性的定义

**scale()：**指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值

**scalex()：**指定对象X轴的（水平方向）缩放

**scaley()：**指定对象Y轴的（垂直方向）缩放

**skew()：**指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0

**skewx()：**指定对象X轴的（水平方向）扭曲

**skewy()：**指定对象Y轴的（垂直方向）扭曲

<span style="color: red;">3D Transform Functions：</span>

**matrix3d()：**以一个4x4矩阵的形式指定一个3D变换

**translate3d()：**指定对象的3D位移。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略

**translatez()：**指定对象Z轴的平移

**rotate3d()：**指定对象的3D旋转角度，其中前3个参数分别表示旋转的方向x,y,z，第4个参数表示旋转的角度，参数不允许省略

**rotatex()：**指定对象在x轴上的旋转角度

**rotatey()：**指定对象在y轴上的旋转角度

**rotatez()：**指定对象在z轴上的旋转角度

**scale3d()：**指定对象的3D缩放。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略

**scalez()：**指定对象的z轴缩放

**perspective()：**指定透视距离

### 说明

**设置或检索对象的转换**

对应的脚本特性为 `transform`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>矩阵变换：matrix()</h1>
<ul class="test">
	<li class="matrix">
		<p>transform:matrix(0,1,1,1,10,10)</p>
	</li>
</ul>
<h1>平移：translate(), translateX(), translateY()</h1>
<ul class="test">
	<li class="translate">
		<p>transform:translate(5%,10px)</p>
	</li>
	<li class="translate2">
		<p>transform:translate(-10px,-10px)</p>
	</li>
	<li class="translateX">
		<p>transform:translateX(20px)</p>
	</li>
	<li class="translate3">
		<p>transform:translate(20px)</p>
	</li>
	<li class="translateY">
		<p>transform:translateY(10px)</p>
	</li>
	<li class="translate4">
		<p>transform:translate(0,10px)</p>
	</li>
</ul>
<h1>旋转：rotate()</h1>
<ul class="test">
	<li class="rotate">
		<p>transform:rotate(-15deg)</p>
	</li>
	<li class="rotate2">
		<p>transform:rotate(15deg)</p>
	</li>
</ul>
<h1>缩放：scale()</h1>
<ul class="test">
	<li class="scale">
		<p>transform:scale(.8)</p>
	</li>
	<li class="scale2">
		<p>transform:scale(1.2)</p>
	</li>
</ul>
<h1>扭曲：skew()</h1>
<ul class="test">
	<li class="skew">
		<p>transform:skew(-5deg)</p>
	</li>
	<li class="skew2">
		<p>transform:skew(-5deg,-5deg)</p>
	</li>
</ul>
```

**css**

```css
h1 {
	clear:both;
	padding-top:10px;
	font-size:16px;
	font-family:Arial;
}
.test {
	zoom:1;
	width:700px;
	margin:0;
	padding:0;
	list-style:none;
}
.test li {
	float:left;
	margin:20px 30px 0 0;
	border:1px solid #000;
}
.test li p {
	width:300px;
	height:100px;
	margin:0;
	background:#ddd;
}
.test .matrix {
	transform:matrix(0,1,1,1,10,10);
}
.test .translate p {
	transform:translate(10px,10px);
}
.test .translate2 p {
	transform:translate(-10px,-10px);
}
.test .translateX p {
	transform:translateX(20px);
}
.test .translate3 p {
	transform:translate(20px);
}
.test .translateY p {
	transform:translateY(10px);
}
.test .translate4 p {
	transform:translate(0,10px);
}
.test .rotate {
	transform:rotate(-5deg);
}
.test .rotate2 {
	transform:rotate(5deg);
}
.test .scale {
	transform:scale(.8);
}
.test .scale2 {
	transform:scale(1.2);
}
.test .skew {
	transform:skew(-5deg);
}
.test .skew2 {
	transform:skew(-5deg,-5deg);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/140.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transform-origin :id=to

### 语法

**transform-origin**：[ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) | `left` | `center①` | `right` ] [ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) | `top` | `center②` | `bottom`]?

**默认值**：50% 50%，效果等同于 `center center`

**适用于**：所有块级元素及某些内联元素

**继承性**：无

**动画性**：当值为数值时

**计算值**：除了指定绝对值，否则都为百分比

**媒体**：视觉

### 取值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定坐标值。可以为负值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定坐标值。可以为负值

**left**：指定原点的横坐标为left

**center①**：指定原点的横坐标为center

**right**：指定原点的横坐标为right

**top**：指定原点的纵坐标为top

**center②**：指定原点的纵坐标为center

**bottom**：指定原点的纵坐标为bottom

### 说明

**设置或检索对象以某个原点进行转换**

- 该属性提供2个参数值
- 如果提供两个，第一个用于横坐标，第二个用于纵坐标
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为50%
- 对应的脚本特性为 `transformOrigin`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

**css**

```css
.test {
	margin:0;
	padding:0;
	list-style:none;
	border:1px solid #000;
}
.test li {
	width:50px;
	height:50px;
	border:1px solid #000;
	background:#ddd;
	transform-origin:0 0;
	transform:rotate(45deg);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/141.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## transform-style :id=ts

### 语法

**transform-style**：`flat` | `preserve-3d`

**默认值**：flat

**适用于**：变换元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**flat**：指定子元素位于此元素所在平面内

**preserve-3d**：指定子元素定位在三维空间内

### 说明

**指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化**

- 当该属性值为`preserve-3d` 时，元素将会创建局部堆叠上下文
- 决定一个变换元素看起来是处在三维空间还是平面内，需要该元素的父元素上定义 [transform-style](#ts) 属性
- 对应的脚本特性为 `transformStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="cube">
  <div class="front">1</div>
  <div class="back">2</div>
  <div class="right">3</div>
  <div class="left">4</div>
  <div class="top">5</div>
  <div class="bottom">6</div>
</div>
```

**css**

```css
body {
  perspective: 1000px;
}
.cube {
  position: relative;
  font-size: 80px;
  width: 2em;
  margin: 1.5em auto;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(30deg);
}
.cube > div {
  position: absolute;
  width: 2em;
  height: 2em;
  background: rgba(0, 0, 0, .1);
  border: 1px solid #999;
  color: white;
  text-align: center;
  line-height: 2em;
}
.front {
  transform: translateZ(1em);
}
.top {
  transform: rotateX(90deg) translateZ(1em);
}
.right {
  transform: rotateY(90deg) translateZ(1em);
}
.left {
  transform: rotateY(-90deg) translateZ(1em);
}
.bottom {
  transform: rotateX(-90deg) translateZ(1em);
}
.back {
  transform: rotateY(-180deg) translateZ(1em);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/142.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## perspective :id=perspective

### 语法

**perspective**：`none` | [\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：none

**适用于**：变换元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) 时

**计算值**：绝对长度或 `none`

**媒体**：视觉

### 取值

**none**：不指定透视

[\<length>](/css-handbook/value-and-units/length?id=length)：指定观察者距离「z=0」平面的距离，为元素及其内容应用透视变换。不允许负值

### 说明

**指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定**

- 当该属性值为「非none」时，元素将会创建局部堆叠上下文
- 对应的脚本特性为 `perspective`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="wrapper">
  <div>1</div>
</div>
```

**css**

```css
.wrapper {
	width:200px;
	height:200px;
	margin:50px auto;
	border:1px solid #000;
	perspective:50px;
	transform-style:preserve-3d;
	animation:test 10s infinite;
}
.wrapper > div {
	width:180px;
	height:120px;
	margin:40px 10px;
	background-color:#ccc;
	transform:rotatex(45deg);
}

@keyframes test {
	from {
	  perspective:50px;
  }
  to {
    perspective:300px;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/143.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## perspective-origin :id=po

### 语法

**perspective-origin**：[ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) | `left` | `center①` | `right` ] [ [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | [\<length>](/css-handbook/value-and-units/length?id=length) | `top` | `center②` | `bottom` ]?

**默认值**：50% 50%，效果等同于center center

**适用于**：变换元素

**继承性**：无

**动画性**：当值为数值时

**计算值**：除了指定绝对值，否则都为百分比

**媒体**：视觉

### 取值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定透视点坐标值，相对于元素宽度。可以为负值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定透视点坐标值。可以为负值

**left**：指定透视点的横坐标为left

**center①**：指定透视点的横坐标为center

**right**：指定透视点的横坐标为right

**top**：指定透视点的纵坐标为top

**center②**：指定透视点的纵坐标为center

**bottom**：指定透视点的纵坐标为bottom

### 说明

**指定透视点的位置**

- 该属性提供2个参数值
- 如果提供两个，第一个用于横坐标，第二个用于纵坐标
- 如果只提供一个，该值将用于横坐标；纵坐标将默认为center
- 对应的脚本特性为 `perspactiveOrigin`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="wrapper w1">
  <div>1</div>
</div>
<div class="wrapper w2">
  <div>2</div>
</div>
```

**css**

```css
.wrapper {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid #000;
  perspective: 150px;
  transform-style: preserve-3d;
}
.w1 {
  perspective-origin: top;
}
.w2 {
  perspective-origin: bottom;
}
.wrapper > div {
  width: 180px;
  height: 120px;
  margin: 40px 10px;
  background-color: #ccc;
  transform: rotatex(90deg);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/144.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## backface-visibility :id=bv

### 语法

**backface-visibility**：`visible` | `hidden`

**默认值**：visible

**适用于**：变换元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**visible**：指定元素背面可见，允许显示正面的镜像

**hidden**：指定元素背面不可见

### 说明

**指定元素背面面向用户时是否可见**

- 决定一个元素背面面向用户时是否可见，需要直接在该元素上定义 [backface-visibility](#bv) 属性，而不能在其父元素上，因为该属性默认为不可继承
- 对应的脚本特性为 `backfaceVisibility`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/103.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="cube c1">
  <div class="front">1</div>
  <div class="back">2</div>
  <div class="right">3</div>
  <div class="left">4</div>
  <div class="top">5</div>
  <div class="bottom">6</div>
</div>

<div class="cube c2">
  <div class="front">1</div>
  <div class="back">2</div>
  <div class="right">3</div>
  <div class="left">4</div>
  <div class="top">5</div>
  <div class="bottom">6</div>
</div>
```

**css**

```css
body {
  perspective: 800px;
  perspective-origin: 50%;
}
.cube {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 50px;
  transform-style: preserve-3d;
  animation: rotate 5s infinite;
}
.cube > div {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, .2);
  background-color: rgba(255, 255, 255, .1);
  color: gray;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
}
.front {
  transform: translatez(50px);
}
.back {
  transform: rotatey(180deg) translatez(50px);
}
.right {
  transform: rotatey(90deg) translatez(50px);
}
.left {
  transform: rotatey(-90deg) translatez(50px);
}
.top {
  transform: rotatex(90deg) translatez(50px);
}
.bottom {
  transform: rotatex(-90deg) translatez(50px);
}
@keyframes rotate {
  from {
    transform: rotatey(0);
  }
  to {
    transform: rotatey(360deg);
  }
}
.c1 > div {
  backface-visibility: visible;
}
.c2 > div {
  backface-visibility: hidden;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/145.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---