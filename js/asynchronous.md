# 异步编程

## 回调

## promise

- promise思想

从前我们的回调都是,我们完成了以后,就执行别人传进来的回调.

现在我们换一种思路来思考一下,现在我们不需要关心异步什么时候完成,我们交给一个对象去监听这个异步函数,等这个异步完成了以后,这个监听器就会发出一个事件来告诉我们,异步,已经完成了.

```js
function foo (x) {
  // 这里做一些异步操作

  return listener
}
var evt = foo(x);
evt.on('complete', (x) => {
  // 现在我们可以开始下一步
})

evt.on ('error', (x) => {
  // 异步执行过程中出现了错误
})
```

我们调用foo 的时候 又监听了他 , 实质上, foo(...)甚至不知道调用他的代码监听了这些事件,这叫作 `关注分离`(separation of concerns).

现在这个evt就是 在分离的关注点中做交涉, 回调中有一个特点就是控制反转, 把控制权交给了别人传进来的回调. 使用事件就是把控制 反转再反转,把控制权归还给我们.

```js
const evt = foo(42);
bar(evt);
baz(evt);
```

像这样,bar baz 不需要理会foo 是否执行完毕, 甚至不知道 foo的存在, 反之亦然.

`注意` 我们监听的promise 解析事件,并不是严格意义上的事件(但是表现得很像时间)----响应式编程

### thenable duck typing

鸭子类型,`如果一个东西看起来像鸭子,叫起来也像一只鸭子,那么他一定就是鸭子.`

promise instanceof Promise 并不完全够用,因为他会重其他的途径获取到promise对象, 例如,其他浏览器或者,iframe 或者不同库的promise 实现.

千万不要用一个有then方法的对象或者函数来完成一个promise.

### trust of promise

工作队列 (jobs) 一种es6 新引入的异步概念.

工作队列 是建立在事件轮询的基础上(even loop), 工作队列的任务,排列在每一次事件轮询的 tick 的末尾,也就是说 工作队列的任务可以插队,不需要重新插入事件轮询队列,而是在一次事件轮询的 tick 期间插入到末尾.

### 错误处理

如果promise 期间发生错误(js错误), promise会立即变成 reject 状态并且调用你传入的reject 回调,并且把错误信息传出.

### 可信的promise 

可以用Promise.resolve() 来包装一个thenable 使他变成一个纯正的Promise

### 链式流程

