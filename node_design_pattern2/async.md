# 异步

## 回调函数

在js中 回调是处理异步的最基础的技巧, 极其简单和万能.

## 回调地狱

回调地狱是指多个异步操作的嵌套,这会极度的降低可维护度和可读度

## 异步顺序执行

通过使用类似递归的技巧来达到 顺序的执行异步操作

```js
function foo (callbck) {
  let tasks = [...]
  function itearate (index) {
    ajax(tasks[index], function () {
      itearate(index + 1)
    })
  }
  itearate(0)
}
```