# 事件
## 鼠标事件
- onclick
- onmousedown
- onmouseup
- onmouseover 在元素上 冒泡
- onmouseout 鼠标从某元素移开
- onmousemove 鼠标移动
- onmouseenter 在鼠标光标从元素外部移动到内部触发,不冒泡(冒泡指的是子元素事件的传递)
- onmouseleave 鼠标离开,不冒泡
- oncontextmenu 右键菜单展开时
## 键盘事件
- fun event.onkeydown
- fun event.onkeyup
- fun event.onkeypress 只有字符键才会触发  按下会输入字符的键就是字符键

## UI事件
- onload
- onscroll
- onresize

## 表单事件
- onselect 选中文本框
- onblur    失去焦点
- onfoucs   得到焦点
- onchange  内容被改变切失去焦点
- oninput   输入字符
- onreset   重置按钮被点击
- onsubmie  确认按钮被点击

## event对象
- w3c标准
    - event.button 左键是0
    - event.button 中键是1
    - event.button 右键是2
    - ie8以下 1鼠标左键， 2鼠标右键， 3左右同时按， 4滚轮， 5左键加滚轮， 6右键加滚轮， 7三个同时
- which/keyCode
    - keypress 该属性声明了被敲击的键生成的unicode 字符吗(ascii码)
    - keydown/keyup 它指定了被敲击的键的虚拟键盘码. 虚拟键盘码可能和使用的键盘布局有关
- altKey/ctrlKey/shiftKey 返回alt/ctrl/shift键是否被按下

- 光标位置信息
    - 全尺寸的事件,一般绑定给document对象
    - clientX/clientY   可视区域的
    - screenX/screenY  距离屏幕的
    - pageX/pageY       距离页面的特别是有滚动条 =clientX+scrollX
    - offsetX/offsetY   距离元素的,相对元素
- event公共属性
    - type : 被触发的事件的类型(一般用于判断)
    - currentTarget:其事件处理程序当前正在处理事件的那个元素