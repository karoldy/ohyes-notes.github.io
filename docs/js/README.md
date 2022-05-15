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