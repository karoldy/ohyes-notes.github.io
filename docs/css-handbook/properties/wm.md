[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [书写模式](/css-handbook/properties/wm)

# 书写模式

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[direction](#direction)|CSS2|有|检索或设置文本流的方向|
|[unicode-bidi](#ub)|CSS2|无|用于同一个页面里存在从不同方向读进的文本显示。与 `direction` 属性一起使用|
|[<span class="g-color-css3-new">writing-mode</span>](#wmode)|CSS3|有|设置或检索对象的内容块固有的书写方向|

## direction :id=direction

### 语法

**direction**：`ltr` | `rtl`

**默认值**：ltr

**适用于**：所有元素

**继承性**：有

**动画性**：否

**计算值**：特定值

### 取值

**ltr**：文本流从左到右

**rtl**：文本流从右到左

### 说明

**检索或设置文本流的方向**

- 当指定一个内联元素的 [unicode-bidi](#ub) 属性为 `normal` 时， `direction` 属性设置不影响 `bidi` 重排序，即其设置不生效
- 对应的脚本特性为 `direction`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/73.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="ltr">
		<strong>ltr：</strong>
		<p>本段文字将按照从左到右的方向进行流动。</p>
	</li>
	<li class="rtl">
		<strong>rtl：</strong>
		<p>本段文字将按照从右到左的方向进行流动。</p>
	</li>
</ul>
```

**css**

```css
.test p {
  width: 320px;
  margin: 15px 0;
  border: 1px solid #000;
}
.ltr p {
  direction: ltr;
}
.rtl p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/81.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## unicode-bidi :id=ub

### 语法

**unicode-bidi**：`normal` | `embed` | `bidi-override` | <span class="g-color-css3-new">isolate</span> | <span class="g-color-css3-new">isolate-override</span> | <span class="g-color-css3-new">plaintext</span>

**默认值**：normal

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：特定值

### 取值

**normal**：对象不打开附加的嵌入层，对于内联元素，隐式重排序跨对象边界进行工作

**embed**：对象打开附加的嵌入层，[direction](#direction) 属性的值指定嵌入层，在对象内部进行隐式重排序

**bidi-override**：严格按照 [direction](#direction) 属性的值重排序。忽略隐式双向运算规则

### 说明

**用于同一个页面里存在从不同方向读进的文本显示。与 [direction](#direction) 属性一起使用**

对应的脚本特性为 `unicodeBidi`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/74.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
	<li class="ltr">
		<strong>ltr：</strong>
		<p>本段文字将按照从左到右的方向进行流动。</p>
	</li>
	<li class="rtl">
		<strong>rtl：</strong>
		<p>本段文字将按照从右到左的方向进行流动。</p>
	</li>
</ul>
```

**css**

```css
.test p {
  width:320px;
  margin:15px 0;
  border:1px solid #000;
}
.ltr p {
  direction: ltr;
}
.rtl p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/82.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## writing-mode :id=wmode

### 语法

**writing-mode**：`horizontal-tb` | `vertical-rl` | `vertical-lr` | `lr-tb` (ie不生效) | `tb-rl` (ie不生效)

**默认值**：horizontal-tb

**适用于**：除 `display` 属性定义为 `table-row-group` | `table-column-group` | `table-row` | `table-column` 之外的所有元素

**继承性**：有

**动画性**：否

**计算值**：特定值

### 取值

**horizontal-tb**：水平方向自上而下的书写方式。即 left-right-top-bottom（类似IE私有值lr-tb）

**vertical-rl**：垂直方向自右而左的书写方式。即 top-bottom-right-left（类似IE私有值tb-rl）

**vertical-lr**：垂直方向自左而右的书写方式。即 top-bottom-left-right

**lr-tb**：左-右，上-下。对象中的内容在水平方向上从左向右流入，后一行在前一行的下面。 所有的字形都是竖直向上的。这种布局是罗马语系使用的（IE）

**tb-rl**：上-下，右-左。对象中的内容在垂直方向上从上向下流入，自右向左。后一竖行在前一竖行的左面。全角字符是竖直向上的，半角字符如拉丁字母或片假名顺时针旋转90度。这种布局是东亚语系通常使用的（IE）

### 说明

**设置或检索对象的内容块固有的书写方向。西方语言一般都是 lr-tb 的书写方式，但是亚洲语言 lr-tb | tb-rl 的书写方式都有**

- 作为IE的私有属性之一，IE5.5率先实现了 `writing-mode` ，后期被w3c采纳成标准属性
- 此属性效果不能被累加使用。例如，父对象的此属性值设为 `tb-rl` ，子对象再设置该属性将不起作用，仍应用父对象的设置
- 对应的脚本特性为 `writingMode`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/75.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test lr-tb">本段文字将按照水平从左到右的书写方向进行流动。</div>
<div class="test tb-rl">本段文字将按照垂直从右到左的书写方向进行流动。</div>
<div class="test tb-lr">本段文字将按照垂直从左到右的书写方向进行流动。</div>
<ul class="tb-rl">
	<li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
	<li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
</ul>
<ul class="tb-lr">
	<li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
	<li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
</ul>
```

**css**

```css
.test {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid #aaa;
}
.lr-tb {
  -webkit-writing-mode: horizontal-tb;
  writing-mode: lr-tb;
  writing-mode: horizontal-tb;
}
.tb-rl {
  -webkit-writing-mode: vertical-rl;
  writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
.tb-lr {
  -webkit-writing-mode: vertical-lr;
  writing-mode: tb-rl;
  writing-mode: vertical-lr;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/83.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
