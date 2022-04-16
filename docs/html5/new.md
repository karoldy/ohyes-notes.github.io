# 10大新特性

html5总的来说比html4多了十个新特性，但其不支持ie8及ie8以下版本的浏览器

- 语义标签
- 增强型表单
- 视频和音频
- Canvas绘图
- SVG绘图
- 地理定位
- 拖放API
- Web Workers
- Web Storage
- Web Socket

## 语义标签

|标签|描述|
|:---|:---|
|[\<header>](https://www.w3cschool.cn/htmltags/tag-header.html)|定义文档的页眉|
|[\<nav>](https://www.w3cschool.cn/htmltags/tag-nav.html)|定义导航链接的部分|
|[\<footer>](https://www.w3cschool.cn/htmltags/tag-footer.html)|定义文档或节的页脚|
|[\<article>](https://www.w3cschool.cn/htmltags/tag-article.html)|标签规定独立的自包含内容|
|[\<section>](https://www.w3cschool.cn/htmltags/tag-section.html)|定义文档中的节(section、区段)|
|[\<aside>](https://www.w3cschool.cn/htmltags/tag-aside.html)|定义其所处内容之外的内容|
|[\<details>](https://www.w3cschool.cn/htmltags/tag-details.html)|定义用户可以看到或者隐藏的额外细节|
|[\<summary>](https://www.w3cschool.cn/htmltags/tag-summary.html)|标签包含details元素的标题|
|[\<dialog>](https://www.w3cschool.cn/htmltags/tag-dialog.html)|定义对话框|
|[\<figure>](https://www.w3cschool.cn/htmltags/tag-figure.html)|定义自包含内容，如图表|
|[\<main>](https://www.w3cschool.cn/htmltags/tag-main.html)|定义文档主内容|
|[\<mark>](https://www.w3cschool.cn/htmltags/tag-mark.html)|定义文档的主内容|
|[\<time>](https://www.w3cschool.cn/htmltags/tag-time.html)|定义日期/时间|

<output>
	<header>header</header>
  <nav>nav</nav>
  <footer>footer</footer>
  <article>article</article>
  <section>section</section>
  <aside>aside</aside>
  <details>details</details>
  <summary>summary</summary>
  <dialog>dialog</dialog>
  <figure>figure</figure>
  <main>main</main>
  <mark>mark</mark>
  <time>time</time>
</output>

## 增强型表单

html5修改一些新的input输入特性，改善更好的输入控制和验证

|输入类型|描述|
|:---|:---|
|color|主要用于选取颜色|
|date|选取日期|
|datetime|选取日期(UTC时间)|
|datetime-local|选取日期(无时区)|
|month|选择一个月份|
|week|选择周和年|
|time|选择一个时间|
|email|包含e-mail地址的输入域|
|number|数值的输入域|
|url|url地址的输入域|
|tel|定义输入电话号码和字段|
|search|用于搜索域|
|range|一个范围内数字值的输入域|

**html5新增了五个表单元素**

|标签|描述|
|:---|:---|
|[\<datalist>](https://www.w3cschool.cn/htmltags/tag-datalist.html)|用户会在他们输入数据时看到域定义选项的下拉列表|
|[\<progress>](https://www.w3cschool.cn/htmltags/tag-progress.html)|进度条，展示连接/下载进度|
|[\<meter>](https://www.w3cschool.cn/htmltags/tag-meter.html)|刻度值，用于某些计量，例如温度、重量等|
|[\<keygen>](https://www.w3cschool.cn/htmltags/tag-keygen.html)|提供一种验证用户的可靠方法生成一个公钥和私钥|
|[\<output>](https://www.w3cschool.cn/htmltags/tag-output.html)|用于不同类型的输出比如尖酸或脚本输出|

**html5新增表单属性**

|属性|描述|
|:---|:---|
|placehoder|输入框默认提示文字|
|required|要求输入的内容是否可为空|
|pattern|描述一个正则表达式验证输入的值|
|min/max|设置元素最小/最大值|
|step|为输入域规定合法的数字间隔|
|height/wdith|用于image类型\<input>标签图像高度/宽度|
|autofocus|规定在页面加载时，域自动获得焦点|
|multiple|规定\<input>元素中可选择多个值|

## 音频和视频

html5提供了音频和视频文件的标准，使用`<audio>`和`<video>`

**音频**：[\<audio>](https://www.w3cschool.cn/htmltags/tag-audio.html)

**实例**

```html
<audio controls>  <!-- controls属性提供添加播放、暂停和音量控件。 -->
  <source src="https://karoldy.github.io/ohyes-notes.github.io/public/audio/at-least-you.mp3" type="audio/mp3">
  浏览器不支持 audio 元素。
</audio>
```

<output>
	<audio controls>  <!-- controls属性提供添加播放、暂停和音量控件。 -->
    <source src="https://karoldy.github.io/ohyes-notes.github.io/public/audio/at-least-you.mp3" type="audio/mp3">
    浏览器不支持 audio 元素。
  </audio>
</output>

**视频**：[\<video>](https://www.w3cschool.cn/htmltags/tag-video.html)

**实例**

```html
<video width="320" height="240" controls>
  <source src="https://karoldy.github.io/ohyes-notes.github.io/public/video/at-least-you.mp4" type="video/mp4">
	浏览器不支持Video标签。
</video>
```

<output>
  <video width="320" height="240" controls src="https://karoldy.github.io/ohyes-notes.github.io/public/video/at-least-you.mp4">
    <source type="video/mp4">
    浏览器不支持Video标签。
  </video>
</output>

## Canvas绘图

`<canvas>` 是 HTML5 新增的，一个可以使用脚本(通常为 JavaScript) 在其中绘制图像的 HTML 元素。它可以用来制作照片集或者制作简单(也不是那么简单)的动画，甚至可以进行实时视频处理和渲染

它最初由苹果内部使用自己 MacOS X WebKit 推出，供应用程序使用像仪表盘的构件和 Safari 浏览器使用。后来，有人通过 Gecko 内核的浏览器 (尤其是 Mozilla和Firefox)，Opera 和 Chrome 和超文本网络应用技术工作组建议为下一代的网络技术使用该元素

Canvas 是由 HTML 代码配合高度和宽度属性而定义出的可绘制区域。JavaScript 代码可以访问该区域，类似于其他通用的二维 API，通过一套完整的绘图函数来动态生成图形

Mozilla 程序从 Gecko 1.8 (Firefox 1.5) 开始支持`<canvas>`, Internet Explorer 从 IE9 开始`<canvas>` 。Chrome 和 Opera 9+ 也支持`<canvas>`

## Svg绘图

**什么是svg?**

- svg指可伸缩矢量图形
- svg用于定义用于网络的基于矢量的图形
- svg使用XML格式定义图形
- svg图像在放大或改变尺寸的情况下其图形质量不会有损失
- svg是万维网联盟的标准

**svg的优势**

与其他图像格式相比，svg的优势在于：

- svg图像可通过文本编译器来创建和修改
- svg图像可被搜索、索引、脚本化或压缩
- svg是可伸缩的
- svg图像可在任何的分辨率下被高质量的打印
- svg可在图像质量不下降的情况下被放大

**svg与Canvas区别**

- svg适用于描述XML中的2D图形的语言
- Canvas随时随地绘制2D图形（使用javaScript）
- svg是基于XML的，意味这可以操作DOM，渲染速度较慢
- 在svg中每个形状都被当做是一个对象，如果svg发生改变，页面就会发生重绘
- Canvas是一像素一像素地渲染，如果改变某一个位置，整个画布会重绘。

|Canvas|SVG|
|:---|:---|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|能够以.png或.jpg格式保存结果图像|复杂度会减慢搞渲染速度|
|文字呈现功能比较简单|适合大型渲染区域的应用程序|
|最合适图像密集的游戏|不适合游戏应用|

## 地理地位

使用`getCurrentPosition()`方法来获取用户的位置。以实现"LBS服务"

```html
<script>
  var x=document.getElementById("demo");

  function getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML="Geolocation is not supported by this browser.";
    }
  }

  function showPosition (position) {
    x.innerHTML="Latitude: " + position.coords.latitude +
    "<br />Longitude: " + position.coords.longitude;
  }
</script>
```

## 拖放API

拖放是一种常见的特性，即捉取对象以后拖到另一个位置

在html5中，拖放是标准的一部分，任何元素都能够拖放

语法:

```html
<div draggable="true"></div>
```

|拖动生命周期|属性名|描述|
|:---|:---|:---|
|拖动开始|ondragstart|在拖动操作开始时执行脚本|
|拖动过程中|ondrag|只要脚本在被拖动就运行脚本|
|拖动过程中|ondragenter|当元素被拖动到一个合法的防止目标时，执行脚本|
|拖动过程中|ondragover|只要元素正在合法的防止目标上拖动时，就执行脚本|
|拖动过程中|ondragleave|当元素离开合法的防止目标时|
|拖动结束|ondrop|将被拖动元素放在目标元素内时运行脚本|
|拖动结束|ondragend|在拖动操作结束时运行脚本|

## Web Workers

Web Worker可以通过加载一个脚本文件，进而创建一个独立工作的线程，在主线程之外运行

基本使用：

Web Worker的基本原理就是在当前javascript的主线程中，使用Worker类加载一个javascript文件来开辟一个新的线程

起到互不阻塞执行的效果，并且提供主线程和新县城之间数据交换的接口：`postMessage`、`onmessage`

**html**

```html
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body></body>
<script type="text/javascript">
  //WEB页主线程

  //创建一个Worker对象并向它传递将在新线程中执行的脚本的	URL
  var worker =new Worker("worker.js");

  //向worker发送数据
  worker.postMessage("hello world");

 	//接收worker传过来的数据函数
  worker.onmessage =function(evt){
    //输出worker发送来的数据
		console.log(evt.data);
  }
</script>
</html>
```

**JavaScript**

```js
//worker.js
onmessage =function (evt) {
  //通过evt.data获得发送来的数据
  var d = evt.data;

  //将获取到的数据发送会主线程
  postMessage( d );
}
```

## Web Storage

WebStorage是HTML新增的本地存储解决方案之一，但并不是取代cookie而指定的标准，cookie作为HTTP协议的一部分用来处理客户端和服务器的通信是不可或缺的，session正式依赖与实现的客户端状态保持。WebSorage的意图在于解决本来不应该cookie做，却不得不用cookie的本地存储。

websorage拥有5M的存储容量，而cookie却只有4K，这是完全不能比的。

客户端存储数据有两个对象，其用法基本是一致。

localStorage：没有时间限制的数据存储

sessionStorage:在浏览器关闭的时候就会清除。

```js
//保存数据
localStorage.setItem(key,value);

//读取数据
let value = localStorage.getItem(key);

//删除单个数据
localStorage.removeItem(key);

//删除所有数据
localStorage.clear();

//得到某个索引的值
let key = localStorage.key(index);
```

## Web Socket

WebSocket协议为web应用程序客户端和服务端之间提供了一种全双工通信机制

**特点**

- 握手阶段采用HTTP协议，默认端口是80和443
- 建立在TCP协议基础之上，和http协议同属于应用层
- 可以发送文本，也可以发送二进制数据。
- 没有同源限制，客户端可以与任意服务器通信。
- 协议标识符是ws（如果加密，为wss），如ws://localhost:8023
