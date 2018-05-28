# react事件
  - 在react中所有的事件this都是指向undefind
  - 使用的时候都要手动修改this指向
## 解决时间this指向
  1. 时间定义使用箭头函数`click=()=>{}`
  2. 时间的调用使用箭头函数`<div onClick={(e)=>{this.click(e)}}></div>`
  3. 构造函数中使用bind
  4. 时间调用时用bind

  参数正常传递,注意第一个参数是event对象

##  ref
  - 可以通过ref获取dom元素然后在调用方法`this.refs.name`(name是ref属性的值),es6调用的时候要bind(this);
  - 不要多度使用ref,能不用就不用

