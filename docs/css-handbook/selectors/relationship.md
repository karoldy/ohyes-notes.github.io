[CSS手册](/css-handbook/) / [选择器](/css-handbook/selectors/) / [关系选择器](/css-handbook/selectors/relationship)

# 关系选择器

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|选择器|名称|版本|描述
|:---|:---|:---|:---|
|[E F](#_1)|包含选择器|CSS1|选择所有被E元素包含的F元素|
|[E>F](#_2)|子选择器|CSS2|选择所有作为E元素的子元素F|
|[E+F](#_3)|相邻选择器|CSS2|选择紧贴在E元素之后F元素|
|[<span class="g-color-css3-new">E~F</span>](#_4)|兄弟选择器|CSS3|选择E元素所有兄弟元素F|

## 包含选择器 :id=_1

### 语法

```css
E F {
  sRules
}
```

### 说明

**选择所有被E元素包含的F元素**

- 与 [子选择器(E>F)](#_2) 不同的是，包含选择器将会命中所有器合条件的后代，包括儿子，孙子，孙子的孙子\...

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/5.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li>列表项目</li>
	<li>列表项目</li>
	<li>列表项目</li>
	<li>列表项目</li>
</ul>
```

**css**

```css
ul li {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/3.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## 子选择器 :id=_2

### 语法

```css
E>F {
  sRules
}
```

### 说明

选择所有作为E元素的子元素F

- 与 [包含选择器(E F)](#_1) 不同的是，子选择器只能命中子元素，而不能命中孙辈

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/6.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul class="test">
  <li>
    <a href="#2">列表项目1</a>
    <ul>
      <li><a href="#2">项目列表1.1</a></li>
      <li><a href="#2">项目列表1.2</a></li>
    </ul>
  </li>
  <li>
    <a href="#2">列表项目2</a>
    <ul>
      <li><a href="#2">项目列表2.1</a></li>
      <li><a href="#2">项目列表2.2</a></li>
    </ul>
  </li>
  <li><a href="#2">列表项目</a></li>
  <li><a href="#1">列表项目</a></li>
</ul>
```

**css**

```css
.test > li > a {
	color: #f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/4.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## 相邻选择器 :id=_3

### 语法

```css
E+F {
  sRules
}
```

### 说明

**选择紧贴在E元素之后F元素，元素E与F必须同属一个父级**

与 [兄弟选择器(E~F)](#_4) 相同的是，相邻选择器也是选择同级的元素F；不同的是，相邻选择器只会命中器合条件的那个毗邻的兄弟元素(即紧挨着E元素之后的第一个F元素)

<!-- tabs:start -->

#### **相邻选择器**

**html**

```html
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
<p>p3</p>
```

**css**

```css
h3 + p {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/5.html"
>
  浏览器不支持iframe
</iframe>

#### **兄弟选择器**

**html**

```html
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
<p>p3</p>
```

**css**

```css
h3 ~ p {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/6.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

!> 这个例子中，如果是相邻选择器，那么只有 p1 会变成红色；如果是兄弟选择器，那么 p1/p2/p3 都会变成红色；

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/7.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
<h3>这是一个标题</h3>
<p>p1</p>
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
```

**css**

```css
p + p {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/7.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## 兄弟选择器 :id=_4

### 语法

```css
E~F {
  sRules
}
```

### 说明

**选择E元素后面的所有兄弟元素F，元素E与F必须同属一个父级**

<!-- tabs:start -->

#### **例子1**

需要注意的是，选择的只是同级的元素F，后代中的元素F不会被选择

**html**

```html
<h3>这是一个标题</h3>
<p>p1</p>
<div>
	<p>p2</p>
	<p>p3</p>
</div>
```

**css**

```css
h3 ~ p {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/8.html"
>
  浏览器不支持iframe
</iframe>

!> 这个例子中，只有 p1 会被选中；p2/p3 由于与 h3 并不是同级，所以不会被选中；

#### **例子2**

只选择E元素之后的元素F，出现在E元素之前的元素F，不会被选择到

**html**

```html
<p>p0</p>
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
<p>p3</p>
```

**css**

```css
h3 ~ p {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/9.html"
>
  浏览器不支持iframe
</iframe>

!> 这个例子中，p1/p2/p3 都会被选中；而 p0 因为在 h3 之前，所以不会被选中；

#### **例子3**

与 [相邻选择器(E+F)](#_3) 不同的是，兄弟选择器会命中所有器合条件的兄弟元素，而不强制是紧邻的元素

**html**

```html
<h3>这是一个标题</h3>
<p>p1</p>
<p>p2</p>
<p>p3</p>
```

**css**

```css
/* 相邻选择器(E+F) */
h3 + p {
  color: #f00;
}

/* 兄弟选择器(E~F) */
h3 ~ p {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/10.html"
>
  浏览器不支持iframe
</iframe>

!> 这个例子中，如果是相邻选择器，那么只有 p1 会变成红色；如果是兄弟选择器，那么 p1/p2/p3 都会变成红色；

<!-- tabs:end -->

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/8.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">
	<h3>这是一个标题</h3>
	<p>这是一个文字段落</p>
	<p>这是一个文字段落</p>
	<h3>这是一个标题</h3>
	<p>这是一个文字段落</p>
	<h3>这是一个标题</h3>
	<p>这是一个文字段落</p>
	<p>这是一个文字段落</p>
</div>
```

**css**

```css
p ~ p {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/11.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
