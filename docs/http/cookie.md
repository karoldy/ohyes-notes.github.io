[首页](/) / [Http](/http/) / [Cookie](/http/cookie)

# Cookie

## 简介

Cookie 是一些数据, 存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息

Cookie主要用于以下三个方面：

- 会话状态管理(如用户登录状态、购物车、游戏分数或其它需要记录的信息)

- 个性化设置(如用户自定义设置、主题等)

- 浏览器行为跟踪(如跟踪分析用户行为等)

Cookie 以名/值对形式存储，如下所示

```js
username=karol
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息

## Cookie的属性

### domain和path属性

domain 指定了该 Cookie 所属的域名，默认情况下，domain 会被设置为创建该 Cookie 时所在的域名。如果不指定，默认为 origin，不包含子域名。如果指定了Domain，则一般包含子域名。

例如，如果设置 Domain=http://mozilla.org，则 Cookie 也包含在子域名中（如http://developer.mozilla.org）。

而 path 则指定了该 Cookie 所属的路径，注意子路径也会被匹配。

例如，设置 Path=/docs，则/docs/Web/ 这个地址也会匹配。

domain 和 path 两者一起来限制了该 Cookie 允许被哪些 URL 访问。

### Expires/Max-Age

Expires :具体到期时间，UTC 格式。如果没有设置该选项，则默认有效期为 session，即会话cookie，这种 cookie 在浏览器关闭后就没有了。

Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
Max-Age属性指定从现在开始 Cookie 存在的秒数，比如 60 60 24 * 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。

如果同时指定了 Expires 和 Max-Age，那么 Max-Age 的值将优先生效。

- Max-Age 为正数: cookie 会在 max-age 秒之后被销毁
- Max-Age 为负数时: cookie 只在浏览器会话期间存在，当用户关闭浏览器窗口后这些值也会随之销毁
- Max-Age 为 0 时: cookie 将被立即销毁

### SameSite属性

SameSite： Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

SameSite 可以有下面三种值：

- None。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。

- Strict。浏览器将只发送相同站点请求的 Cookie(即当前网页 URL 与请求目标 URL 完全一致)。

- Lax。在新版本浏览器中，为默认选项，Same-site Cookies 将会为一些跨站子请求保留，如图片加载或者 iframe 不会发送，而点击 a 标签会发送；大多数主流浏览器的 SameSite 的默认值已经是 Lax 了。如果想要指定 Cookies 在同站、跨站请求都被发送，现在需要明确指定 SameSite 为 None。（所以不要再问为什么接口返回了 Set-Cookie 但是却没有设置成功了，大概率原因在这里，曾经遇到过）

### HttpOnly

如果这个属性设置为true，意思就是告之浏览器该 cookie 不能通过 JavaScript 的 document.cookie 属性访问。可以避免跨域脚本 (XSS) 攻击

### Secure

标记为 Secure的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端

---

## document.cookie

JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie

```js
document.cookie = "username=karol";
```

## my-js-cookie

```js
class Cookies {
	constructor () {

	}

	set (key, value, options) {

	}

	get (key) {

	}

	remove (key) {

	}

	clear() {

	}
}
```
