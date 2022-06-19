[CSS手册](/css-handbook/) / [属性](/css-handbook/properties/) / [Only IE](/css-handbook/properties/oi)

# Only IE

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>

|属性|版本|继承性|描述|
|:---|:---|:---|:---|
|[scrollbar-3dlight-color](#s3c)|CSS1|有|检索或设置对象滚动条3d亮色阴影边框(threedlightshadow)的外观颜色|
|[scrollbar-darkshadow-color](#sdc)|CSS1|有|检索或设置对象滚动条3d暗色阴影边框(threeddarkshadow)的外观颜色|
|[scrollbar-highlight-color](#shc)|CSS1|有|检索或设置对象滚动条3d高亮边框(threedhighlight)的外观颜色|
|[scrollbar-shadow-color](#ssc)|CSS1|有|检索或设置对象滚动条3d阴影边框(threedshadow)的外观颜色|
|[scrollbar-arrow-color](#sac)|CSS1|有|检索或设置对象滚动条方向箭头的颜色。当滚动条出现但不可用时，此属性失效|
|[scrollbar-face-color](#sfc)|CSS1|有|检索或设置对象滚动条3D表面的(threedface)的外观颜色|
|[scrollbar-track-color](#stc)|CSS1|有|检索或设置对象滚动条拖动区域的外观颜色|
|[scrollbar-base-color](#sbc)|CSS1|有|检索或设置对象滚动条基准颜色，其它界面颜色将据此自动调整|
|[filter](#filter)|CSS1|无|设置或检索对象所应用的滤镜效果|
|[behavior](#behavior)|CSS1|无|设置或检索对象的DHTML行为|

## scrollbar-3dlight-color :id=s3c

### 语法

**scrollbar-3dlight-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：threedlightshadow

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条3d亮色阴影边框(threedlightshadow)的外观颜色**

对应的脚本特性为 `scrollbar3dLightColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条3d亮色阴影边框(threedlightshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d亮色阴影边框变成红色</div>
<div class="test2">自定义滚动条3d亮色阴影边框(threedlightshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d亮色阴影边框变成绿色</div>
<div class="test3">自定义滚动条3d亮色阴影边框(threedlightshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d亮色阴影边框变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:100px;
	margin-top:20px;
}
.test {
	scrollbar-3dlight-color:#f00;
}
.test2 {
	scrollbar-3dlight-color:#080;
}
.test3 {
	scrollbar-3dlight-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/174.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-darkshadow-color :id=sdc

### 语法

**scrollbar-darkshadow-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：threeddarkshadow

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条3d暗色阴影边框(threeddarkshadow)的外观颜色**

对应的脚本特性为 `scrollbarDarkShadowColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条3d暗色阴影边框(threeddarkshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d暗色阴影边框变成红色</div>
<div class="test2">自定义滚动条3d暗色阴影边框(threeddarkshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d暗色阴影边框变成绿色</div>
<div class="test3">自定义滚动条3d暗色阴影边框(threeddarkshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d暗色阴影边框变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:100px;
	margin-top:20px;
}
.test {
	scrollbar-darkshadow-color:#f00;
}
.test2 {
	scrollbar-darkshadow-color:#080;
}
.test3 {
	scrollbar-darkshadow-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/175.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-highlight-color :id=shc

### 语法

**scrollbar-highlight-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：threedhighlight

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条3d高亮边框(threedhighlight)的外观颜色**

对应的脚本特性为 `scrollbarHighlightColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条3d高亮边框(threedhighlight)的外观颜色。你将在IE浏览器下看到滚动条的3d高亮边框(threedhighlight)变成红色</div>
<div class="test2">自定义滚动条3d高亮边框(threedhighlight)的外观颜色。你将在IE浏览器下看到滚动条的3d高亮边框(threedhighlight)变成绿色</div>
<div class="test3">自定义滚动条3d高亮边框(threedhighlight)的外观颜色。你将在IE浏览器下看到滚动条的3d高亮边框(threedhighlight)变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:100px;
	margin-top:20px;
}
.test {
	scrollbar-highlight-color:#f00;
}
.test2 {
	scrollbar-highlight-color:#080;
}
.test3 {
	scrollbar-highlight-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/176.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-shadow-color :id=ssc

### 语法

**scrollbar-shadow-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：threedshadow

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条3d阴影边框(threedshadow)的外观颜色**

对应的脚本特性为 `scrollbarShadowColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条3d阴影边框(threedshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d阴影边框(threedshadow)变成红色</div>
<div class="test2">自定义滚动条3d阴影边框(threedshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d阴影边框(threedshadow)变成绿色</div>
<div class="test3">自定义滚动条3d阴影边框(threedshadow)的外观颜色。你将在IE浏览器下看到滚动条的3d阴影边框(threedshadow)变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:100px;
	margin-top:20px;
}
.test {
	scrollbar-shadow-color:#f00;
}
.test2 {
	scrollbar-shadow-color:#080;
}
.test3 {
	scrollbar-shadow-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/177.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-arrow-color :id=sac

### 语法

**scrollbar-arrow-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：buttontext

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条方向箭头的颜色。当滚动条出现但不可用时，此属性失效**

对应的脚本特性为 `scrollbarArrowColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成红色</div>
<div class="test2">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成绿色</div>
<div class="test3">自定义滚动条方向箭头的外观颜色。你将在IE浏览器下看到滚动条的方向箭头变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:80px;
	margin-top:20px;
}
.test {
	scrollbar-arrow-color:#f00;
}
.test2 {
	scrollbar-arrow-color:#080;
}
.test3 {
	scrollbar-arrow-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/178.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-face-color :id=sfc

### 语法

**scrollbar-face-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：threedface

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条3D表面的(threedface)的外观颜色**

对应的脚本特性为 `scrollbarFaceColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条3D表面的(threedface)的外观颜色。你将在IE浏览器下看到滚动条的3D表面的(threedface)变成红色</div>
<div class="test2">自定义滚动条3D表面的(threedface)的外观颜色。你将在IE浏览器下看到滚动条的3D表面的(threedface)变成绿色</div>
<div class="test3">自定义滚动条3D表面的(threedface)的外观颜色。你将在IE浏览器下看到滚动条的3D表面的(threedface)变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:80px;
	margin-top:20px;
}
.test {
	scrollbar-face-color:#f00;
}
.test2 {
	scrollbar-face-color:#080;
}
.test3 {
	scrollbar-face-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/179.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-track-color :id=stc

### 语法

**scrollbar-track-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：transparent

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条拖动区域的外观颜色**

对应的脚本特性为 `scrollbarTrackColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成红色</div>
<div class="test2">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成绿色</div>
<div class="test3">自定义滚动条拖动区域的外观颜色。你将在IE浏览器下看到滚动条的拖动区域变成棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:80px;
	margin-top:20px;
}
.test {
	scrollbar-track-color:#f00;
}
.test2 {
	scrollbar-track-color:#080;
}
.test3 {
	scrollbar-track-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/180.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## scrollbar-base-color :id=sbc

### 语法

**scrollbar-base-color**：[\<color>](/css-handbook/value-and-units/color?id=color)

**默认值**：transparent

**适用于**：除table系外的所有块级元素

**继承性**：有

**动画性**：是

**计算值**：指定值

### 取值

[\<color>](/css-handbook/value-and-units/color?id=color)：指定颜色

### 说明

**检索或设置对象滚动条基准颜色。其它界面颜色将据此自动调整**

对应的脚本特性为 `scrollbarBaseColor`

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为红色</div>
<div class="test2">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为绿色</div>
<div class="test3">自定义滚动条整体的基准色调。你将在IE浏览器下看到滚动条的整体的基准色调为棕色</div>
```

**css**

```css
div {
	overflow:scroll;
	width:200px;
	height:80px;
	margin-top:20px;
}
.test {
	scrollbar-base-color:#f00;
}
.test2 {
	scrollbar-base-color:#080;
}
.test3 {
	scrollbar-base-color:#630;
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/181.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## filter :id=filter

### 语法

**filter**：\<filter>+

**适用于**：所有元素

**继承性**：无

**动画性**：是

**计算值**：指定值

### 取值

\<filter>：要使用的滤镜效果。多个滤镜之间用空格隔开

### 说明

**设置或检索对象所应用的滤镜效果**

- 最常用的滤镜效果是不透明效果，如果要实现50%的不透明度（其它高级浏览器的实现参阅 [opacity]() ）
- 对应的脚本特性为 `filter`

示例代码

```css
div {
  filter: alpha(opacity=50); /* for IE8 and earlier */
} 
div {
  opacity:.5; /* for IE9 and other browsers */
} 
```

!> 以上2段代码的效果相同

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/111.png)

### 示例

<!-- tabs:start -->

#### **代码**

**html**

```html
<div class="test">透明度为30%的box</div>
<div class="test2">模糊和翻转的box</div>
```

**css**

```css
body {
	background:#090;
}
div {
	width:200px;
	height:80px;
	margin-top:20px;
	border:10px solid #000;
	background:#ddd;
}
.test {
	filter:alpha(opacity=30);
}
.test2 {
	filter:blur(strength=50) flipv();
}
```

**运行结果**

<iframe
  class="output-iframe"
  scrolling="yes"
  frameborder="0"
  src="css-handbook/example/properties/182.html"
>
  浏览器不支持iframe
</iframe>

<!-- tabs:end -->

---

## behavior :id=behavior

### 语法

**behavior**：[\<url>](/css-handbook/value-and-units/textual?id=url) | `url(#objID)` | `url(#default#behaviorName)`

**适用于**：所有元素

**继承性**：无

**动画性**：否

**计算值**：指定值

### 取值

[\<url>](/css-handbook/value-and-units/textual?id=url)：使用绝对或相对地址指定DHTML行为组件（.htc）

**url(#objID)：**用二进制实现DHTML行为，#objID为object对象指定的id特性

**url(#default#behaviorName)：**IE的默认行为。由behaviorName指定

### 说明

**设置或检索对象的DHTML行为**

- 多个行为之间用空格隔开
- 对应的脚本特性为behavior

### 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/css-handbook/properties/112.png)
