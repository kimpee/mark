# BOM

# 概念

* Browser Object Model 的缩写,提供与浏览器窗口进行交互的对象.他没有标准,所以各个浏览器的js要兼容.

- window对象是bom的核心,所有对象都是在window里面引申出来的

- 定义在全局作用域下的变量,都会变成window对象的属性.

- 在函数内,如果不用var 声明对象,那么这个对象就会是全局对象也就是window的属性

- window可以在代码中省略

## window的常用属性

- window.innerWeith;window.innerHeight

- 滚动相关
  - scrollX;scrollY;
  - scrollTo;scrollBy;

- 系统对话框
  - alert()
  - confirm();有返回值 
  - open(url,name[,option]) 打开一个页面 位置大小都可以定义 恶心
    name不命名的话就会每次打开新窗口 命名的话第一次打开新窗口 第二次以后就在该窗口打开
    option是字符串 width=....,height=....,left=....,top=.....'
  - close() 关闭窗口
  - print() 调出打印对话框

## 属性对象
- document 文档对象
  - offsetWidth
  - offsetWidth

- history(重要)
  - back() 返回历史列表上一个值
  - forward() 返回历史列表前一个值
  - go(3) 返回指定的前几个值或者后几个值

- location(重要) 他既是window的对象 也是document的对象
  - hash 设置或者返回从#开始的值 ===>哈希值

  - href 设置或者返回完整的URL

  - search 设置或者返回从问号开始的url,查询部分

  `以上除了hash修改其他的属性都会刷新页面并且生成记录`
  
  - reload() 刷新, 带参数true表示不使用缓存刷新页面

- navigator
  - appName 浏览器名称
  - appVersion 浏览器版本
  - platform 操作系统名称
  - userAgent 用户代理信息,通过他可以获得浏览器和操作系统的信息
  - geolocation 获取地理位置信息

- window的重用事件
  - onload 页面资源加载完毕触发
    -作用1 延迟代码执行
    -作用2 避免全局作用域
  - onscroll 窗口滑动时触发
  - onresize 窗口大小改变时触发