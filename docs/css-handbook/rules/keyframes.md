[CSS手册](/css-handbook/) / [语法和规则](/css-handbook/rules/) / [@keyframes](/css-handbook/rules/keyframes)

# @keyframes

?> _TODO_

### 说明

**指定动画名称和动画效果**

- [@keyframes](/css-handbook/rules/keyframes)定义的动画名称用来被 `animation-name` 所使用

定义动画时，简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态

```css
@keyframes testanimations {
	from { opacity: 1; }
	to { opacity: 0; }
}
```

!> 其中testanimations是该动画的名字，该动画表示某个东西将逐渐消失

如果复杂的动画，可以混合 [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage) 去设置某个时间段内的任意时间点的样式

```css
@keyframes testanimations {
	from { transform: translate(0, 0); }
	20% { transform: translate(20px, 20px); }
	40% { transform: translate(40px, 0); }
	60% { transform: translate(60px, 20); }
	80% { transform: translate(80px, 0); }
	to { transform: translate(100px, 20px); }
}
```

当然，也可以不使用关键字from和to，而都使用 [\<percentage>](/css-handbook/value-and-units/numeric?id=percentage)


```css
@keyframes testanimations{
	0% { transform: translate(0, 0); }
	20% { transform: translate(20px, 20px); }
	40% { transform: translate(40px, 0); }
	60% { transform: translate(60px, 20px); }
	80% { transform: translate(80px, 0); }
	100% { transform: translate(100px, 20px); }
}
```

!> 注意，这里的0%不能简写成0，0是非标准语法（虽然被某些浏览器所支持）