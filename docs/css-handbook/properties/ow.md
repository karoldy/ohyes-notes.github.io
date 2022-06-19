[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [Only webkit](/css-handbook/properties/ow)

# Only webkit

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">-webkit-text-fill-color</span>](#wtfc)|CSS3|有|定义文字填充色|
|[<span class="g-color-css3-new">-webkit-text-stroke</span>](#wts)|CSS3|有|复合属性。定义文字的描边样式|
|[<span class="g-color-css3-new">-webkit-text-stroke-width</span>](#wtsw)|CSS3|有|定义文字描边的厚度|
|[<span class="g-color-css3-new">-webkit-text-stroke-color</span>](#wtsc)|CSS3|有|定义文字描边的颜色|
|[<span class="g-color-css3-new">-webkit-box-reflect</span>](#wbr)|CSS3|有|为元素设置倒影|
|[<span class="g-color-css3-new">-webkit-tap-highlight-color</span>](#wthc)|CSS3|无|定义元素轻按时高亮|
|[<span class="g-color-css3-new">-webkit-user-drag</span>](#wud)|CSS3|无|用以设置一个元素和它的内容是否可以被拖拽|
|[<span class="g-color-css3-new">-webkit-overflow-scrolling</span>](#wos)|CSS3|无|指定元素是否使用native-style（滚动回弹效果）来滚动溢出内容|

## -webkit-text-fill-color :id=wtfc

### 语法

**-webkit-text-fill-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：transparent

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定文字的填充颜色

### 说明

**定义文字填充色**

- 若同时设置 `-webkit-text-fill-color` 和 [color]() 属性，`-webkit-text-fill-color` 定义的颜色将覆盖 [color]() 定义；
- 通过 `-webkit-text-fill-color` 属性，可以做出一些例如渐变文字和镂空文字的效果
- 对应的脚本特性为 `webkitTextFillColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/113.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="text-fill-color">-webkit-text-fill-color</div>
```

**css**

```css
html,body{
	margin:50px 0;
}
.text-fill-color{
	width:950px;
	margin:0 auto;
	background:-webkit-linear-gradient(top,#eee,#aaa 50%,#333 51%,#000);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	font:bold 50px/1.231 georgia,sans-serif;
	text-transform:uppercase;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/183.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-text-stroke :id=wts

### 语法

**-webkit-text-stroke**：[-webkit-text-stroke-width](#wtsw) || [-webkit-text-stroke-color](#wtsc)

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：有

**动画性**：看每个独立属性

**计算值**：看每个独立属性

### 取值

[-webkit-text-stroke-width](#wtsw)：设置或检索对象中的文字的描边厚度

[-webkit-text-stroke-color](#wtsc)：设置或检索对象中的文字的描边颜色

### 说明

**复合属性。定义文字的描边样式**

- 通过 `-webkit-text-stroke` 属性，可以做出描边文字的效果
- 对应的脚本特性为 `webkitTextStroke`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/113.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="stroke">
	<h1>描边的文字：</h1>
	<p>我是被描了1像素红边的文字</p>
</div>
```

**css**

```css
html,body {
	font:bold 14px/1.5 georgia,simsun,sans-serif;
	text-align:center;
}
.stroke h1 {
	margin:0;
	padding:10px 0 0;
}
.stroke p {
	margin:50px auto 100px;
	font-size:100px;
	-webkit-text-stroke:1px #f00;
}
.copyright,.info {
	font-style:italic;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/184.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-text-stroke-width :id=wtsw

### 语法

**-webkit-text-stroke-width**：[\<length>](/css-handbook/value-and-units/length?id=length)

**默认值**：0

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定描边厚度。不允许负值

### 说明

**定义文字描边的厚度**

对应的脚本特性为 `webkitTextStrokeWidth`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/113.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="stroke">
	<h1>描边的文字：</h1>
	<p>我是被描了2像素黄边的文字</p>
</div>
```

**css**

```css
html,body {
	font:bold 14px/1.5 georgia,simsun,sans-serif;
	text-align:center;
}
.stroke h1 {
	margin:0;
	padding:10px 0 0;
}
.stroke p {
	margin:50px auto 100px;
	font-size:100px;
	-webkit-text-stroke-width:2px;
	-webkit-text-stroke-color:#ff0;
}
.copyright,.info {
	font-style:italic;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/185.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-text-stroke-color :id=wtsc

### 语法

**-webkit-text-stroke-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：采用文本颜色

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定文字的描边颜色

### 说明

**定义文字描边的颜色**

对应的脚本特性为 `webkitTextStrokeColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/113.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="stroke">
	<h1>描边的文字：</h1>
	<p>我是被描了2像素黄边的文字</p>
</div>
```

**css**

```css
html,body {
	font:bold 14px/1.5 georgia,simsun,sans-serif;
	text-align:center;
}
.stroke h1 {
	margin:0;
	padding:10px 0 0;
}
.stroke p {
	margin:50px auto 100px;
	font-size:100px;
	-webkit-text-stroke-width:2px;
	-webkit-text-stroke-color:#ff0;
}
.copyright,.info {
	font-style:italic;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/186.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-box-reflect :id=wbr

### 语法

**-webkit-box-reflect**：none | \<direction> \<offset>? \<mask-box-image>?

\<direction> = `above` | `below` | `left` | `right`

\<offset> = [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

\<mask-box-image> = none | [\<url>](/css-handbook/value-and-units/textual?id=url) | [\<linear-gradient>]() | [\<radial-gradient>]() | [<repeating-linear-gradient>]() | [<repeating-radial-gradient>]()

**默认值**：none

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**none**：无倒影

**above**：指定倒影在对象的上边

**below**：指定倒影在对象的下边

**left**：指定倒影在对象的左边

**right**：指定倒影在对象的右边

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义倒影与对象之间的间隔。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义倒影与对象之间的间隔。可以为负值

**none**：无遮罩图像

[\<url>](/css-handbook/value-and-units/textual?id=url)：使用绝对或相对地址指定遮罩图像

[\<linear-gradient>]()：使用线性渐变创建遮罩图像

[\<radial-gradient>]()：使用径向(放射性)渐变创建遮罩图像

[\<repeating-linear-gradient>]()：使用重复的线性渐变创建背遮罩像

[\<repeating-radial-gradient>]()：使用重复的径向(放射性)渐变创建遮罩图像

### 说明

**设置或检索对象倒影**

- 假设定义了 \<mask-box-image>，\<offset>必须指定，否则可以省略
- 对应的脚本特性为 `boxReflect`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/114.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="reflect">你看到倒影了么？</div>
```

**css**

```css
html,body{
	margin:50px 0;
}
.reflect{
	width:950px;
	margin:0 auto;
	-webkit-box-reflect:below 0 -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,.3));
	font:bold 100px/1.231 georgia,sans-serif;
	text-transform:uppercase;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/187.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-tap-highlight-color :id=wthc

### 语法

**-webkit-tap-highlight-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：由user agent决定

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**设置或检索对象的轻按时高亮**

- 当用户轻按一个链接或者JavaScript可点击元素时给元素覆盖一个高亮色
- 如果想取消这个高亮，将值设置为全透明即可，比如 `transparent`
- 对应的脚本特性为 `webkitTextHighlightColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/115.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<a href="#" class="test demo1">请在移动设备上查看本例</a>
<label class="test demo2"><input type="checkbox" />请在移动设备上查看本例</label>
```

**css**

```css
.test {
  display: block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #aaa;
  -webkit-user-select: none;
}
.demo1 {
  -webkit-tap-highlight-color: red;
}
.demo2 {
  -webkit-tap-highlight-color: red;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/188.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-user-drag :id=wud

### 语法

**-webkit-user-drag**：`auto` | `element` | `none`

**默认值**：auto

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

### 取值

**auto**：使用默认的拖拽行为，这种情况只有图片和链接可以被拖拽

**element**：整个元素（不仅仅只是它的内容）可拖拽

**none**：元素不能被拖动。在通过选中后可拖拽

### 说明

**用以设置一个元素和它的内容是否可以被拖拽**

对应的脚本特性为 `webkitUserDrag`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/115.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<dl>
  <dt>-webkit-user-drag: auto</dt>
  <dd><a href="#">我是一个链接</a></dd>
  <dd><img src="../../images/alipay.png" alt="支付宝二维码" /></dd>
  <dd>我是一些纯文字</dd>
  <dt>-webkit-user-drag: element</dt>
  <dd class="element"><a href="#">我是一个链接</a></dd>
  <dd class="element"><img src="../../images/alipay.png" alt="支付宝二维码" /></dd>
  <dd class="element">我是一些纯文字</dd>
  <dt>-webkit-user-drag: none</dt>
  <dd><a class="none" href="#">我是一个链接</a></dd>
  <dd><img class="none" src="../../images/alipay.png" alt="支付宝二维码" /></dd>
  <dd class="none">我是一些纯文字</dd>
</dl>
```

**css**

```css
dd {
	padding: 5px 0;
}
img {
  width: 100px;
  height: 100px;
}
.element {
  -webkit-user-drag: element;
  cursor: move;
  -webkit-user-select: none;
}
.none {
  -webkit-user-drag: none;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/189.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## -webkit-overflow-scrolling :id=wos

### 语法

**-webkit-overflow-scrolling**：`auto` | `touch`

**默认值**：auto

**适用于**：块容器，伸缩盒容器，grid容器

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**auto**：默认值。当手指从触摸屏上移开，滚动会立即停止，相当于普通的滚动效果

**touch**：使用具有回弹效果的滚动，当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆叠上下文

### 说明

**指定元素是否使用 native-style（滚动回弹效果）来滚动溢出内容**

- 该属性用来控制元素在移动设备上是否使用滚动回弹效果。
- 该属性在 iOS UIWebView 中无效。
- 该属性需与 [overflow]() 属性配合使用，因为必须先定义元素允许滚动，才可以指定它在滚动具有回弹效果
- 对应的脚本特性为 `webkitOverflowScrolling`

```css
.demo {
	height: 200px;
	overflow-y: auto; /* 允许元素滚动，值可以是 auto | scroll */
	-webkit-overflow-scrolling: touch; /* 定义滚动时回弹效果 */
}
```

!> 在移动设备上运行这个示例，将能感受到与 Native 相同的滚动回弹

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/116.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
  <h2>请在移动设备上查看本例</h2>
  <p>文字</p>
  <p>文字</p>
  <p>文字</p>
  <p>文字</p>
  <p>文字</p>
  <p>文字</p>
  <p>文字</p>
</div>
```

**css**

```css
html,
body {
  overflow: hidden;
}
.demo {
  height: 200px;
  background-color: red;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/190.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
