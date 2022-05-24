# 20.代码题

##### 编写一个生成有范围性的随机整数函数
```javascript
function random (max, min) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}
```
---
##### 代码题
```javascript
class Student {
  constructor (name) {
    this.name = 'Jarry';
  }

  getInfo () {
    console.log('this', this);
    return {
      name: 'Tom',
      getName () {
        console.log('name', this.name);
        return this.name;
      }
    }
  }
}

// 一问:下面代码输出什么
const stu = new Student()
stu.getInfo().getName();
/**
此题考察this的指向问题
*/

// 二问，如何让getName输出'Jarry'
class Student {
  constructor (name) {
    this.name = 'Jarry';
  }

  getInfo () {
    console.log('this', this);
    return {
      name: 'Tom',
      getName: () => {
        console.log('name', this.name);
        return this.name;
      }
    }
  }
}
const stu = new Student();
stu.getInfo().getName();

// 解释 箭头函数的this永远指向其上下文的this，任何方法都改变不了其指向，如：call()、apply()
```
---
##### 代码题
```javascript
请编写一个JavaScript函数parseUrl。它的用途是把URL参数解析为一个对象
function parseUrl (url) {
  // TODO
}

parseUrl('www.baidu.com?a=1&b=2');
输出 { a: '1', b: '2' }

function parseUrl (url) {
  var str = url.split('?')[1];
  var result = {};
  var temp = str.split('&');
  for (var i = 0; i < temp.length; i ++) {
    var temp2 = temp[i].split('=');
    result[temp2[0]] = temp2[1];
  }

  return result;
}

parseUrl('www.baidu.com?a[]=1&a[]=2&b=2')
输出 { a: ['1', '2'], b: 2 }

function parseUrl (url) {
  var str = url.split('?')[1];
  var result = {};
  var temp = str.split('&');
  for (var i = 0; i < temp.length; i++) {
    var temp2 = temp[i].split('=');
    console.log(temp2);
    var key = temp2[0];
    var value = temp2[1];
    if (key.substring(1) === '[]') {
      var key = key.substring(0, 1);
      if (!result[key]) result[key] = [];
      result[key].push(value)
    } else {
      result[temp2[0]] = temp2[1];
    }
  }

  return result;
}

```
---
##### 代码题
```javascript
实现一个react hook 监听window窗口变化，改变width和height的值

function useWindowResize () {
 // TODO
}

const { width, height } = useWindowResize()

// 代码
function useWindowResize () {
  const getWindowSize () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = useCallback(() => {
    setWindowSize(getWindowSize());  
  }, [getWindowSize]);

  useEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);

    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width, windowSize.height, handleResize]);

  return {
    width,
    height
  };
}

// 进一步性能优化?
function useWindowSize () {
  const [size, setSize] = useState([0, 0]);

  const handleSize = useCallback(() => {
    setSize(window.innerWidth, window.innerHeight);
  }, []);

  // useLayoutEffect比useEffect先执行，并且对dom操作的副作用减到最小
  useLayoutEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);

    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  }, [JSON.stringify(size)]);

  return {
    width: size[0],
    height: size[1]
  };
}
```
---
##### 代码题
```javascript
实现GrandPa 向 Dad 和 Son传递数据

function GrandPa () {
  const [someMoneyForDad, setSomeMoneyForDad] = useState(100);
  const [someMoneyForDad, setSomeMoneyForSon] = useState(100);

  return (
    // TODO 向子组件发红包
  );
}

function Dad () {
  return (
    // TODO 
  );
}

function Son (props: { momeyForSon: number }) {
  return (
    // TODO
  );
}

// 第一，使用props传递数据
function GrandPa () {
  const [someMoneyForDad, setSomeMoneyForDad] = useState(100);
  const [someMoneyForSon, setSomeMoneyForSon] = useState(100);

  return (
    <div className="grandPa ">
      <Dad
        momeyForDay={someMoneyForDad}
        momeyForSon={someMoneyForSon}
      />
    </div>
  );
}

function Dad (props: { momeyForDad: number, momeyForSon: number }) {
  return (
    <div className="dad">
      <h3>Happy New Year ${momeyForDad}</h3>
      <Son
        money={momeyForSon}
      />
    </div>
  );
}

function Son (props: { money: number }) {
  return (
    <div className="son">
      <h3>Happy New Year ${money}</h3>
      <Son
        money={money}
      />
    </div>
  );
}

// 第二，使用context传递数据
// TODO


注：React中组件通信方式有
* 父组件向子组件通信: props
* 子组件向父组件通信: 回调函数/自定义事件
* 跨级组件通信: 层层组件传递props/context
* 没有嵌套关系组件之间的通信: 自定义事件

当业务逻辑复杂到一定程度,就可以考虑引入Mobx,Redux等状态管理工具
```
---
##### 下面a的值是多少(setState渲染问题)
```javascript
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0 
    }
  }

  componentDidMount () {
    this.setState({ a: 1 });
    
    setTimeout(() => this.setState({ a: 2 }), 0);
    
    new Promise((resolve) => {
      resolve(this.setState({ a: 3 }));
    })
      .then((res) => this.setState({ a: 4 }));
  }

  render () {
    console.log('state', this.state.a);
    return (
      <div>{ this.state.a }</div>
    );
  }
}

// 此题考察到'React渲染生命周期'和'setState是同步还是异步'

// 解释
/**
首先是React渲染生命周期，当挂载时，其生命周期调用顺序为
1.constructor
2.static getDerivedStateFromProps
3.render
4.componentDidMount

所以先render一次a的值为0，接着进入componentDidMount生命周期，this.setState({ a: 1 })和this.setState({ a: 3 })为同步操作，setTimeout会将其中的回调函数(即() => this.setState({ a: 2 }))放入宏任务中，then之后的回调函数会放入微任务中

因为在(legacy模式下)setState的同周期内的setState会批处理合成一个setState，并以后者为主，所以this.setState({a:1})会被覆盖。因为调用了setState，触发了更新，意味着又render一次，此时的state.a的值就显示为3，当宏任务调用完成后去查看微任务队列，发现又未执行的回调函数，执行它this.setState({a:4})，有一次调用render，触发更新，state.a的值为4.微任务队列为空后，去查看宏任务队列，发现回调函数this.setState({a:2})，执行，触发更新，此时state.a的值为2

所以答案为 0，3，4，2
*/
```
我们接着改造一下这个题，变成

