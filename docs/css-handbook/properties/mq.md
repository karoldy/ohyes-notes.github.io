[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [打印](/css-handbook/properties/mq)

# 媒体查询

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

**语法**

\<media_query_list>：[ \<media_query> [',' \<media_query>]*]?

\<media_query>：[ `only` | `not` ]? \<media_type> [and \<expression>]* | \<expression> [and \<expression>]*

\<expression>：'('\<media_feature>[: \<value>]?')'

**媒体类型 Media Types (media_type)**

|媒体类型|版本|兼容性|描述|
|:---|:---|:---|:---|
|aural|CSS2不推荐使用|Opera|用于语音和音乐合成器|
|braille|CSS2|Opera|用于触觉反馈设备|
|handheld|CSS2|Chrome,Safari,Opera|用于小型或手持设备|
|print|CSS2|所有浏览器|用于打印机|
|projection|CSS2|Opera|用于投影图像，如幻灯片|
|screen|CSS2|所有浏览器|用于计算机显示器|
|tty|CSS2|Opera|用于使用固定间距字符格的设备。如电传打字机和终端|
|tv|CSS2|Opera|用于电视类设备|
|embossed|CSS2|Opera|用于凸点字符（盲文）印刷设备|
|speech|CSS2|Opera|用于语音类型|
|all|CSS2|所有浏览器|用于所有媒体设备类型|

**媒体特性 Media Features (media_feature)**

|媒体特性|取值|接受min/max|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">width</span>](#width)|[\<length>](/css-handbook/value-and-units/length?id=length)|yes|定义输出设备中的页面可见区域宽度|
|[<span class="g-color-css3-new">height</span>](#height)|[\<length>](/css-handbook/value-and-units/length?id=length)|yes|定义输出设备中的页面可见区域高度|
|[<span class="g-color-css3-new">device-width</span>](#dw)|[\<length>](/css-handbook/value-and-units/length?id=length)|yes|定义输出设备的屏幕可见宽度|
|[<span class="g-color-css3-new">device-height</span>](#dh)|[\<length>](/css-handbook/value-and-units/length?id=length)|yes|定义输出设备的屏幕可见高度|
|[<span class="g-color-css3-new">orientation</span>](#orientation)|portrait \| landscape|no|定义'height'是否大于或等于'width'。值portrait代表是，landscape代表否|
|[<span class="g-color-css3-new">aspect-ratio</span>](#ar)|\<ratio>|yes|定义'width'与'height'的比率|
|[<span class="g-color-css3-new">device-aspect-ratio</span>](#dar)|\<ratio>|yes|定义'device-width'与'device-height'的比率。如常见的显示器比率：4/3, 16/9, 16/10|
|[<span class="g-color-css3-new">color</span>](#color)|[\<integer>](/css-handbook/value-and-units/length?id=length)|yes|定义每一组输出设备的彩色原件个数。如果不是彩色设备，则值等于0|
|[<span class="g-color-css3-new">color-index</span>](#ci)|[\<integer>](/css-handbook/value-and-units/length?id=length)|yes|定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0|
|[<span class="g-color-css3-new">monochrome</span>](#monochrome)|[\<integer>](/css-handbook/value-and-units/length?id=length)|yes|定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0|
|[<span class="g-color-css3-new">resolution</span>](#resolution)|\<resolution>|yes|定义设备的分辨率。如：96dpi, 300dpi, 118dpcm|
|[<span class="g-color-css3-new">scan</span>](#scan)|progressive \| interlace|no|定义电视类设备的扫描工序|
|[<span class="g-color-css3-new">grid</span>](#grid)|[\<integer>](/css-handbook/value-and-units/length?id=length)|no|用来查询输出设备是否使用栅格或点阵。只有1和0才是有效值，1代表是，0代表否|

## width :id=width

### 语法

**width**：[\<length>](/css-handbook/value-and-units/length?id=length)

**接受min/max前缀**：是

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义宽度。不允许负值

### 说明

**定义输出设备中的页面可见区域宽度**

- 与[盒模型width]()不同，[媒体特性width](#width)的取值只能是 [\<length>](/css-handbook/value-and-units/length?id=length)
- 本特性接受min和max前缀，因此可以派生出 `min-width` 和 `max-width` 两个媒体特性

简单列举几个应用示例

```css
@media screen and (width){ … }
@import url(example.css) screen and (width:800px);
```

```html
<link media="screen and (min-width:400px) and (max-width:900px)" rel="stylesheet" href="example.css" />
<?xml-stylesheet media="not screen and (width:800px)" rel="stylesheet" href="example.css" ?>
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/106.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当页面可见宽度大于500px小于1000px时，本行文字显示为红色。试着调整你的viewport使得页面宽度介于这个区间以查看效果</div>
```

**css**

```css
@media all and (min-width:500px) and (max-width:1000px) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/161.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## height :id=height

### 语法

**height**：[\<length>](/css-handbook/value-and-units/length?id=length)

**接受min/max前缀**：是

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义高度。不允许负值

### 说明

**定义输出设备中的页面可见区域高度**

- 与[盒模型height]()不同，媒体特性 [height](#height) 的取值只能是 [\<length>](/css-handbook/value-and-units/length?id=length)

- 本特性接受min和max前缀，因此可以派生出 `min-height` 和 `max-height` 两个媒体特性

简单列举几个应用示例

```css
@media (min-height:400px){ … }
@media screen and (height:600px){ … }
@import url(example.css) screen and (height:800px);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/107.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当页面可见高度大于300px小于500px时，本行文字显示为红色。试着调整你的viewport使得页面高度介于这个区间以查看效果</div>
```

**css**

```css
@media all and (min-height:300px) and (max-height:500px) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/162.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## device-width :id=dw

### 语法

**device-width**：[\<length>](/css-handbook/value-and-units/length?id=length)

**接受min/max前缀**：是

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义宽度。不允许负值

### 说明

**定义输出设备的屏幕可见宽度**

- 本特性接受min和max前缀，因此可以派生出 `min-device-width` 和 `max-device-width` 两个媒体特性

```css
@media screen and (device-width:1024px){ … }
@import url(example.css) screen and (min-device-width:800px);
```

```html
<link media="screen and (min-device-width:300px) and (max-device-width:900px)" rel="stylesheet" href="example.css" />
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备分辨率宽度设置为1024px时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (device-width:1024px) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/163.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## device-height :id=dh

### 语法

**device-height**：[\<length>](/css-handbook/value-and-units/length?id=length)

**接受min/max前缀**：是

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义高度。不允许负值

### 说明

**定义输出设备的屏幕可见高度**

- 本特性接受min和max前缀，因此可以派生出 `min-device-height` 和 `max-device-height` 两个媒体特性

```css
@media screen and (device-height:800px){ … }
@import url(example.css) screen and (min-device-height:800px);
```

```html
<link media="screen and (min-device-height:300px) and (max-device-height:900px)" rel="stylesheet" href="example.css" />
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备分辨率高度设置为800px时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (min-device-height:800px) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/164.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## orientation :id=orientation

### 语法

**orientation**：`portrait` | `landscape`

**接受min/max前缀**：是

### 取值

**portrait**：指定输出设备中的页面可见区域高度大于或等于宽度
**landscape**：除portrait值情况外，都是landscape

### 说明

**定义输出设备中的页面可见区域高度是否大于或等于宽度**

本特性不接受min和max前缀

```css
@media screen and (orientation:portrait){ … }
@import url(example.css) screen and (orientation:landscape);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">你现在是：</div>
```

**css**

```css
.test::after {
	color: red;
}
@media screen and (orientation: portrait) {
	.test::after {
		content: "竖屏";
	}
}
@media screen and (orientation: landscape) {
	.test::after {
		content: "横屏";
	}
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/165.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## aspect-ratio :id=or

### 语法

**aspect-ratio**：\<ratio>

### 取值

\<ratio>：指定比率

### 说明

**定义输出设备中的页面可见区域宽度与高度的比率**

- 本特性接受min和max前缀，因此可以派生出 `min-aspect-ratio` 和 `max-aspect-ratio` 两个媒体特性

```css
@media screen and (aspect-ratio:1680/957){ … }
@import url(example.css) screen and (max-aspect-ratio:20/11);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当输出设备中的页面可见宽度与高度比率小于或等于20:11时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (max-aspect-ratio:20/11) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/166.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## device-aspect-ratio :id=dar

### 语法

**device-aspect-ratio**：\<ratio>

### 取值

\<ratio>：指定比率

### 说明

**定义输出设备的屏幕可见宽度与高度的比率**

- 如常讲的显示器屏幕比率：4/3, 16/9, 16/10
- 本特性接受min和max前缀，因此可以派生出 `min-device-aspect-ratio` 和 `max-device-aspect-ratio` 两个媒体特性

```css
@media screen and (device-aspect-ratio:4/3){ … }
@import url(example.css) screen and (min-device-aspect-ratio:4/3);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你将输出设备屏幕分辨率为16:10时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (device-aspect-ratio:16/10) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/167.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## color :id=color

### 语法

**color**：[\<integer>](/css-handbook/value-and-units/length?id=length)

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用用整数值来定义彩色原件数。不允许负值

### 说明

**定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于0**

- 与[色彩color]()不同，媒体特性 [color](#color) 的取值只能是 [\<integer>](/css-handbook/value-and-units/length?id=length)，用来表示色彩数
- 本特性接受min和max前缀，因此可以派生出 `min-color` 和 `max-color` 两个媒体特性

```css
@media screen and (color){ … }
@import url(example.css) screen and (color:0);
```

```html
<link media="screen and (min-color:1)" rel="stylesheet" href="example.css" />
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备是彩色的，本行文字显示为红色</div>
```

**css**

```css
@media screen and (color) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/168.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## color-index :id=ci

### 语法

**color-index**：[\<integer>](/css-handbook/value-and-units/length?id=length)

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用用整数值来定义彩色查询表中的条目数。不允许负值

### 说明

**定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0**

- 本特性接受min和max前缀，因此可以派生出 `min-color-index` 和 `max-color-index` 两个媒体特性

```css
@media screen and (color-index){ … }
@import url(example.css) screen and (min-color-index:1);
```

```html
<link media="screen and (color-index:0)" rel="stylesheet" href="example.css" />
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/108.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备使用了彩色查询表时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (min-color-index:0) {
  body{
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/169.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## monochrome :id=monochrome

### 语法

**monochrome**：[\<integer>](/css-handbook/value-and-units/length?id=length)

**接受min/max前缀**：是

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用整数值来定义宽度。不允许负值

### 说明

**定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0**

- 本特性接受min和max前缀，因此可以派生出 `min-monochrome` 和 `max-monochrome` 两个媒体特性

简单列举几个应用示例

```css
@media screen and (monochrome){ … }
@import url(example.css) screen and (monochrome:0);
```

```html
<link media="screen and (min-monochrome:0) and (max-monochrome:10)" rel="stylesheet" href="example.css" />
<?xml-stylesheet media="not screen and (monochrome)" rel="stylesheet" href="example.css" ?>
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/109.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">你的输出设备是：</div>
```

**css**

```css
@media screen and (max-monochrome: 0){
	.test::after {
		content: "彩色";
	}
}
@media screen and (min-monochrome: 1){
	.test::after {
		content: "单色的（黑白色）";
	}
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/170.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## resolution :id=resolution

### 语法

**resolution**：\<resolution>

### 取值

\<resolution>：用整数值来定义宽度。不允许负值

### 说明

**定义设备的分辨率。如：96dpi, 300dpi, 118dpcm**

- 本特性接受min和max前缀，因此可以派生出 `min-resolution` 和 `max-resolution` 两个媒体特性

简单列举几个应用示例

```css
@media screen and (resolution){ … }
@import url(example.css) screen and (min-resolution:96dpi);
```

```html
<link media="screen and (resolution:96dpi)" rel="stylesheet" href="example.css" />
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/110.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备分辨率大于或等于96dpi时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (min-resolution:96dpi){
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/171.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scan :id=scan

### 语法

**scan**：`progressive` | `interlace`

### 取值

**progressive**：连续扫描
**interlace**：交织扫描

### 说明

**定义电视类设备的扫描工序**

- 本特性不接受min和max前缀

```css
@media tv and (scan:progressive){ … }
@import url(example.css) tv and (scan:interlace);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/110.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的电视类设备的扫描工序为progressive时，本行文字显示为红色</div>
```

**css**

```css
@media tv and (scan:progressive) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/172.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## grid :id=grid

### 语法

**grid**：[\<integer>](/css-handbook/value-and-units/length?id=length)

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用整数值来定义是否使用栅格或点阵。只有1和0才是有效值，1代表是，0代表否

### 说明

**用来查询输出设备是否使用栅格或点阵**

- 本特性不接受min和max前缀

简单列举几个应用示例

```css
@media all and (grid){ … }
@import url(example.css) all and (grid:0);
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/110.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">当你的输出设备未使用栅格或点阵时，本行文字显示为红色</div>
```

**css**

```css
@media screen and (grid:0) {
	body {
    color:#f00;
  }
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/173.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
