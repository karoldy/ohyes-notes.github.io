[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [尺寸与补白](/css-handbook/properties/dimension)

# 尺寸与补白

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[width](#width)|CSS1|无|定义了元素内容区(Content Area)的宽度|
|[min-width](#minwidth)|CSS2|无|定义了元素内容区(Content Area)的最小宽度|
|[max-width](#maxwidth)|CSS2|无|定义了元素内容区(Content Area)的最大宽度|
|[height](#height)|CSS1|无|定义了元素内容区(Content Area)的高度|
|[min-height](#minheight)|CSS2|无|定义了元素内容区(Content Area)的最小高度|
|[max-height](#maxheight)|CSS2|无|定义了元素内容区(Content Area)的最大高度|
|[margin](#margin)|CSS1|无|为元素设置所有四个方向(上右下左)的外边距|
|[padding](#padding)|CSS1|无|为元素设置所有四个方向(上右下左)的内边距，即内容和元素边界之间的空间|

## width :id=width

### 语法

**width**：auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**auto**：无特定宽度值，取决于其它属性值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义宽度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义宽度。百分比参照包含块宽度。不允许负值

### 说明

**定义元素的宽度**

- 对于\<img>元素来说，若仅指定此属性，其 `height` 值将会根据图片源尺寸进行等比例缩放
- `width` 属性是盒模型的重要组成部分，对于盒模型规则，请参阅 [box-sizing](/css-handbook/properties/user-interface?id=boxsizing) 属性
- 对应的脚本特性为：width

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/width.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我的宽度为200</div>
```

#### **css**

```css
.test {
	width: 200px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/01.html"
>
  浏览器不支持iframe
</iframe>

---

## min-width :id=minwidth

### 语法

**min-width**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：0

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义最小宽度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义最小宽度。不允许负值

### 说明

**定义元素的最小宽度**

- 当 `min-width` 属性的值小于 `width` 时，`min-width` 属性将会被忽略
- 当 `min-width` 属性的值大于 `width` 时，`min-width` 属性将会被忽略，同时 `width` 会忽略自己的值定义而使用 `min-width` 的值作为自己的使用值
- 当 `min-width` 属性的值大于 `max-width`时，`max-width` 属性将会被忽略
- 对应的脚本特性为：minWidth

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/min-width.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我的最小宽度为200</div>
```

#### **css**

```css
.test {
	float: left;
	min-width: 200px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/02.html"
>
  浏览器不支持iframe
</iframe>

---

## max-width :id=maxwidth

### 语法

**max-width**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | none

**默认值**：none

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**none**：无最大宽度限制

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义最大宽度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义最大宽度。不允许负值

### 说明

**定义元素的最大宽度**

- 当 `max-width` 属性的值小于 `width` 时，`max-width` 属性将会被忽略，同时 `width` 会忽略自己的值定义而使用 `max-width` 的值作为自己的使用值
- 当 `max-width` 属性的值大于 `width` 时，`max-width` 属性将会被忽略
- 当 `max-width` 属性的值小于 `min-width` 时，`max-width` 属性将会被忽略
- 对应的脚本特性为：maxWidth

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/max-width.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我的最大宽度为200</div>
```

#### **css**

```css
.test {
	max-width: 200px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/03.html"
>
  浏览器不支持iframe
</iframe>

---

## height :id=height

### 语法

**height**：auto | [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：auto

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**auto**：无特定高度值，取决于其它属性值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义高度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义高度。不允许负值

### 说明

**定义了元素内容区（Content Area）的高度**

- 对于\<img>元素来说，若仅指定此属性，其 `width` 值将会根据图片源尺寸进行等比例缩放
- `height` 属性是盒模型的重要组成部分，对于盒模型规则，请参阅 [box-sizing](/css-handbook/properties/user-interface?id=boxsizing) 属性
- 对应的脚本特性为：height

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/height.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我的高度为200</div>
```

#### **css**

```css
.test {
	height: 200px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/04.html"
>
  浏览器不支持iframe
</iframe>

---

## min-height :id=minheight

### 语法

**min-height**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**默认值**：0

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义最小高度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义最小高度。不允许负值

### 说明

**定义元素的最小高度**

- 当 `min-height` 属性的值小于 `height` 时，`min-height` 属性将会被忽略
- 当 `min-height` 属性的值大于 `height` 时，`min-height` 属性将会被忽略，同时 `height` 会忽略自己的值定义而使用 `min-height` 的值作为自己的使用值
- 当 `min-height` 属性的值大于 `max-height` 时，`max-height` 属性将会被忽略
- 对应的脚本特性为：minHeight

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/min-height.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">我的最小高度为200</div>
```

#### **css**

```css
.test {
	min-height: 200px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/05.html"
>
  浏览器不支持iframe
</iframe>

---

## max-height :id=maxheight

### 语法

**max-height**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | none

**默认值**：none

**适用于**：除 `非置换内联元素，display: table-row| table-row-group;` 之外的所有元素

**继承性**：无

**动画性**：当值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的值

**媒　体**：视觉

### 取值

**none**：无最小高度限制

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义最大高度。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义最大高度。不允许负值

### 说明

**定义元素的最大高度**

- 当 `max-height` 属性的值小于 `height` 时，`max-height` 属性将会被忽略，同时 `height` 会忽略自己的值定义而使用 `max-height` 的值作为自己的使用值
- 当 `max-height` 属性的值大于 `height` 时， `max-height` 属性将会被忽略
- 当 `max-height` 属性的值小于 `min-height` 时，`max-height` 属性将会被忽略
- 对应的脚本特性为：maxHeight

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/max-height.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">
	<p>我的最大高度为30</p>
	<p>灰色背景区域以外不是我的领土</p>
</div>
```

#### **css**

```css
.test {
	max-height: 30px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/06.html"
>
  浏览器不支持iframe
</iframe>

---

## margin :id=margin

### 简写属性语法

**margin**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | auto ]{1,4}

**默认值**：看每个独立属性

**适用于**：所有元素，除 `非 display: table | inline-table | table-caption;` 的表格类元素之外

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆纵向独立属性语法

**vertical-margin**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | auto

**vertical-margin** = `margin-top`, `margin-bottom`

**默认值**：0

**适用于**：所有元素，除 `非 display: table | inline-table | table-caption;` 的表格类元素之外

**继承性**：无

**动画性**：当取值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的百分比或绝对长度值

**媒　体**：视觉

### 分拆横向独立属性语法

**horizontal-margin**：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) | auto

**horizontal-margin** = `margin-right`, `margin-left`

**默认值**：0

**适用于**：所有元素，除 `非 display: table | inline-table | table-caption;` 的表格类元素之外

**继承性**：无

**动画性**：当取值为 [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 时

**计算值**：指定的百分比或绝对长度值

**媒　体**：视觉

### 取值

**auto**：水平（默认）书写模式下，`vertical-margin` 计算值为 0，`horizontal-margin` 取决于包含块的剩余可用空间。详见：[margin系列之keyword auto](http://blog.doyoe.com/2013/11/29/css/margin%E7%B3%BB%E5%88%97%E4%B9%8Bkeyword%20auto/)

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义外补白。可以为负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义外补白。水平（默认）书写模式下，参照其包含块的 `width` 进行计算，其它情况参照 `height`，可以为负值

### 说明

**简写属性。为元素设置所有四个方向（上右下左）的外边距**

- `margin` 属性接受1~4个参数值。如果提供四个参数值，将按上、右、下、左的顺序作用于四边；提供三个，第一个用于上，第二个用于左、右，第三个用于下；提供两个，第一个用于上、下，第二个用于左、右；只提供一个，同时用于四边
- 非替代(non-replaced)行内元素可以使用该属性定义 `horizontal-margin`；若要定义 `vertical-margin`，必须改变元素为块级或行内块级
- 外延边距始终透明，即不可见也无法设置背景等任何样式
- 某些相邻的 `margin` 会发生合并，我们称之为 margin折叠
- 对应的脚本特性为：`margin`

<!-- tabs:start -->

#### **例子**

```html
<style>
  h2 {
    margin:10px 0;
  }
  div {
    margin:20px 0;
  }
</style>
<h2>这是一个标题</h2>
<div>
	<h2>这是又一个标题</h2>
</div>
```

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/07.html"
>
  浏览器不支持iframe
</iframe>

!> 本例中，第1个h2的margin-bottom，div的margin-top，第2个h2的margin-top是相邻的，三者会被合并取其中最大的那个值作为最后的间隙，所以它们之间的margin间隙最后是（20px）

---

> 如果给上例中的div加上border的话

```html
<style>
  h2 {
    margin:10px 0;
  }
  div {
    margin:20px 0;
    border:1px solid #aaa;
  }
</style>
<h2>这是一个标题</h2>
<div>
	<h2>这是又一个标题</h2>
</div>
```

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/08.html"
>
  浏览器不支持iframe
</iframe>

!> 本例中，第一个h2的margin-bottom（10px），div的margin-top（20px）将被合并，但第二个h2的margin-top不与它们合并，因为它被border分隔，不与它们相邻

<!-- tabs:end -->

**margin折叠常规认知**

- `margin` 折叠只发生在块级元素上
- 浮动元素的 `margin `不与任何 `margin` 发生折叠
- 设置了属性 `overflow` 且值为非 `visible` 的块级元素，将不与它的子元素发生 `margin` 折叠
- 绝对定位元素的 `margin` 不与任何 `margin` 发生折叠
- 根元素的 `margin` 不与其它任何 `margin` 发生折叠

**分拆纵向独立属性。为元素设置上、下外边距**

- 替代(Replaced)行内元素可以应用该属性；非替代(non-Replaced)行内元素要使用该属性必须改变元素为块级或行内块级
- 水平（默认）书写模式下，`margin` 合并只发生在 `vertical-margin` 上
- 对应的脚本特性分别为：`marginTop`, `marginBottom`

**分拆横向独立属性。为元素设置左、右外边距**

- 所有的行内元素均可以应用该属性
- 默认情况下，`horizontal-margin` 不会发生 `margin` 折叠，除非将书写模式改变为纵向。
- 对应的脚本特性分别为：`marginRight`, `marginLeft`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/margin.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">注意我距上、右、下、左的距离</div>
```

#### **css**

```css
.test {
	margin: 20px;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/09.html"
>
  浏览器不支持iframe
</iframe>

---

## padding :id=padding

### 简写属性语法

**padding**：[ [\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) ]{1,4}

**默认值**：看每个独立属性

**适用于**：所有元素，除 `display: table-row-group | table-header-group | table-footer-group | table-column-group | table-row; ` 外

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

### 分拆独立属性语法

**padding-\***：[\<length>](/css-handbook/value-and-units/length?id=length) | [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)

**padding-\*** = `padding-top`, `padding-right`, `padding-bottom`, `padding-left`

**默认值**：0

**适用于**：所有元素，除 `display: table-row-group | table-header-group | table-footer-group | table-column-group | table-row; ` 外

**继承性**：无

**动画性**：是

**计算值**：指定的百分比或绝对长度值

**媒　体**：视觉

### 取值

[\<length>](/css-handbook/value-and-units/length?id=length)：用长度值来定义内补白。不允许负值

[\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)：用百分比来定义内补白。水平（默认）书写模式下，参照其包含块的width进行计算，其它情况参照height，不允许负值

### 说明

**简写属性。为元素设置所有四个方向（上右下左）的内边距**

- `padding` 属性接受1~4个参数值。如果提供四个参数值，将按上、右、下、左的顺序作用于四边；提供三个，第一个用于上，第二个用于左、右，第三个用于下；提供两个，第一个用于上、下，第二个用于左、右；只提供一个，同时用于四边
- 需要注意的是，当我们为行内元素定义纵向内补白 `padding-top/padding-bottom` 时，虽然不需要将之转化为行内块或者块级，但是给行内元素设置纵向内补白并不会影响布局。内补白会在当前元素的行框基础上向顶部和顶部外延，但是这些外延不会拓展新的布局大小，你甚至可以把它想象成类似[outline](/css-handbook/user-interface?id=outline)
- 对应的脚本特性为：padding

**分拆独立属性。为元素单独设置上、右、下、左4个方向的内边距**

- 对应的脚本特性分别为：`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/dimension/padding.png)

### 示例

<!-- tabs:start -->

#### **html**

```html
<div class="test">注意我离4条边框线的距离</div>
```

#### **css**

```css
.test {
	float: left;
	padding: 10px;
	border: 1px solid #000;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/dimension/10.html"
>
  浏览器不支持iframe
</iframe>
