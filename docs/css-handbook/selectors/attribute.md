[CSS手册](/css-handbook/) / [选择器](/css-handbook/selectors/) / [属性选择器](/css-handbook/selectors/attribute)

# 属性选择器

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|选择器|版本|描述|
|:---|:---|:---|
|[E[att]](#_1)|CSS2|选择具有att属性的E元素|
|[E[att="val"]](#_2)|CSS2|选择具有att属性且属性值等于val的E元素|
|[E[att~="val"]](#_3)|CSS2|选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素|
|[E[att\|="val"]](#_4)|CSS2|选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择|
|[<span class="g-color-css3-new">E[att^="val"]</span>](#_5)|CSS3|选择具有att属性且属性值为以val开头的字符串的E元素|
|[<span class="g-color-css3-new">E[att$="val"]</span>](#_6)|CSS3|选择具有att属性且属性值为以val结尾的字符串的E元素|
|[<span class="g-color-css3-new">E[att\*="val"]</span>](#_7)|CSS3|选择具有att属性且属性值为包含val的字符串的E元素|

## E[att] :id=_1

### 语法

```css
E[att] {
  sRules
}
```

### 说明

**选择具有att属性的E元素**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/9.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
  <li><a href="#1" class="external">外部链接</a></li>
  <li><a href="#1">内部链接</a></li>
  <li><a href="#1" class="external">外部链接</a></li>
  <li><a href="#1">内部链接</a></li>
</ul>
```

**css**

```css
a[class] {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/12.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att="val"] :id=_2

### 语法

```css
E[att="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值等于val的E元素**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/10.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
  <li><a href="#2" class="external">外部链接</a></li>
  <li><a href="#2">内部链接</a></li>
  <li><a href="#2" class="external">外部链接</a></li>
  <li><a href="#2">内部链接</a></li>
</ul>
```

**css**

```css
a[class="external"] {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/13.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att\~="val"] :id=_3

### 语法

```css
E[att~="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素(包含只有一个值且该值等于val的情况)**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/11.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
  <li><a href="#3" class="external txt">外部链接</a></li>
  <li><a href="#3" class="txt">内部链接</a></li>
  <li><a href="#3" class="external txt">外部链接</a></li>
  <li><a href="#3" class="txt">内部链接</a></li>
</ul>
```

**css**

```css
a[class~="external"] {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/15.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att|="val"] :id=_4

### 语法

```css
E[att|="val"] {
  sRules
}
```

### 说明

**选择具有att属性，其值是以val开头并用连接符"-"分隔的字符串的E元素；如果值仅为val，也将被选择**

这样理解会更简单：如果元素E拥有att属性，并且值为val，或者值是以val-开头的，那么E将会被选择

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/11.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li class="test1-abc">列表项目1</li>
	<li class="test2-abc">列表项目2</li>
	<li class="test3">列表项目3</li>
	<li class="test3-abc">列表项目4</li>
	<li class="test4-abc">列表项目5</li>
	<li class="test5-abc">列表项目6</li>
	<li class="test6-abc">列表项目7</li>
</ul>
```

**css**

```css
li[class|="test3"] {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/16.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att^="val"] :id=_5

### 语法

```css
E[att^="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为以val开头的字符串的E元素**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/11.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li class="abc">列表项目</li>
	<li class="acb">列表项目</li>
	<li class="bac">列表项目</li>
	<li class="bca">列表项目</li>
	<li class="cab">列表项目</li>
	<li class="cba">列表项目</li>
</ul>
```

**css**

```css
li[class^="a"] {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/17.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att$="val"] :id=_6

### 语法

```css
E[att$="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为以val结尾的字符串的E元素**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/11.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li class="abc">列表项目1</li>
	<li class="acb">列表项目2</li>
	<li class="bac">列表项目3</li>
	<li class="bca">列表项目4</li>
	<li class="cab">列表项目5</li>
	<li class="cba">列表项目6</li>
</ul>
```

**css**

```css
li[class$="a"] {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/18.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## E[att*="val"] :id=_7

### 语法

```css
E[att*="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为包含val的字符串的E元素**

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/selectors/11.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<ul>
	<li class="abc">列表项目1</li>
	<li class="acb">列表项目2</li>
	<li class="bac">列表项目3</li>
	<li class="bca">列表项目4</li>
	<li class="cab">列表项目5</li>
	<li class="cba">列表项目6</li>
</ul>
```

**css**

```css
li[class*="a"] {
	color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/19.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->
