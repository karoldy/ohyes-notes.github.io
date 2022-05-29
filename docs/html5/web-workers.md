[首页](/) / [html5](/html5/) / [Web Workers](/html5/web-workers)

# Web Worker

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
