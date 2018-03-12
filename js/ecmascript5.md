# ecmascript新内容
- 注意ie9才支持 且不支持严格模式

## 页面加载事件的改变
- 顺序
  1. 解析HTML 结构
  2. 加载外部脚本和样式表文件.
  3. 解析并执行脚本代码
  4. DOM树构建完成 //DOMcontentLoaded
  5. 加载图片等外部文件
  6. 页面加载完毕.//window.onload
- onreadystatechange=function....   
  > 此方法会执行两次 ,因为document.readyState 会改变两次,
    1. interactive 第一次改变
    2. complete 第二次改变
    3. 基本使用方法 window.onreadystatechange=function (e){ if(document.readystate === 'interactive')}

- DOMContentLoaded
  > 此事件一定要使用事件监听器添加 document.addEventListener('DOMContentLoaded',function(){},false);

## 严格模式
- 为什么要用,代码更严谨,有一些地方强制报错,如以下
- 在代码开头加上'use strict' 在函数内部第一行写就是局部使用 就可以使用严格模式(推荐)

- 严格模式下声明变量一定要var 没有就报错
- 对象属性不能重名
- 函数参数不能重名
- 函数声明不能再判断语句和循环语句中

## 获取元素
- querySeletor(); 支持css3 选择器
- querySelectorAll() 返回一个类数组;(类数组NodeList)但是可以用forEach循环
- HTMLCollection 类数组类型 不能用forEach

## 函数的方法
- function.bind(obj) 改变 把函数和一个对象绑定以改变该函数的this 指向

## class操作
- ele.classList 返回一个类对象
  > 老方法ele.classname='';

- ele.classList.add('');
- ele.classList.length; 获取类名的长度
- ele.classList.remove('');
- ele.classList.toggle(''); 切换的意思
- ele.classList.contains(''); 判断是否有某一个类

## dateset 自定义属性
- ele.dateset.name;
  > (获取)date-name
- ele.dateset.firstName
  > (获取)date-first-name
