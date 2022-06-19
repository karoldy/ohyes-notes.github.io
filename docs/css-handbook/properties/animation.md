[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [动画](/css-handbook/properties/animation)

# 动画

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">animation</span>](#animation)|CSS3|无|复合属性。检索或设置对象所应用的动画特效|
|[<span class="g-color-css3-new">animation-name</span>](#an)|CSS3|无|检索或设置对象所应用的动画名称|
|[<span class="g-color-css3-new">animation-duration</span>](#ad)|CSS3|无|检索或设置对象动画的持续时间|
|[<span class="g-color-css3-new">animation-timing-function</span>](#atf)|CSS3|无|检索或设置对象动画的过渡类型|
|[<span class="g-color-css3-new">animation-delay</span>](#ade)|CSS3|无|检索或设置对象动画延迟的时间|
|[<span class="g-color-css3-new">animation-iteration-count</span>](#aic)|CSS3|无|检索或设置对象动画的循环次数|
|[<span class="g-color-css3-new">animation-direction</span>](#adi)|CSS3|无|检索或设置对象动画在循环中是否反向运动|
|[<span class="g-color-css3-new">animation-play-state</span>](#aps)|CSS3|无|检索或设置对象动画的状态|
|[<span class="g-color-css3-new">animation-fill-mode</span>](#afm)|CSS3|无|检索或设置对象动画时间之外的状态|

## animation :id=animation

### 语法

**animation**：\<single-animation>[, \<single-animation> ]*

\<single-animation> = [animation-name](#an) || [\<time>](/css-handbook/value-and-units/time?id=time) || [animation-timing-function](#atf) || [\<time>](/css-handbook/value-and-units/time?id=time) || [animation-iteration-count](#aic) || [animation-direction](#adi) || [animation-fill-mode](#afm) || [animation-play-state](#aps)

**默认值**：看每个独立属性

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：看每个独立属性

**媒体**：视觉

### 取值

[animation-name](#an)：检索或设置对象所应用的动画名称

[animation-duration](#adu)：检索或设置对象动画的持续时间

[animation-timing-function](#atf)：检索或设置对象动画的过渡类型

[animation-delay](#ade)：检索或设置对象动画延迟的时间

[animation-iteration-count](#aic)：检索或设置对象动画的循环次数

[animation-direction](#adi)：检索或设置对象动画在循环中是否反向运动

[animation-fill-mode](#afm)：检索或设置对象动画时间之外的状态

[animation-play-state](#aps)：检索或设置对象动画的状态。w3c正考虑是否将该属性移除，因为动画的状态可以通过其它的方式实现，比如重设样式

### 说明

**复合属性。检索或设置对象所应用的动画特效**

- 如果提供多组属性值，以逗号进行分隔。
- 注意：如果只提供一个[\<time>](/css-handbook/value-and-units/time?id=time)参数，则为 [animation-duration](#adu) 的值定义；如果提供二个[\<time>](/css-handbook/value-and-units/time?id=time)参数，则第一个为 [animation-duration](#adu) 的值定义，第二个为 <' [animation-delay](#ade) 的值定义
- 对应的脚本特性为 `animation`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
  <span class="a1">CSS3 Animations</span>
  <span class="a2">CSS3 Animations</span>
  <span class="a3">CSS3 Animations</span>
</div>
```

**css**

```css
div {
	position:absolute;
	top:50%;
	left:50%;
	overflow:hidden;
	width:300px;
	height:150px;
	margin:-75px 0 0 -150px;
	border:3px solid #eee;
	background:#e0e0e0;
}
span {
	display:block;
	height:50px;
	font:bold 14px/50px Georgia;
}
.a1 {
	-webkit-transform:translate(60px);
	-moz-transform:translate(60px);
	transform:translate(60px);
	-webkit-animation:animations 2s ease-out forwards;
	-moz-animation:animations 2s ease-out forwards;
	animation:animations 2s ease-out forwards;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0);
    opacity:0;
  }
  50% {
    -webkit-transform:translate(30px);
    opacity:1;
  }
  70% {
    -webkit-transform:translate(35px);
    opacity:1;
  }
  100% {
    -webkit-transform:translate(60px);
    opacity:0;
  }
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0);
    opacity:0;
  }
  50% {
    -moz-transform:translate(30px);
    opacity:1;
  }
  70% {
    -moz-transform:translate(35px);
    opacity:1;
  }
  100% {
    -moz-transform:translate(60px);
    opacity:0;
  }
}
@keyframes animations {
	0% {
    transform:translate(0);
    opacity:0;
  }
  50% {
    transform:translate(30px);
    opacity:1;
  }
  70% {
    transform:translate(35px);
    opacity:1;
  }
  100% {
    transform:translate(60px);
    opacity:0;
  }
}
.a3 {
	opacity:0;
	-webkit-transform:translate(100px);
	-moz-transform:translate(100px);
	transform:translate(100px);
	-webkit-animation:animations3 2s ease-out 2s forwards;
	-moz-animation:animations3 2s ease-out 2s forwards;
	animation:animations3 2s ease-out 2s forwards;
}
@-webkit-keyframes animations3 {
	0% {
    -webkit-transform:translate(160px);
    opacity:0;
  }
  50% {
    -webkit-transform:translate(130px);
    opacity:1;
  }
  70% {
    -webkit-transform:translate(125px);
    opacity:1;
  }
  100% {
    -webkit-transform:translate(100px);
    opacity:0;
  }
}
@-moz-keyframes animations3 {
	0% {
    -moz-transform:translate(160px);
    opacity:0;
  }
  50% {
    -moz-transform:translate(130px);
    opacity:1;
  }
  70% {
    -moz-transform:translate(125px);
    opacity:1;
  }
  100% {
    -moz-transform:translate(100px);
    opacity:0;
  }
}
@keyframes animations3 {
	0% {
    transform:translate(160px);
    opacity:0;
  }
  50% {
    transform:translate(130px);
    opacity:1;
  }
  70% {
    transform:translate(125px);
    opacity:1;
  }
  100% {
    transform:translate(100px);
    opacity:0;
  }
}
.a2 {
	opacity:0;
	text-align:center;
	font-size:26px;
	-webkit-animation:animations2 5s ease-in-out 4s forwards;
	-moz-animation:animations2 5s ease-in-out 4s forwards;
	animation:animations2 5s ease-in-out 4s forwards;
}
@-webkit-keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
@-moz-keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
@keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/151.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-name :id=an

### 语法

**animation-name**：\<single-animation-name>[, \<single-animation-name> ]*

<single-animation-name> = `none` | [\<identifier>](/css-handbook/value-and-units/textual?id=identifier)

**默认值**：none

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

**相关属性**：[@keyframes](/css-handbook/rules#keyframes)

### 取值

[\<identifier>](/css-handbook/value-and-units/textual?id=identifier)：identifier定义一个动画名称

\<keyframes-blocks>：定义动画在每个阶段的样式，即帧动画。

### 说明

**检索或设置对象所应用的动画名称，必须与规则[@keyframes](/css-handbook/rules#keyframes)配合使用，因为动画名称由[@keyframes](/css-handbook/rules#keyframes)定义**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationName`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
  <span class="a1">CSS3 Animations</span>
  <span class="a2">CSS3 Animations</span>
  <span class="a3">CSS3 Animations</span>
</div>
```

**css**

```css
div {
	position:absolute;
	top:50%;
	left:50%;
	overflow:hidden;
	width:300px;
	height:150px;
	margin:-75px 0 0 -150px;
	border:3px solid #eee;
	background:#e0e0e0;
}
span {
	display:block;
	height:50px;
	font:bold 14px/50px Georgia;
}
.a1 {
	-webkit-transform:translate(60px);
	-moz-transform:translate(60px);
	transform:translate(60px);
	-webkit-animation:animations 2s ease-out forwards;
	-moz-animation:animations 2s ease-out forwards;
	animation:animations 2s ease-out forwards;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0);
    opacity:0;
  }
  50% {
    -webkit-transform:translate(30px);
    opacity:1;
  }
  70% {
    -webkit-transform:translate(35px);
    opacity:1;
  }
  100% {
    -webkit-transform:translate(60px);
    opacity:0;
  }
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0);
    opacity:0;
  }
  50% {
    -moz-transform:translate(30px);
    opacity:1;
  }
  70% {
    -moz-transform:translate(35px);
    opacity:1;
  }
  100% {
    -moz-transform:translate(60px);
    opacity:0;
  }
}
@keyframes animations {
	0% {
    transform:translate(0);
    opacity:0;
  }
  50% {
    transform:translate(30px);
    opacity:1;
  }
  70% {
    transform:translate(35px);
    opacity:1;
  }
  100% {
    transform:translate(60px);
    opacity:0;
  }
}
.a3 {
	opacity:0;
	-webkit-transform:translate(100px);
	-moz-transform:translate(100px);
	transform:translate(100px);
	-webkit-animation:animations3 2s ease-out 2s forwards;
	-moz-animation:animations3 2s ease-out 2s forwards;
	animation:animations3 2s ease-out 2s forwards;
}
@-webkit-keyframes animations3 {
	0% {
    -webkit-transform:translate(160px);
    opacity:0;
  }
  50% {
    -webkit-transform:translate(130px);
    opacity:1;
  }
  70% {
    -webkit-transform:translate(125px);
    opacity:1;
  }
  100% {
    -webkit-transform:translate(100px);
    opacity:0;
  }
}
@-moz-keyframes animations3 {
	0% {
    -moz-transform:translate(160px);
    opacity:0;
  }
  50% {
    -moz-transform:translate(130px);
    opacity:1;
  }
  70% {
    -moz-transform:translate(125px);
    opacity:1;
  }
  100% {
    -moz-transform:translate(100px);
    opacity:0;
  }
}
@keyframes animations3 {
	0% {
    transform:translate(160px);
    opacity:0;
  }
  50% {
    transform:translate(130px);
    opacity:1;
  }
  70% {
    transform:translate(125px);
    opacity:1;
  }
  100% {
    transform:translate(100px);
    opacity:0;
  }
}
.a2 {
	opacity:0;
	text-align:center;
	font-size:26px;
	-webkit-animation:animations2 5s ease-in-out 4s forwards;
	-moz-animation:animations2 5s ease-in-out 4s forwards;
	animation:animations2 5s ease-in-out 4s forwards;
}
@-webkit-keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
@-moz-keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
@keyframes animations2 {
	0% {
    opacity:0;
  }
  40% {
    opacity:.8;
  }
  45% {
    opacity:.3;
  }
  50% {
    opacity:.8;
  }
  55% {
    opacity:.3;
  }
  60% {
    opacity:.8;
  }
  100% {
    opacity:0;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/151.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-duration :id=ad

### 语法

**animation-duration**：[\<time>](/css-handbook/value-and-units/time?id=time) [, [\<time>](/css-handbook/value-and-units/time?id=time) ]*

**默认值**：0s

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

[\<time>](/css-handbook/value-and-units/time?id=time)：指定对象动画的持续时间

### 说明

**检索或设置对象动画的持续时间**

-如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationDuration`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>文字落下2s内趋于平稳：</h1>
<div>CSS3 Animations</div>
```

**css**

```css
html {
	height:100%;
	background:-moz-linear-gradient(top,#fff,#000);
	background:-webkit-linear-gradient(top,#fff,#000);
	background:linear-gradient(to bottom,#fff,#000);
}
h1 {
	font-size:16px;
}
div {
	position:absolute;
	top:50%;
	left:50%;
	width:500px;
	height:80px;
	margin:-40px 0 0 -250px;
	color:#fff;
	font:bold 50px/1.5 Georgia,arial,simsun,serif;
	text-shadow:1px 1px 0 rgba(0,0,0,.8),2px 2px 3px rgba(255,255,255,.3);
	-moz-animation:animations 2s ease-in-out forwards;
	-webkit-animation:animations 2s ease-in-out forwards;
	animation:animations 2s ease-in-out forwards;
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0,-150px);
  }
  30% {
    -moz-transform:translate(0,-150px);
  }
  40% {
    -moz-transform:translate(0,0);
  }
  42% {
    -moz-transform:scale(1.1,.6) skew(5deg,5deg);
  }
  48% {
    -moz-transform:scale(1) skew(0,0);
  }
  54% {
    -moz-transform:scale(1.05,.8) skew(4deg,4deg);
  }
  60% {
    -moz-transform:scale(1) skew(0,0);
  }
  64% {
    -moz-transform:skew(3deg,3deg);
  }
  68% {
    -moz-transform:skew(0,0);
  }
  75% {
    -moz-transform:skew(2deg,2deg);
  }
  83% {
    -moz-transform:skew(0,0);
  }
  92% {
    -moz-transform:skew(1deg,1deg);
  }
  100% {
    -moz-transform:skew(0,0);
  }
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,-150px);
  }
  30% {
    -webkit-transform:translate(0,-150px);
  }
  40% {
    -webkit-transform:translate(0,0);
  }
  42% {
    -webkit-transform:scale(1.1,.6) skew(5deg,5deg);
  }
  48% {
    -webkit-transform:scale(1) skew(0,0);
  }
  54% {
    -webkit-transform:scale(1.05,.8) skew(4deg,4deg);
  }
  60% {
    -webkit-transform:scale(1) skew(0,0);
  }
  64% {
    -webkit-transform:skew(3deg,3deg);
  }
  68% {
    -webkit-transform:skew(0,0);
  }
  75% {
    -webkit-transform:skew(2deg,2deg);
  }
  83% {
    -webkit-transform:skew(0,0);
  }
  92% {
    -webkit-transform:skew(1deg,1deg);
  }
  100% {
    -webkit-transform:skew(0,0);
  }
}
@keyframes animations {
	0% {
    transform:translate(0,-150px);
  }
  30% {
    transform:translate(0,-150px);
  }
  40% {
    transform:translate(0,0);
  }
  42% {
    transform:scale(1.1,.6) skew(5deg,5deg);
  }
  48% {
    transform:scale(1) skew(0,0);
  }
  54% {
    transform:scale(1.05,.8) skew(4deg,4deg);
  }
  60% {
    transform:scale(1) skew(0,0);
  }
  64% {
    transform:skew(3deg,3deg);
  }
  68% {
    transform:skew(0,0);
  }
  75% {
    transform:skew(2deg,2deg);
  }
  83% {
    transform:skew(0,0);
  }
  92% {
    transform:skew(1deg,1deg);
  }
  100% {
    transform:skew(0,0);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/152.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-timing-function :id=atf

### 语法

**animation-timing-function**：\<single-animation-timing-function>[, \<single-animation-timing-function> ]*

\<single-animation-timing-function> = `ease` | `linear` | `ease-in` | `ease-out` | `ease-in-out` | `step-start` | `step-end` | `steps`([\<integer>](/css-handbook/value-and-units/length?id=length)[, [ `start` | `end` ] ]?) | `cubic-bezier`([\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number), [\<number>](/css-handbook/value-and-units/numeric?id=number))

**默认值**：ease

**适用于**：所有元素，包含伪对象 `:after` 和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

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

**检索或设置对象动画的过渡类型**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationTimingFunction`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>线性运动的太阳（您还可以定义其它的动画过渡类型，如ease-in,ease-out等）：</h1>
<div></div>
<p></p>
```

**css**

```css
h1 {
	font-size:16px;
}
div {
	width:60px;
	height:60px;
	margin:200px 0 0 50px;
	padding:10px;
	border-radius:41px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
	-moz-animation:animations 4s linear infinite;
	-webkit-animation:animations 4s linear infinite;
	animation:animations 4s linear infinite;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,0);
  }
  12% {
    -webkit-transform:translate(80px,-25px);
  }
  25% {
    -webkit-transform:translate(200px,-50px);
  }
  38% {
    -webkit-transform:translate(320px,-25px);
  }
  50% {
    -webkit-transform:translate(400px,0);
  }
  62% {
    -webkit-transform:translate(320px,25px);
  }
  75% {
    -webkit-transform:translate(200px,50px);
  }
  87% {
    -webkit-transform:translate(80px,25px);
  }
  100% {
    -webkit-transform:translate(0,0);
  }
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0,0);
  }
  12% {
    -moz-transform:translate(80px,-25px);
  }
  25% {
    -moz-transform:translate(200px,-50px);
  }
  38% {
    -moz-transform:translate(320px,-25px);
  }
  50% {
    -moz-transform:translate(400px,0);
  }
  62% {
    -moz-transform:translate(320px,25px);
  }
  75% {
    -moz-transform:translate(200px,50px);
  }
  87% {
    -moz-transform:translate(80px,25px);
  }
  100% {
    -moz-transform:translate(0,0);
  }
}
@keyframes animations {
	0% {
    transform:translate(0,0);
  }
  12% {
    transform:translate(80px,-25px);
  }
  25% {
    transform:translate(200px,-50px);
  }
  38% {
    transform:translate(320px,-25px);
  }
  50% {
    transform:translate(400px,0);
  }
  62% {
    transform:translate(320px,25px);
  }
  75% {
    transform:translate(200px,50px);
  }
  87% {
    transform:translate(80px,25px);
  }
  100% {
    transform:translate(0,0);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/153.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-delay :id=ade

### 语法

**animation-delay**：[\<time>](/css-handbook/value-and-units/time?id=time)[, [\<time>](/css-handbook/value-and-units/time?id=time) ]*

**默认值**：0s

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

[\<time>](/css-handbook/value-and-units/time?id=time)：指定对象动画延迟的时间

### 说明

**检索或设置对象动画的延迟时间**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationDelay`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>太阳将在1s后开始下山：</h1>
<div></div>
<p></p>
```

**css**

```css
h1 {
	font-size:16px;
}
p {
	position:relative;
	z-index:2;
	height:200px;
	margin:300px 0 0 0;
	background:#fff;
}
p:after {
	position:absolute;
	z-index:3;
	top:0px;
	left:0;
	width:100%;
	height:1px;
	background:#ddd;
	content:'';
	box-shadow:0 0 30px 1px rgba(0,0,0,.9);
}
div {
	width:100px;
	height:100px;
	padding:10px;
	border-radius:61px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
	-moz-animation:animations 6s ease 1s forwards;
	-webkit-animation:animations 6s ease 1s forwards;
	animation:animations 6s ease 1s forwards;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,0);
  }
  55% {
    -webkit-transform:translate(480px,360px);
  }
  100% {
    -webkit-transform:translate(600px,450px);
  }
}
@-moz-keyframes animations {
  0% {
    -moz-transform:translate(0,0);
  }
  55% {
    -moz-transform:translate(480px,360px);
  }
  100% {
    -moz-transform:translate(600px,450px);
  }
}
@keyframes animations {
  0% {
    transform:translate(0,0);
  }
  55% {
    transform:translate(480px,360px);
  }
  100% {
    transform:translate(600px,450px);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/154.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-iteration-count :id=aic

### 语法

**animation-iteration-count**：\<single-animation-iteration-count>[, \<single-animation-iteration-count>]*

\<single-animation-iteration-count> = `infinite` | [\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：1

**适用于**：所有元素，包含伪对象 `:after`和 `:before`

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**infinite**：无限循环

[\<number>](/css-handbook/value-and-units/numeric?id=number)：指定对象动画的具体循环次数

### 说明

**检索或设置对象动画的循环次数**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationIterationCount`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>太阳光晕将不停的闪烁：</h1>
<div></div>
```

**css**

```css
h1 {
	font-size:16px;
}
div {
	width:100px;
	height:100px;
	padding:10px;
	border-radius:61px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
	-moz-animation:animations 1.5s ease infinite;
	-webkit-animation:animations 1.5s ease infinite;
	animation:animations 1.5s ease infinite;
}
@-webkit-keyframes animations {
	0% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
  50% {
    box-shadow:0 0 10px rgba(204,102,0,.3);
  }
  100% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
}
@-moz-keyframes animations {
  0% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
  50% {
    box-shadow:0 0 10px rgba(204,102,0,.3);
  }
  100% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
}
@keyframes animations {
  0% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
  50% {
    box-shadow:0 0 10px rgba(204,102,0,.3);
  }
  100% {
    box-shadow:0 0 10px rgba(204,102,0,.8);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/155.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-direction :id=adi

### 语法

**animation-direction**：\<single-animation-direction>[, \<single-animation-direction> ]*

\<single-animation-direction> = `normal` | `reverse` | `alternate` | `alternate-reverse`

**默认值**：normal

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**normal**：正常方向

**reverse**：反方向运行

**alternate**：动画先正常运行再反方向运行，并持续交替运行

**alternate-reverse**：动画先反运行再正方向运行，并持续交替运行

### 说明

**检索或设置对象动画在循环中是否反向运动**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationDirection`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>弹性运动的太阳：</h1>
<div></div>
```

**css**

```css
h1 {
	font-size:16px;
}
div {
	width:100px;
	height:100px;
	padding:10px;
	border-radius:61px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
	-moz-animation:animations 1.5s ease infinite alternate;
	-webkit-animation:animations 1.5s ease infinite alternate;
	animation:animations 1.5s ease infinite alternate;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,0);
  }
  50% {
    -webkit-transform:translate(100px,100px);
  }
  100% {
    -webkit-transform:translate(100px,0);
  }
  }
  @-moz-keyframes animations {
    0% {
    -moz-transform:translate(0,0);
  }
  50% {
    -moz-transform:translate(100px,100px);
  }
  100% {
    -moz-transform:translate(100px,0);
  }
}
@keyframes animations {
	0% {
    transform:translate(0,0);
  }
  50% {
    ransform:translate(100px,100px);
  }
  100% {
    transform:translate(100px,0);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/156.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-play-state :id=aps

### 语法

**animation-play-state**：\<single-animation-play-state>[, \<single-animation-play-state> ]*

\<single-animation-play-state> = `running` | `paused`

**默认值**：running

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**running**：运动

**paused**：暂停

### 说明

**检索或设置对象动画的状态**

- 如果提供多个属性值，以逗号进行分隔
- 对应的脚本特性为 `animationPlayState`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>鼠标经过时太阳运动将暂停，移开继续：</h1>
<div></div>
<p></p>
```

**css**

```css
h1 {
	font-size:16px;
}
p {
	overflow:hidden;
	height:1px;
	margin:302px 0 0;
	background:#ddd;
}
div {
	width:100px;
	height:100px;
	padding:10px;
	border-radius:61px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
	-moz-animation:animations 6s forwards;
	-webkit-animation:animations 6s forwards;
	animation:animations 6s forwards;
}
div:hover {
	-moz-animation-play-state:paused;
	-webkit-animation-play-state:paused;
	animation-play-state:paused;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,0);
  }
  10% {
    -webkit-transform:translate(0,300px);
  }
  20% {
    -webkit-transform:translate(60px,60px);
  }
  30% {
    -webkit-transform:translate(60px,300px);
  }
  40% {
    -webkit-transform:translate(120px,120px);
  }
  50% {
    -webkit-transform:translate(120px,300px);
  }
  60% {
    -webkit-transform:translate(180px,180px);
  }
  70% {
    -webkit-transform:translate(180px,300px);
  }
  80% {
    -webkit-transform:translate(240px,240px);
  }
  90% {
    -webkit-transform:translate(240px,300px);
  }
  100% {
    -webkit-transform:translate(280px,300px);
  }
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0,0);
  }
  10% {
    -moz-transform:translate(0,300px);
  }
  20% {
    -moz-transform:translate(60px,60px);
  }
  30% {
    -moz-transform:translate(60px,300px);
  }
  40% {
    -moz-transform:translate(120px,120px);
  }
  50% {
    -moz-transform:translate(120px,300px);
  }
  60% {
    -moz-transform:translate(180px,180px);
  }
  70% {
    -moz-transform:translate(180px,300px);
  }
  80% {
    -moz-transform:translate(240px,240px);
  }
  90% {
    -moz-transform:translate(240px,300px);
  }
  100% {
    -moz-transform:translate(280px,300px);
  }
}
@keyframes animations {
	0% {
    transform:translate(0,0);
  }
  10% {
    transform:translate(0,300px);
  }
  20% {
    transform:translate(60px,60px);
  }
  30% {
    transform:translate(60px,300px);
  }
  40% {
    transform:translate(120px,120px);
  }
  50% {
    transform:translate(120px,300px);
  }
  60% {
    transform:translate(180px,180px);
  }
  70% {
    transform:translate(180px,300px);
  }
  80% {
    transform:translate(240px,240px);
  }
  90% {
    transform:translate(240px,300px);
  }
  100% {
    transform:translate(280px,300px);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/157.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## animation-fill-mode :id=afm

### 语法

**animation-fill-mode**：\<single-animation-fill-mode>[, \<single-animation-fill-mode> ]*

\<single-animation-fill-mode> = `none` | `forwards` | `backwards` | `both`

**默认值**：none

**适用于**：所有元素，包含伪对象:after和:before

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：视觉

### 取值

**none**：默认值。不设置对象动画之外的状态

**forwards**：设置对象状态为动画结束时的状态

**backwards**：设置对象状态为动画开始时的状态

**both**：设置对象状态为动画结束或开始的状态

### 说明

**检索或设置对象动画时间之外的状态**

- 如果提供多个属性值，以逗号进行分隔。
- 对应的脚本特性为 `animationFillMode`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/104.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>animation-fill-mode：</h1>
<ul>
	<li class="none">
		<strong>none: </strong>
		<span></span>
	</li>
	<li class="forwards">
		<strong>forwards: </strong>
		<span></span>
	</li>
	<li class="backwards">
		<strong>backwards: </strong>
		<span></span>
	</li>
	<li class="both">
		<strong>both: </strong>
		<span></span>
	</li>
</ul>
```

**css**

```css
h1 {
	font-size:16px;
}
li {
	padding:10px;
}
span {
	display:block;
	width:80px;
	height:80px;
	padding:10px;
	border-radius:50px;
	box-shadow:0 0 10px rgba(204,102,0,.8);
	background:#F6D66E;
	background:-moz-linear-gradient(top,#fff,#F6D66E);
	background:-webkit-linear-gradient(top,#fff,#F6D66E);
	background:linear-gradient(to bottom,#fff,#F6D66E);
}
.none span {
	-moz-animation:animations 1s ease;
	-webkit-animation:animations 1s ease;
	animation:animations 1s ease;
}
@-webkit-keyframes animations {
	0% {
    -webkit-transform:translate(0,0);
  }
  100% {
    -webkit-transform:translate(400px);
  }
}
@-moz-keyframes animations {
	0% {
    -moz-transform:translate(0,0);
  }
  100% {
    -moz-transform:translate(400px);
  }
}
@keyframes animations {
	0% {
    transform:translate(0,0);
  }
  100% {
    transform:translate(400px);
  }
}
.forwards span {
	-moz-animation:animations2 1s ease forwards;
	-webkit-animation:animations2 1s ease forwards;
	animation:animations2 1s ease forwards;
}
@-webkit-keyframes animations2 {
	0% {
    -webkit-transform:translate(0,0);
  }
  100% {
    -webkit-transform:translate(400px);
  }
}
@-moz-keyframes animations2 {
	0% {
    -moz-transform:translate(0,0);
  }
  100% {
    -moz-transform:translate(400px);
  }
}
@keyframes animations2 {
	0% {
    transform:translate(0,0);
  }
  100% {
    transform:translate(400px);
  }
}
.backwards span {
	-moz-animation:animations3 1s ease backwards;
	-webkit-animation:animations3 1s ease backwards;
	animation:animations3 1s ease backwards;
}
@-webkit-keyframes animations3 {
	0% {
    -webkit-transform:translate(0,0);
  }
  100% {
    -webkit-transform:translate(400px);
  }
}
@-moz-keyframes animations3 {
	0% {
    -moz-transform:translate(0,0);
  }
  100% {
    -moz-transform:translate(400px);
  }
}
@keyframes animations3 {
	0% {
    transform:translate(0,0);
  }
  100% {
    transform:translate(400px);
  }
}
.both span {
	-moz-animation:animations4 1s ease both;
	-webkit-animation:animations4 1s ease both;
	animation:animations4 1s ease both;
}
@-webkit-keyframes animations4 {
	0% {
    -webkit-transform:translate(0,0);
  }
  100% {
    -webkit-transform:translate(400px);
  }
}
@-moz-keyframes animations4 {
	0% {
    -moz-transform:translate(0,0);
  }
  100% {
    -moz-transform:translate(400px);
  }
}
@keyframes animations4 {
	0% {
    transform:translate(0,0);
  }
  100% {
    transform:translate(400px);
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/158.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
