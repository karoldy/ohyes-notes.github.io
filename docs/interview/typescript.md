# 05.TypeScript面试题
```javascript
typescript练习题

https://blog.csdn.net/azl397985856/article/details/108860421
```
##### 1.简述TypeScript数据类型
---
##### interface和type的区别
---
##### 列出TypeScript的优点
---
##### TypeScript的缺点
---
##### TypeScript的不同组件是什么
---
##### TypeScript中的内置类型(原始数据类型)
---
##### TypeScript的接口是什么
---
##### 什么是TypeScript Declare关键字
---
##### 请描述TypeScript中泛型及使用场景？或者使用代码实现进行阐述。
---
##### TypeScript属性指针问题
```javascript
其实这题考察的就是JavaScript的数据类型引用问题，因为TypeScript是JavaScript的超集

* 栈：原始数据类型(undefined, null, boolean, number, string)
* 堆：引用数据类型(对象，数组，函数)

两种类型的区别是：存储位置不同：
1.原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
2.引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体
```
---
