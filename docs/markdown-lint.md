# MarkdownLint <!-- {docsify-ignore-all} -->

## MD001

!> _Heading levels should only increment by one level at a time_

标题级数每次只能扩大1, 也就是不能隔级创建标题啊(从1级到6级的顺序)

示例:

```json
{
	"MD001": false
}
```

## MD002

!> _First heading should be a top level heading_

文档的第一个标题必须是最高级的标题(标题等级1级到6级逐渐降低)

|参数|描述|
|:---|:---|
|level|指定最高级标题的级数，默认是1|

示例:

```json
{
	"MD002": {
		"level": "1"
	}
}
```

## MD003

!> _Heading style_

整篇文档要采用一致的标题格式

|参数|描述|
|:---|:---|
|consistent(default)|整篇文档一致|
|atx||
|atx_closed||
|setext||
|setext_with_atx||
|setext_with_atx_closed||

示例:

```json
{
	"MD003": {
		"style": "consistent"
	}
}
```

?> _标题格式必须统一，一般不能混用，但`setext_with_atx`, `setext_with_atx_closed`格式可以在`setext`格式二级标题后接着使用`atx`或`atx_closed`格式的标题_

## MD004

!> _Unordered list style_

整篇文档定义无序列表的格式要一致

|参数|描述|
|:---|:---|
|consistent(default)|定义时符号前后一致|
|asterisk|用星号定义|
|plus|用加号定义|
|dash|用减号定义|
|sublist|定义多重列表时用不同的符号定义|

示例:

```json
{
	"MD004": {
		"style": "consistent"
	}
}
```

## MD005

!> _Inconsistent indentation for list items at the same level_

同一级的列表缩进必须一致
在有序列表中，前面的数字序号可以左对齐，也可以右对齐

示例:

```json
{
	"MD005": false
}
```

## MD006

!> _Consider starting bulleted lists at the beginning of the line_

1级列表不能缩进

示例:

```json
{
	"MD006": false
}
```

## MD007

!> _Unordered list indentation_

无序列表嵌套缩进时默认采用两个空格

|参数|描述|
|:---|:---|
|ident|指定无序列表嵌套时缩进的空格数，默认是2|

示例:

```json
{
	"MD007": {
		"ident": 2
	}
}
```

## MD008

?> _TODO_

## MD009

!> _Trailing spaces_

行尾最多可以添加两个空格，超过会给出警告，两个空格正好可以用于换行

|参数|描述|
|:---|:---|
|br_spaces|指定在行尾可以添加的空格数目，空格数目建议大于等于2，如果小于2，会默认为0，也就是不允许任何行尾的空格|
|list_item_empty_lines|字符串，指定在列表中是否(true or false)用默认的空格数缩进空行，有的解释器会要求列表中的空行要缩进|

示例:

```json
{
	"MD009": {
		"br_spaces": 2,
		"list_item_empty_lines": true
	}
}
```

## MD010

!> _Hard tabs_

不能使用tab键缩进，要使用空格

|参数|描述|
|:---|:---|
|code_blocks|指定本条规则在代码块里是否(true or false)生效|

示例:

```json
{
	"MD010": {
		"code_blocks": true
	}
}
```

## MD011

!> _Reversed link syntax_

检查内联形式的链接的创建方式是否错误，中括号和圆括号是否用对

示例:

```json
{
	"MD011": false
}
```

## MD012

!> _Multiple consecutive blank lines_

文档中不能有连续的空行，在代码块中此规则不会生效

|参数|描述|
|:---|:---|
|maximum|指定文档中可以连续的最多空行数，默认值是1|

示例:

```json
{
	"MD012": {
		"maximum": 1
	}
}
```

## MD013

!> _Line length_

默认行的最大长度是80，此规则对代码块、表格、标题也生效

|参数|描述|
|:---|:---|
|line_length|指定行的最大长度，默认是80|
|heading_line_length|指定标题行的最大长度，默认是80|
|code_blocks|指定规则是否(true or false)对代码块生效，默认true|
|tables|指定规则是否(true or false)对表格生效，默认true|
|hesdings|指定规则是否(true or false)对标题生效，默认true|

示例:

```json
{
	"MD013": {
		"line_length": 80,
		"heading_line_length": 80,
		"code_blocks": true,
		"tables": true,
		"hesdings": true
	}
}
```

## MD014

!> _Dollar signs used before commands without showing output_

在代码块中，终端命令前不需要有美元符号($)

示例:

```json
{
	"MD014": true
}
```

如果代码块中既有终端命令，也有命令的输出，则终端命令前可以有美元符号($)，如：

```
$ ls
foo bar
$ cat foo
hello world
```

## MD015

?> _TODO_

## MD016

?> _TODO_

## MD017

?> _TODO_

## MD018

!> _No space after hash on atx style heading_

在"atx"格式的标题中，#号和文字间需用一个空格隔开

示例:

```json
{
	"MD003": {
		"style": "atx"
	},
	"MD018": true
}
```

