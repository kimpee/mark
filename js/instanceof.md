# instanceof 原理

    instanceof 可以判断对象的类型(js中没有类,其实判断的是原型链上的委托对象)

```js
console.log(Object instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Number instanceof Number);//false
console.log(String instanceof String);//false
console.log(Function instanceof Object);//true
console.log(Foo instanceof Function);//true
console.log(Foo instanceof Foo);//false
```

解释上面问题,需要 instanceof 运算符定义

instanceof 判断的是 左边的隐式原型是否等于右边的prototype

```js
    Function instanceof Function // true
    Boolean instanceof Boolean // false 因为左边的__proto__ 是Function.protorype
```