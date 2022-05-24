[首页](/) / [Html5](/html5/)

# Html5

## 前端开发规范整理

### **文档类型**

为每个Html页面中第一行添加标准模式的声明，这样能够确保在每个浏览器中拥有一致的表现。

```html
<!DOCTYPE html>
```
---

### **语言属性**

```html
<!-- 中文 -->
<html lang="zh-Hans">
  
<!-- 中文简体 -->
<html lang="zh-cmn-Hans">
   
<!-- 中文繁体 -->
<html lang="zh-cmn-Hant">
    
 <!-- 英语 -->
<html lang="en">
```

---

### **字符编码**

指定字符编码的meta必须是head的第一个直接子元素。

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="utf-8" />
      ....
 </head>
 <body>
   ....
 </body>
</html>
```

---

### **兼容模式**

优先使用最新版本的ie和chrome内核

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge，chrome=1">
```

---

### **viewport**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,
maximum-scale=1.0, user-scalable=no">
```

---

### **SEO优化**

```html
<head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=Edge，chrome=1">
    <!-- SEO -->
    <title>前端开发规范</title>
    <meta name="keywords" content="不超过150个字符" />
    <meta name="description" content="" >
    <meta name="author" content="name,email address" />
    <!-- SEO end -->
 </head>
```

---

### **IOS图标**

* apple-touch-icon 图片自动处理成圆角和高光等效果；

* apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计图；

```html
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="table_ico57.png">

<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="table_ico72.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="table_ico114.png">

<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="table_ico144.png">
```

---

### **favicon**

在未指定favicon时，大多数浏览器会请求web server 根目录下的favicon.ico。为了保证favicon可访问，避免404，必须遵循以下两种方法之一：

* 在web server根目录放置favicon.ico图片文件；

* 使用link指定favicon

```html
<link rel="shortcut Icon" href="path/to/favicon.ico">
```

---

### **HEAD模板**

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=Edge，chrome=1">
    <!-- SEO -->
    <title>前端开发规范</title>
    <meta name="keywords" content="不超过150个字符" />
    <meta name="description" content="" >
    <meta name="author" content="name,email address" />
    <!-- SEO end -->
      
    <!-- 为移动设备添加viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!--为移动设备添加viewport end -->

    <!--ios图标 -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="table_ico57.png">
    <!-- iios图标 end -->
  
    <!-- 添加 RSS 订阅 -->
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
  
   <!--favicon图标 -->
   <link rel="shortcut Icon" href="path/to/favicon.ico">
   <!-- ico 图标 end -->
 </head>
 <body>
   ....
 </body>
</html>
```

?> RSS订阅
RSS(Really Simple Syndication，简易信息聚合)是订阅网站内容的一种简易方式。能更快的获取网站内容和信息的最新更新。更直白的说，你可以不用再一一打开各个网站页面，而是通过阅读器一次一起阅读所有你订阅了的网站的最新内容。

