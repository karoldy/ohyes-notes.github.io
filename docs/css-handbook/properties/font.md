[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [字体](/css-handbook/properties/font)

# 字体

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[font](#font)|CSS1/2|有|简写属性。定义元素的文本特性|
|[font-style](#fstyle)|CSS1|有|指定元素的文本是否为斜体|
|[font-variant](#fv)|CSS1|有|定义元素的文本是否为小型的大写字母|
|[font-weight](#fw)|CSS1|有|定义元素文本字体的粗细|
|[font-size](#fsize)|CSS1|有|定义元素的字体大小|
|[font-family](#ff)|CSS1|有|定义元素文本的字体名称序列|
|[<span class="g-color-css3-new">font-stretch</span>](#fstretch)|CSS3|有|定义元素的文字是否横向拉伸变形|
|[<span class="g-color-css3-new">font-size-adjust</span>](#fsa)|CSS3|有|定义小写字母x的高度与对象文字字号的比率|

## font :id=font

### 语法

**font**：[ [ [font-style](#fstyle) || [font-variant](#fv) || [font-weight](#fw) || [font-stretch](#fstretch) ]?[font-size](#fsize) [ / [line-height](/css-handbook/properties/text#lh) ]? [font-family](#ff) ] | `caption` | `icon` | `menu` | `message-box` | `small-caption` | `status-bar`

**默认值**：看独立属性自身

**适用于**：所有元素

**继承性**：有

**动画性**：看独立属性自身

**计算值**：看独立属性自身

**媒　体**：视觉

### 取值

[font-style](#fstyle)：指定文本字体样式

[font-variant](#fv)：指定文本是否为小型的大写字母

[font-weight](#fw)：指定文本字体的粗细

[font-stretch](#fstretch)：指定文本字体拉伸变形

[font-size](#fsize)：指定文本字体尺寸

[line-height](/css-handbook/properties/text#lh)：指定文本字体的行高

[font-family](#ff)：指定文本使用某个字体或字体序列

**caption**：使用有标题的系统控件的文本字体（如按钮，菜单等）（CSS2）

**icon**：使用图标标签的字体（CSS2）

**menu**：使用菜单的字体（CSS2）

**message-box**：使用信息对话框的文本字体（CSS2）

**small-caption**：使用小控件的字体（CSS2）

**status-bar**：使用窗口状态栏的字体（CSS2）

### 说明

**简写属性。定义元素的文本特性**

- 使用font属性参数必须按照如上的排列顺序，且 [font-size](#fsize) 和 [font-family](#ff) 是不可忽略的。每个参数仅允许有一个值。忽略的将使用其参数对应的独立属性的默认值
- 对于如何使用客户端系统没有字体和自定义字体，可以参阅 @font-face 规则
- 对应的脚本特性为：`font`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/44.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="font1">
		<strong>只指定字体大小和字体：</strong>
		<p>本段文字将显示为18px宋体。</p>
	</li>
	<li class="font2">
		<strong>只指定字体样式、大小和字体：</strong>
		<p>本段文字将显示为斜体的18px宋体。</p>
	</li>
	<li class="font3">
		<strong>只指定字体样式、小型大写字母、大小和字体：</strong>
		<p>本段文字将显示为斜体的带小型大写字母的18px宋体。大小型大写字母对比：AaBbCcDdEeFfGg</p>
	</li>
	<li class="font4">
		<strong>只指定字体样式、小型大写字母、粗细、大小和字体：</strong>
		<p>本段文字将显示为斜体的带小型大写字母的加粗18px宋体。</p>
	</li>
	<li class="font5">
		<strong>只指定字体样式、小型大写字母、粗细、大小、行高和字体：</strong>
		<p>本段文字将显示为行高为2的斜体的带小型大写字母的加粗18px宋体。</p>
	</li>
	<li class="caption">
		<strong>指定字体为caption：</strong>
		<p>本段文字将以caption的字体显示。</p>
	</li>
	<li class="icon">
		<strong>指定字体为icon：</strong>
		<p>本段文字将以icon的字体显示。</p>
	</li>
	<li class="menu">
		<strong>指定字体为menu：</strong>
		<p>本段文字将以menu的字体显示。</p>
	</li>
	<li class="message-box">
		<strong>指定字体为message-box：</strong>
		<p>本段文字将以message-box的字体显示。</p>
	</li>
	<li class="small-caption">
		<strong>指定字体为small-caption：</strong>
		<p>本段文字将以small-caption的字体显示。</p>
	</li>
	<li class="status-bar">
		<strong>指定字体为status-bar：</strong>
		<p>本段文字将以status-bar的字体显示。</p>
	</li>
</ul>
```

**css**

```css
.test p {
  margin: 15px 0;
  border: 1px solid #000;
}
.font1 p {
  font: 18px Simsun,arial,sans-serif;
}
.font2 p {
  font: italic 18px Simsun,arial,sans-serif;
}
.font3 p {
  font: italic small-caps 18px Simsun,arial,sans-serif;
}
.font4 p {
  font: italic small-caps bold 18px Simsun,arial,sans-serif;
}
.font5 p {
  font: italic small-caps bold 18px/2 Simsun,arial,sans-serif;
}
.caption p {
  font: caption;
}
.icon p {
  font: icon;
}
.menu p {
  font: menu;
}
.message-box p {
  font: message-box;
}
.small-caption p {
  font: small-caption;
}
.status-bar p {
  font: status-bar;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/50.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-style :id=fstyle

### 语法

**font-style**：`normal` | `italic` | `oblique`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**normal**：指定文本字体样式为正常的字体

**italic**：指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique

**oblique**：指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字

### 说明

**指定元素的文本是否为斜体**

对应的脚本特性为：`fontStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/45.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>正常的字体：</strong>
		<p>本段文字将显示为正常的字体。</p>
	</li>
	<li class="italic">
		<strong>斜体：</strong>
		<p>本段文字将显示为斜体。</p>
	</li>
	<li class="oblique">
		<strong>倾斜的字体：</strong>
		<p>本段文字将显示为倾斜的字体。</p>
	</li>
</ul>
```

**css**

```css
.test p {
  margin:15px 0;border:1px solid #000;
}
.normal p {
  font-style:normal;
}
.italic p {
  font-style:italic;
}
.oblique p {
  font-style:oblique;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/51.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-variant :id=fv

### 语法

**font-variant**：`normal` | `small-caps`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

**normal**：正常的字体

**small-caps**：小型的大写字母字体

### 说明

**定义元素的文本是否为小型的大写字母**

对应的脚本特性为：`fontVariant`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/46.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li>
		<strong>将文本转换为小型的大写字母</strong>
		<div>原　文： HOW DO YOU DO & <span>how do you do.</span></div>
		<div class="small-caps">转换后： HOW DO YOU DO & <span>how do you do.</span></div>
	</li>
</ul>
```

**css**

```css
.test p {
	margin: 15px 0;
	border: 1px solid #000;
}
.small-caps span {
	font-variant: small-caps;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/52.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-weight :id=fw

### 语法

**font-weight**：`normal` | `bold` | `bolder` | `lighter` | [\<integer>](/css-handbook/value-and-units/length?id=length)

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：数字重量值

**媒　体**：视觉

### 取值

**normal**：正常的字体。相当于数字值400

**bold**：粗体。相当于数字值700

**bolder**：定义比继承值更重的值

**lighter**：定义比继承值更轻的值

[\<integer>](/css-handbook/value-and-units/length?id=length)：用数字表示文本字体粗细。取值范围：`100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900`

### 说明

**定义元素文本字体的粗细**

- 该属性是否有效由客户端系统安装的字体的特定字体变量映射决定，系统选择最近的匹配。也就是说，用户可能看不到不同值之间的差异（举个例子，有些字体可能没有设计所有的字重）
- 对应的脚本特性为：`fontWeight`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/47.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>正常的字体：</strong>
		<p>本段文字将显示为正常的字体。</p>
	</li>
	<li class="bold">
		<strong>粗体：</strong>
		<p>本段文字将显示为粗体。</p>
	</li>
	<li class="bolder">
		<strong>特粗体：</strong>
		<p>本段文字将显示为特粗体。</p>
	</li>
	<li class="lighter">
		<strong>细体：</strong>
		<p>本段文字将显示为细体。</p>
	</li>
	<li class="number">
		<strong>用number值表示粗体：</strong>
		<p>本段文字将显示为粗体。</p>
	</li>
</ul>
```

**css**

```css
.test p {
  margin:15px 0;border:1px solid #000;
}
.normal p {
  font-weight:normal;
}
.bold p {
  font-weight:bold;
}
.bolder p {
  font-weight:bolder;
}
.lighter p {
  font-weight:lighter;
}
.number p {
  font-weight:700;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/53.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-size :id=fsize

### 语法

**font-size**：\<absolute-size> | \<relative-size> | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

\<absolute-size> = `xx-small` | `x-small` | `small` | `medium` | `large` | `x-large` | `xx-large`

\<relative-size> = `smaller` | `larger`

**默认值**：medium

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

\<absolute-size>：根据对象字号进行调节。以 medium 作为基础参照，xx-small相当于medium 3/5 (h6)，x-small: 3/4，small: 8/9 (h5)，medium: 1 (h4)，large: 6/5 (h3)，x-large: 3/2 (h2)，xx-large: 2/1 (h1)

\<relative-size>：相对于父对像中字号进行相对调节。使用成比例的em单位计算

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值指定文字大小。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比指定文字大小。其百分比取值是基于父对象中字体的尺寸。不允许负值

### 说明

**定义元素的字体大小**

对应的脚本特性为：`fontSize`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/48.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="xx-small">
		<strong>尺寸大小为xx-small：</strong>
		<p>xx-small尺寸的文字。</p>
	</li>
	<li class="x-small">
		<strong>尺寸大小为x-small：</strong>
		<p>x-small尺寸的文字。</p>
	</li>
	<li class="small">
		<strong>尺寸大小为small：</strong>
		<p>small尺寸的文字。</p>
	</li>
	<li class="medium">
		<strong>尺寸大小为medium：</strong>
		<p>medium尺寸的文字。</p>
	</li>
	<li class="large">
		<strong>尺寸大小为large：</strong>
		<p>large尺寸的文字。</p>
	</li>
	<li class="x-large">
		<strong>尺寸大小为x-large：</strong>
		<p>x-large尺寸的文字。</p>
	</li>
	<li class="xx-large">
		<strong>尺寸大小为xx-large：</strong>
		<p>xx-large尺寸的文字。</p>
	</li>
	<li class="samller">
		<strong>尺寸大小为samller：</strong>
		<p>samller尺寸的文字。</p>
	</li>
	<li class="larger">
		<strong>尺寸大小为larger：</strong>
		<p>larger尺寸的文字。</p>
	</li>
	<li class="float">
		<strong>尺寸大小为20px：</strong>
		<p>20px尺寸的文字。</p>
	</li>
	<li class="percentage">
		<strong>尺寸大小为20px：</strong>
		<p>父对象20px尺寸的文字。<span>我的尺寸只是父对象的60%</span></p>
	</li>
</ul>
```

**css**

```css
.test p {
  margin: 15px 0;border:1px solid #000;
}
.xx-small p {
  font-size: xx-small;
}
.x-small p {
  font-size: x-small;
}
.small p {
  font-size: small;
}
.medium p {
  font-size: medium;
}
.large p {
  font-size: large;
}
.x-large p {
  font-size:x-large;
}
.xx-large p {
  font-size: xx-large;
}
.smaller p {
  font-size: smaller;
}
.larger p {
  font-size: larger;
}
.float p {
  font-size: 20px;
}
.percentage {
  font-size: 20px;
}
.percentage span {
  font-size: 60%;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/54.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-family :id=ff

### 语法

**font-family**：[ \<family-name> | \<generic-family> ] #

\<family-name> = `arial` | `georgia` | `verdana` | `helvetica` | `simsun` and `etc.`

\<generic-family> = `cursive` | `fantasy` | `monospace` | `serif` | `sans-serif`

**默认值**：由 `user agent` 决定

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：指定值

**媒　体**：视觉

### 取值

\<family-name>：字体名称。按优先顺序排列。以逗号隔开。如果字体名称包含空格或中文，则应使用引号括起

\<generic-family>：字体序列名称

### 说明

**定义元素文本的字体名称序列**

- 序列可包含嵌入字体。请参阅@font-face规则
- 一般字体引用可以不加引号，如果字体名包含了空格、数字或者符号（如连接符）则需加上引号，避免引发错误
- user agent会遍历定义的字体序列，直到匹配到某个字体为止
- 对应的脚本特性为：`fontFamily`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/49.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">使用字体名称和字体序列名称定义字体。</div>
```

**css**

```css
.test {
	font-family: arial, georgia, verdana, simsun, helvetica, sans-serif;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/55.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-stretch :id=fstretch

### 语法

**font-stretch**：`normal` | `ultra-condensed` | `extra-condensed` | `condensed` | `semi-condensed` | `semi-expanded` | `expanded` | `extra-expanded` | `ultra-expanded`

**默认值**：normal

**适用于**：所有元素

**继承性**：有

**动画性**：是

**计算值**：指定值

**媒　体**：视觉

### 取值

**normal**：正常文字宽度

**ultra-condensed**：比正常文字宽度窄4个基数

**extra-condensed**：比正常文字宽度窄3个基数

**condensed**：比正常文字宽度窄2个基数

**semi-condensed**：比正常文字宽度窄1个基数

**semi-expanded**：比正常文字宽度宽1个基数

**expanded**：比正常文字宽度宽2个基数

**extra-expanded**：比正常文字宽度宽3个基数

**ultra-expanded**：比正常文字宽度宽4个基数

### 说明

**定义元素的文字是否横向拉伸变形**

- 文字的拉伸是相对于浏览器显示的字体的正常宽度
- 对应的脚本特性为：`fontStretch`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/50.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="normal">
		<strong>normal</strong>
		<p>a</p>
	</li>
	<li class="condensed">
		<strong>condensed</strong>
		<p>a</p>
	</li>
	<li class="ultra-condensed">
		<strong>ultra-condensed</strong>
		<p>a</p>
	</li>
	<li class="extra-condensed">
		<strong>extra-condensed</strong>
		<p>a</p>
	</li>
	<li class="semi-expanded">
		<strong>semi-expanded</strong>
		<p>a</p>
	</li>
	<li class="expanded">
		<strong>expanded</strong>
		<p>a</p>
	</li>
	<li class="ultra-expanded">
		<strong>ultra-expanded</strong>
		<p>a</p>
	</li>
	<li class="extra-expanded">
		<strong>extra-expanded</strong>
		<p>a</p>
	</li>
	<li class="semi-condensed">
		<strong>semi-condensed</strong>
		<p>a</p>
	</li>
</ul>
```

**css**

```css
p {
  margin: 0;
  font-size: 80px;
  font-weight: bold;
  background: #ddd;
  width: 30px;
}
.test .normal p {
  font-stretch: normal;
}
.test .condensed p {
  font-stretch: condensed;
}
.test .ultra-condensed p {
  font-stretch: ultra-condensed;
}
.test .extra-condensed p {
  font-stretch: extra-condensed;
}
.test .semi-expanded p {
  font-stretch: semi-expanded;
}
.test .expanded p {
  font-stretch: expanded;
}
.test .ultra-expanded p {
  font-stretch: ultra-expanded;
}
.test .extra-expanded p {
  font-stretch: extra-expanded;
}
.test .semi-condensed p {
  font-stretch: semi-condensed;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/56.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## font-size-adjust :id=fsa

### 语法

**font-size-adjust**：`none` | [\<number>](/css-handbook/value-and-units/numeric?id=number)

**默认值**：none

**适用于**：所有元素

**继承性**：有

**动画性**：当值为 [\<number>](/css-handbook/value-and-units/numeric?id=number) 时

**计算值**：指定值

**媒　体**：视觉

### 取值

**none**：不保留首选字体的 x-height

[\<number>](/css-handbook/value-and-units/numeric?id=number)：定义字体的 aspect 值

### 说明

**定义元素的 aspect 值，用以保持首选字体的 x-height**

- 字体的小写字母 "x" 的高度与字号之间的比率被称为一个字体的 aspect 值
- 高 aspect 值的字体被设置为很小的尺寸时会更易阅读。举例：Verdana 的 aspect 值是 0.58（意味着当字体尺寸为 100px 时，它的 x-height 是 58px）。Times New Roman 的 aspect 值是 0.46。这就意味着 Verdana 在小尺寸时比 Times New Roman 更易阅读
- 可以使用这个公式来为可用字体推演出合适的字号：可应用到可用字体的字体尺寸 = 首选字体的字体尺寸 * （font-size-adjust 值 / 可用字体的 aspect 值）
- 详述：如果 14px 的 Verdana（aspect 值是 0.58）不可用，但是某个可用的字体的 aspect 值是 0.46，那么替代字体的尺寸将是 14 * (0.58/0.46) = 17.65px
- 对应的脚本特性为：`fontSizeAdjust`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/51.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<p>Hello World!</p>
```

**css**

```css
body {
	font: 14px/1.5 Verdana, Times New Roman;
	font-size-adjust: .58;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/57.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
