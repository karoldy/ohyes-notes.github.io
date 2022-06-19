[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [打印](/css-handbook/properties/print)

# 打印

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[<span class="g-color-css3-new">page</span>](#page)|CSS3|无|检索或指定显示对象容器时使用的页面类型|
|[page-break-before](#pbb)|CSS2|无|检索或设置对象之前出现的页分割符|
|[page-break-after](#pba)|CSS2|无|检索或设置对象之后出现的页分割符|
|[page-break-inside](#pbi)|CSS2|无|检索或设置对象容器内部出现的页分割符|

## page :id=page

### 语法

**page**：`auto` | [\<identifier>](/css-handbook/value-and-units/textual?id=identifier)

**默认值**：auto

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：页面

### 取值

**auto**：参照当前的默认页面
[\<identifier>](/css-handbook/value-and-units/textual?id=identifier)：指定 [@page](/css-handbook/rules/page) 规则下的页面类型定义

### 说明

**检索或指定显示对象容器时使用的页面类型**。参阅 [@page](/css-handbook/rules/page)

```css
@page rotated {
  size: landscape;
}
p {
  page: rotated;
  page-break-before: left;
}
```

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/105.png)

---

## page-break-before :id=pbb

### 语法

**page-break-before**：`auto` | `always` | `avoid` | `left` | `right`

**默认值**：auto

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：页面

### 取值

**auto**：如果需要，在对象之前插入页分割符

**always**：始终在对象之前插入页分割符

**avoid**：避免在对象前面插入页分割符

**left**：在对象前面插入页分割符直到它到达一个空白的左页边

**right**：在对象前面插入页分割符直到它到达一个空白的右页边

### 说明

**检索或设置对象之前出现的页分割符**

对应的脚本特性为 `pageBreakBefore`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/105.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>在对象之前插入页分割符</div>
<p>page-break-before:always</p>
<p>page-break-before:always</p>
<p>page-break-before:always</p>
<p>page-break-before:always</p>
```

**css**

```css
p {
  page-break-before:always;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/159.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## page-break-after :id=pba

### 语法

**page-break-after**：`auto` | `always` | `avoid` | `left` | `right`

**默认值**：auto

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：页面

### 取值

**auto**：如果需要，在对象之前插入页分割符

**always**：始终在对象之前插入页分割符

**avoid**：避免在对象前面插入页分割符

**left**：在对象前面插入页分割符直到它到达一个空白的左页边

**right**：在对象前面插入页分割符直到它到达一个空白的右页边

### 说明

**检索或设置对象之后出现的页分割符**

- 对应的脚本特性为 `pageBreakAfter`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/105.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>在对象之后插入页分割符</div>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
<p>page-break-after:always</p>
```

**css**

```css
p {
	page-break-after:always;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/159.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## page-break-inside :id=pbi

### 语法

**page-break-inside**：`auto` | `avoid`

**默认值**：auto

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

**媒体**：页面

### 取值

**auto**：如果需要，在当前对象内部插入页分割符

**avoid**：避免在当前对象内部插入页分割符

### 说明

**检索或设置对象容器内部出现的页分割符**

- 对应的脚本特性为 `pageBreakInside`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/105.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>如果需要，在对象内部插入页分割符</div>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
<p>page-break-inside:auto</p>
```

**css**

```css
p {
	page-break-inside:auto;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/160.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
