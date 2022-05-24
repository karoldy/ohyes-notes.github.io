# 07.React面试题
##### React事件处理-修改this指向
---
##### 简述对React的理解
---
##### React组件之间的数据传递
---
##### 简述虚拟dom与diff算法
---
##### 调用setState之后发生了什么
---
##### React生命周期函数
**挂载阶段**

```javascript
1.constructor()

2.static getDerivedStateFromProps(nextProps, prevState);
这个方法如果return null则不执行setState

render()

componentDidMount()
dom已经插入页面中
这个周期一般可以执行一些副作用，例如Ajax请求，监听事件等
```
**更新阶段**

```javascript
static getDerivedStateFromProps(nextProps, prevState)

shouldComponentUpdate(nextProps, nextState)
如果return false 则不会触发render

render()

static getSnapshotBeforeUpdate(prevProps, prevState)
在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。

componentDidUpdate(prevProps, prevState, snapshot)
会在更新后会被立即调用。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。
```
**卸载阶段**

```javascript
componentWillUnmount()
componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
```
---
##### shouldComponentUpdate是做什么的
```javascript
根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。

当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。

此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。

如果你一定要手动编写此函数，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。

我们不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。
```
---
##### React diff原理
---
##### 何为受控组件
---
##### 调用super(props)的目的是什么
---
##### React中构建组件的方式
---
##### Vue与React区别
---
##### 什么legacy模式
---
##### Ref的使用
```javascript
问题
React17 中对 Ref 的正确使用方式有哪些？

选项
A. React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。

B. 此版本仅支持 React.createRef() 和回调函数两种获取 ref 对象方式。

C. ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。

D. 自定义组件支持通过传参 ref 属性绑定 Ref 对象。

答案：A,C

纠错
B.此版本常用的Refs创建方式有React.createRef() 、回调函数 、useRef()，且还有其他方式。

D.自定义组件支持通过传参 ref 属性至 class 组件绑定 Ref 对象，而函数组件需要使用 React.forwardRef() 方式。
```
解答：

典型的 React 数据流中，props 是父组件与子组件交互的方式。而 React 提供了一种 Refs 方式，允许我们访问 React 子组件的实例，或者 DOM 元素。

```javascript
class MyComponent extends React.Component {
  myRef = React.createRef();
  render() {
    return <div ref={this.myRef} />;
  }
}
```
```Plain Text
使用 Refs 的时机

* 管理焦点，文本选择或媒体播放。
* 触发强制动画。
* 集成第三方 DOM 库。

反面使用方式：避免使用 refs 来做任何可以通过声明式实现来完成的事情。举个例子，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。
```
```Plain Text
绑定 Ref 的方式

1.创建 React.createRef() 对象，绑定到 React 元素上。
2.通过回调 Refs 方式，在完成渲染后获取目标 DOM。
3.在函数组件中使用 useRef() 方法，创建 ref 对象后传入元素。
4.在 class 组件中给 React 元素的 ref 属性传入字符串值，通过 this.refs[name] 获取 DOM 元素。

注意：上面的所有方式，如果是给组件传 ref 属性，则需要对此组件进行 Refs 转发至具体的 HTML 元素。
```
**回调 Refs 用于组件时**

因常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。因此回调 Refs 仅用于 HTML DOM 元素，如果给组件传函数 Refs 应通过 props 透传。

例如下面的方式：

```javascript
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
```
```Plain Text
回调 Refs 的参数

回调函数方式的执行时机为：
  * 如果组件发生更新渲染前，会先清空旧的 ref 此时回调函数的参数为 null；
  * 组件渲染后执行回调函数，此时传入参数为 DOM 元素；
```
---
##### 组件的constructor
```javascript
问题
React17生命周期构造函数constructor理解正确的是？

选项
A 仅在需要初始化 state ，或者方法绑定时声明 constructor。

B 在 React 组件挂载之前，会调用它的构造函数。

C 在 constructor() 函数中可以调用 setState() 方法，也可以直接给 this.state 赋值；

D 要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。

答案：A,B,D
```
```javascript
解答:
2022年前端React的100道面试题的第7题：组件的constructor
原创2021-11-29 08:02·nachao
问题
React17生命周期构造函数constructor理解正确的是？



选项
A 仅在需要初始化 state ，或者方法绑定时声明 constructor。

B 在 React 组件挂载之前，会调用它的构造函数。

C 在 constructor() 函数中可以调用 setState() 方法，也可以直接给 this.state 赋值；

D 要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。



答案
A、B、D

解答：
如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。通常，在 React 中，构造函数仅用于以下两种情况：
1.通过给 this.state 赋值对象来初始化内部 state。
2.为事件处理函数绑定实例。
```
**constructor不是必填**