## MD019

!> _Multiple spaces after hash on atx style heading_

在"atx"格式的标题中，#号和文字间只能用一个空格隔开，不能有多余的空格

示例:

```json
{
	"MD003": {
		"style": "atx"
	},
	"MD019": true
}
```

## MD020

!> _No space inside hashes on closed atx style heading_

在"atx_closed"格式的标题中，文字和前后的#号之间需用一个空格隔开

示例:

```json
{
	"MD003": {
		"style": "atx_closed"
	},
	"MD020": true
}
```

## MD021

!> _Multiple spaces inside hashes on closed atx style heading_

在"atx_closed"格式的标题中，文字和前后的#号之间只能用一个空格隔开，不能有多余的空格

示例:

```json
{
	"MD003": {
		"style": "atx_closed"
	},
	"MD021": true
}
```

## MD022

!> _Headings should be surrounded by blank lines_

标题行的上下行必须都是空行

|参数|描述|
|:---|:---|
|lines_above|指定标题行上方的空行数，默认为1，可以设为更大或0|
|lines_below|指定标题行下方的空行数，默认为1，可以设为更大或0|

示例:

```json
{
	"MD022": {
		"lines_above": 1,
		"lines_below": 1
	}
}
```

?> _注意当此处的空行设为比1大的数时，规则MD012的设置也要改_

## MD023

!> _Headings must start at the beginning of the line_

标题行不能缩进

示例:

```json
{
	"MD023": false
}
```

## MD024

!> _Multiple headings with the same content_

文档不能有内容重复的标题

|参数|描述|
|:---|:---|
|siblings_only|默认为false，设为true时，不同标题下的子标题内容可以重复|

示例:

```json
{
	"MD024": {
		"siblings_only": false
	}
}
```

## MD025

!> _Multiple top level headings in the same document_

同一文档只能有一个最高级的标题，默认是只能有一个1级标题

|参数|描述|
|:---|:---|
|level|指定文档最高级的标题，默认是1|
|front_matter_title|字符串，指定在文档开头处的front matter中的标题，这个标题将作为整篇文档的最高级标题，如果文档中再次出现最高级标题，将会给出警告，另外，如果不想在front matter中指定标题，就把本参数的值设置为""|

示例:

```json
{
	"MD025": {
		"level": 1,
		"front_matter_title": ""
	}
}
```

## MD026

!> _Trailing punctuation in heading_

标题行末尾不能有以下标点符号：".,;:!?"

|参数|描述|
|:---|:---|
|punctuation|字符串，指定标题行尾不能有的标点符号，默认是".,;:!?"|

示例:

```json
{
	"MD026": {
		"punctuation": ".,;:!?"
	}
}
```

?> _此规则默认的是英文的标点符号，中文标点符号不在规则之内_

## MD027

!> _Multiple spaces after blockquote symbol_

创建引用区块时，右尖括号 ( > ) 和文字之间有且只能有一个空格

示例:

```json
{
	"MD027": false
}
```

## MD028

!> _Blank line inside blockquote_

两个引用区块间不能仅用一个空行隔开或者同一引用区块中不能有空行，如果一行中没有内容，则这一行要用>开头

示例:

```json
{
	"MD028": false
}
```

## MD029

!> _Ordered list item prefix_

有序列表的前缀序号格式必须只用1或者从1开始的加1递增数字("one_or_ordered")

|参数|描述|
|:---|:---|
|one|只用1做前缀|
|ordered|用从1开始的加1递增数字做前缀|
|one_or_ordered(default)|只用1或者从1开始的加1递增数字做前缀|
|zero|只用0做前缀|

示例:

```json
{
	"MD029": {
		"style": "one_or_ordered"
	}
}
```

本条规则支持在前缀序号中补0，以实现对齐，如：

```
08.  one
09.  two
10.  three
```

## MD030

!> _Spaces after list markers_

列表(有序、无序)的前缀符号和文字之间用1个空格隔开
在列表嵌套或者同一列表项中有多个段落时，无序列表缩进两个空格，有序列表缩进3个空格

|参数|描述|
|:---|:---|
|ul_single|无序列表单个段落的前缀符号和文字之间的空格数，默认是1|
|ol_single|有序列表单个段落的前缀符号和文字之间的空格数，默认是1|
|ul_multi|无序列表多个段落的前缀符号和文字之间的空格数，默认是1|
|ol_multi|有序列表多个段落的前缀符号和文字之间的空格数，默认是1|

示例:

```json
{
	"MD030": {
		"ul_single": 1,
		"ol_single": 1,
		"ul_multi": 1,
		"ol_multi": 1
	}
}
```

## MD031

!> _Fenced code blocks should be surrounded by blank lines_

单独的代码块前后需要用空行隔开(除非是在文档开头或末尾)，否则有些解释器不会解释为代码块

示例:

```json
{
	"MD031": false
}
```

## MD032

!> _Lists should be surrounded by blank lines_

