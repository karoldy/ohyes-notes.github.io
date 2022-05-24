[首页](/) / [html](/html/) / [注释](/html/notes)

# 注释

HTML注释标签`<!--`与`-->`用于在 HTML 插入注释

**实例**

```html
<!-- 在此处写注释 -->
```

注释：在开始标签中有一个惊叹号，但是结束标签中没有

浏览器不会显示注释，但是能够帮助记录您的 HTML 文档

您可以利用注释在 HTML 中放置通知和提醒信息

**实例**

```html
<!-- 这是一段注释 -->

<p>这是一个段落。</p>

<!-- 记得在此处添加信息 -->
```

注释对于 HTML 纠错也大有帮助，因为您可以一次注释一行 HTML 代码，以搜索错误

**实例**

```html
<!-- 此刻不显示图片：
<img border="0" src="/i/tulip_ballade.jpg" alt="Tulip">
-->
```

## 条件注释

也许会在 HTML 中偶尔发现条件注释

```html
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```

条件注释定义只有 Internet Explorer 执行的 HTML 标签

## 相关标签

|标签|描述|
|:---|:---|
|[\<!--...-->](https://www.w3cschool.cn/htmltags/tag-comment.html)|定义注释|