```javascript
React 中通过继承的方式定义 class 组件时，可以缺省 constructor 构造函数，由 ES6 的继承规则得知，不管子类写不写 constructor，在 new 实例的过程都会给补上 constructor。
```
**super是必须调用的**

可以不写constructor，一旦写了constructor，就必须在此函数中写super()，否则会报错：

```javascript
class Example extends React.Component {
  constructor() {}
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
此时组件才有自己的this，在组件的全局中都可以使用this关键字，否则如果只是constructor 而不执行 super() 那么以后的this都是错的

**不要在组件构造函数中调用 setState() 方法**

如果需要修改 state，直接在构造函数中为this.state 赋值初始即可。

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.setState({ name: "React" })
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/**
会报如下警告：
Warning: Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to this.state directly or define a state = {}; class property with the desired state in the %s component.%s" "setState" "Welcome"
*/
```
**避免派生状态(**某个state是由prop派生出来的**)**

避免将 props 的值复制给 state，你可以直接使用 this.props.color。除非你是想编写 ”非受控组件“，那么此 color 属性仅做默认值使用，因此建议在 props.color 命名上优化为 ”initialColor“ 或 ”defaultColor“

```javascript
constructor(props) {
    super(props);
    this.state = { color: props.initialColor };
}
```
---
##### setState是异步还是同步
```Plain Text
1. 合成事件中是异步
2. 钩子函数中的是异步
3. 原生事件中是同步
4. setTimeout中是同步
```
---
##### useEffect(fn, \[\]) 和 componentDidMount 有什么差异？
```Plain Text
在React渲染(render)阶段，渲染器又分了三个子阶段来处理；
* beforeMutation阶段（渲染视图前）
* mutation阶段（渲染试图）
* layout阶段（渲染视图后）

渲染器会在mutation阶段完成后，在layout阶段同步的调用useLayoutEffect，在子组件嵌套中也是如此。在类组件中，调用的是componentDidmount生命周期函数。也就是说，在useLayoutEffect中，无论是否重新触发setState，也不会在当前渲染里，重新更新界面

而在整个渲染阶段(其实也叫commit)渲染完成后，react才会异步的执行useEffect。当在useEffect中如果有setState，则会重新触发渲染器，更新界面。

结论:
useLayoutEffect的是在渲染器执行当前渲染界面任务时，同步执行。

在当前一轮的Reconciler任务调度过程中，在渲染器执行完当前任务后，才会异步调用useEffect。

useLayoutEffect先于useEffect执行，并且子组件优先执行。

componentDidMount()完全等价于useLayoutEffect( fn , [ ] )，但是不等价于useEffect( fn , [ ] )。
```
---
##### hooks 为什么不能放在条件判断里？
以 `useState` 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 `memoizeState` 属性中：

update 阶段，每次调用 `useState`，链表就会执行 next 向后移动一步。如果将 `useState` 写在条件判断中，假设条件判断不成立，没有执行里面的 `useState` 方法，会导致接下来所有的 `useState` 的取值出现偏移，从而导致异常发生。

---
##### fiber 是什么？
**React Fiber 是一种基于浏览器的单线程调度算法。**

React Fiber 用类似 `requestIdleCallback` 的机制来做异步 diff。但是之前数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能做到异步可更新了。

---
##### 聊一聊 diff 算法
```Plain Text
传统 diff 算法的时间复杂度是 O(n^3)，这在前端 render 中是不可接受的。为了降低时间复杂度，react 的 diff 算法做了一些妥协，放弃了最优解，最终将时间复杂度降低到了 O(n)。
那么 react diff 算法做了哪些妥协呢？，参考如下：

1、tree diff：只对比同一层的 dom 节点，忽略 dom 节点的跨层级移动

2、component diff：如果不是同一类型的组件，会删除旧的组件，创建新的组件

3、element diff：对于同一层级的一组子节点，需要通过唯一 id 进行来区分

如果没有 id 来进行区分，一旦有插入动作，会导致插入位置之后的列表全部重新渲染。
这也是为什么渲染列表时为什么要使用唯一的 key。
```
---
##### 调用 setState 之后发生了什么？
```Plain Text
在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。

然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树， Fiber 算法的最大特点是可以做到异步可中断的执行。

然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法。

在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag。

当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程。

当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段。

在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素。
```
---
##### 为什么虚拟dom 会提高性能?
虚拟dom 相当于在 JS 和真实 dom 中间加了一个缓存，利用 diff 算法避免了没有必要的 dom 操作，从而提高性能。

