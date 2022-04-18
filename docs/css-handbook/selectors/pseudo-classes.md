[CSS手册](/css-handbook/) / [选择器](/css-handbook/selectors/) / [伪类选择器](/css-handbook/selectors/pseudo-classes)

# 伪类选择器

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|选择器|版本|描述|
|:---|:---|:---|
|[E:link](#link)|CSS1|设置超链接a在未被访问前的样式|
|[E:visited](#visited)|CSS1|设置超链接a在其链接地址已被访问过时的样式|
|[E:hover](#hover)|CSS1/2|设置元素在其鼠标悬停时的样式|
|[E:active](#active)|CSS1/2| 设置元素在被用户激活(在鼠标点击与释放之间发生的事件)时的样式|
|[E:focus](#focus)|CSS1/2| 设置元素在成为输入焦点(该元素的onfocus事件发生)时的样式|
|[E:lang(fr)](#lang-fr)|CSS2|匹配使用特殊语言的E元素|
|[<span class="g-color-css3-new">E:not(s)</span>](#e-not)|CSS3|匹配不含有s选择符的元素E|
|[<span class="g-color-css3-new">E:root</span>](#e-root)|CSS3|匹配E元素在文档的根元素|
|[E:first-child](#first-child)|CSS2|匹配父元素的第一个子元素E|
|[<span class="g-color-css3-new">E:last-child</span>](#last-child)|CSS3|匹配父元素的最后一个子元素E|
|[<span class="g-color-css3-new">E:only-child</span>](#only-child)|CSS3|匹配父元素仅有的一个子元素E|
|[<span class="g-color-css3-new">E:nth-child(n)</span>](#nth-child)|CSS3|匹配父元素的第n个子元素E|
|[<span class="g-color-css3-new">E:nth-last-child(n)</span>](#nth-last-child)|CSS3|匹配父元素的倒数第n个子元素E|
|[<span class="g-color-css3-new">E:first-of-type</span>](#first-of-type)|CSS3|匹配父元素下第一个类型为E的子元素|
|[<span class="g-color-css3-new">E:last-of-type</span>](#last-of-type)|CSS3|匹配父元素下的所有E子元素中的倒数第一个|
|[<span class="g-color-css3-new">E:only-of-type</span>](#only-of-type)|CSS3|匹配父元素的所有子元素中唯一的那个子元素E|
|[<span class="g-color-css3-new">E:nth-of-type(n)</span>](#nth-of-type)|CSS3|匹配父元素的第n个子元素E|
|[<span class="g-color-css3-new">E:nth-last-of-type(n)</span>](#nth-last-of-type)|CSS3|匹配父元素的倒数第n个子元素E|
|[<span class="g-color-css3-new">E:empty</span>](#empty)|CSS3|匹配没有任何子元素（包括text节点）的元素E|
|[<span class="g-color-css3-new">E:checked</span>](#checked)|CSS3| 匹配用户界面上处于选中状态的元素E(用于input type为radio与checkbox时)|
|[<span class="g-color-css3-new">E:enabled</span>](#enabled)|CSS3|匹配用户界面上处于可用状态的元素E|
|[<span class="g-color-css3-new">E:disabled</span>](#disabled)|CSS3|匹配用户界面上处于禁用状态的元素E|
|[<span class="g-color-css3-new">E:target</span>](#target)|CSS3|匹配相关URL指向的E元素|
|[@page:first](#page-first)|CSS2|设置页面容器第一页使用的样式。仅用于[@page](/css/rules/page)规则|
|[@page:left](#page-left)|CSS2|设置页面容器位于装订线左边的所有页面使用的样式。仅用于[@page](/css/rules/page)规则|
|[@page:right](#page-right)|CSS2|设置页面容器位于装订线右边的所有页面使用的样式。仅用于[@page](/css/rules/page)规则|

## E:link :id=link

### 语法

```css
E:link {
  sRules
}
```

### 说明

**设置超链接a在未被访问前的样式**

- 如果需要给超链接定义：访问前，鼠标悬停，当前被点击，已访问这4种伪类效果，而又没有按照一致的书写顺序，不同的浏览器可能会有不同的表现

- 超链接的4种状态，需要有特定的书写顺序才能生效

  ```css
  a:link {}
  a:visited {}
  a:hover {}
  a:active {}
  ```

  !> 注意，a:hover 必须位于 a:link 和 a:visited 之后，a:active 必须位于 a:hover 之后<br/>可靠的顺序是：lvha

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
<ul>
  <li><a href="#link" class="external">外部链接</a></li>
  <li><a href="#link">内部链接</a></li>
  <li><a href="#link" class="external">外部链接</a></li>
  <li><a href="#link">内部链接</a></li>
</ul>
```

#### **css**

```css
a:link {
	color: #03c;
}
.external:link {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/1.html"
>
  浏览器不支持iframe
</iframe>

---

## E:visited :id=visited

### 语法

```css
E:visited {
  sRules
}
```

### 说明

**设置超链接a在其链接地址已被访问过时的样式**

- 如果需要给超链接定义：访问前，鼠标悬停，当前被点击，已访问这4种伪类效果，而又没有按照一致的书写顺序，不同的浏览器可能会有不同的表现

- 超链接的4种状态，需要有特定的书写顺序才能生效

  ```css
  a:link {}
  a:visited {}
  a:hover {}
  a:active {}
  ```

  !> 注意，a:hover 必须位于 a:link 和 a:visited 之后，a:active 必须位于 a:hover 之后<br/>可靠的顺序是：lvha

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
<h3>点击下面链接</h3>
<ul>
  <li><a href="#visited">内部链接</a></li>
</ul>
```

#### **css**

```css
a:link {
	color: #03c;
}
a:visited {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/2.html"
>
  浏览器不支持iframe
</iframe>

---

## E:hover :id=hover

### 语法

```css
E:hover {
  sRules
}
```

### 说明

**设置元素在其鼠标悬停时的样式**

- 如果需要给超链接定义：访问前，鼠标悬停，当前被点击，已访问这4种伪类效果，而又没有按照一致的书写顺序，不同的浏览器可能会有不同的表现

- 超链接的4种状态，需要有特定的书写顺序才能生效

  ```css
  a:link {}
  a:visited {}
  a:hover {}
  a:active {}
  ```

  !> 注意，a:hover 必须位于 a:link 和 a:visited 之后，a:active 必须位于 a:hover 之后<br/>可靠的顺序是：lvha

### 兼容性

IE6及更早浏览器只支持a元素的:hover，从IE7开始支持其它元素的:hover

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
<h1>请将鼠标分别移动到下面2个元素上</h1>
<a href="#hover">我是一个a标签</a>
<div>我是一个div标签</div>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
a,
div {
	display: block;
	margin-top: 10px;
	padding: 10px;
	border: 1px solid #ddd;
}
a:hover,
div:hover {
	background: #ddd;
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/3.html"
>
  浏览器不支持iframe
</iframe>

---

## E:active :id=active

### 语法

```css
E:active {
  sRules
}
```

### 说明

**设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式**

- 如果需要给超链接定义：访问前，鼠标悬停，当前被点击，已访问这4种伪类效果，而又没有按照一致的书写顺序，不同的浏览器可能会有不同的表现

- 超链接的4种状态，需要有特定的书写顺序才能生效

  ```css
  a:link {}
  a:visited {}
  a:hover {}
  a:active {}
  ```

  !> 注意，a:hover 必须位于 a:link 和 a:visited 之后，a:active 必须位于 a:hover 之后<br/>可靠的顺序是：lvha

### 兼容性

IE7及更早浏览器只支持a元素的:active，从IE8开始支持其它元素的:active

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-7.0<sup>#1</sup>;</span> 8.0+|
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
<h1>请将分别激活(点击与释放之间)下面2个元素</h1>
<a href="#active">我是一个a</a>
<div>我是一个div</div>
```

#### **css**

```css
h1 {
  font-size: 16px;
}
a,
div {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
a:active,
div:active {
  background: #ddd;
  color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/4.html"
>
  浏览器不支持iframe
</iframe>


## E:focus :id=focus

### 语法

```css
E:focus {
  sRules
}
```

### 说明

**设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式**

webkit内核浏览器会默认给:focus状态的元素加上outline的样式

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-7.0;</span> 8.0+|
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
<h1>请聚焦到以下输入框</h1>
<form action="#">
	<ul>
		<li><input value="姓名" /></li>
		<li><input value="单位" /></li>
		<li><input value="年龄" /></li>
		<li><input value="职业" /></li>
	</ul>
</form>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
input:focus {
	background: #f6f6f6;
	color: #f60;
	border: 1px solid #f60;
	outline: none;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/5.html"
>
  浏览器不支持iframe
</iframe>

---

## E:lang(fr) :id=lang-fr

### 语法

```css
E:lang(fr) {
  sRules
}
```

### 说明

**匹配使用特殊语言的E元素**

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-7.0;</span> 8.0+|
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
<p lang="zh-cmn-Hans">大段测试文字</p>
<p lang="en">english</p>
```

#### **css**

```css
p:lang(zh-cmn-Hans) {
	color: #f00;
}
p:lang(en) {
	color: #090;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/6.html"
>
  浏览器不支持iframe
</iframe>

---

## E:not(s) :id=e-not

### 语法

```css
E:not(s) {
  sRules
}
```

### 说明

**匹配不含有s选择符的元素E**

有了这个选择符，那么你将可以很好的处理类似这样的场景：假定有个列表，每个列表项都有一条底边线，但是最后一项不需要底边线

<!-- tabs:start -->

#### **html**

```html
<ul class="demo">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

#### **css**

```css
.demo li {
  border: 1px solid;
}

.demo li:not(:last-child) {
	border-bottom: 1px solid #ddd;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/7.html"
>
  浏览器不支持iframe
</iframe>

!> 上述代码的意思是：给该列表中除最后一项外的所有列表项加一条底边线

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<p class="abc">否定伪类选择符 E:not(s)</p>
<p id="abc">否定伪类选择符 E:not(s)</p>
<p class="abcd">否定伪类选择符 E:not(s)</p>
<p>否定伪类选择符 E:not(s)</p>
```

#### **css**

```css
p:not(.abc) {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/8.html"
>
  浏览器不支持iframe
</iframe>

---

## E:root :id=e-root

### 语法

```css
E:root {
  sRules
}
```

### 说明

**匹配E元素在文档的根元素。在HTML中，根元素永远是HTML**

根据这个特性，可以做IE8的Hack

<!-- tabs:start -->

#### **html**

```html
<p>段落颜色<p>
```

#### **css**

```css
.test {
	color: black;
	color: yellow\0;
	*color: blue;
	_color: red;
}
html:root .test {
	color: purple\0;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/9.html"
>
  浏览器不支持iframe
</iframe>

!> 上述代码：非IE文本将为black，IE9及以上为purple，IE8为yellow，IE7为blue，IE6为red

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
</ul>
```

#### **css**

```css
html:root {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/10.html"
>
  浏览器不支持iframe
</iframe>

---

## E:first-child :id=first-child

### 语法

```css
E:first-child {
  sRules
}
```

### 说明

**匹配父元素的第一个子元素E**

要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素

E:first-child选择符，E必须是它的兄弟元素中的第一个元素，换言之，E必须是父元素的第一个子元素。与之类似的伪类还有[E:last-child](#last-child)，只不过情况正好相反，需要它是最后一个子元素

<!-- tabs:start -->

#### **例子1**

```html
<ul>
	<li>列表项一</li>
	<li>列表项二</li>
	<li>列表项三</li>
	<li>列表项四</li>
</ul>
```

```css
li:first-child {
  color: #f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/11.html"
>
  浏览器不支持iframe
</iframe>

!> 在上述代码中，如果我们要设置第一个li的样式，那么代码应该写成li:first-child{sRules}，而不是ul:first-child{sRules}。

#### **例子2**

```html
<div>
	<p>我是一个p</p>
</div>
```

```css
p:first-child {
  color:#f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/12.html"
>
  浏览器不支持iframe
</iframe>

!> 这段代码你能看到p元素被命中变成了红色

#### **例子3**

假设将例子2的代码简单地修改一下

```html
<div>
	<h2>我是一个标题</h2>
	<p>我是一个p</p>
</div>
```

```css
p:first-child {
  color:#f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/13.html"
>
  浏览器不支持iframe
</iframe>

!> 只是在p前面加了一个h2标签，你会发现选择器失效了，没有命中p

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0;</span> 7.0+|
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
<h1>注意的是li:first-child，而不是ul:first-child</h1>
<ul>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
	<li>结构性伪类选择符 E:first-child</li>
</ul>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
li:first-child {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/14.html"
>
  浏览器不支持iframe
</iframe>

---

## E:last-child :id=last-child

### 语法

```css
E:last-child {
  sRules
}
```

### 说明

**匹配父元素的最后一个子元素E**

要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素

E:last-child选择符，E必须是它的兄弟元素中的最后一个元素，换言之，E必须是父元素的最后一个子元素。与之类似的伪类还有
[E:first-child](#first-child)，只不过情况正好相反，需要它是第一个子元素

通过具体的例子来进行理解

<!-- tabs:start -->

#### **有效的代码**

```html
<div>
	<h2>我是一个标题</h2>
	<p>我是一个p</p>
</div>
```

```css
p:last-child {
  color:#f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/15.html"
>
  浏览器不支持iframe
</iframe>

#### **无效的代码**

```html
<div>
	<p>我是一个p</p>
	<h2>我是一个标题</h2>
</div>
```

```css
p:last-child {
  color:#f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/16.html"
>
  浏览器不支持iframe
</iframe>

!> 在上述代码中，如果我们要设置第一个li的样式，那么代码应该写成li:first-child{sRules}，而不是ul:first-child{sRules}

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<h1>注意的是li:last-child，而不是ul:last-child</h1>
<ul>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
	<li>结构性伪类选择符 E:last-child</li>
</ul>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
li:last-child {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/17.html"
>
  浏览器不支持iframe
</iframe>

---

## E:only-child :id=only-child

### 语法

```css
E:only-child {
  sRules
}
```

### 说明

**匹配父元素仅有的一个子元素E**

要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<h1>只有唯一一个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
<h1>有多个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
li:only-child {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/18.html"
>
  浏览器不支持iframe
</iframe>

## E:nth-child(n) :id=nth-child

### 语法

```css
E:nth-child(n) {
  sRules
}
```

### 说明

**匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效**

要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素

该选择符允许使用一个乘法因子(n)来作为换算方式，比如我们想选中所有的偶数子元素E，那么选择符可以写成：E:nth-child(2n)

- **使用使用E:nth-child(n)实现奇偶**

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>偶数</h1>
<ul class="even">
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
  <li>列表项四</li>
</ul>
<h1>奇数</h1>
<ul class="odd">
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
  <li>列表项四</li>
</ul>
```

**css**

```css
/* 偶数 */
.even li:nth-child(2n) {
  color: #f00;
}

/* 奇数 */
.odd li:nth-child(2n+1){
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/19.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

- **使用odd, even实现奇偶**

<!-- tabs:start -->

#### **代码**

**html**

```html
<h1>偶数</h1>
<ul class="even">
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
  <li>列表项四</li>
</ul>
<h1>奇数</h1>
<ul class="odd">
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
  <li>列表项四</li>
</ul>
```

**css**

```css
/* 偶数 */
.even li:nth-child(even) {
  color: #f00;
}

/* 奇数 */
.odd li:nth-child(odd){
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/20.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

- **有一点需要注意的是**

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
	<p>第4个p</p>
	<p>第5个p</p>
</div>
```

**Css case1**

```css
p:nth-child(2) {
  color: #f00;
}
```

**case1 运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/21.html"
>
  浏览器不支持iframe
</iframe>

!> 很明显第2个p会被命中然后变成红色

---

**Css case2**

```css
p:nth-child(3) {
  color: #f00;
}
```

**case2 运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/22.html"
>
  浏览器不支持iframe
</iframe>

!> 这是会命中第3个p么？如果你这么认为那就错了，这条选择符就不会命中任何一个元素。因为div的第三个子元素不是p<br/>E:nth-child(n)会选择父元素的第n个子元素E，如果第n个子元素不是E，则是无效选择符，但n会递增。

---

**Css case3**

```css
p:nth-child(4) {
  color: #f00;
}
```

**case3 运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/23.html"
>
  浏览器不支持iframe
</iframe>

!> 这时你以为会命中第4个p，但其实命中的却是第3个p，因为它是第4个子元素

<!-- tabs:end -->

- **假设不确定第1个子元素是否为E，但是又想命中第1个E，应该这样写：**

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
	<p>第4个p</p>
	<p>第5个p</p>
</div>
```

**css**

```css
p:first-of-type {
  color: #f00;
}
```

or

```css
p:nth-of-type(1) {
  color:#f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/24.html"
>
  浏览器不支持iframe
</iframe>

!> 参考 [E:first-of-type](#first-of-type) 和 [E:nth-of-type(n)](#nth-of-type)

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<h1>第二行要变成红色 <code>li:nth-child(2){color:#f00;}</code></h1>
<ul>
	<li>结构性伪类选择符 E:nth-child(n)</li>
	<li>结构性伪类选择符 E:nth-child(n)</li>
	<li>结构性伪类选择符 E:nth-child(n)</li>
</ul>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
li:nth-child(2) {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/25.html"
>
  浏览器不支持iframe
</iframe>

---

## E:nth-last-child(n) :id=nth-last-child

### 语法

```css
E:nth-last-child(n) {
  sRules
}
```

### 说明

**匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效**

要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素

该选择符允许使用一个乘法因子(n)来作为换算方式，比如我们想选中倒数第一个子元素E，那么选择符可以写成：E:nth-last-child(1)

- **有一点需要注意的是**

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
	<p>第1个p</p>
	<p>第2个p</p>
	<span>第1个span</span>
	<p>第3个p</p>
	<span>第2个span</span>
</div>
```

?> 如上HTML，假设要命中倒数第一个p(即正数第3个p)，那么CSS选择符应该是`p:nth-last-child(2){color:#f00;}`<br/>而不是：`p:nth-last-child(1){color:#f00;}`

!> 因为倒数第1个p，其实是倒数第2个子元素。基于选择符从右到左解析，首先要找到第1个子元素，然后再去检查该子元素是否为p，如果不是p，则n递增，继续查找

**css**

```css
p:nth-last-child(2) {
  color: #f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/26.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

- **假设不确定倒数第1个子元素是否为E，但是又想命中倒数第1个E，应该这样写:**

<!-- tabs:start -->

#### **代码**

**html**

```html
<div>
  <p>第1个p</p>
  <p>第2个p</p>
  <span>第1个span</span>
  <p>第3个p</p>
  <span>第2个span</span>
  <p>第3个p</p>
  <p>第4个p</p>
</div>
```

**css**

```css
p:last-of-type {
  color: #f00;
}
```

or

```css
p:nth-last-of-type(1) {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/27.html"
>
  浏览器不支持iframe
</iframe>

!> 参考 [E:last-of-type](#last-of-type) 和 [E:nth-last-of-type(n)](#nth-last-of-type)

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<h1>最后一行要变成红色 <code>li:nth-last-child(1){color:#f00;}</code></h1>
<ul>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
	<li>结构性伪类选择符 E:nth-last-child(n)</li>
</ul>
```

#### **css**

```css
h1 {
	font-size: 16px;
}
li:nth-last-child(1) {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/28.html"
>
  浏览器不支持iframe
</iframe>

---

## E:first-of-type :id=first-of-type

### 语法

```css
E:first-of-type {
  sRules
}
```

### 说明

**匹配父元素下第一个类型为E的子元素**

- 首先，该选择符要匹配的是类型为E的子元素，这意味着E元素必须作为某个元素的子元素存在（E元素的父元素最高是html，也就是说E元素本身最高只能是body，这表示任何非html的元素都符合这个约束，因为html元素是根元素。）

- 其次，该选择符要匹配的是父元素第一个类型为E的子元素，这意味着被命中的元素不一定是父元素的第一个子元素（因为排在父元素首位的不一定是E元素，E元素可能在子元素列表中的任何位置）。来看下面这个例子

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<p>p1</p>
	<p>p2</p>
	<span>span1</span>
	<p>p3</p>
	<span>span2</span>
</div>
```

?> 如上HTML，我们要命中父元素 .demo 的第一个 span 子元素，CSS 代码如下：

**css**

```css
.demo span:first-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/29.html"
>
  浏览器不支持iframe
</iframe>

!> 此时 .demo 的第1个元素并没有被匹配到，而是匹配到了第3个子元素，因为第3个子元素正好是 .demo 的第1个span子元素

<!-- tabs:end -->

- 再次，只能匹配与E元素同级的元素，即：E元素的兄弟元素, 来看下面这个例子

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<span>span1</span>
	<p>
		<span>span2</span>
		<span>span3</span>
	</p>
	<span>span4</span>
</div>
```

?> 如上HTML，如果我想匹配其中的第1个span，代码如下：

**css**

```css
.demo span:first-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/30.html"
>
  浏览器不支持iframe
</iframe>

!> 结果span1和span2都会被命中，因为span1和span2分属不同的父元素，并且都是其父元素的首个span元素，所以都会被命中

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="demo">
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
```

#### **css**

```css
.demo p:first-of-type {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/31.html"
>
  浏览器不支持iframe
</iframe>

---

## E:last-of-type :id=last-of-type

### 语法

```css
E:last-of-type {
  sRules
}
```

### 说明

**匹配父元素下的所有E子元素中的倒数第一个**

- 首先，因为匹配的是父元素的子元素，这意味着E元素必须作为某个元素的子元素存在（E元素的父元素最高是html，也就是说E元素最高是body，这表示任何非html的元素都符合这个约束，因为html元素是根元素。）

- 其次，匹配的是父元素的最后一个E子元素（要注意：被命中的不一定是父元素的最后一个子元素，因为排在子元素尾位的不一定是E元素，它可能在子元素列表中的任何位置）来看下面这个例子:

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<p>p1</p>
	<p>p2</p>
	<span>span1</span>
	<p>p3</p>
	<span>span2</span>
</div>
```

?> 如上HTML，假设要命中最后1个span元素，代码如下：

**css**

```css
.demo span:last-of-type {
  color: #f00;
}
```

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/32.html"
>
  浏览器不支持iframe
</iframe>

!> 此时 .demo 的第5个子元素会被命中，因为 .demo 的第5个子元素正好是最后1个span元素

<!-- tabs:end -->

- 再次，只能匹配与E元素同级的元素，即：E元素的兄弟元素，来看下面这个例子：

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<span>span1</span>
	<p>
		<span>span2</span>
		<span>span3</span>
	</p>
	<span>span4</span>
</div>
```

?> 如上HTML，如果我想匹配其中的最后1个span，代码如下：

**css**

```css
.demo span:last-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/33.html"
>
  浏览器不支持iframe
</iframe>

!> 结果span3和span4都会被命中，因为span3和span4分属不同的父元素，并且都是其父元素的最后1个span元素，所以都会被命中

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="test">
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
```

#### **css**

```css
p:last-of-type {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/34.html"
>
  浏览器不支持iframe
</iframe>

---

## E:only-of-type :id=only-of-type

### 语法

```css
E:only-of-type {
  sRules
}
```

### 说明

**匹配父元素的所有子元素中唯一的那个子元素E**

- 首先，因为匹配的是父元素的子元素，这意味着E元素必须作为某个元素的子元素存在（E元素的父元素最高是html，也就是说E元素最高是body，这表示任何非html的元素都符合这个约束，因为html元素是根元素）

- 其次，父元素可以有多个子元素，但其中的子元素E必须是唯一的，不能出现多个

<!-- tabs:start -->

#### **例子1**

**html**


```html
<div class="demo">
	<span>span1</span>
</div>
```

**css**

```css
.demo span:only-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/35.html"
>
  浏览器不支持iframe
</iframe>

!> 毫无疑问，因为span1是 .demo 唯一的子元素，所以span1会被命中

#### **例子2**

**html**

```html
<div class="demo">
	<p>p1</p>
	<span>span1</span>
</div>
```

**css**

```css
.demo span:only-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/36.html"
>
  浏览器不支持iframe
</iframe>

!> 可以看到span1也会被命中，虽然此例中.demo有2个子元素，但span1是.demo唯一的span子元素

#### **例子3**

**html**

```html
<div class="demo">
	<p>p1</p>
	<span>span1</span>
	<span>span2</span>
</div>
```

**css**

```css
.demo span:only-of-type {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/37.html"
>
  浏览器不支持iframe
</iframe>

!> 此时span将不会被命中，因为.demo有2个span子元素，不满足唯一性要求。

<!-- tabs:end -->


### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="test">
	<p>结构性伪类选择符 E:only-of-type</p>
</div>
```

#### **css**

```css
p:only-of-type {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/38.html"
>
  浏览器不支持iframe
</iframe>

---

## E:nth-of-type(n) :id=nth-of-type

### 语法

```css
E:nth-of-type(n) {
  sRules
}
```

### 说明

**匹配父元素的第n个子元素E**

- 首先，因为匹配的是父元素的子元素，这意味着E元素必须作为某个元素的子元素存在（E元素的父元素最高是html，也就是说E元素最高是body，这表示任何非html的元素都符合这个约束，因为html元素是根元素。）

- 其次，匹配的是父元素的第n个为E的子元素（被命中的不一定是第n个子元素，因为匹配的不是第n个子元素，而是第n个为E的子元素）

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<p>p1</p>
	<p>p2</p>
	<span>span1</span>
	<p>p3</p>
	<span>span2</span>
</div>
```

?> 如上HTML，假设要命中第3个p元素，代码如下：

**css**

```css
.demo p:nth-of-type(3) {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/39.html"
>
  浏览器不支持iframe
</iframe>

!> 可以看到此时 .demo 的第4个子元素会被命中，因为 .demo 的第4个子元素才是它的第3个p子元素

<!-- tabs:end -->

- 再次，只能匹配与E元素同级的元素，即：E元素的兄弟元素

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<span>span1</span>
	<p>
		<span>span2</span>
		<span>span3</span>
	</p>
	<span>span4</span>
</div>
```

?> 如上HTML，如果我想匹配其中的第2个span，代码如下：

**css**

```css
.demo span:nth-of-type(2) {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/40.html"
>
  浏览器不支持iframe
</iframe>

!> 结果span2确实没有被命中，因为span2并不是.demo的第2个span子元素。从代码中能看到span1和span4是同级，span2和span3同级，因为span3和span4分别是这2组层级中的第2个span，所以最终span3和span4都被命中了。

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="demo">
	<p>我是一个p元素</p>
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
```

#### **css**

```css
.demo p:nth-of-type(2) {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/41.html"
>
  浏览器不支持iframe
</iframe>

---

## E:nth-last-of-type(n) :id=nth-last-of-type

### 语法

```css
E:nth-last-of-type(n) {
  sRules
}
```

### 说明

**匹配父元素的倒数第n个子元素E**

- 首先，因为匹配的是父元素的子元素，这意味着E元素必须作为某个元素的子元素存在（E元素的父元素最高是html，也就是说E元素最高是body，这表示任何非html的元素都符合这个约束，因为html元素是根元素。）

- 其次，匹配的是父元素的倒数第n个为E的子元素（被命中的不一定是倒数第n个子元素，因为匹配的不是倒数第n个子元素，而是倒数第n个为E的子元素）

来看下面这个例子

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<p>p1</p>
	<p>p2</p>
	<span>span1</span>
	<p>p3</p>
	<span>span2</span>
</div>
```

?> 如上HTML，要命中倒数第1个p元素，代码如下：

**css**

```css
.demo p:nth-last-of-type(1) {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/42.html"
>
  浏览器不支持iframe
</iframe>

!> 此时p3会被命中，虽然p3是 .demo 的倒数第2个子元素，但却是倒数第1个为p的子元素

<!-- tabs:end -->

- 再次，只能匹配与E元素同级的元素，即：E元素的兄弟元素

来看下面这个例子

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="demo">
	<span>span1</span>
	<p>
		<span>span2</span>
		<span>span3</span>
	</p>
	<span>span4</span>
</div>
```

?> 如上HTML，你将不能通过下面的代码命中span3：

**css**

```css
.demo span:nth-last-of-type(2) {
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/43.html"
>
  浏览器不支持iframe
</iframe>

!> 此时p3会被命中，虽然p3是 .demo 的倒数第2个子元素，但却是倒数第1个为p的子元素

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="demo">
	<p>我是一个p元素</p>
	<div>我是一个div元素</div>
	<p>我是一个p元素</p>
	<p>我是一个p元素</p>
</div>
```

#### **css**

```css
.demo p:nth-last-of-type(1) {
	color: #f00;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/44.html"
>
  浏览器不支持iframe
</iframe>

---

## E:empty :id=empty

### 语法

```css
E:empty {
  sRules
}
```

### 说明

**匹配没有任何子元素（包括text节点）的元素E**

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="test">
	<p>结构性伪类选择符 E:empty</p>
	<p><!--我是一个空节点p，请注意我与其它非空节点p的外观有什么不一样--></p>
	<p>结构性伪类选择符 E:empty</p>
</div>
```

#### **css**

```css
p:empty {
	height: 25px;
	border: 1px solid #ddd;
	background: #eee;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/45.html"
>
  浏览器不支持iframe
</iframe>

---

## E:checked :id=checked

### 语法

```css
E:checked {
  sRules
}
```

### 说明

**匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)**

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<form method="post" action="#">
<fieldset>
	<legend>选中下面的项试试</legend>
	<ul>
		<li><label><input type="radio" name="colour-group" value="0" /><span>蓝色</span></label></li>
		<li><label><input type="radio" name="colour-group" value="1" /><span>红色</span></label></li>
		<li><label><input type="radio" name="colour-group" value="2" /><span>黑色</span></label></li>
	</ul>
</fieldset>
<fieldset>
	<legend>选中下面的项试试</legend>
	<ul>
		<li><label><input type="checkbox" name="colour-group2" value="0" /><span>蓝色</span></label></li>
		<li><label><input type="checkbox" name="colour-group2" value="1" /><span>红色</span></label></li>
		<li><label><input type="checkbox" name="colour-group2" value="2" /><span>黑色</span></label></li>
	</ul>
</fieldset>
</form>
```

#### **css**

```css
input:checked + span {
	background: #f00;
}
input:checked + span:after {
	content: " 我被选中了";
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/46.html"
>
  浏览器不支持iframe
</iframe>

---

## E:enabled :id=enabled

### 语法

```css
E:enabled {
  sRules
}
```

### 说明

**匹配用户界面上处于可用状态的元素E**

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<form method="post" action="#">
<fieldset>
	<legend>E:enabled与E:disabled</legend>
	<ul>
		<li><input type="text" value="可用状态" /></li>
		<li><input type="text" value="可用状态" /></li>
		<li><input type="text" value="禁用状态" disabled="disabled" /></li>
		<li><input type="text" value="禁用状态" disabled="disabled" /></li>
	</ul>
</fieldset>
</form>
```

#### **css**

```css
li {
	padding: 3px;
}
input[type="text"]:enabled {
	border: 1px solid #090;
	background: #fff;
	color: #000;
}
input[type="text"]:disabled {
	border: 1px solid #ccc;
	background: #eee;
	color: #ccc;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/47.html"
>
  浏览器不支持iframe
</iframe>

---

## E:disabled :id=disabled

### 语法

```css
E:disabled {
  sRules
}
```

### 说明

**匹配用户界面上处于禁用状态的元素E**

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<form method="post" action="#">
<fieldset>
	<legend>E:enabled与E:disabled</legend>
	<ul>
		<li><input type="text" value="可用状态" /></li>
		<li><input type="text" value="可用状态" /></li>
		<li><input type="text" value="禁用状态" disabled="disabled" /></li>
		<li><input type="text" value="禁用状态" disabled="disabled" /></li>
	</ul>
</fieldset>
</form>
```

#### **css**

```css
li {
	padding: 3px;
}
input[type="text"]:enabled {
	border: 1px solid #090;
	background: #fff;
	color: #000;
}
input[type="text"]:disabled {
	border: 1px solid #ccc;
	background: #eee;
	color: #ccc;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/47.html"
>
  浏览器不支持iframe
</iframe>

## E:target :id=target

### 语法

```css
E:target {
  sRules
}
```

### 说明

**匹配相关URL指向的E元素**

**解释:** URL后面跟锚点#，指向文档内某个具体的元素。这个被链接的元素就是目标元素(target element)，:target选择器用于选取当前活动的目标元素

<!-- tabs:start -->

#### **示例**

**html**

```html
<div id="demo">
	<p>E:target伪类使用方法</p>
</div>
```

**css**

```css
#demo:target{
  color: #f00;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/48.html"
>
  浏览器不支持iframe
</iframe>

!> 假设上述代码在页面 a.html 中，那么当访问 a.html#demo 时，这个div元素将会被:target命中

<!-- tabs:end -->

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
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
<div class="test">
	<div class="hd nav">
		<a href="#panel1">前往区块1</a>
		<a href="#panel2">前往区块2</a>
		<a href="#panel3">前往区块3</a>
		<a href="#panel4">前往区块4</a>
		<a href="#panel5">前往区块5</a>
	</div>
	<div class="bd">
		<div id="panel1" class="panel">
			<h2>区块1</h2>
			<div><p>区块1内容</p><p>区块1内容</p><p>区块1内容</p></div>
		</div>
		<div id="panel2" class="panel">
			<h2>区块2</h2>
			<div><p>区块2内容</p><p>区块2内容</p><p>区块2内容</p></div>
		</div>
		<div id="panel3" class="panel">
			<h2>区块3</h2>
			<div><p>区块3内容</p><p>区块3内容</p><p>区块3内容</p></div>
		</div>
		<div id="panel4" class="panel">
			<h2>区块4</h2>
			<div><p>区块4内容</p><p>区块4内容</p><p>区块4内容</p></div>
		</div>
		<div id="panel5" class="panel">
			<h2>区块5</h2>
			<div><p>区块5内容</p><p>区块5内容</p><p>区块5内容</p></div>
		</div>
	</div>
</div>
```

#### **css**

```css
.test .hd {
  padding: 10px 0;
}

.test .nav {
  position: fixed;
  right: 10px;
  left: 540px;
}

.test .nav a {
  display: block;
  margin: 10px 0;
}

.test .bd .panel {
  width: 500px;
  margin-top: 5px;
  border: 1px solid #ddd;
}

.test .bd h2 {
  border-bottom: 1px solid #ddd;
}

.test .bd .panel:target {
  border-color: #f60;
}

.test .bd .panel:target h2 {
  border-color: #f60;
}

h2,p {
  margin: 0;
  padding: 10px;
  font-size: 16px;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/49.html"
>
  浏览器不支持iframe
</iframe>

---

## @page:first :id=page-first

### 语法

```css
@page :first {
  sRules
}
```

### 说明

**设置在打印时页面容器第一页使用的样式。仅用于[@page](/css/rules/page)规则**

- 该伪类选择符只允许定义margin, orphans, widows 和 page breaks相关属性

- 相关查看：[@page](/css/rules/page), [:left](#page-left), [:right](#page-right)

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
|Firefox|<span style="color: red;">2.0-38.0;</span>|
|Chrome|4.0+|
|Safari|<span style="color: red;">3.1-8.1;</span>|
|Opera|3.5+|
|iOS Safari|<span style="color: red;">3.1-8.1;</span>|
|Android Browser|<span style="color: grey;">2.1-4.4.4;</span>|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<div>页面容器中第一页的外边距为100px 200px</div>
<div>页面容器中第二页的外边距为默认值</div>
```

#### **css**

```css
@page :first {
	margin: 100px 200px;
}
div {
	page-break-after: always;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/50.html"
>
  浏览器不支持iframe
</iframe>

---

## @page:left :id=page-left

### 语法

```css
@page :left {
  sRules
}
```

### 说明

**设置页面容器位于装订线左边的所有页面使用的样式。仅用于[@page](/css/rules/page)规则**

- 该伪类选择符只允许定义[margin](#), [padding](#), [border](#) 和 [background](#)属性

- 相关查看：[@page](/css/rules/page), [:first](#page-first), [:right](#page-right)

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
|Firefox|<span style="color: red;">2.0-38.0;</span>|
|Chrome|4.0+|
|Safari|<span style="color: red;">3.1-8.1;</span>|
|Opera|3.5+|
|iOS Safari|<span style="color: red;">3.1-8.1;</span>|
|Android Browser|<span style="color: grey;">2.1-4.4.4;</span>|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<div>页面容器位于装订线左边的所有页面左外边距为300px</div>
<div>页面容器位于装订线左边的所有页面左外边距为300px</div>
<div>页面容器位于装订线左边的所有页面左外边距为300px</div>
```

#### **css**

```css
@page :left {
	margin-left: 300px;
}
div {
	page-break-after: always;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/51.html"
>
  浏览器不支持iframe
</iframe>

---

## @page:right :id=page-right

### 语法

```css
@page :right {
  sRules
}
```

### 说明

**设置页面容器位于装订线右边的所有页面使用的样式。仅用于[@page](/css/rules/page)规则**

- 该伪类选择符只允许定义[margin](#), [padding](#), [border](#) 和 [background](#)属性

- 相关查看：[@page](/css/rules/page), [:first](#page-first), [:left](#page-left)

### 兼容性

<br />

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0-8.0;</span> 9.0+|
|Firefox|<span style="color: red;">2.0-38.0;</span>|
|Chrome|4.0+|
|Safari|<span style="color: red;">3.1-8.1;</span>|
|Opera|3.5+|
|iOS Safari|<span style="color: red;">3.1-8.1;</span>|
|Android Browser|<span style="color: grey;">2.1-4.4.4;</span>|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
<div>有很长的一句话来测试页面容器位于装订线右边的所有页面左外边距为300px</div>
```

#### **css**

```css
@page :right {
	margin-right: 300px;
}
div {
	page-break-after: always;
}
```

<!-- tabs:end -->

运行结果

<iframe
  class="output-iframe"
  scrolling="no"
  frameborder="0"
  src="css-handbook/example/selectors/pseudo-classes/52.html"
>
  浏览器不支持iframe
</iframe>
