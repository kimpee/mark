//  curry 实现 

function curry (fn, ...args) {
  let list = args || []
  let length = fn.length

  return function (...arg) {
    list = list.concat(arg)
    if (length < list.length) {
      // 这里展示不懂为什么要这样做
      // const that = list
      // list = []
      return curry(fn, ...list)
    } else if (length === list.length) {
      return fn.apply(null, list)
    } else {
      return '' 
    }

  }
}

function add (a, b, c) {
  return a+b+c;
}
var addtory = curry(add)

addtory(4, 5)

console.log('addtory', addtory(4, 5))