---
##### 错误边界是什么？它有什么用？
在 React 中，如果任何一个组件发生错误，它将破坏整个组件树，导致整页白屏。这时候我们可以用错误边界优雅地降级处理这些错误。

```javascript
class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
    console.log('组件奔溃 Error', error);
    console.log('组件奔溃 Info', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return this.props.content;
    }
    return this.props.children;
  }
}
```
---
##### 什么是 Portals？
Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```javascript
ReactDOM.createPortal(child, container)
```
---
##### React 组件间有那些通信方式?
**父组件向子组件通信**

```javascript
通过props
```
**子组件向父组件通信**

```javascript
主动调用通过 props 传过来的方法，并将想要传递的信息，作为参数，传递到父组件的作用域中
```
**跨层级通信**

使用 react 自带的 `Context` 进行通信，`createContext` 创建上下文， `useContext` 使用上下文。

```javascript
import React, { createContext, useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
```
2、使用 Redux 或者 Mobx 等状态管理库

3、使用订阅发布模式

---
##### React 父组件如何调用子组件中的方法？
1、如果是在方法组件中调用子组件（`>= react@16.8`），可以使用 `useRef` 和 `useImperativeHandle`:

```javascript
const { forwardRef, useRef, useImperativeHandle } = React;

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));
  return <h1>Hi</h1>;
});

const Parent = () => {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};
```
2、如果是在类组件中调用子组件（`>= react@16.4`），可以使用 `createRef`:

```javascript
const { Component } = React;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child extends Component {
  getAlert() {
    alert('getAlert from Child');
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```
---
##### React有哪些优化性能的手段?
**类组件中的优化手段**

```javascript
1、使用纯组件 PureComponent 作为基类。

2、使用 React.memo 高阶函数包装组件。

3、使用 shouldComponentUpdate 生命周期函数来自定义渲染逻辑。
```
**方法组件中的优化手段**

```javascript
1、使用 useMemo。

2、使用 useCallBack。
```
**其他方式**

1、在列表需要频繁变动时，使用唯一 id 作为 key，而不是数组下标。

2、必要时通过改变 CSS 样式隐藏显示组件，而不是通过条件判断显示隐藏组件。

3、使用 `Suspense` 和 `lazy` 进行懒加载，例如：

```javascript
import React, { lazy, Suspense } from "react";

export default class CallingLazyComponents extends React.Component {
  render() {
    var ComponentToLazyLoad = null;

    if (this.props.name == "Mayank") {
      ComponentToLazyLoad = lazy(() => import("./mayankComponent"));
    } else if (this.props.name == "Anshul") {
      ComponentToLazyLoad = lazy(() => import("./anshulComponent"));
    }

    return (
      <div>
        <h1>This is the Base User: {this.state.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentToLazyLoad />
        </Suspense>
      </div>
    )
  }
}
```
---
##### 为什么 React 元素有一个 \$\$typeof 属性？
目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有 \$\$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

如果没有 \$\$typeof 这个属性，react 会拒绝处理该元素。

在 React 的古老版本中，下面的写法会出现 XSS 攻击：

```javascript
// 服务端允许用户存储 JSON
let expectedTextButGotJSON = {
  type: 'div',
  props: {
    dangerouslySetInnerHTML: {
      __html: '/* 把你想的搁着 */'
    },
  },
  // ...
};
let message = { text: expectedTextButGotJSON };

// React 0.13 中有风险
<p>
  {message.text}
</p>
```
---
##### React 如何区分 Class组件 和 Function组件？
一般的方式是借助 typeof 和 Function.prototype.toString 来判断当前是不是 class，如下：

```javascript
function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}
```
但是这个方式有它的局限性，因为如果用了 babel 等转换工具，将 class 写法全部转为 function 写法，上面的判断就会失效。

