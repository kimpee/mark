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

### w3c标准

- event.button 左键是0
- event.button 中键是1
- event.button 右键是2
- ie8以下 1鼠标左键， 2鼠标右键， 3左右同时按， 4滚轮， 5左键加滚轮， 6右键加滚轮， 7三个同时

### which/keyCode

- keypress 该属性声明了被敲击的键生成的unicode 字符吗(ascii码)
- keydown/keyup 它指定了被敲击的键的虚拟键盘码. 虚拟键盘码可能和使用的键盘布局有关

- altKey/ctrlKey/shiftKey (大写K) 返回alt/ctrl/shift键是否被按下

### 光标位置信息

- 全尺寸的事件,一般绑定给document对象
- clientX/clientY   可视区域的
- screenX/screenY  距离屏幕的
- pageX/pageY       距离页面的特别是有滚动条 =clientX+scrollX
- offsetX/offsetY   距离元素的,相对元素

### event公共属性

- type : 被触发的事件的类型(一般用于判断)
- currentTarget:其事件处理程序当前正在处理事件的那个元素

## 事件冒泡

什么是事件冒泡:

在一个对象上触发某类事件,name这个事件就会逐级的向上传递,直到顶层document/window

## 事件源对象 事件出发的初始地方

- 事件对象兼容

 ie8-:window.event  event兼容性
 e=e||window.event //执行过程如果e有值 e=e 如果e没值 e=window.event
- e.target target兼容性
 ie8 srcElement
 var target=e.target||e.srcElement;

## 截止冒泡

- e.stopPropagation()
- ie8 e.cancelBubble = true;
- 不是所有的事件都冒泡,如 blur,focus,load,unload...
- 冒泡到顶层的目标不一样.主流浏览器到window对象 ie8到document对象

## 阻止浏览器默认行为

- 链接跳转
- 表单提交
- 右键菜单
- 文本的选择
- 图片拖拽
- 文本选择

- 标准: event.preventDefault();
- ie8-:event.returnValue=false;

## 事件监听器

- 添加 addEventListener(type,fun,isCapture); 第三个参数默认 false 在冒泡上执行 true 为捕获(反冒泡)
- 删除 removeEventListener(type,fun,isCapture); 传入的参数一定要一样才能删除
- ie8 添加 target.attachEvent('onclick',fun); 可以绑定多个函数在同一个对象上,执行顺序按照绑定的反序
- ie8 删除 detachEvent('onclick,fun'),传入的参数fun要跟添加时一样,否则不能移除事件

**注意:**页面事件绑定数量越多,越影响性能(速度越慢)

## 拖拽

### 思路

- 给目标元素添加onmousedown事件

    记录按下鼠标位置 元素左上角的偏移量offsetX,offsetY.
- 当 onmousedown 发生以后,此刻给 document 添加 onmousemove 事件

    计算元素的定位值

    pageX-e.offsetX (没有点击子元素的条件下)
- 鼠标送开的时候取消onmousemove事件
