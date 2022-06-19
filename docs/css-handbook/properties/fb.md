[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [flex布局](/css-handbook/properties/fb)

# flex布局

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">flex</span>](#flex)|CSS3|无|复合属性。设置或检索伸缩盒对象的子元素如何分配空间|
|[<span class="g-color-css3-new">flex-grow</span>](#fg)|CSS3|无|设置或检索弹性盒的扩展比率|
|[<span class="g-color-css3-new">flex-shrink</span>](#fs)|CSS3|无|设置或检索弹性盒的收缩比率|
|[<span class="g-color-css3-new">flex-basis</span>](#fba)|CSS3|无|设置或检索弹性盒伸缩基准值|
|[<span class="g-color-css3-new"><span class="g-color-css3-new">flex-flow</span>](#ff)|CSS3|无|复合属性。设置或检索伸缩盒对象的子元素排列方式|
|[<span class="g-color-css3-new">flex-direction</span>](#fd)|CSS3|无|设置或检索伸缩盒对象的子元素在父容器中的位置|
|[<span class="g-color-css3-new">flex-wrap</span>](#fw)|CSS3|无|设置或检索伸缩盒对象的子元素超出父容器时是否换行|
|[<span class="g-color-css3-new">align-content</span>](#ac)|CSS3|无|设置或检索弹性盒堆叠伸缩行的对齐方式|
|[<span class="g-color-css3-new">align-items</span>](#ai)|CSS3|无|设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式|
|[<span class="g-color-css3-new">align-self</span>](#as)|CSS3|无|设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式|
|[<span class="g-color-css3-new">justify-content</span>](#jc)|CSS3|无|设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式|
|[<span class="g-color-css3-new">order</span>](#order)|CSS3|无|设置或检索伸缩盒对象的子元素出現的順序|

## flex :id=flex

### 语法

**flex**：`none` | [flex-grow](#fg) [flex-shrink](#fs) ? || [flex-basis](#fba)

**默认值**：看各分拆属性

**适用于**：flex子项

**继承性**：无

**动画性**：否

**计算值**：看各分拆属性

### 取值

**none**：none关键字的计算值为: 0 0 auto

[flex-grow](#fg)：用来指定扩展比率，即剩余空间是正值时此「flex子项」相对于「flex容器」里其他「flex子项」能分配到空间比例。在「flex」属性中该值如果被省略则默认为「1」

[flex-shrink](#fs)：用来指定收缩比率，即剩余空间是负值时此「flex子项」相对于「flex容器」里其他「flex子项」能收缩的空间比例。在收缩的时候收缩比率会以伸缩基准值加权在「flex」属性中该值如果被省略则默认为「1」

[flex-basis](#fba)：用来指定伸缩基准值，即在根据伸缩比率计算出剩余空间的分布之前，「flex子项」长度的起始数值。在「flex」属性中该值如果被省略则默认为「0%」在「flex」属性中该值如果被指定为「auto」，则伸缩基准值的计算值是自身的 [width]() 设置，如果自身的宽度没有定义，则长度取决于内容。

### 说明

**复合属性。设置或检索弹性盒模型对象的子元素如何分配空间**

- 如果缩写 `flex: 1`, 则其计算值为「1 1 0%」
- 如果缩写「flex: auto」, 则其计算值为「1 1 auto」
- 如果「flex: none」, 则其计算值为「0 0 auto」
- 如果「flex: 0 auto」或者「flex: initial」, 则其计算值为「0 1 auto」，即「flex」初始值

**例：如下情况每个元素的计算宽是多少**

<!-- tabs:start -->

#### **例子**

**html**

```html
<ul class="flex">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

**css**

```css
.flex {
	display:flex;
	width:800px;
	margin:0;
	padding:0;
	list-style:none;
}
.flex li:nth-child(1) {
  flex:1 1 300px;
}
.flex li:nth-child(2) {
  flex:2 2 200px;
}
.flex li:nth-child(3) {
  flex:3 3 400px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/123.html"
>
  浏览器不支持iframe
</iframe>

本例定义了父容器宽（即主轴宽）为800px，由于子元素设置了伸缩基准值flex-basis，相加300+200+400=900，那么子元素将会溢出900-800=100px；<br/>
由于同时设置了收缩因子，所以加权综合可得300\*1+200\*2+400\*3=1900px；<br/>
于是我们可以计算a,b,c将被移除的溢出量是多少：<br/>
a被移除溢出量：(300\*1/1900)\*100，即约等于16px<br/>
b被移除溢出量：(200\*2/1900)\*100，即约等于21px<br/>
c被移除溢出量：(400\*3/1900)\*100，即约等于63px<br/>
最后a,b,c的实际宽度分别为：300-16=284px, 200-21=179px, 400-63=337px<br/>

**将容器的宽度改成了1500px**

```css
.flex {
	display:flex;
	width:1500px;
	margin:0;
	padding:0;
	list-style:none;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/124.html"
>
  浏览器不支持iframe
</iframe>

本例定义了父容器宽（即主轴宽）为1500px，由于子元素设置了伸缩基准值flex-basis，相加300+200+400=900，那么容器将有1500-900=600px的剩余宽度；<br/>
于是我们可以计算a,b,c将被扩展量是多少：<br/>
a的扩展量：(1/(1+2+3))*600，即约等于100px<br/>
b的扩展量：(2/(1+2+3))*600，即约等于200px<br/>
c的扩展量：(3/(1+2+3))*600，即约等于300px<br/>
最后a,b,c的实际宽度分别为：300+100=400px, 200+200=400px, 400+300=700px<br/>
从本例能看出：<br/>
当「flex-basis」在「flex」属性中不为0时（包括值为auto，此时伸缩基准值等于自身内容宽度），「flex子项」将分配容器的剩余空间（剩余空间即等于容器宽度减去各项的伸缩基准值）<br/>
当「flex-basis」在「flex」属性中等于0时，「flex子项」将分配容器的所有空间（因为各项的伸缩基准值相加等于0，剩余空间等于容器宽度减去各项的伸缩基准值，即减0，最后剩余空间值等于容器宽度），所以可以借助此特性，给各子项定义「flex: n」来进行按比例均分容器总宽度

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex示例：</h1>

<ul id="box" class="box">
	<li>flex:1;</li>
	<li>flex:1;</li>
	<li>flex:1;</li>
</ul>

<ul id="box2" class="box">
	<li>flex:1 0 100px;</li>
	<li>flex:2 0 100px;</li>
	<li>flex:3 0 100px;</li>
</ul>

<ul id="box3" class="box">
	<li>flex:1 1 400px;</li>
	<li>flex:1 2 400px;</li>
	<li>flex:1 2 400px;</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:400px;
	height:100px;
	margin:10px 0 0;
	padding:0;
	border-radius:5px;
	list-style:none;
	background-color:#eee;
}
.box li {
	background:#aaa;
	text-align:center;
}
.box li:nth-child(1) {
	background:#999;
}
.box li:nth-child(2) {
	background:#aaa;
}
.box li:nth-child(3) {
	background:#ccc;
}
#box li:nth-child(1) {
	-webkit-flex:1;
	flex:1;
}
#box li:nth-child(2) {
	-webkit-flex:1;
	flex:1;
}
#box li:nth-child(3) {
	-webkit-flex:1;
	flex:1;
}
#box2 li:nth-child(1) {
	-webkit-flex:1 0 100px;
	flex:1 0 100px;
}
#box2 li:nth-child(2) {
	-webkit-flex:2 0 100px;
	flex:2 0 100px;
}
#box2 li:nth-child(3) {
	-webkit-flex:3 0 100px;
	flex:3 0 100px;
}
#box3 li:nth-child(1) {
	-webkit-flex:1 1 400px;
	flex:1 1 400px;
}
#box3 li:nth-child(2) {
	-webkit-flex:1 2 400px;
	flex:1 2 400px;
}
#box3 li:nth-child(3) {
	-webkit-flex:1 2 400px;
	flex:1 2 400px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/125.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-grow :id=fg

### 语法

**flex-grow**：[\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：0

**适用于**：flex子项

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用数值来定义扩展比率。不允许负值

### 说明

**设置或检索弹性盒的扩展比率**

- 根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间
- 对应的脚本特性为 `flexGrow`

示例：b,c将按照1:3的比率分配剩余空间

<!-- tabs:start -->

#### **例子**

**html**

```html
<ul class="flex">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

**css**

```css
.flex {
	display:flex;
	width:600px;
	margin:0;
	padding:0;
	list-style:none;
}
.flex li:nth-child(1) {
	width:200px;
}
.flex li:nth-child(2) {
	flex-grow:1;
	width:50px;
}
.flex li:nth-child(3) {
	flex-grow:3;
	width:50px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/126.html"
>
  浏览器不支持iframe
</iframe>

flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。<br/>
本例中b,c两项都显式的定义了flex-grow，flex容器的剩余空间分成了4份，其中b占1份，c占3分，即1:3 <br/>
flex容器的剩余空间长度为：600-200-50-50=300px，所以最终a,b,c的长度分别为：<br/>
a: 50+(300/4)=200px<br/>
b: 50+(300/4\*1)=125px<br/>
a: 50+(300/4\*3)=275px<br/>

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-grow示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:600px;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box li:nth-child(2) {
	-webkit-flex-grow:1;
	flex-grow:1;
}
#box li:nth-child(3) {
	-webkit-flex-grow:2;
	flex-grow:2;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/127.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-shrink :id=fs

### 语法

**flex-shrink**：[\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：1

**适用于**：flex子项

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

[\<number>](/css-handbook/value-and-units/numeric?id=number)：用数值来定义收缩比率。不允许负值

### 说明

**设置或检索弹性盒的收缩比率**

- 根据弹性盒子元素所设置的收缩因子作为比率来收缩空间

示例：a,b,c将按照`1:1:3`的比率来收缩空间

<!-- tabs:start -->

#### **例子**

**html**

```html
<ul class="flex">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

**css**

```css
.flex {
	display:flex;
	width:400px;
	margin:0;
	padding:0;
	list-style:none;
}
.flex li {
	width:200px;
}
.flex li:nth-child(3) {
	flex-shrink:3;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/128.html"
>
  浏览器不支持iframe
</iframe>

flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。<br/>
本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即`1:1:3`<br/>
我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化<br/>
通过收缩因子，所以加权综合可得200\*1+200\*1+200\*3=1000px；<br/>
于是我们可以计算a,b,c将被移除的溢出量是多少：<br/>
a被移除溢出量：(200\*1/1000)\*200，即约等于40px<br/>
b被移除溢出量：(200\*1/1000)\*200，即约等于40px<br/>
c被移除溢出量：(200\*3/1000)\*200，即约等于120px<br/>
最后a,b,c的实际宽度分别为：200-40=160px, 200-40=160px, 200-120=80px<br/>

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-shrink示例：</h1>
<ul id="flex">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
#flex {
	display:-webkit-flex;
	display:flex;
	width:400px;
	margin:0;
	padding:0;
	list-style:none;
}
#flex li {
	width:200px;
}
#flex li:nth-child(1) {
	background:#888;
}
#flex li:nth-child(2) {
	background:#ccc;
}
#flex li:nth-child(3) {
	-webkit-flex-shrink:3;
	flex-shrink:3;
	background:#aaa;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/129.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-basis :id=fba

### 语法

**flex-basis**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | `auto` | `content`

**默认值**：auto

**适用于**：flex子项

**继承性**：无

**动画性**：是，当值为非关键字时

**计算值**：指定值

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义宽度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义宽度。不允许负值

**auto**：无特定宽度值，取决于其它属性值

**content**：基于内容自动计算宽度

### 说明

**设置或检索弹性盒伸缩基准值**

- 如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间
- 对应的脚本特性为 `flexBasis`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/102.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-basis示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:600px;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box li:nth-child(3) {
	-webkit-flex-basis:600px;
	flex-basis:600px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/130.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-flow :id=ff

### 语法

**flex-flow**：[flex-direction](#fd) || [flex-wrap](#fw)

**默认值**：看各分拆属性

**适用于**：flex容器

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

[flex-direction](#fd)：定义弹性盒子元素的排列方向

[flex-wrap](#fw)：控制flex容器是单行或者多行

### 说明

**复合属性。设置或检索弹性盒模型对象的子元素排列方式**

对应的脚本特性为 `flexFlow`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-flow示例：</h1>
<h2>flex-flow:row nowrap</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-flow:row wrap-reverse</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-flow:column wrap-reverse;</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:220px;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box {
	-webkit-flex-flow:row nowrap;
	flex-flow:row nowrap;
}
#box2 {
	-webkit-flex-flow:row wrap-reverse;
	flex-flow:row wrap-reverse;
}
#box3 {
	height:220px;
	-webkit-flex-flow:column wrap-reverse;
	flex-flow:column wrap-reverse;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/131.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-direction :id=fd

### 语法

**flex-direction**：`row` | `row-reverse` | `column` | `column-reverse`

**默认值**：row

**适用于**：flex容器

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**row**：主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）

**row-reverse**：对齐方式与row相反

**column**：主轴与块轴方向作为默认的书写模式。即纵向从上往下排列（顶对齐）

**column-reverse**：对齐方式与column相反

### 说明

**该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。这将决定flex需要如何进行排列**

- 该属性的反转取值不影响元素的绘制，语音和导航顺序，只改变流动方向。这与 [writing-mode]() 和 [direction]() 相同
- 对应的脚本特性为 `flexDirection`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-direction示例：</h1>
<h2>flex-direction:row</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:row-reverse</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:column</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:column-reverse</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box {
	-webkit-flex-direction:row;
	flex-direction:row;
}
#box2 {
	-webkit-flex-direction:row-reverse;
	flex-direction:row-reverse;
}
#box3 {
	height:500px;
	-webkit-flex-direction:column;
	flex-direction:column;
}
#box4 {
	height:500px;
	-webkit-flex-direction:column-reverse;
	flex-direction:column-reverse;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/132.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## flex-wrap :id=fw

### 语法

**flex-wrap**：`nowrap` | `wrap` | `wrap-reverse`

**默认值**：nowrap

**适用于**：flex容器

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

**nowrap**：flex容器为单行。该情况下flex子项可能会溢出容器

**wrap**：flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行

**wrap-reverse**：反转 wrap 排列

### 说明

**该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向**

对应的脚本特性为 `flexWrap`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>flex-wrap示例：</h1>
<h2>flex-wrap:nowrap</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-wrap:wrap</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-wrap:wrap-reverse</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:220px;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box {
	-webkit-flex-wrap:nowrap;
	flex-wrap:nowrap;
}
#box2 {
	-webkit-flex-wrap:wrap;
	flex-wrap:wrap;
}
#box3 {
	-webkit-flex-wrap:wrap-reverse;
	flex-wrap:wrap-reverse;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/133.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## align-content :id=ac

### 语法

**align-content**：`flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `stretch`

**默认值**：stretch

**适用于**：多行的弹性盒模型容器

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

**flex-start**：各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行

**flex-end**：各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行

**center**：各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）

**space-between**：各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'flex-start'。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等

**space-around**：各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'center'。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半

**stretch**：各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸

### 说明

**当伸缩容器的侧轴还有多余空间时，本属性可以用来调准「伸缩行」在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的 [justify-content](#jc) 属性类似。请注意本属性在只有一行的伸缩容器上没有效果**

对应的脚本特性为 `alignContent`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>align-content示例：</h1>
<h2>align-content:flex-start</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
<h2>align-content:flex-end</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
<h2>align-content:center</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
<h2>align-content:space-between</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
<h2>align-content:space-around</h2>
<ul id="box5" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
<h2>align-content:strecth</h2>
<ul id="box6" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	-webkit-flex-wrap:wrap;
	flex-wrap:wrap;
	width:200px;
	height:200px;
	margin:0;
	padding:0;
	border-radius:5px;
	list-style:none;
	background-color:#eee;
}
.box li {
	margin:5px;
	padding:10px;
	border-radius:5px;
	background:#aaa;
	text-align:center;
}
#box {
	-webkit-align-content:flex-start;
	align-content:flex-start;
}
#box2 {
	-webkit-align-content:flex-end;
	align-content:flex-end;
}
#box3 {
	-webkit-align-content:center;
	align-content:center;
}
#box4 {
	-webkit-align-content:space-between;
	align-content:space-between;
}
#box5 {
	-webkit-align-content:space-around;
	align-content:space-around;
}
#box6 {
	-webkit-align-content:strecth;
	align-content:strecth;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/134.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## align-items :id=ai

### 语法

**align-items**：`flex-start` | `flex-end` | `center` | `baseline` | `stretch`

**默认值**：stretch

**适用于**：flex容器

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

**flex-start**：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界

**flex-end**：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界

**center**：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）

**baseline**：如弹性盒子元素的行内轴与侧轴为同一条，则该值与 `flex-start` 等效。其它情况下，该值将参与基线对齐

**stretch**：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照 `min/max-width/height` 属性的限制

### 说明

**定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式**

对应的脚本特性为 `alignItems`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>align-items示例：</h1>
<h2>align-items:flex-start</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>align-items:flex-end</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>align-items:center</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>align-items:baseline</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>align-items:strecth</h2>
<ul id="box5" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:200px;
	height:100px;
	margin:0;
	padding:0;
	border-radius:5px;
	list-style:none;
	background-color:#eee;
}
.box li {
	margin:5px;
	border-radius:5px;
	background:#aaa;
	text-align:center;
}
.box li:nth-child(1) {
	padding:10px;
}
.box li:nth-child(2) {
	padding:15px 10px;
}
.box li:nth-child(3) {
	padding:20px 10px;
}
#box {
	-webkit-align-items:flex-start;
	align-items:flex-start;
}
#box2 {
	-webkit-align-items:flex-end;
	align-items:flex-end;
}
#box3 {
	-webkit-align-items:center;
	align-items:center;
}
#box4 {
	-webkit-align-items:baseline;
	align-items:baseline;
}
#box5 {
	-webkit-align-items:strecth;
	align-items:strecth;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/135.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## align-self :id=as

### 语法

**align-self**：`auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`

**默认值**：auto

**适用于**：flex子项

**继承性**：无

**动画性**：是

**计算值**：如果值为「auto」，则计算值为父元素的 [align-items](#ai) 值，否则为指定值

### 取值

**auto**：如果 `align-self` 的值为 `auto`，则其计算值为元素的父元素的 `align-items` 值，如果其没有父元素，则计算值为 `stretch`

**flex-start**：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界

**flex-end**：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界

**center**：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）

**baseline**：如弹性盒子元素的行内轴与侧轴为同一条，则该值与 `flex-start` 等效。其它情况下，该值将参与基线对齐

**stretch**：如果指定侧轴大小的属性值为 `auto`，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照 `min/max-width/height` 属性的限制

### 说明

**定义flex子项单独在侧轴（纵轴）方向上的对齐方式**

对应的脚本特性为 `alignSelf`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>align-self示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
	<li>f</li>
	<li>g</li>
	<li>h</li>
	<li>i</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	-webkit-align-items:flex-end;
	height:100px;
	margin:0;
	padding:10px;
	border-radius:5px;
	list-style:none;
	background-color:#eee;
}
.box li {
	margin:5px;
	padding:10px;
	border-radius:5px;
	background:#aaa;
	text-align:center;
}
.box li:nth-child(1) {
	-webkit-align-self:flex-end;
	align-self:flex-end;
}
.box li:nth-child(2) {
	-webkit-align-self:center;
	align-self:center;
}
.box li:nth-child(3) {
	-webkit-align-self:flex-start;
	align-self:flex-start;
}
.box li:nth-child(4) {
	-webkit-align-self:baseline;
	align-self:baseline;
	padding:20px 10px;
}
.box li:nth-child(5) {
	-webkit-align-self:baseline;
	align-self:baseline;
}
.box li:nth-child(6) {
	-webkit-align-self:stretch;
	align-self:stretch;
}
.box li:nth-child(7) {
	-webkit-align-self:auto;
	align-self:auto;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/136.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## justify-content :id=jc

### 语法

**justify-content**：`flex-start` | `flex-end` | `center` | `space-between` | `space-around`

**默认值**：flex-start

**适用于**：flex容器

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

**flex-start**：弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐

**flex-end**：弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐

**center**：弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）

**space-between**：弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于'flex-start'。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等

**space-around**：弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于'center'。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半

### 说明

**设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式**

- 当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制
- 对应的脚本特性为 `justifyContent`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>justify-content示例：</h1>
<h2>justify-content:flex-start</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:flex-end</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:center</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:space-between</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>justify-content:space-around</h2>
<ul id="box5" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	width:400px;
	height:100px;
	margin:0;
	padding:0;
	border-radius:5px;
	list-style:none;
	background-color:#eee;
}
.box li {
	margin:5px;
	padding:10px;
	border-radius:5px;
	background:#aaa;
	text-align:center;
}
#box {
	-webkit-justify-content:flex-start;
	justify-content:flex-start;
}
#box2 {
	-webkit-justify-content:flex-end;
	justify-content:flex-end;
}
#box3 {
	-webkit-justify-content:center;
	justify-content:center;
}
#box4 {
	-webkit-justify-content:space-between;
	justify-content:space-between;
}
#box5 {
	-webkit-justify-content:space-around;
	justify-content:space-around;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/137.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## order :id=order

### 语法

**order**：[\<integer>](/css-handbook/value-and-units/length?id=length)

**默认值**：0

**适用于**：flex子项和flex容器中的绝对定位子元素

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用整数值来定义排列顺序，数值小的排在前面。可以为负值

### 说明

**设置或检索弹性盒模型对象的子元素出現的順序**

- `order` 定义将会影响 [position]() 值为 `static` 元素的层叠级别，数值小的会被数值大的盖住

demo

<!-- tabs:start -->

#### **demo**

**html**

```html
<div class="test">
	<p class="item1">flex item1</p>
	<p class="item2">flex item2</p>
</div>
```

**css**

```css
.test {
	display: flex;
}
.item2 {
	order: -1;
	margin: -30px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/138.html"
>
  浏览器不支持iframe
</iframe>

!> 此时，item1将会盖在item2之上

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/101.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>order示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
```

**css**

```css
h1 {
	font:bold 20px/1.5 georgia,simsun,sans-serif;
}
.box {
	display:-webkit-flex;
	display:flex;
	margin:0;
	padding:10px;
	list-style:none;
	background-color:#eee;
}
.box li {
	width:100px;
	height:100px;
	border:1px solid #aaa;
	text-align:center;
}
#box li:nth-child(3) {
	-webkit-order:-1;
	order:-1;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/139.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