```javascript
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0 
    }
  }

  componentDidMount () {
    this.setState({ a: 1 });
    console.log('a', this.state.a);

    setTimeout(() => {
      this.setState({ a: 2 });
      console.log('a', this.state.a);
    }, 0);
    
    new Promise((resolve) => {
      resolve(this.setState({ a: 3 }));
      console.log('a', this.state.a);
    })
      .then((res) => {
        this.setState({ a: 4 });
        console.log('a', this.state.a);
      });
  }

  render () {
    return (
      <div>{ this.state.a }</div>
    );
  }
}
// 不在render展示state.a，而是在调用完setState后查看state.a的值，结果和如何呢

// 改编后的题主要考察组件的数据更新和视图的更新是两码事

/**
首先都是在componentDidMount中，其次，与上个案例一样，调用依次是
this.setState({ a: 1 });
this.setState({ a: 3 });
this.setState({ a: 4 });
this.setState({ a: 2 });

其区别在于调用this.setState({ a: 1 })和this.setState({ a: 3 })后，数据会不会马上更新，调用setState后，会将调用压入队列中，到最后一一并执行(批处理)，所以此时查看state.a的值，会看到还是0，因为它还没触发批处理。而promise、setTimeout之类原生事件会同步执行，值就显示为呢setState什么，我就显示什么，所以答案是0，0，3，2
*/
```
---
##### 写出以下代码运行结果(事件循环机制)
```javascript
// 此题考察JavaScript事件循环机制
注：定时器任务属于宏任务，promise.then属于微任务，async返回的是promise对象，await会让出线程

async function a1 () {
  console.log(1);
  await a2();
  console.log(2);
}

async function a2 () {
  console.log(3);
}

consoloe.log(4);

setTimeout(() => {
  console.log(5);
}, 0);


a1();

new Promise(function (reslove) {
  console.log(6);
  reslove();
}).then(function () {
  console.log(7);
});

console.log(8);

// 打印输出结果
// 4
// 1
// 3
// 6
// 8
// 2
// 7
// 5

// 解释:
// 1.执行console.log(4)
// 2.执行setTimeout，是一个异步任务，放入事件队列中
// 3.执行a1()，执行console.log(1)，继续向下执行
// 4.执行a2()，执行console.log(3)，并返回了一个promise对象，await让出了线程，把返回的promise加入到作业队列中，所以a1()下面的代码也要等待上面完成后才继续执行
// 5.执行new Promise，执行console.log(6)，将resolve()放入到作业队列中
// 6.执行console.log(8)
// 7.到此同步的代码执行完成了，然后去微任务队列(作业队列)中获取任务
// 8.接下来执行resolve(a2返回的promise返回的)，然后执行console.log(2)
// 9.然后执行resolve(new Promise的then)，执行console.log(7)
// 10.最后执行setTimeout，执行console.log(5);
```
---
##### 数据扁平化
```javascript
/**
* @param [Function(Object, Object)]
* @param {String} childrenKey 树形数据的子主键名
* @param {Object[]} data 树形数据
*
* @returns {Object[]}
*/

function flat (fn, childrenKey = 'children', data = []) {
  const queen = data.map(item => fn(item));
  const result = [];
  while (queen.length) {
    const first = { ...queen.shift() };
    if (first[childrenKey] && first[childrenKey].length > 0) {
      first[childrenKey].forEach(item => queen.push(fn(item, first)));
      delete first[childrenKey];
    } else {
      first.isLeaf = true;
    }
    result.push(first);
  }
  return result;
}
```
---
##### 扁平化数据转为树形结构数据
```javascript
/**
 * 扁平化数据转为树形结构数据
 *
 * @param {Function(Object)} fn 根据回调组装节点数据
 * @param {String} idKey 节点唯一标识符
 * @param {String} parentKey 父节点主键名
 * @param {String} childrenKey 子节点主键名
 * @param {[Object]} data 数组数据
 *
 * @returns {Object}
 */ 
function toTree (fn, idKey = 'id', parentKey = 'parent', childrenKey = 'children', data = []) {
  const len = data.length;
  
  const _loop = (parent) => {
    const result = [];
    const p = parent || '';
    for (let i = 0; i < len; i += 1) {
      const node = data[i];
      if (node[parentKey] === p) {
        node[childrenKey] = _loop(node[idKey]);
        result.push(fn(node)); 
      }
    }
    return result;
  }

  return _loop();
}
```
---
##### 正则验证密码，长度8～16，组成:大小写字母下划线数字
```javascript
function validataPasswd (passwdStr) {
  // TODO
}
```
---
##### 匹配年月日 以YYYY-MM-DD格式为例
```javascript
/**
分析
1、合法的日期：MSDN上规定--在公元（基督纪元）0001 年 1 月 1 日午夜 12:00:00 到公元 (C.E.) 9999 年 12 月 31 日晚上 11:59:59 之间的日期和时间

2、闰年的概念：百度百科说明--四年一闰,百年不闰,四百年再闰

3、整合表达式

平年：
年份可统一写作：(?!0000)[0-9]{4}

包括平年在内的所有年份的月份都包含1-28日：(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])

包括平年在内的所有年份除2月外都包含29和30日：(0[13-9]|1[0-2])-(29|30)

包括平年在内的所有年份1、3、5、7、8、10、12月都包含31日：(0[13578]|1[02])-31)

合起来就是除闰年的2月29日外的其它所有日期：(?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)

闰年:
能被4整除但不能被100整除的年份：([0-9]{2}(0[48]|[2468][048]|[13579][26])

能被400整除的年份。能被400整除的数肯定能被100整除，因此后两位肯定是00：(0[48]|[2468][048]|[13579][26])00

合起来就是所有闰年的2月29日：([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)

四条规则都已实现，且互相间没有影响，合起来就是所有符合DateTime范围的日期的正则
^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$

考虑到这个正则表达式仅仅是用作验证，所以捕获组没有意义，只会占用资源，影响匹配效率，所以可以使用非捕获组来进行优化。
^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$
*/

function validataDate  (dateStr, format = '-'){
  var regStr = `
  ^(?:(?!0000)[0-9]{4}${format}(?:(?:0[1-9]|1[0-2])${format}(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])${format}(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$
  `;
  var reg = new RegExp(regStr);

  if (!dateStr.match(reg)) return false;

  return true;  
}
```
---
##### 写一个节流React自定义hook
```javascript
// 节流的概念：就是指触发事件后在规定时间内函数只能执行一次，如果在规定时间内又触发了事件，则会重新计算函数执行时间。

// 代码实现:
function useThrottle (fn, delay, deps = []) {
  const { current } = React.useRef({ fn, timer: null });

  React.useEffect(() => {
    current.fn = fn;
    return () => {
      clearTimeout(current.timer);
      current.fn = null;
      current.timer = null; 
    };
  }, [fn]);

  return React.useCallback((...args) => {
    if (current.timer) return false;
    current.timer = setTimeout(() => {
      current.fn(...args);
      clearTimeout(current.timer);
    }, delay)
  }, [...deps]);
}
```
---
##### 写一个防抖React自定义hook
```javascript
// 防抖的概念：对于规定时间内连续触发的事件，防抖的含义就是让规定时间内，事件处理函数只执行一次。

// 代码实现:
function useDebounce (fn, delay, deps = []) {
  const { current } = React.useRef({ fn, timer: null });

  React.useEffect(() => {
    current.fn = fn;
    return () => {
      clearTimeout(current.timer);
      current.fn = null;
      current.timer = null; 
    };
  }, [fn]);

  return React.useCallback((...args) => {
    if (current.timer) clearTimeout(current.timer);
    current.timer = setTimeout(() => {
      current.fn(...args);
       clearTimeout(current.timer);
    }, delay);
  }, [...deps]);
}
```
---
