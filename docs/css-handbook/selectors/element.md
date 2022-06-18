[CSS手册](/css-handbook/) / [选择器](/css-handbook/selectors/) / [元素选择器](/css-handbook/selectors/element)

# 元素选择器

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|选择器|名称|版本|描述
|:---|:---|:---|:---|
|[*](#universal)|通配选择器|CSS2|所有元素对象|
|[E](#type)|标签选择器|CSS1|以文档语言对象类型作为选择器|
|[E#myid](#myid)|id选择器|CSS1|以唯一标识器id属性等于myid的E对象作为选择器|
|[E.myclass](#myclass)|class选择器|CSS1|以class属性包含myclass的E对象作为选择器|

## 通配选择器 :id=universal

### 语法

```css
* {
  sRules
}
```

### 说明

**选定所有对象**

- 通配选择符(Universal Selector)
- 通常不建议使用通配选择符，因为它会遍历并命中文档中所有的元素，出于性能考虑，需酌情使用

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/1.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>标题</h1>
<p>正文内容</p>
```

**css**

```css
* {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/1.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## 标签选择器/类型选择器 :id=type

### 语法

E表示html元素

```css
E {
  sRules
}
```

### 说明

**以文档语言对象类型作为选择器**

类型选择符(Type Selector)

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/2.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>标题</h1>
<p>正文内容</p>
```

**css**

```css
h1 {
	font-size: 20px;
}
p {
	font-size: 13px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/1.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## id选择器 :id=myid

### 语法

```css
E#myid {
  sRules
}
```

### 说明

**以唯一标识器id属性等于myid的E对象作为选择器**

ID选择符(ID Selector)

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/3.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1 id="subtitle">标题</h1>
<p id="content">正文内容</p>
```

**css**

```css
#subtitle {
	font-size: 20px;
}
p#content {
	font-size: 13px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/1.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## 类选择器 :id=myclass

### 语法

```css
E.myclass {
  sRules
}
```

### 说明

**以class属性包含myclass的E对象作为选择器**

- 类选择符(Class Selector)
- 不同于ID选择器的唯一性，类选择器可以同时定义多个

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/4.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1 class="title">标题</h1>
<p class="content">正文内容</p>
<p class="content note">多类选择符的使用</p>
```

**css**

```css
.title {
	font-size: 20px;
}
p.content {
	font-size: 13px;
}
.content.note {
	font-size: 30px;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/2.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