React 区分 Class组件 和 Function组件的方式很巧妙，由于所有的类组件都要继承 React.Component，所以只要判断原型链上是否有 React.Component 就可以了：

```javascript
AComponent.prototype instanceof React.Component
```
---
##### HTML 和 React 事件处理有什么区别?
在 HTML 中事件名必须小写：

```javascript
<button onclick='activateLasers()'>
```
而在 React 中需要遵循驼峰写法：

```javascript
<button onClick={activateLasers}>
```
在 HTML 中可以返回 false 以阻止默认的行为：

```javascript
<a href='#' onclick='console.log("The link was clicked."); return false;' />
```
而在 React 中必须地明确地调用 `preventDefault()`：

```javascript
function handleClick(event) {
  event.preventDefault()
  console.log('The link was clicked.')
}
```
---
##### 什么是 suspense 组件?
Suspense 让组件“等待”某个异步操作，直到该异步操作结束即可渲染。在下面例子中，两个组件都会等待异步 API 的返回值：

```javascript
const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // 尝试读取用户信息，尽管该数据可能尚未加载
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // 尝试读取博文信息，尽管该部分数据可能尚未加载
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
```
Suspense 也可以用于懒加载，参考下面的代码：

```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
---
##### 为什么 JSX 中的组件名要以大写字母开头？
```javascript
因为 React 要知道当前渲染的是组件还是 HTML 元素。
```
---
##### redux 是什么？
```javascript
Redux 是一个为 JavaScript 应用设计的，可预测的状态容器。

它解决了如下问题：

* 跨层级组件之间的数据传递变得很容易
* 所有对状态的改变都需要 dispatch，使得整个数据的改变可追踪，方便排查问题。

但是它也有缺点：

* 概念偏多，理解起来不容易
* 样板代码太多

```
---
##### react-redux 的实现原理？
```javascript
通过 redux 和 react context 配合使用，并借助高阶函数，实现了 react-redux。
```
---
##### reudx 和 mobx 的区别？
```javascript
得益于 Mobx 的 observable，使用 mobx 可以做到精准更新；对应的 Redux 是用 dispath 进行广播，通过Provider 和 connect 来比对前后差别控制更新粒度；
```
---
##### redux 异步中间件有什么什么作用?
假如有这样一个需求：**请求数据前要向 Store dispatch 一个 loading 状态，并带上一些信息；请求结束后再向Store dispatch 一个 loaded 状态**

一些同学可能会这样做：

```javascript
function App() {
  const onClick = () => {
    dispatch({ type: 'LOADING', message: 'data is loading' })
    fetch('dataurl').then(() => {
      dispatch({ type: 'LOADED' })
    });
  }

  return (<div>
    <button onClick={onClick}>click</button>
  </div>);
}
```
但是如果有非常多的地方用到这块逻辑，那应该怎么办？

聪明的同学会想到可以将 onClick 里的逻辑抽象出来复用，如下：

```javascript
function fetchData(message: string) {
  return (dispatch) => {
    dispatch({ type: 'LOADING', message })
    setTimeout(() => {
      dispatch({ type: 'LOADED' })
    }, 1000)
  }
}

function App() {
  const onClick = () => {
    fetchData('data is loading')(dispatch)
  }

  return (<div>
    <button onClick={onClick}>click</button>
  </div>);
}
```
很好，但是 `fetchData('data is loading')(dispatch)` 这种写法有点奇怪，会增加开发者的心智负担。

于是可以借助 rudux 相关的异步中间件，以 `rudux-chunk` 为例，将写法改为如下：

```javascript
function fetchData(message: string) {
  return (dispatch) => {
    dispatch({ type: 'LOADING', message })
    setTimeout(() => {
      dispatch({ type: 'LOADED' })
    }, 1000)
  }
}

function App() {
  const onClick = () => {
-   fetchData('data is loading')(dispatch)
+   dispatch(fetchData('data is loading'))
  }

  return (<div>
    <button onClick={onClick}>click</button>
  </div>);
}

这样就更符合认知一些了，redux 异步中间件没有什么奥秘，主要做的就是这样的事情。
```
---
##### redux 有哪些异步中间件？
```javascript
1、redux-thunk

源代码简短优雅，上手简单

2、redux-saga

借助 JS 的 generator 来处理异步，避免了回调的问题

3、redux-observable

借助了 RxJS 流的思想以及其各种强大的操作符，来处理异步问题
```
---
