# 03.JavaScript面试题
#### 基础题
##### 1.ECMAScript与JavaScript的关系
---
##### Js基本数据类型有哪些
---
##### 如何判断一个数据是NaN
---
##### 闭包是什么？有什么特性？对页面会有什么影响
---
##### Js中常见的内存泄漏：
---
##### 事件委托是什么？如何确定事件源（Event.target 谁调用谁就是事件源）
---
##### 什么是事件冒泡？
---
##### 本地存储与cookie的区别
---
##### ES6新特性
---
##### Let与var与const的区别
---
##### 数组方法有哪些请简述
---
##### 请掌握2种以上数组去重的方式
---
##### 什么是面向对象请简述
---
##### 普通函数和构造函数的区别
---
##### 请简述原型 / 原型链 /（原型）继承
---
##### Promise的理解
---
##### 请简述async的用法
---
##### 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
---
##### Js中.call()与.apply()区别
---
##### 为什么会造成跨域/请简述同源策略
---
##### This指向
---
##### 什么是jsonp工作原理是什么？他为什么不是真正的ajax
---
##### 请写出一个简单的类与继承
---
##### 同步与异步的区别/阻塞与非阻塞区别
---
##### 为什么js是弱类型语言
---
##### 箭头函数与普通函数的区别
---
##### For循环与map循环有什么区别
---
##### 原型和继承，prototype，call和apply继承的区别
---
##### 深浅拷贝是什么如何实现？
---
##### 什么时候用深拷贝 /浅拷贝
---
##### 什么是js内存泄露？
---
##### 什么是csrf攻击
---
##### 预加载和懒加载的区别，预加载在什么时间加载合适
---
##### Js的函数节流和函数防抖的区别
---
##### 如何理解执行上下文
---
##### 如何理解作用域链
---
##### 解释JavaScript中的作用域
---
##### 解释JavaScript变量声明提升
---
##### 如何理解原型链
---
##### 简述闭包，有什么好处
```javascript
闭包的实质是因为函数嵌套而形成的作用域

闭包的定义即：函数A内部有一个函数B，函数B可以访问到函数A中的变量，那么函数B就是闭包

使用闭包主要是为了设计私有的方法和变量。

闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存的使用量，使用不当很容易造成内存泄露

闭包有三个特性：
1.函数嵌套函数
2.函数内部可以引用外部的参数和变量
3.参数和变量不会被垃圾回收机制回收
```
---
##### 继承有哪些方法
---
##### 类的定义和继承的几种方式
---
##### JavaScript创建对象的几种方式
---
##### 谈谈this对象的理解
---
##### null,undefined的区别
---
##### 什么是深/浅拷贝，有哪些实现方式
---
##### 如何准确判断一个对象是数组
---
##### 数组有哪些常用方法
---
##### call/apply/bind的作用和区别
---
##### 观察者模式和发布订阅者区别
---
##### JavaScript事件循环
```javascript
首先我们先理清楚几个概念

队列(Queue):
队列是一种FIFO(先进先出)的数据结构

栈(Stack):
栈是一种LIFO(后进先出)的数据结构

调用栈(call Stack): 
本质上还是一个栈，里面是一个个待执行的函数

事件表格(Event Table)
可以理解成一张 事件对应回调函数的对应表

事件队列(Event Queue)
简单理解就是回调函数队列，所以也可以叫Callback Queue

作业队列(Job Queue)
它保存准备执行的Promise的回调

JavaScript的事件分为两种，宏任务和微任务

* 宏任务: 包括整体代码，定时器
* 微任务: Promise.then, process.nextTick(node.js中)

注： 事件循环永久监听调用堆栈是否为空。如果调用堆栈为空，则事件循环查看作业队列或任务队列，并将准备执行的任何回调分派到调用堆栈中

事件的执行顺序是先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table注册函数，异步事件完成后，会将回调函数放入到事件队列或者作业队列(Promise的回调)中，事件循环永久监听调用堆栈是否为空。如果调用堆栈为空，则事件循环查看作业队列或任务队列，并将准备执行的任何回调分派到调用堆栈中
```
---
##### JavaScript有几种类型的值
---
##### new操作符具体做了什么
---
##### 说一下事件代理(事件委托)
---
##### 阻止事件冒泡和默认行为
---
##### Ajax是什么，如何创建一个Ajax
---
##### JavaScript对象生命周期的理解
---
##### JavaScript的节流和防抖
---
##### JavaScript模块化
---
##### 事件模型
---
##### JS里垃圾回收机制是什么，常用的是哪种，怎么处理的？
---
##### 请解释一下JavaScript的同源策略
---
##### typeof运算符和instanceof运算符以及isPrototypeOf()方法的区别
---
##### Object.is()与原来的比较操作符'==='、'=='的区别
---
##### JavaScript里argumnents究竟是什么
---
##### 什么是虚拟DOM
---
##### typeof null输出什么
---
##### js的引用传递
---
##### js的本地存储
---
##### \['1', '2', '3'\].map(parseInt)的答案是多少
---
##### a++和++a的区别
---
##### 说一下继承的几种方法方式及优缺点
---
##### jsonp的原理和实现
---
##### 说一下宏任务和微任务
---
##### Object.assign和拓展运算法是深拷贝还是浅拷贝，两个区别
---






#### BOM(浏览器对象)
##### 1.window.onload事件
---
##### addEventListener()和attachEvent()的区别
---
##### src和href的区别
---
##### 请阐述页面如果出现以下代码，浏览器与服务器之间通讯会引起什么问题？
---


---






#### DOM(文档对象)
##### 1.document.load 和document.ready的区别
---
##### document.wirte和innerHTML的区别
---
##### 怎么添加、移除、移动、复制、创建和查找节点
---
##### 遍历A节点的父节点下的所有子节点
---
##### target、currentTarget的区别
---


---




### ES6
##### 1.var，let，const的区别
---
##### 2.介绍下Set、Map的区别
```Plain Text
区别：
应用场景 Set 用于数据重组，Map 用于数据储存
```
```Plain Text
Set：
成员不能重复
只有键值没有键名，类似数组
可以遍历，方法有 add, delete, has

Map:
本质上是健值对的集合，类似集合
可以遍历，可以跟各种数据格式转换
```
---
箭头函数与普通函数的区别

---
如果new一个箭头函数会怎么样

---
ES6的模板字符串有哪些新特性，并实现一个类模板字符串的功能

---
使用结构赋值，实现两个变量的值的交换

---
什么是Promise对象？什么是Promise/A+规范

---


async函数是什么，有什么作用

---
for...of的理解

---
setTimeout、Promise、Async/Await的区别

---
为什么Promise的回调执行比定时器的回调执行快(需要自己画图理解)

---
关于async/await、promise和setTimeout执行顺序

---
ECMAScript6怎么写class，为何会出现class

---
说一下es6的导入导出模块

---
