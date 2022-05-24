#### 基础题
##### Vue的核心是什么
```javascript
Vue的核心思想为数据驱动和组件化
```
---
##### 简述对Vue的理解
---
##### 简述Vue的单向数据流
```javascript
数据从父级组件传递给子组件，只能单向绑定。

子组件内部不能直接修改从父级传递过来的数据。
```
---
##### Vue常用的修饰符有哪些
* `.stop` - 调用 `event.stopPropagation()`。
* `.prevent` - 调用 `event.preventDefault()`。
* `.capture` - 添加事件侦听器时使用 capture 模式。
* `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
* `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
* `.native` - 监听组件根元素的原生事件。
* `.once` - 只触发一次回调。
* `.left` - (2.2.0) 只当点击鼠标左键时触发。
* `.right` - (2.2.0) 只当点击鼠标右键时触发。
* `.middle` - (2.2.0) 只当点击鼠标中键时触发。
* `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

---
##### v-text与{{}}与v-html区别
```javascript
v-text和{{}}表达式渲染数据，不解析标签。
v-html不仅可以渲染数据，而且可以解析标签。　
```
---
##### v-on可以绑定多个方法吗
```javascript
可以

如果需要绑定多个事件，可以以键值对的形式
v-on="{click: fn1, mouseover: fn2}";

如果绑定的是多个相同事件，直接以逗号分隔即可
@click="fn1(), fn2()"
```
---
##### Vue循环的key作用
```javascript
作用：用唯一标识标记每一个节点，可以高效渲染虚拟DOM树。
```
---
##### 什么是计算属性
```javascript
计算属性：可以理解为能够在里面写一些计算逻辑的属性。
作用：
1）减少模板中的计算逻辑
2）数据缓存。当我们的数据没有变化时，不在执行计算的过程
3）依赖固定的数据类型（响应式数据），不能是普通的传入的一个全局数据
```
---
##### Vue单页面的优缺点
```javascript
1.概念
　　　就是只有一张Web页面的应用。单页应用程序 (SPA) 是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。浏览器一开始会加载必需的HTML、CSS和JavaScript，所有的操作都在这张页面上完成，都由JavaScript来控制。因此，对单页应用来说模块化的开发和设计显得相当重要。

2.优点
　　1、提供了更加吸引人的用户体验：具有桌面应用的即时性、网站的可移植性和可访问性。
　　2、单页应用的内容的改变不需要重新加载整个页面，web应用更具响应性和更令人着迷。
　　3、单页应用没有页面之间的切换，就不会出现“白屏现象”,也不会出现假死并有“闪烁”现象
　　4、单页应用相对服务器压力小，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍。
　　5、良好的前后端分离。后端不再负责模板渲染、输出页面工作，后端API通用化，即同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端

3.缺点
　　1、首次加载耗时比较多。
　　2、SEO问题，不利于百度，360等搜索引擎收录。
　　3、容易造成Css命名冲突。
　　4、前进、后退、地址栏、书签等，都需要程序进行管理，页面的复杂度很高，需要一定的技能水平和开发成本高。
```
---
##### Vue生命周期
**创建前/后 beforeCreate/created**

```javascript
beforeCreate()
在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。

created()
在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 $el property 目前尚不可用。
```
**挂载前/后 beforeMount/mounted**

```javascript
beforeMount()
在挂载之前被调用：相关的render函数首次被调用

mounted()
实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。

注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick：
```
**更新前/后 beforeUpdate/updated**

```javascript
beforeUpdate()
在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。

updated()
在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

注意，updated 不会保证所有的子组件也都被重新渲染完毕。如果你希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick：
```
**卸载前/后 beforeDestory/destoryed**

```javascript
beforeDestory()
实例销毁之前调用。在这一步，实例仍然完全可用。

destoryed()
实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
```
---
##### DOM渲染在哪个生命周期阶段完成
```javascript
mounted()
```
---
##### Vue数据绑定的几种方式
```javascript
1、使用双大括号{{}}，数值插入法：将data方法中定义的数据绑定到模板html中，vue中，data中的数据，定义的是响应式数据，当data中的数据发生改变时，html模板中的数据即发生改变；

2、v-bind：将data方法中的数据绑定到html模板中，该方法是数据的单向流动，将data方法中的响应数据定义到html模板中的前置标签，或者直接将一个常量值传入到该标签，多用于父子组件传参；

