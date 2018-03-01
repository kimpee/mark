# 字符串

## 定义

* var str='';

* var str=new String('');

## length

* 中英文在js中都是代表一个长度

## 索引

* charAt() 兼容性更好ie 678 都会兼容

* str[5]  有兼容性

## (查找)判断字符串中 是否存在某个值

* indexOf()

* lastIndexOf()

* search() 支持正则表达式

* replace(str|regExg);(支持正则表达式) 
  查找并替换,这里只能替换一次,更多需求请使用正则表达式

## 分割

* splic(',') 以逗号将字符串分割开,分割后没有逗号

## 截取
* slice(start[,len]); 支持负数 len为-1 就截取到倒数第二位;
* substring(start[,end]);
* substr(start[,end]);支持负数

## 大小写转换

* toLowerCase() 全部转换成小写
* toUpperCase() 全部转换成大写

## es5 新增
* str[index] 通过索引值获取字符
* trim() 删除字符串两边的空格

## ascii码

* str.charCodeAt(3); //字符串的方法
* String.fromCharCode(94);//编码转换成字符 String对象的方法
### 正则基础

* 定义

* var reg=/adf/; 如果adf是变量 name字面量里面的adf还是字符串

* var reg=new RegExp('name'[,ig]) 如果adf是变量 name字面量里面的adf就是字符串

* 参数,字面量写在后面,构造函数写在第二个参数上  
  i 不区分大小写
  g 全局 即代表所有

