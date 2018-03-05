## this词法
- 看下面代码
```javascript
    var obj={
        id:'handsome',
        fun:function(){
            console.log(this.id);
        }
    }

    obj.fun();//handsome
    setTimeout(obj.fun,100);//nohandsome
```
- 因为函数传入了setTimeout后 this的指向改变了(解决办法是保存this的引用 var mythis=this);

- es6引进箭头函数
  - 箭头函数在涉及this绑定的时候与其他的绑定规则不一样,他并不改变this的指向,他直接用当前的作用域覆盖this本来的值.