3、v-model：将data方法中的数据绑定到html模板中，该方法是数据的双向绑定，将data方法中的相应数据绑定到html中的同时，html模板中的数据改变时，data中的数据也会发生改变；

注:v-bind和v-model存在于前置标签中，数据显示的优先级高于{{}}
```
---
##### Vue注册一个全局组件
```javascript
Vue.component('组件名', 组件实例)
```
---
##### Vue中指令有哪些
```html
v-text
v-html
v-show
v-if：
v-else
v-else-if
v-for
v-on
v-bind
v-modle
v-slot
v-pre
v-clock
v-once
```
---
##### MVVM与MVC的区别
---
##### Vue双向绑定的原理
访问器属性是对象中的一种特殊属性，它不能直接在对象中设置，而必须通过 defineProperty() 方法单独定义。

```javascript
var obj = { };

// 为obj定义一个名为 hello 的访问器属性

Object.defineProperty(obj, "hello", {
  get: function () {return sth},

  set: function (val) {/* do sth */}
})

obj.hello // 可以像普通属性一样读取访问器属性

访问器属性的"值"比较特殊，读取或设置访问器属性的值，实际上是调用其内部特性：get和set函数。

obj.hello // 读取属性，就是调用get函数并返回get函数的返回值

obj.hello = "abc" // 为属性赋值，就是调用set函数，赋值其实是传参 
```
 get 和 set 方法内部的 this 都指向 obj，这意味着 get 和 set 函数可以操作对象内部的值。另外，访问器属性的会"覆盖"同名的普通属性，因为访问器属性会被优先访问，与其同名的普通属性则会被忽略。

---
##### Vue中组件怎么传值
**父组件向子组件通信**

```javascript
通过props来传值
```
**子组件向父组件通信**

```javascript
1. 子组件
<button @click="changeParentName">改变父组件的name</button>
export default {
  methods: {
  //子组件的事件
    changeParentName: function () {
      this.$emit('handleChange', 'Jack')
    }
  }
}

2. 父组件
<child @handleChange="changeName"></child>
export default {
  methods: {
    changeName(name) {  
      this.name = name
    }
  }
}
```
**兄弟组件之间传值**

```javascript
bus.js
```
---
##### 简述Watch
```javascript
一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
```
---
##### 计算属性(computed)与Watch的与别
```javascript
watch是监听，数据或者路由发生了改变才可以响应（执行）

computed计算某一个属性的改变，如果某一个值改变了，计算属性会监听到进行返回

watch是当前监听到数据改变了，才会执行内部代码
```
---
##### MVVM框架是什么，它和其他框架(JQuery)的区别是什么，哪些场景适合
---
##### Vue首屏加载慢的原因，怎么解决的，怎么解决白屏问题
---
##### Vue双数据绑定过程中，数据改变了怎么通知
```javascript
实现vue的双向绑定，是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。就必须要实现以下几点：

1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者

2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数

3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

```
---
##### v-for与v-if优先级
```javascript
v-for的优先级要比v-if高
***是在源码中体现的：function genElement
```
---
##### v-if和v-show区别
```javascript
1. 展示形式不同
v-if是 创建一个dom节点
v-show 是display:none 、 block

2. 使用场景不同
初次加载v-if要比v-show好，页面不会做加载盒子
频繁切换v-show要比v-if好，创建和删除的开销太大了，显示和隐藏开销较小
```
---




#### Vuex面试题
##### Vuex是什么，怎么使用，在哪种场景下使用
---
##### Vuex流程
---
##### Vuex怎么请求异步数据
---
##### Vuex中action如何提交给mutation的
---
##### Vuex的State特性是
---
##### Vuex的Getter特性是
---
##### Vuex的mutation特性是
---
##### Vuex的actions特性是
---
##### Vuex的优势是？
---






#### Vue路由面试题
##### Vue中路由跳转方式(声明式/编程式)
---
##### 路由中name属性有什么作用
---
##### Vue路由的实现
---
##### Vue路由模式hash和history
---
##### Vue路由传参的两种方式，params和query方式与区别
---
##### Vue的路由钩子函数/路由守卫有哪些
---
##### Vue中如何进行动态路由设置，有哪些方式，怎么获取传递过来的数据
---
##### Route与router区别
---
