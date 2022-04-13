# 区块

HTML的元素也可以分为块元素，行内元素，行内块元素

## 块元素

**特点**

1.  独霸一行，总是在新行上开始

2.  宽度缺省是它父级元素的100%，除非设定一个宽度

3.  高度、行高、外边距、内边距都可以设置

4.  可以容纳其他行内元素或其他块元素

**常见块元素**

|标签|描述|
|:---|:---|
|[\<address>](https://www.w3cschool.cn/htmltags/tag-address.html)|定义地址|
|[\<blockquote>](https://www.w3cschool.cn/htmltags/tag-blockquote.html)|定义块|
|[\<center>](https://www.w3cschool.cn/htmltags/tag-center.html)|举中对齐块|
|[\<dir>](https://www.w3cschool.cn/htmltags/tag-dir.html)|目录列表|
|[\<div>](https://www.w3cschool.cn/htmltags/tag-div.html)|布局标签|
|[\<dl>](https://www.w3cschool.cn/htmltags/tag-dl.html)|定义列表|
|[\<fieldset>](https://www.w3cschool.cn/htmltags/tag-fieldset.html)| form控制组|
|[\<form>](https://www.w3cschool.cn/htmltags/tag-form.html)|交互表单|
|[\<h1>-\<h6>](https://www.w3cschool.cn/htmltags/tag-hn.html)|标题标签|
|[\<hr>](https://www.w3cschool.cn/htmltags/tag-hr.html)|水平分隔线|
|[\<menu>](https://www.w3cschool.cn/htmltags/tag-menu.html)|菜单列表|
|[\<noframes>](https://www.w3cschool.cn/htmltags/tag-noframes.html)| frames可选内容|
|[\<noscript>](https://www.w3cschool.cn/htmltags/tag-noscript.html)|可选脚本内容|
|[\<ol>](https://www.w3cschool.cn/htmltags/tag-ol.html)|有序表单|
|[\<p>](https://www.w3cschool.cn/htmltags/tag-p.html)|段落|
|[\<pre>](https://www.w3cschool.cn/htmltags/tag-pre.html)|格式化文本|
|[\<table>](https://www.w3cschool.cn/htmltags/tag-table.html)|表格|
|[\<ul>](https://www.w3cschool.cn/htmltags/tag-ul.html)|无序列表|


## 行内元素

**特点**

1.  和其他元素都在一行上，遇到父级元素边界会自动换行

2.  高、行高以及内外边距都不可以改变

3.  宽度与内容一样宽，且不可改变

4.  行内元素只能容纳文本或者其他行内元素

> 注意：对于行内元素，设置width无效，设置高度无效，可以通过设置line-height来设置，设置margin只有左右有效，上下无效，设置padding只有左右有效，上下无效

**边距问题**

两个行内元素在一起，会出现一定的间距，即使将border、padding、margin都设置为零也无济于事，那么怎么才能去除这些间距呢？

* **重设字体**

  将行内元素的直接父级设置font-size=0px;再给行内元素设置字体大小就可以解决

* **借助HTML注释**

  在两个行内元素之间加入HTML注释，告诉浏览器这中间不是换行也不是空格，而是连接在一起的，这样也可以解决

**常见行内元素**

|标签|描述|
|:---|:---|
|[\<a>](https://www.w3cschool.cn/htmltags/tag-a.html)|超链接|
|[\<abbr>](https://www.w3cschool.cn/htmltags/tag-abbr.html)|缩写|
|[\<acronym>](https://www.w3cschool.cn/htmltags/tag-acronym.html)|首字|
|[\<b>](https://www.w3cschool.cn/htmltags/tag-b.html)|粗体(不推荐)|
|[\<bdo>](https://www.w3cschool.cn/htmltags/tag-bdo.html)|bidi override|
|[\<big>](https://www.w3cschool.cn/htmltags/tag-big.html)|大字体|
|[\<br>](https://www.w3cschool.cn/htmltags/tag-br.html)|换行|
|[\<cite>](https://www.w3cschool.cn/htmltags/tag-cite.html)|引用|
|[\<code>](https://www.w3cschool.cn/htmltags/tag-code.html)|计算机代码(在引用源码的时候需要)|
|[\<dfn>](https://www.w3cschool.cn/htmltags/tag-dfn.html)|定义字段|
|[\<em>](https://www.w3cschool.cn/htmltags/tag-em.html)|强调|
|[\<i>](https://www.w3cschool.cn/htmltags/tag-i.html)|斜体|
|[\<img>](https://www.w3cschool.cn/htmltags/tag-img.html)|图片|
|[\<input>](https://www.w3cschool.cn/htmltags/tag-input.html)|输入框|
|[\<kbd>](https://www.w3cschool.cn/htmltags/tag-kbd.html)|定义键盘文本|
|[\<label>](https://www.w3cschool.cn/htmltags/tag-label.html)|表格标签|
|[\<q>](https://www.w3cschool.cn/htmltags/tag-q.html)|短引用|
|[\<samp>](https://www.w3cschool.cn/htmltags/tag-samp.html)|定义范例计算机代码|
|[\<select>](https://www.w3cschool.cn/htmltags/tag-select.html)|项目选择|
|[\<small>](https://www.w3cschool.cn/htmltags/tag-small.html)|小字体文本|
|[\<span>](https://www.w3cschool.cn/htmltags/tag-span.html)|常用内联容器，定义文本内区块|
|[\<strong>](https://www.w3cschool.cn/htmltags/tag-strong.html)|粗体强调|
|[\<sub>](https://www.w3cschool.cn/htmltags/tag-sub.html)|下标|
|[\<sup>](https://www.w3cschool.cn/htmltags/tag-sup.html)|上标|
|[\<textarea>](https://www.w3cschool.cn/htmltags/tag-textarea.html)|多行文本输入框|
|[\<s>](https://www.w3cschool.cn/htmltags/tag-s.html)|中划线(不推荐)|
|[\<strike>](https://www.w3cschool.cn/htmltags/tag-strike.html)|中划线|
|[\<tt>](https://www.w3cschool.cn/htmltags/tag-tt.html)|电传文本|
|[\<u>](https://www.w3cschool.cn/htmltags/tag-u.html)|下划线|
|[\<font>](https://www.w3cschool.cn/htmltags/tag-font.html)|字体设定(不推荐)|

## 行内块元素

**特点**

1.  元素排列在一行

2.  宽度默认由内容决定

3.  元素间默认有间距

4.  支持宽高、外边距、内边距的所有样式的设置

**常见行内块元素**

|标签|描述|
|:---|:---|
|[\<img>](https://www.w3cschool.cn/htmltags/tag-img.html)|图片|
|[\<input>](https://www.w3cschool.cn/htmltags/tag-input.html)|输入框|
|[\<td>](https://www.w3cschool.cn/htmltags/tag-td.html)|单元格|
