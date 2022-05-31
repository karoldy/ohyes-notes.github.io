[首页](/) / [html5](/html5/) / [Web Storage](/html5/web-storage)

# Web Storage

Web Storage API 提供机制， 使浏览器能以一种比使用Cookie更直观的方式存储键/值对

WebStorage是HTML新增的本地存储解决方案之一，但并不是取代cookie而指定的标准，cookie作为HTTP协议的一部分用来处理客户端和服务器的通信是不可或缺的，session正式依赖与实现的客户端状态保持。WebSorage的意图在于解决本来不应该cookie做，却不得不用cookie的本地存储

websorage拥有5M的存储容量，而cookie却只有4K，这是完全不能比的

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）

- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在

!> 这两种机制是通过 Window.sessionStorage 和 Window.localStorage 属性使用（更确切的说，在支持的浏览器中 Window 对象实现了 WindowLocalStorage 和 WindowSessionStorage 对象并挂在其 localStorage 和 sessionStorage 属性下）—— 调用其中任一对象会创建 Storage 对象，通过 Storage 对象，可以设置、获取和移除数据项。对于每个源（origin）sessionStorage 和 localStorage 使用不同的 Storage 对象——独立运行和控制

## Storage

作为 Web Storage API 的接口，Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。

如果你想要操作一个域名的会话存储，可以使用 Window.sessionStorage；如果想要操作一个域名的本地存储，可以使用 Window.localStorage

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|length|Number|Y|返回一个整数，表示存储在 Storage 对象中的数据项数量|

### 方法

#### `Storage.key()`

key() 作为 Storage 接口的方法，接受一个数值 n 作为参数，返回存储对象第 n 个数据项的键名。键的存储顺序是由用户代理定义的，所以尽可能不要依赖这个方法，返回值 String

**语法**

```js
key(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Number|Y|一个整数，表示要获取的键名索引|

---

#### `Storage.setItem()`

Storage 接口的 setItem() 方法，接受一个键名和值作为参数，将会把键名添加到给定的 Storage 对象中，如果键名已存在，则更新其对应的值，返回值 undefined

**语法**

```js
setItem(keyName, keyValue);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|keyName|String|Y|表示要创建或更新的键名|
|keyValue|String|Y|表示要创建或更新的键名对应的值|

---

#### `Storage.getItem()`

getItem() 作为 Storage 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value），返回值 String，键名对应的值

**语法**

```js
getItem(keyName);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|keyName|String|Y|表示要创建或更新的键名|

---

#### `Storage.removeItem()`

Storage 接口的 removeItem() 方法，接受一个键名作为参数，会从给定的Storage对象中删除该键名（如果存在）。 如果没有与该给定键名匹配的项，则此方法将不执行任何操作，返回值 None(undefined)

**语法**

```js
removeItem(keyName);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|keyName|String|Y|表示要删除的键名|

#### `Storage.clear()`

clear() 是 Storage 接口的一个方法，调用它可以清空存储对象里所有的键值，返回值 None(undefined)

**语法**

```js
clear();
```
