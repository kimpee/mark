# the revealing constructor pattren

揭示构造函数模式(domenic) *domennic is a man*

目前我的理解就是 在一个构造函数里面 传入一个函数(这个函数称为执行器函数),把需要隐藏的内容(属性)在该函数里使用, 这样这个构造函数的实例就不可以在外部改变或者使用隐藏的内容(属性)

## promise

promise使用了这种模式, revealing constructor pattern.

```js
const promse = new Promise((resolve, reject) => {
  // 这里的逻辑会再Promise 初始化的时候执行,并且只有Promise 内部才能处理 resolve, reject
})
```