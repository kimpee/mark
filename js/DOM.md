## 文档对象模型

- 获取body
  - document.body
  - document.head

- 获取元素节点方法
  - document.getElementById(id);
  - document.getElementByTagName(tagname);
  - document.getElementByClassName(tagname);
  - document.getElementByName(tagname);

## 节点操作

- 节点属性
  - nodeName
  - nodeType
  - nodeValue

- 节点方法
  - 创建:
  - document.createElement();
  - document.createTextNode();
  - document.createAttribute();

  *常见报错:connot read property 'appendChild' of null*

  - 插入:
  - parent.appendChild();
  - parent.inserBefore(new,node);在指定的子节点node前插入新的子节点new
  - ele.setAttributeNode(attrNode); 在指定的元素中插入一个属性节点 (不推荐)

  *innerHTML 代替那个添加文本节点*

  - 复制
  - cloneNode(boolean) 复制节点,true 是深复制

  - 删除
  - parent.removeChild(ele) 删除并返回节点

  - 判断:
    - parent.hasChildNodes() 判断当前节点是否拥有子节点,返回布尔值

- 利用节点关系获取其他节点
  - 获取父级节点
    - ele.parentNode 得到ele元素的父节点   parentElement
  - 获取子节点 
    - ele.childNodes 得到ele元素的全部子节点列表(类数组)    用children可兼容ie 
    - ele.firstChild 获得ele元素的第一个子节点 firstElementChild
    - ele.lastChild 获得ele元素的最后一个子节点
  - 获取兄弟节点 lastElementChild
    - ele.nextSibling 获得ele元素的下一个兄弟节点
    - ele.previousSibling 得到ele元素的上一个兄弟节点

## 常用标准属性


## 元素方法
- get/setAttribute();
- removeAttritube();
- removeAttribute(attr)//删除属性attr
- ele.hasAttribute(attr)//判断是否存在属性attr

## 盒模型属性

- offsetWidth/height();
- offsetLeft/Top();

## 获取计算后的css属性
- getComputedStyle(ele[,pseudo]);
- 
