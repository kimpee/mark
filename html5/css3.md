# 层次选择器

- 相邻兄弟选择器
  - E+F 表示F是E的下一个兄弟选择器

- 兄弟选择器
  - E~F 选取元素后面的所有兄弟元素

# 伪类
- :link
  - 锚链接链接前

- :visited
  - 锚链接链接后

- :hover
  - 锚链接链悬停鼠标

- :active
  - 锚链接链鼠标点击

- :focus
  - 表示表单被聚焦

- E:target
  - 目标伪类选择器

- E:语言伪类选择器 标签`<q>嘻嘻</q>` 可以显示双引号
  - q:lang(no){quotes:"""+"} 放啥都行

- ui 状态伪类选择器(多为表单)

  - :checked 被选中的表单元素添加样式

  - :enabled 表单元素可用时

  - :disable 表单元素不可用时

  - ::selection 内容被选中时出现样式

- p:not(e)否定伪类选择器 获取到不是E元素父元素的作用域内的所有元素

- 属性伪类选择器 E[attr]{background:red;} 表示获取到存在attr属性的元素  
- 属性伪类选择器 E[attr="abc"]{background:red;} 表示获取到存在attr属性等于"abc"的元素
- 属性伪类选择器 E[attr*="abc"]{background:red;} 表示获取到存在attr属性包含"bcd"的元素
- 属性伪类选择器 E[attr^="bcd"]{background:red;} 表示获取到存在attr属性开头为"bcd"的元素  
- 属性伪类选择器 E[attr$="bcd"]{background:red;} 表示获取到存在attr属性结尾为"bcd"的元素

- 伪元素选择器 ::before添加第一个子元素 ::after 添加最后一个子元素
- 单双冒号的区别 单伪类 双伪元素
- 权重:伪类等同于类 伪元素等同于元素

- 伪类选择器
- E:first-child 就是父元素的第一个子元素,同时还要满足E元素

- E:last-child 就是父元素的最后一个子元素,同时还要满足E元素

- E:nth-child(3) even(偶数) odd(奇数) (-n+a)从一到a an(a的倍数元素) 就是父元素的第三个子元素,同时还要满足E元素

- E:nth-last-child(3) even(偶数) odd(奇数) (-n+a)从一到a an(a的倍数元素) 就是父元素的第三个子元素,同时还要满足E元素

- E:first-of-type 满足为其父元素第一个E类型的孩子

- E:last-of-type() 满足为其父元素倒数第N个E类型的孩子

- E:nth-of-type() 满足为其父元素第n个E类型的孩子

- E:nth-last-of-type() 满足为其父元素倒数第n个E类型的孩子

- E:empty 获取到内容为空(空格也不能存在)的E元素

- 伪类选择器(2)
> E:only-child 获取到又是父亲的唯一一个孩子又是E元素

> E:only-of-type 获取到父元素的唯一一个E元素的子元素

## 新增属性
- text-shadow: x-offset(右为正) y-offset(下为正) 10px模糊区域 red(颜色) 可以有多个阴影 可连写用逗号隔开

- text-overflow:elipsis/clip 文本超出范围解决方式

- white-space: nowrap 不换行

- work-wrap:break-work; 单词强行换行

## 自定义字体
` @font-face{
    src:url("../images/asdfsdf.0.TTF");
    font-family:"lemon";
}

font-fmaily:"lemon";
`
## 字体图标(用文字组成的图片)
- 知道自己下载了什么字体

## 背景图片的大小
- backgroud-size : x y;

  指定的高度和宽度是相对于父元素的

 不等比例可能会变形

- backgroud-size:cover;(一般会发生图片丢失不过能覆盖容器)

- backgroud-size:contain;(一般会留空白)

### 默认,背景图片是从padding的左上角开始定位,为padding里面

- backgroud-origin:content-box;(在内容开始摆 padding外面)

- backgroud-origin:border-box;(在边框开始摆 border里面)

- backgroud-clip:padding-box/content-box/border-box;(背景的裁剪决定最终的显示区域)


## 渐变
  - linear-gradient(red,bule) 从红色渐变到蓝色
