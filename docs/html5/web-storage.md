[首页](/) / [html5](/html5/) / [Web Storage](/html5/web-storage)

# 本地储存

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
