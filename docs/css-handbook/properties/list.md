[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [列表](/css-handbook/properties/list)

# 列表

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[list-style](#ls)|CSS1|有|复合属性。设置列表项目相关内容|
|[list-style-image](#lsi)|CSS1|有|设置或检索作为对象的列表项标记的图像|
|[list-style-position](#lsp)|CSS1|有|设置或检索作为对象的列表项标记如何根据文本排列|
|[list-style-type](#lst)|CSS1/2|有|设置或检索对象的列表项所使用的预设标记|

## list-style :id=ls

### 语法

**list-style**：[list-style-type](#lst) || [list-style-position](#lsp) || [list-style-image](#lsi)

**默认值**：看独立属性自身

**适用于**：所有 `display` 设置为 `list-item` 的元素

**继承性**：有

**动画性**：否

**计算值**：看独立属性自身

### 取值

[list-style-type](#lst)：设置或检索对象的列表项所使用的预设标记

[list-style-position](#lsp)：设置或检索作为对象的列表项标记如何根据文本排列

[list-style-image](#lsi)：设置或检索作为对象的列表项标记的图像

### 说明

**复合属性。设置列表项目相关内容**

- 需要注意的是，如果使用 `list-style` 复合属性，[list-style-image](#lsi) 属性必须放在最后，否则部分浏览器（包括所有的webkit/blink内核浏览器）将会解析出错
- 对应的脚本特性为 `listStyle`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/76.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
	<li class="colorname">列表项一</li>
</ul>
```

**css**

```css
.test{
  list-style: upper-alpha outside none;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/84.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## list-style-image :id=lsi

### 语法

**list-style-image**：`none` | [\<url>](/css-handbook/value-and-units/textual?id=url)

**默认值**：none

**适用于**：所有 `display` 设置为 `list-item` 的元素

**继承性**：有

**动画性**：否

**计算值**：图像计算值或none

### 取值

none：不指定图像，默认内容标记将被 [list-style-type](#lst) 代替

[\<url>](/css-handbook/value-and-units/textual?id=url)：使用绝对或相对地址指定列表项标记图像。如果图像地址无效，默认内容标记将被 [list-style-type](#lst) 代替

### 说明

**设置或检索作为对象的列表项标记的图像**

- 若 `list-style-image` 属性为 `none` 或指定图像不可用时，[list-style-type](#lst) 属性将发生作用。
- 对应的脚本特性为 `listStyleImage`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/77.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li>列表项一</li>
	<li>列表项一</li>
	<li>列表项一</li>
	<li>列表项一</li>
</ul>
```

**css**

```css
.test {
  list-style-image: url(skin/ico.png);
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/85.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## list-style-position :id=lsp

### 语法

**list-style-position**：`outside` | `inside`

**默认值**：outside

**适用于**：所有 `display` 设置为 `list-item` 的元素

**继承性**：有

**动画性**：否

**计算值**：特定值

### 取值

**outside**：列表项目标记放置在文本以外，且环绕文本不根据标记对齐

**inside**：列表项目标记放置在文本以内，且环绕文本根据标记对齐

### 说明

**设置或检索作为对象的列表项标记如何根据文本排列**

- 仅作用于具有 `display` 值等于 `list-item` 的对象（如li对象）
- 注意：ol对象和ul对象的type特性为其后的所有列表项目（如li对象）指明列表属性
- 对应的脚本特性为 `listStylePosition`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/78.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>outside的项目符号：</h1>
<ul class="outside">
	<li>项目符号的位置是outside</li>
	<li>项目符号的位置是outside</li>
	<li>项目符号的位置是outside</li>
</ul>
<h1>inside的项目符号：</h1>
<ul class="inside">
	<li>项目符号的位置是inside</li>
	<li>项目符号的位置是inside</li>
	<li>项目符号的位置是inside</li>
</ul>
```

**css**

```css
.outside {
  width: 120px;
  list-style-position: outside;
}
.inside {
  width: 120px;
  list-style-position: inside;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/86.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## list-style-type :id=lst

### 语法

**list-style-type**：`disc` | `circle` | `square` | `decimal` | `lower-roman` | `upper-roman` | `lower-alpha` | `upper-alpha` | `none` | `armenian` | `cjk-ideographic` | `georgian` | `lower-greek` | `hebrew` | `hiragana` | `hiragana-iroha` | `katakana` | `katakana-iroha` | `lower-latin` | `upper-latin`

**默认值**：disc

**适用于**：所有 `display` 设置为 `list-item` 的元素

**继承性**：有

**动画性**：否

**计算值**：特定值

### 取值

**disc**：实心圆(CSS1)

**circle**：空心圆(CSS1)

**square**：实心方块(CSS1)

**decimal**：阿拉伯数字(CSS1)

**lower-roman**：小写罗马数字(CSS1)

**upper-roman**：大写罗马数字(CSS1)

**lower-alpha**：小写英文字母(CSS1)

**upper-alpha**：大写英文字母(CSS1)

**none**：不使用项目符号(CSS1)

**armenian**：传统的亚美尼亚数字(CSS2)

**cjk-ideographic**：浅白的表意数字(CSS2)

**georgian**：传统的乔治数字(CSS2)

**lower-greek**：基本的希腊小写字母(CSS2)

**hebrew**：传统的希伯莱数字(CSS2)

**hiragana**：日文平假名字符(CSS2)

**hiragana-iroha**：日文平假名序号(CSS2)

**katakana**：日文片假名字符(CSS2)

**katakana-iroha**：日文片假名序号(CSS2)

**lower-latin**：小写拉丁字母(CSS2)

**upper-latin**：大写拉丁字母(CSS2)

### 说明

**设置或检索对象的列表项所使用的预设标记**

- 若 [list-style-image](#lsi) 属性为none或指定图像不可用时， `list-style-type` 属性将发生作用
- 仅作用于具有 `display` 值等于 `list-item` 的对象（如li对象）
- 注意：ol对象和ul对象的type特性为其后的所有列表项目（如li对象）指明列表属性
- 对应的脚本特性为 `listStyleType`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/79.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>disc：</h1>
<ul class="disc">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>circle：</h1>
<ul class="circle">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>square：</h1>
<ul class="square">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>decimal：</h1>
<ul class="decimal">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-roman：</h1>
<ul class="lower-roman">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-roman：</h1>
<ul class="upper-roman">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-alpha：</h1>
<ul class="lower-alpha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-alpha：</h1>
<ul class="upper-alpha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>none：</h1>
<ul class="none">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>armenian：</h1>
<ul class="armenian">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>cjk-ideographic：</h1>
<ul class="cjk-ideographic">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>georgian：</h1>
<ul class="georgian">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-greek：</h1>
<ul class="lower-greek">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hebrew：</h1>
<ul class="hebrew">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hiragana：</h1>
<ul class="hiragana">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hiragana-iroha：</h1>
<ul class="hiragana-iroha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>katakana：</h1>
<ul class="katakana">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>katakana-iroha：</h1>
<ul class="katakana-iroha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-latin：</h1>
<ul class="lower-latin">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-latin：</h1>
<ul class="upper-latin">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
```

**css**

```css
h1 {
  font-size: 16px;
  font-family: Arial;
}
.disc {
  list-style-type: disc;
}
.circle {
  list-style-type: circle;
}
.square {
  list-style-type: square;
}
.decimal {
  list-style-type: decimal;
}
.lower-roman {
  list-style-type: lower-roman;
}
.upper-roman {
  list-style-type: upper-roman;
}
.lower-alpha {
  list-style-type: lower-alpha;
}
.upper-alpha {
  list-style-type: upper-alpha;
}
.none {
  list-style-type: none;
}
.armenian {
  list-style-type: armenian;
}
.cjk-ideographic {
  list-style-type: cjk-ideographic;
}
.georgian {
  list-style-type: georgian;
}
.lower-greek {
  list-style-type: lower-greek;
}
.hebrew {
  list-style-type: hebrew;
}
.hiragana {
  list-style-type: hiragana;
}
.hiragana-iroha {
  list-style-type: hiragana-iroha;
}
.katakana {
  list-style-type: katakana;
}
.katakana-iroha {
  list-style-type: katakana-iroha;
}
.lower-latin {
  list-style-type: lower-latin;
}
.upper-latin {
  list-style-type: upper-latin;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/87.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
