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

<!-- tabs:start -->

#### **html**

```html
<div title="1">1</div>
<div>2</div>
```

#### **css**

```css
div[title] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/1.html"
>
  浏览器不支持iframe
</iframe>

!> 此例，将会命中第一个div，因为匹配到了 title 属性

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
  <li><a href="#1" class="external">外部链接</a></li>
  <li><a href="#1">内部链接</a></li>
  <li><a href="#1" class="external">外部链接</a></li>
  <li><a href="#1">内部链接</a></li>
</ul>
```

#### **css**

```css
a[class] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/2.html"
>
  浏览器不支持iframe
</iframe>

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
  <li><a href="#2" class="external">外部链接</a></li>
  <li><a href="#2">内部链接</a></li>
  <li><a href="#2" class="external">外部链接</a></li>
  <li><a href="#2">内部链接</a></li>
</ul>
```

#### **css**

```css
a[class="external"] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/3.html"
>
  浏览器不支持iframe
</iframe>

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

<!-- tabs:start -->

#### **html**

```html
<div class="a">1</div>
<div class="b">2</div>
<div class="a b">3</div>
```

#### **css**

```css
div[class~="a"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/4.html"
>
  浏览器不支持iframe
</iframe>

!> 此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值中有一个值为a

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
  <li><a href="#3" class="external txt">外部链接</a></li>
  <li><a href="#3" class="txt">内部链接</a></li>
  <li><a href="#3" class="external txt">外部链接</a></li>
  <li><a href="#3" class="txt">内部链接</a></li>
</ul>
```

#### **css**

```css
a[class~="external"] {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/5.html"
>
  浏览器不支持iframe
</iframe>

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

<!-- tabs:start -->

#### **html**

```html
<div class="a">0</div>
<div class="a-test">1</div>
<div class="b-test">2</div>
<div class="c-test">3</div>
```

#### **css**

```css
div[class|="a"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/6.html"
>
  浏览器不支持iframe
</iframe>

!> 在这个例子中，前2个div将会被命中：<br/>第1个div，拥有class属性，并且值为a，所以被命中；<br/>第2个div，拥有class属性，值是a开头并紧跟着连接符“-”，所以被命中；

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
	<li class="test1-abc">列表项目1</li>
	<li class="test2-abc">列表项目2</li>
	<li class="test3">列表项目3</li>
	<li class="test3-abc">列表项目4</li>
	<li class="test4-abc">列表项目5</li>
	<li class="test5-abc">列表项目6</li>
	<li class="test6-abc">列表项目7</li>
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

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/7.html"
>
  浏览器不支持iframe
</iframe>

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

<!-- tabs:start -->

#### **html**

```html
<div class="abc">1</div>
<div class="acb">2</div>
<div class="bac">3</div>
```

#### **css**

```css
div[class^="a"] {
	border: 2px solid #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/8.html"
>
  浏览器不支持iframe
</iframe>

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

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/9.html"
>
  浏览器不支持iframe
</iframe>

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

<!-- tabs:start -->

#### **html**

```html
<div class="abc">1</div>
<div class="acb">2</div>
<div class="bac">3</div>
```

#### **css**

```css
div[class$="c"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/10.html"
>
  浏览器不支持iframe
</iframe>

!> 此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值以c结尾

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
	<li class="abc">列表项目1</li>
	<li class="acb">列表项目2</li>
	<li class="bac">列表项目3</li>
	<li class="bca">列表项目4</li>
	<li class="cab">列表项目5</li>
	<li class="cba">列表项目6</li>
</ul>
```

#### **css**

```css
li[class$="a"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/11.html"
>
  浏览器不支持iframe
</iframe>

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

<!-- tabs:start -->

#### **html**

```html
<div class="abc">1</div>
<div class="acb">2</div>
<div class="bac">3</div>
```

#### **css**

```css
div[class*="b"] {
	border: 2px solid #000;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/12.html"
>
  浏览器不支持iframe
</iframe>

!> 此例，将会命中所有div，因为匹配到了class属性，且属性值中都包含了b

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
	<li class="abc">列表项目1</li>
	<li class="acb">列表项目2</li>
	<li class="bac">列表项目3</li>
	<li class="bca">列表项目4</li>
	<li class="cab">列表项目5</li>
	<li class="cba">列表项目6</li>
</ul>
```

#### **css**

```css
li[class*="a"] {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/attribute/13.html"
>
  浏览器不支持iframe
</iframe>
