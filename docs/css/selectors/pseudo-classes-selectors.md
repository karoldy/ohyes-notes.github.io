[选择器列表](/css/selectors/)

# 伪类选择器

为防止`<output>`标签内的样式覆盖docsify的样式，本章的例子使用以`data-`开头的属性是自定义属性

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
|[E:lang(fr)](#lang(fr))|CSS2|匹配使用特殊语言的E元素|
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
  src="/example/css/selectors/pseudo-classes-link.html"
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
  src="/example/css/selectors/pseudo-classes-visited.html"
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
  src="/example/css/selectors/pseudo-classes-hover.html"
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
|IE|<span style="color: red;">6.0-7.0<sup>#1</sup>;</span> 7.0+|
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
  src="/example/css/selectors/pseudo-classes-active.html"
>
  浏览器不支持iframe
</iframe>


## E:focus :id=focus

?> _TODO_

## E:lang(fr) :id=lang(fr)

?> _TODO_
