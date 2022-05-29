[首页](/) / [html5](/html5/) / [Web Socket](/html5/web-socket)

# Web Socket

WebSocket协议为web应用程序客户端和服务端之间提供了一种全双工通信机制

**特点**

- 握手阶段采用HTTP协议，默认端口是80和443
- 建立在TCP协议基础之上，和http协议同属于应用层
- 可以发送文本，也可以发送二进制数据。
- 没有同源限制，客户端可以与任意服务器通信。
- 协议标识符是ws（如果加密，为wss），如ws://localhost:8023
