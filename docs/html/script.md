# 脚本

JavaScript 是可插入HTML页面的编程代码

JavaScript 使HTML页面具有更强的动态和交互性

JavaScript 插入HTML页面后，可由所有的现代浏览器执行

## \<script>标签

`<script>` 标签用于定义客户端脚本，比如 JavaScript

`<script>` 元素既可包含脚本语句，也可通过src属性指向外部脚本文件

JavaScript 最常用于图片操作、表单验证以及内容动态更新

**实例**

```html
<script>
  document.write("Hello World!")
</script>
```

> 注释：如果使用 "src" 属性，则 \<script> 元素必须是空的。

## \<noscript>标签

`<noscript>`标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时

`<noscript>`元素可包含普通HTML页面的body元素中能够找到的所有元素

只有在浏览器不支持脚本或者禁用脚本时，才会显示`<noscript>`元素中的内容

**实例**

```html
<script>
  document.write("Hello World!")
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

`<noscript>` 标签支持全局属性，查看完整属性表[HTML全局属性](https://www.w3cschool.cn/htmltags/ref-standardattributes.html)

## 相关标签

|标签|描述|
|:---|:---|
|[\<script>](https://www.w3cschool.cn/htmltags/tag-script.html)|定义了客户端脚本|
|[\<noscript>](https://www.w3cschool.cn/htmltags/tag-noscript.html)|定义了不支持脚本浏览器输出的文本|
