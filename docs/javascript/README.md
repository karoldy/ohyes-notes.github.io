```js
// ajax 学习
/**
 * browser 环境
 */
class Xhr {
  private instance: XMLHttpRequest | ActiveXObject

  constructor () {
    this.instance = this.init();

    if (!this.instance) {
      throw new Error('xhr is undefined');
    }
  }

  private init () {
    let xhr: XMLHttpRequest | ActiveXObject | null;

    if (window.XMLHttpRequest) {
      xhr = new window.XMLHttpRequest()
    } else if (window.ActiveXObject) {
      xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
    } else {
      xhr = null;
    }

    return xhr;
  }

  get () {
    return new Promise((resolve, reject) => {
      console.log('window get')
    })
  }

  post () {
    return new Promise((resolve, reject) => {
      console.log('window post');
    })
  }
}

/**
 * node 环境
 */
class Http {
  private instance: object | null

  constructor () {
    this.instance = require('https');

    if (!this.instance) {
      throw new Error('http is undefined');
    }
  }

  get () {
    return new Promise((resolve, reject) => {
      console.log('window get')
    })
  }

  post () {
    return new Promise((resolve, reject) => {
      console.log('window post');
    })
  }
}
```

# JavaScript类型在什么情况下会发生类型自动转换
```Plain Text
大家都知道 JavaScript 是弱类型语言，而且 JavaScript 声明变量的时候并没有预先确定的类型，变量的类型就是其值的类型，也就是说变量当前的类型由其值所决定,夸张点说上一秒种的String，下一秒可能就是个Number类型了，这个过程可能就进行了某些操作发生了强制类型转换。虽然弱类型的这种不需要预先确定类型的特性给我们带来了便利，同时也会给我们带来困扰，为了能充分利用该特性就必须掌握类型转换的原理。
```
#### **什么时候自动转换为string类型**
##### **1.在没有对象的前提下**
字符串的自动转换，主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串。

```javascript
'2' + 1 // '21' 
'2' + true // "2true" 
'2' + false // "2false" 
'2' + undefined // "2undefined" 
'2' + null // "2null"
```
##### **2.当有对象且与对象+时候**
```javascript
//toString的对象 
var obj2 = { 
 toString:function(){ 
 return 'a' 
 } 
} 
console.log('2'+obj2) 
//输出结果2a 
 
//常规对象 
var obj1 = { 
 a:1, 
 b:2 
} 
console.log('2'+obj1)； 
//输出结果 2[object Object] 
 
//几种特殊对象 
'2' + {} // "2[object Object]" 
'2' + [] // "2" 
'2' + function (){} // "2function (){}" 
'2' + ['koala', 1] // 2koala,1
```
string类型转换开发过程中可能出错的点：

```javascript
var obj = { 
 width: '100' 
}; 
 
obj.width + 20 // "10020"
```
#### **什么时候自动转换为Number类型**
##### **1.有加法运算符，但是无String类型的时候，都会优先转换为Number类型**
```javascript
true + 0 // 1 
true + true // 2 
true + false //1
```
##### **2.除了加法运算符，其他运算符都会把运算自动转成数值。**
```javascript
'5' - '2' // 3 
'5' * '2' // 10 
true - 1 // 0 
false - 1 // -1 
'1' - 1 // 0 
'5' * [] // 0 
false / '5' // 0 
'abc' - 1 // NaN 
null + 1 // 1 
undefined + 1 // NaN 
 
//一元运算符（注意点） 
+'abc' // NaN 
-'abc' // NaN 
+true // 1 
-false // 0

注意：null转为数值时为0，而undefined转为数值时为NaN。
```
#### **什么时候进行布尔转换**
##### **1.布尔比较时**
##### **2.if(obj) , while(obj)等判断时或者 三元运算符只能够包含布尔值**
条件部分的每个值都相当于false，使用否定运算符后，就变成了true

```javascript
if ( !undefined 
 && !null 
 && !0 
 && !NaN 
 && !'' 
) { 
 console.log('true'); 
} // true 
 
//下面两种情况也会转成布尔类型 
expression ? true : false 
!! expression
```
#### **JavaScript中的数据类型判断**
三种方式，分别为 typeof、instanceof 和Object.prototype.toString()

##### **1.typeof**
通过 typeof操作符来判断一个值属于哪种基本类型。

```javascript
typeof 'seymoe' // 'string' 
typeof true // 'boolean' 
typeof 10 // 'number' 
typeof Symbol() // 'symbol' 
typeof null // 'object' 无法判定是否为 null 
typeof undefined // 'undefined' 
 
typeof {} // 'object' 
typeof [] // 'object' 
typeof(() => {}) // 'function'
```
上面代码的输出结果可以看出，

1、null 的判定有误差，得到的结果 如果使用 typeof，null得到的结果是object

2、操作符对对象类型及其子类型，例如函数（可调用对象）、数组（有序索引对象）等进行判定，则除了函数都会得到 object 的结果。

综上可以看出typeOf对于判断类型还有一些不足，在对象的子类型和null情况下。

##### **2.instanceof**
通过 instanceof 操作符也可以对对象类型进行判定，其原理就是测试构造函数的prototype 是否出现在被检测对象的原型链上。

```javascript
[] instanceof Array // true 
({}) instanceof Object // true 
(()=>{}) instanceof Function // true
```
注意：instanceof 也不是万能的。 举个例子：

```javascript
let arr = [] 
let obj = {} 
arr instanceof Array // true 
arr instanceof Object // true 
obj instanceof Object // true
```
在这个例子中，arr 数组相当于 new Array() 出的一个实例，所以 arr.\_\_proto\_\_ === Array.prototype，又因为 Array属于 Object 子类型，即Array.prototype.\_\_proto\_\_ === Object.prototype，因此 Object 构造函数在 arr 的原型链上。所以 instanceof 仍然无法优雅的判断一个值到底属于数组还是普通对象。

##### **3.Object.prototype.toString() **
可以说是判定 JavaScript 中数据类型的终极解决方法了，具体用法请看以下代码：

```javascript
Object.prototype.toString.call({}) // '[object Object]' 
Object.prototype.toString.call([]) // '[object Array]' 
Object.prototype.toString.call(() => {}) // '[object Function]' 
Object.prototype.toString.call('seymoe') // '[object String]' 
Object.prototype.toString.call(1) // '[object Number]' 
Object.prototype.toString.call(true) // '[object Boolean]' 
Object.prototype.toString.call(Symbol()) // '[object Symbol]' 
Object.prototype.toString.call(null) // '[object Null]' 
Object.prototype.toString.call(undefined) // '[object Undefined]' 
 
Object.prototype.toString.call(new Date()) // '[object Date]' 
Object.prototype.toString.call(Math) // '[object Math]' 
Object.prototype.toString.call(new Set()) // '[object Set]' 
Object.prototype.toString.call(new WeakSet()) // '[object WeakSet]' 
Object.prototype.toString.call(new Map()) // '[object Map]' 
Object.prototype.toString.call(new WeakMap()) // '[object WeakMap]'
```
我们可以发现该方法在传入任何类型的值都能返回对应准确的对象类型。用法虽简单明了，但其中有几个点需要理解清楚：

1、该方法本质就是依托Object.prototype.toString()方法得到对象内部属性 \[\[Class\]\]

2、传入原始类型却能够判定出结果是因为对值进行了包装

3、null 和 undefined 能够输出结果是内部实现有做处理