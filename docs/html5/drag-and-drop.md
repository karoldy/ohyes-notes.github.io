[首页](/) / [html5](/html5/) / [拖放API](/html5/drag-and-drop)

# 拖放API

拖放是一种常见的特性，即捉取对象以后拖到另一个位置

在html5中，拖放是标准的一部分，任何元素都能够拖放

语法:

```html
<div draggable="true"></div>
```

|拖动生命周期|属性名|描述|
|:---|:---|:---|
|拖动开始|ondragstart|在拖动操作开始时执行脚本|
|拖动过程中|ondrag|只要脚本在被拖动就运行脚本|
|拖动过程中|ondragenter|当元素被拖动到一个合法的防止目标时，执行脚本|
|拖动过程中|ondragover|只要元素正在合法的防止目标上拖动时，就执行脚本|
|拖动过程中|ondragleave|当元素离开合法的防止目标时|
|拖动结束|ondrop|将被拖动元素放在目标元素内时运行脚本|
|拖动结束|ondragend|在拖动操作结束时运行脚本|
