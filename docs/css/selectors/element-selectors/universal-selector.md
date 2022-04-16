### 语法

```css
* {
  sRules
}
```

### 说明

**选定所有对象**

  - 通配选择器(Universal Selector)
  - 通常不建议使用通配选择器，因为它会遍历并命中文档中所有的元素，出于性能考虑，需酌情使用

### 兼容性

IE6及更早浏览器并不支持通配选择器(*)，而是将它忽略了，所以也变相的能看到效果

|浏览器|版本
|:---|:---|
|IE|<span style="color: red;">6.0<sup>#1</sup>;</span> 7.0+|
|Firefox|2.0+|
|Chrome|4.0+|
|Safari|3.1+|
|Opera|3.5+|
|iOS Safari|3.2+|
|Android Browser|2.1+|
|Android Chrome|18.0+|

### 示例

<!-- tabs:start -->

#### **html**

```html
<h1>标题</h1>
<p>正文内容</p>
```

#### **css**

```css
* {
  color: #f00;
}
```

<!-- tabs:end -->

运行结果:

<output>
  <h1 style="color: #f00;">标题</h1>
  <p style="color: #f00;">正文内容</p>
</output>
