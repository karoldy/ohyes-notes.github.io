[选择器列表](/css/selectors/)

# 属性选择符

<p class="g-color-light">
  <strong class="g-color-css3-change">紫色</strong> 链接表示该属性在CSS3有修改或者增加了新的属性值；
  <strong class="g-color-css3-new">橙色</strong> 链接表示该属性是CSS3新增属性
</p>


|选择符|版本|描述|
|:---|:---|:---|
|[E[att]](#one)|CSS2|选择具有att属性的E元素|
|[E[att="val"]](#two)|CSS2|选择具有att属性且属性值等于val的E元素|
|[E[att~="val"]](#three)|CSS2|选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素|
|[E[att\|="val"]](#four)|CSS2|选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择|
|[<span class="g-color-css3-new">E[att^="val"]</span>](#five)|CSS3|选择具有att属性且属性值为以val开头的字符串的E元素|
|[<span class="g-color-css3-new">E[att$="val"]</span>](#six)|CSS3|选择具有att属性且属性值为以val结尾的字符串的E元素|
|[<span class="g-color-css3-new">E[att*="val"]</span>](#seven)|CSS3|选择具有att属性且属性值为包含val的字符串的E元素|

## E[att] :id=one

## E[att="val"] :id=two

## E[att\~="val"] :id=three

## E[att|="val"] :id=four

## E[att^="val"] :id=five

## E[att$="val"] :id=six

## E[att*="val"] :id=seven