列表(有序、无序)前后需要用空行隔开，否则有些解释器不会解释为列表
列表的缩进必须一致，否则会警告

示例:

```json
{
	"MD032": false
}
```

## MD033

!> _Inline HTML_

文档中不允许使用HTML语句

|参数|描述|
|:---|:---|
|allowed_elements|自定义允许的元素，是一个字符串数组，默认是空(empty)|

示例:

```json
{
	"MD033": ["html", "body"]
}
```

## MD034

!> _Bare URL used_

单纯的链接地址需要用尖括号 (<>) 包裹，否则有些解释器不会解释为链接

示例:

```json
{
	"MD034": false
}
```

## MD035

!> _Horizontal rule style_

创建水平线时整篇文档要统一(consistent)，要和文档中第一次创建水平线使用的符号一致

|参数|描述|
|:---|:---|
|style|字符串，字符串，指定创建水平线的方式，值有：(`consistent`,`***`,`---`,`___`)，默认是`consistent`|

示例:

```json
{
	"MD035": {
		"style": "consistent"
	}
}
```

## MD036

!> _Emphasis used instead of a heading_

不能用强调代替标题

|参数|描述|
|:---|:---|
|punctuation|字符串，指定用于结尾的标点符号，以此符号结尾的强调不会被视为以强调代替标题，默认值是".,;:!?"|

示例:

```json
{
	"MD036": {
		"punctuation": ".,;:!?"
	}
}
```

?> _此规则会检查只包含强调的单行段落，如果这种段落不是以指定的标点符号结尾，则会被视为以强调代替标题，会给出警告_

## MD037

!> _Spaces inside emphasis markers_

用于创建强调的符号和强调的的文字之间不能有空格

示例:

```json
{
	"MD037": false
}
```

## MD038

!> _Spaces inside code span elements_

当用单反引号创建代码段的时候，单反引号和它们之间的代码不能有空格，如果要把单反引号嵌入到代码段的首尾，创建代码段的单反引号和嵌入的单反引号间要有一个空格隔开

示例:

```json
{
	"MD038": false
}
```

## MD039

!> _Spaces inside link text_

链接名和包围它的中括号之间不能有空格，但链接名中间可以有空格，如：

```text
[百 度](http://www.baidu.com "百 度")
```

示例:

```json
{
	"MD039": false
}
```

## MD040

!> _Fenced code blocks should have a language specified_

单独的代码块(此处是指上下用三个反引号包围的代码块)应该指定代码块的编程语言，这一点有助于解释器对代码进行代码高亮

示例:

```json
{
	"MD040": false
}
```

## MD041

!> _First line in file should be a top level heading_

文档的第一个非空行应该是文档最高级的标题，默认是1级标题

|参数|描述|
|:---|:---|
|level|指定文档最高级的标题，默认是1|
|front_matter_title|字符串，指定在文档开头处的front matter中的标题，这个标题将作为整篇文档的最高级标题，另外，如果不想在front matter中指定标题，就把本参数的值设置为""|

示例:

```json
{
	"MD041": {
		"level": 1,
		"front_matter_title": ""
	}
}
```

## MD042

!> _No empty links_

链接的地址不能为空

示例:

```json
{
	"MD042": false
}
```

## MD043

!> _Required heading structure_

要求标题遵循一定的结构，默认是没有规定的结构("null")

|参数|描述|
|:---|:---|
|headings|字符串数组，指定标题需要遵循的结构，默认是"null"，可以自行指定结构|

示例:

```json
{
	"MD043": [
		"# head",
    "## item",
    "### detail",
    "*"
	]
}
```

?> _星号(*)表示对应的标题是可选的，没有强制要求，本条具体可以参照MD043_

## MD044

!> _Proper names should have the correct capitalization_

指定一些名称，会检查它是否有正确的大写

|参数|描述|
|:---|:---|
|names|字符串数组，指定要检查需要大写的名称，默认是空("null")|
|code_blocks|指定本规则是否(true or false)对代码块生效，默认是true
一些经常使用的名称可以使用本规则防止其拼写错误，比如JavaScript中字母J和S需要大写，就可以写到参数"names"中，防止写错|

示例:

```json
{
	"MD044": {
		"names": ["JavaScript"],
		"code_blocks": true
	}
}
```

## MD045

!> _Images should have alternate text (alt text)_

图片链接必须包含描述文本(alt text)

示例:

```json
{
	"MD045": false
}
```

## MD046

!> _Code block style_

整篇文档采用一致的代码格式

|参数|描述|
|:---|:---|
|consistent(default)|文档上下文一致|
|fenced|使用三个反引号隔开|
|indented|使用缩进|

示例:

```json
{
	"MD046": { "style": "consistent" }
}
```

## MD047

!> _Files should end with a single newline character_

文档需用一个空行结尾

示例:

```json
{
	"MD047": false
}
```

## 参考

[rules文档](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md002---first-heading-should-be-a-top-level-heading)