# vue 源码笔记

- makeMap(函数思想), 一个Map的填充

```js
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}
```

- 传入一个纯函数, 传出一个获取值的函数

```js
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

// use

var catchData = cached(function (str) {
  // 什么也不做, 这是错误的, 正确的做法, 这里应该做些操作, 在vue中 他用于把 a-b 变成了 aB (驼峰命名)
  return str
})

carchData('data')

```