[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [颜色](/css-handbook/properties/color)

# 颜色

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[color](#color)|CSS1|有|指定颜色|
|[<span class="g-color-css3-new">opacity</span>](#opacity)|CSS3|无|定义元素的不透明度|


## color :id=color

### 语法

**color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：由`user agent`决定

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象的文本颜色。无默认值**

- 可以使用[Color Name(颜色名称)](/css-handbook/value-and-units/color?id=cn), [HEX](/css-handbook/value-and-units/color?id=hex), [RGB](/css-handbook/value-and-units/color?id=rgb), [RGBA](/css-handbook/value-and-units/color?id=rgba), [HSL](/css-handbook/value-and-units/color?id=hsl), [HSLA](/css-handbook/value-and-units/color?id=hsla), [transparent](/css-handbook/value-and-units/color?id=transparent)来指定color
- 注意，用颜色名称指定color可能不被一些浏览器接受
- color属性值被间接用来提供一个中间值 `currentColor` 以供其他接受颜色值的属性使用
- 对应的脚本特性为：`color`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/42.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="colorname">
		<strong>Color Name(用颜色名称表示法)</strong>
		<p>看看我的颜色　{color:green;}</p>
	</li>
	<li class="hex">
		<strong>HEX(十六进制数值表示法)</strong>
		<p>看看我的颜色　{color:#ff0000;}</p>
	</li>
	<li class="rgb">
		<strong>RGB</strong>
		<p>看看我的颜色　{color:rgb(0,0,0);}</p>
	</li>
	<li class="rgba">
		<strong>RGBA</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:rgba(0,0,0,.5);}</p>
	</li>
	<li class="hsl">
		<strong>HSL</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:hsl(240,50%,50%);}</p>
	</li>
	<li class="hsla">
		<strong>HSLA</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:hsla(240,50%,50%,.5);}</p>
	</li>
	<li class="transparent">
		<strong>transparent</strong> - IE8及以下浏览器将文本颜色设置为transparent，文本将显示为黑色
		<p>看看我的颜色　{color:transparent;}</p>
	</li>
</ul>
```

**css**

```css
.colorname p {
  color: green;
}
.hex p {
  color: #ff0000;
}
.rgb p {
  color: rgb(0,0,0);
}
.rgba p {
  color: rgba(0,0,0,.5);
}
.hsl p {
  color: hsl(240,50%,50%);
}
.hsla p {
  color: hsla(240,50%,50%,.5);
}
.transparent p {
  color: transparent;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/48.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## opacity :id=opacity

### 语法

**opacity**：[\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：1

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：使用浮点数指定对象的不透明度。值被约束在0.0~1.0范围内，如果超过了这个范围，其计算结果将截取到与之最相近的值

### 说明

**定义元素的不透明度**

- 当一个元素定义了 `opacity` 属性，并且值小于1时，那么它的子元素也会同样拥有相同的透明度
- 当一个元素定义了 `opacity` 属性，并且值小于1时，将会创建一个新的堆叠上下文；如果其它的元素为非定位元素，那么该元素的堆叠级别将会高于其它元素
- 对应的脚本特性为：`opacity`

**对于尚不支持opacity属性的IE浏览器可以使用IE私有的滤镜属性来实现与opacity相同的效果**

```css
div {
  filter: alpha(opacity=50); /* for IE8 and earlier */
} 
div {
  opacity: 0.5; /* for IE9 and other browsers */
} 
```

!> 以上2段代码的效果相同

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/43.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>下例是一个半透明的效果：</h1>
<div class="test">不透明度为100%的box</div>
<div class="test2">不透明度为50%的box</div>
```

**css**

```css
h1 {
	margin: 10px 0;
	font-size: 16px;
}
.test,
.test2 {
	width: 300px;
	height: 150px;
	padding: 10px;
}
.test {
	background:#050;
}
.test2 {
	margin: -120px 0 0 50px;
	background: #000;
	filter: alpha(opacity=50);
	opacity: 0.5;
	color: #fff;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/49.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
