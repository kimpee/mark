<!--
@Author: 李锦沛
@Date:   2018-03-31
@Email:  kimpeelee@163.com
@Filename: jquery.md
@Last modified by:   李锦沛
@Last modified time: 2018-04-02
@Copyright: 远一点,就远一点,美一点,再美一点.
-->

# jquery

  - 原理,封装dom对象.
  - jquery对象只能用jquery方法

## 实例属性
  - lenght 包含dom元素的个数
  - jquery 返回版本号,可判断是否jquery对象

## 别名$
  ```js
  //安全的使用别名
  jQuery(function($){
    $('#box')....
  });
  ```

## jquery 选择器
  - css3 选择器一般都支持
  - 属性选择器 `jQuery['id=box']`
    - 配合通配符使用,规则与正则类似
    ```js
    $['id^=box']//box开头
    $['id$=box']//box结尾
    $['id*=box']//包含box
    ```
  - 表单选择器
    - `:radio`//匹配所有单选按钮
    - `:checkbox` //匹配所有复选按钮
    - `:selected` //获取已选择的option元素
    - `:checked` //匹配所有被选中的元素(复选框、单选框等，select中的option)
    - `:submit` //匹配所有提交按钮
    - `:reset` //匹配所有重置按钮
    - `:button` //匹配所有按钮
    - `:text` //匹配所有的单行文本框
    - `:password` //匹配所有密码框
  - 获取可见性元素
    - :visible  // 匹配所有可见的元素
    - :hidden //匹配所有不可见的元素
    - 一般用于判断元素是否可见

## 事件绑定
  - .on() 绑定事件
  - .off() 移除事件
  - 事件命名空间
    - .on('click.pei'); 一般用于移除事件,才会使用到命名空间
  - 自定义事件
    - 定义:on('myevent');
    - 调用:trigger('myevent');
    - 调用:triggerhandle('myevent');

## ajax
  -
