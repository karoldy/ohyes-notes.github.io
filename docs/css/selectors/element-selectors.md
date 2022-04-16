[选择器列表](/css/selectors/)

# 元素选择器

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|选择器|名称|版本|描述
|:---|:---|:---|:---|
|[*](#universal-selector)|通配选择器|CSS2|所有元素对象|
|[E](#type-selector)|标签选择器|CSS1|以文档语言对象类型作为选择器|
|[E#myid](#id-selector)|id选择器|CSS1|以唯一标识器id属性等于myid的E对象作为选择器|
|[E.myclass](#class-selector)|class选择器|CSS1|以class属性包含myclass的E对象作为选择器|

## 通配选择器 :id=universal-selector

[universal-selector.md](./element-selectors/universal-selector.md ':include')

---

## 标签选择器 :id=type-selector

标签选择器也叫类型选择器

### 语法

E表示html元素

```css
E {
  sRules
}
```

### 说明

**以文档语言对象类型作为选择器**

- 类型选择器(Type Selector)

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|6.0+|
|Firefox|2.0+|
|Chrome|4.0+|
|Safari|3.1+|
|Opera|3.5+|
|iOS Safari|3.2+|
|Android Browser|2.1+|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<h1>标题</h1>
<p>正文内容</p>
```

#### **css**

```css
h1 {
	color: #f00;
}
p {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果:

<output>
  <h1 style="color: #f00;">标题</h1>
  <p style="color: #f00;">正文内容</p>
</output>

---

## id选择器 :id=id-selector

id选择器也叫id选择符

### 语法

```css
E#myid {
  sRules
}
```

### 说明

**以唯一标识器id属性等于myid的E对象作为选择器**

- ID选择器(ID Selector)

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|6.0+|
|Firefox|2.0+|
|Chrome|4.0+|
|Safari|3.1+|
|Opera|3.5+|
|iOS Safari|3.2+|
|Android Browser|2.1+|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<h1 id="title">标题</h1>
<p id="content">正文内容</p>
```

#### **css**

```css
#title {
	color: #f00;
}

p#content {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果:

<output>
  <h1 style="color: #f00;">标题</h1>
  <p style="color: #f00;">正文内容</p>
</output>

---

## 类选择器 :id=class-selector

### 语法

```css
E.myclass {
  sRules
}
```

### 说明

**以class属性包含myclass的E对象作为选择器**

- 类选择器(Class Selector)

- 不同于ID选择器的唯一性，类选择器可以同时定义多个,如:

<!-- tabs:start -->

#### **定义多个类**

```html
<div class="a b">给某个div元素定义.a和.b两个类</div>
```

```css
.a {
  color: #f00;
}

.b {
  font-weight: 700;
}
```

!> 注意，id选择器不能在同个元素上定义多个，比如id="a b"就是错误的写法


#### **类选择器高级用法：多类选择器**

```html
<div class="a b">多类选择器使用方法</div>
```

```css
.a.b {
	color: #f00;
}
```

!> 此例命中同时拥有.a和.b两个类的元素。需要注意的是IE6并不支持多类选择器，如：.a.b{}将会被视为：.b{}

<!-- tabs:end -->

### 兼容性

IE6及更早浏览器并不支持多类选择器，形如：.a.b {}

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0<sup>#1</sup>;</span> 7.0+|
|Firefox|2.0+|
|Chrome|4.0+|
|Safari|3.1+|
|Opera|3.5+|
|iOS Safari|3.2+|
|Android Browser|2.1+|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<h1 class="title">标题</h1>
<p class="content">正文内容</p>
<p class="content note">多类选择器的使用</p>
```

#### **css**

```css
.title {
  color: #f00;
}

p.content {
  color: #f00;
}

.content.note {
  font-size: 30px;
  font-weight: 700;
}
```

<!-- tabs:end -->

运行结果:

<output>
  <h1 style="color: #f00;">标题</h1>
  <p style="color: #f00;">正文内容</p>
  <p style="color: #f00;font-size: 30px;font-weight:700;">多类选择器的使用</p>
</output>
