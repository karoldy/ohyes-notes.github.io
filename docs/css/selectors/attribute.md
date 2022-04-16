[选择器列表](/css/selectors/)

# 属性选择器

为防止`<output>`标签内的样式覆盖docsify的样式，本章的例子使用以`data-`开头的属性是自定义属性

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|选择器|版本|描述|
|:---|:---|:---|
|[E[att]](#one)|CSS2|选择具有att属性的E元素|
|[E[att="val"]](#two)|CSS2|选择具有att属性且属性值等于val的E元素|
|[E[att~="val"]](#three)|CSS2|选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素|
|[E[att\|="val"]](#four)|CSS2|选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择|
|[<span class="g-color-css3-new">E[att^="val"]</span>](#five)|CSS3|选择具有att属性且属性值为以val开头的字符串的E元素|
|[<span class="g-color-css3-new">E[att$="val"]</span>](#six)|CSS3|选择具有att属性且属性值为以val结尾的字符串的E元素|
|[<span class="g-color-css3-new">E[att\*="val"]</span>](#seven)|CSS3|选择具有att属性且属性值为包含val的字符串的E元素|

## E[att] :id=one

### 语法

```css
E[att] {
  sRules
}
```

### 说明

**选择具有att属性的E元素**

<!-- tabs:start -->

#### **html**

```html
<div data-one-title="one">1</div>
<div>2</div>
```

#### **css**

```css
div[data-one-title] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[data-one-title] {
      color: #f00;
    }
  </style>
  <div data-one-title="1">1</div>
  <div>2</div>
</output>

!> 此例，将会命中第一个div，因为匹配到了 data-one-title 属性

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li><span data-one-title="1">1</span></li>
	<li><span>2</span></li>
	<li><span data-one-title="3">3</span></li>
	<li><span>4</span></li>
</ul>
```

#### **css**

```css
span[data-one-title] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    span[data-one-title] {
      color: #f00;
    }
  </style>
  <ul>
    <li><span data-one-title="1">1</span></li>
    <li><span>2</span></li>
    <li><span data-one-title="3">3</span></li>
    <li><span>4</span></li>
  </ul>
</output>

---

## E[att="val"] :id=two

### 语法

```css
E[att="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值等于val的E元素**

<!-- tabs:start -->

#### **html**

```html
<input type="text" />
<input type="submit" />
```

#### **css**

```css
input[type="text"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    input[type="text"] {
      border: 2px solid #f00;
    }
  </style>
  <input type="text" />
  <input type="submit" />
</output>

!> 此例，将会命中第一个input，因为匹配到了type属性，并且属性值为text

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li><span title="external">1</span></li>
	<li><span>2</span></li>
	<li><span title="external">3</span></li>
	<li><span>4</span></li>
</ul>
```

#### **css**

```css
span[title="external"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    span[title="external"] {
      color: #f00;
    }
  </style>
  <ul>
    <li><span title="external">1</span></li>
    <li><span>2</span></li>
    <li><span title="external">3</span></li>
    <li><span>4</span></li>
  </ul>
</output>

---

## E[att\~="val"] :id=three

### 语法

```css
E[att~="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素(包含只有一个值且该值等于val的情况)**

<!-- tabs:start -->

#### **html**

```html
<div class="three-a">1</div>
<div class="three-b">2</div>
<div class="three-a three-b">3</div>
```

#### **css**

```css
div[class~="three-a"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[class~="three-a"] {
      border: 2px solid #f00;
    }
  </style>
  <div class="three-a">1</div>
  <div class="three-b">2</div>
  <div class="three-a three-b">3</div>
</output>

!> 此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值中有一个值为three-a

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li><span class="three-a">1</span></li>
	<li><span class="three-b">1</span></li>
	<li><span class="three-a three-c">1</span></li>
	<li><span class="three-d">1</span></li>
</ul>
```

#### **css**

```css
span[class~="three-a"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    span[class~="three-a"] {
      border: 2px solid #f00;
    }
  </style>
  <ul>
    <li><span class="three-a">1</span></li>
    <li><span class="three-b">1</span></li>
    <li><span class="three-a three-c">1</span></li>
    <li><span class="three-d">1</span></li>
  </ul>
</output>

---

## E[att|="val"] :id=four

### 语法

```css
E[att|="val"] {
  sRules
}
```

### 说明

**选择具有att属性，其值是以val开头并用连接符"-"分隔的字符串的E元素；如果值仅为val，也将被选择**

这样理解会更简单：如果元素E拥有att属性，并且值为val，或者值是以val-开头的，那么E将会被选择

<!-- tabs:start -->

#### **html**

```html
<div class="four1">0</div>
<div class="four1-a four2">1</div>
<div class="four3">2</div>
<div class="four4">3</div>
```

#### **css**

```css
div[class|="four1"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[class|="four1"] {
      border: 2px solid #f00;
    }
  </style>
  <div class="four1">0</div>
  <div class="four1-a four2">1</div>
  <div class="four3">2</div>
  <div class="four4">3</div>
</output>

!> 在这个例子中，前2个div将会被命中：<br/>第1个div，拥有class属性，并且值为four1，所以被命中；<br/>第2个div，拥有class属性，值是four1开头并紧跟着连接符“-”，所以被命中；

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li class="test1-abc">列表项目</li>
	<li class="test2-abc">列表项目</li>
	<li class="test3">列表项目</li>
	<li class="test3-abc">列表项目</li>
	<li class="test4-abc">列表项目</li>
	<li class="test5-abc">列表项目</li>
	<li class="test6-abc">列表项目</li>
</ul>

```

#### **css**

```css
li[class|="test3"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    li[class|="test3"] {
      color: #f00;
    }
  </style>
  <ul>
    <li class="test1-abc">列表项目</li>
    <li class="test2-abc">列表项目</li>
    <li class="test3">列表项目</li>
    <li class="test3-abc">列表项目</li>
    <li class="test4-abc">列表项目</li>
    <li class="test5-abc">列表项目</li>
    <li class="test6-abc">列表项目</li>
  </ul>
</output>

---

## E[att^="val"] :id=five

### 语法

```css
E[att^="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为以val开头的字符串的E元素**

<!-- tabs:start -->

#### **html**

```html
<div title="abc">1</div>
<div title="acb">2</div>
<div title="bac">3</div>
```

#### **css**

```css
div[title^="a"] {
	border: 2px solid #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[title^="a"] {
      border: 2px solid #f00;
    }
  </style>
  <div title="abc">1</div>
  <div title="acb">2</div>
  <div title="bac">3</div>
</output>

!> 此例，将会命中1, 2两个div，因为匹配到了class属性，且属性值以a开头

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li class="abc">列表项目</li>
	<li class="acb">列表项目</li>
	<li class="bac">列表项目</li>
	<li class="bca">列表项目</li>
	<li class="cab">列表项目</li>
	<li class="cba">列表项目</li>
</ul>
```

#### **css**

```css
li[class^="a"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    li[class^="a"] {
      color: #f00;
    }
  </style>
  <ul>
    <li class="abc">列表项目</li>
    <li class="acb">列表项目</li>
    <li class="bac">列表项目</li>
    <li class="bca">列表项目</li>
    <li class="cab">列表项目</li>
    <li class="cba">列表项目</li>
  </ul>
</output>

---

## E[att$="val"] :id=six

### 语法

```css
E[att$="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为以val结尾的字符串的E元素**

<!-- tabs:start -->

#### **html**

```html
<div class="six123">1</div>
<div class="six2">2</div>
<div class="five123">3</div>
```

#### **css**

```css
div[class$="23"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[class$="23"] {
      border: 2px solid #f00;
    }
  </style>
  <div class="six123">1</div>
  <div class="six2">2</div>
  <div class="five123">3</div>
</output>

!> 此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值以23结尾

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li class="efg">列表项目</li>
	<li class="acb">列表项目</li>
	<li class="bac">列表项目</li>
	<li class="hjk">列表项目</li>
	<li class="cab">列表项目</li>
	<li class="ezk">列表项目</li>
</ul>
```

#### **css**

```css
li[class$="k"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    li[class$="k"] {
      color: #f00;
    }
  </style>
  <ul>
    <li class="efg">列表项目</li>
    <li class="jkl">列表项目</li>
    <li class="bac">列表项目</li>
    <li class="hjk">列表项目</li>
    <li class="cab">列表项目</li>
    <li class="ezk">列表项目</li>
  </ul>
</output>

---

## E[att*="val"] :id=seven

### 语法

```css
E[att*="val"] {
  sRules
}
```

### 说明

**选择具有att属性且属性值为包含val的字符串的E元素**

<!-- tabs:start -->

#### **html**

```html
<div class="opq">1</div>
<div class="qaq">2</div>
<div class="nql">3</div>
```

#### **css**

```css
div[class*="q"] {
	border: 2px solid #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    div[class*="q"] {
      border: 2px solid #f00;
    }
  </style>
  <div class="opq">1</div>
  <div class="qaq">2</div>
  <div class="nql">3</div>
</output>

!> 此例，将会命中所有div，因为匹配到了class属性，且属性值中都包含了q

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0</span> 7.0+|
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
<ul>
	<li class="sev">列表项目</li>
	<li class="ven">列表项目</li>
	<li class="hello">列表项目</li>
	<li class="hi">列表项目</li>
	<li class="welcome">列表项目</li>
	<li class="hahah">列表项目</li>
</ul>
```

#### **css**

```css
li[class*="h"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<output>
  <style>
    li[class*="h"] {
      color: #f00;
    }
  </style>
  <ul>
    <li class="sev">列表项目</li>
    <li class="ven">列表项目</li>
    <li class="hello">列表项目</li>
    <li class="hi">列表项目</li>
    <li class="welcome">列表项目</li>
    <li class="hahah">列表项目</li>
  </ul>
</output>
