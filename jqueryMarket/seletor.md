# 选择器

## 层次选择器

> 后代方法:find()

> > $(seletor).find(seletor)...

> 父子方法:children

> > $(seletor).children(seletor)

> 兄弟方法:next(seletor) nextAll()

> > $(seletor).next(type),不传参数就是* note:

> 兄弟方法:prev("p") prevAll()

> 方法:siblings() 上面以及下面全部

> 方法:nextUtil("p")向下查找直到遇到P停止

> 方法:prevUtil("p")向下查找直到遇到P停止

> $().eq() 选择元素 索引从0开始

## 基本过滤器

- $("li:first") 选取第一个元素
- $("li:last") 选取最后一个元素
- $("li:not(.red)") 选取不是.red的那些元素
- $("li:even") 选取索引为偶数的行
- $("li:odd") 选取索引为奇数的行
- $("li:even") 选取索引为偶数的行
- $("li:eq(2)") 选取索引为index的行
- $("li:gt(2)") 选取索引大于index的行
- $("li:lt(2)") 选取索引小于index的行
- $("E:header") 选取标题元素,h1~h6
- $("E:animated") 选取正在执行动画的元素
- $("E:focus") 选取当前被焦点的元素

> 多用于表单 使用前要先获得焦点

## 内容过滤器

- $(':contains("文本内容")')选取含有"文本内容"的元素
- $(':empty')选取不含子元素或者含有空文本的元素
- $(':has(.red)') 选取含有.red元素的元素
- $(':parent') 选取含有子元素或文本的元素

  > 注意: 目标成了子元素:$("son").parent()

- $(':parents')

- $('div:parentUntil')===$('div').parentsUnitl

## 子元素过滤器

- $(":first-child")

  > $(":first")与$(":first-child")的区别是 first是所有的 first-child是指他父亲的

- $(":last-child")

- $(":only-child")

- $(':nth:child(2)') note:索引从1开始

## 过滤器常用方法

- $('.red').is('li') 判断.red的类型是不是li是返回ture
- $('li').eq(2).hasclass('classname') 判断li的父亲的第三个孩子是否有某个class

  > note:classname前面没有.

- $('li').slice('0,2') 选择从start到end位置的元素

- $('div').contents()获取某元素下面所有元素的节点,包括文本节点

- $('li').filter('.red') 匹配元素的子集构造一个新的jquery对象
