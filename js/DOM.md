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
    - ele.firstChild;(包括文本节点) 获得ele元素的第一个子元素 firstElementChild
    - ele.lastChild;(包括文本节点) 获得ele元素的最后一个子元素 lastElementChild
  - 获取兄弟节点
    - ele.nextSibling 获得ele元素的下一个兄弟节点
    - ele.previousSibling 得到ele元素的上一个兄弟节点

## 常用标准属性


## 元素方法
- get/setAttribute();
- removeAttritube();
- removeAttribute(attr)//删除属性attr
- ele.hasAttribute(attr)//判断是否存在属性attr

## 盒模型属性

- offsetWidth/height();// 盒模型的宽高 (border+padding+content)
- offsetLeft/Top(); //距离定位元素的距离
- clientLeft/Top//代表上边框/左边框的宽度
- clientWidth/Height//盒模型的宽高 (padding+content)
- scrollLeft/Top //当前元素滚动条滚动的距离
- scrollWidth/Height  // 滚动条的高度(总高度),有兼容问题

## 获取计算后的css属性
- getComputedStyle(ele[,pseudo]);
- ie8 currentStyle()

## table对象(了解)

- rows 返回包含表格中所有行的一个数组
- tBodies 返回包含表格中所有tbody的一个数组
- insertRow(index) 在表格中插入一个新行
- deteleRow(index) 从表格删除一行

## tr对象属性&方法
- cells 返回包含表格中所有单元格的一个数组
- rowIndex 返回该行在表中的位置
- sectionRowIndex 返回在 tbody thead tfoot中行的位置.
- insertCell(index) 在一行中的指定位置插入一个空的列
- deleteCell(index)删除行中的指定的单元格

## td/th 对象属性&方法
- cellIndex 返回单元格在表格行的单元格集中的位置.
