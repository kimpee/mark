# proxy

## 语法

`new Proxy(target={}, handle={}`

handle的属性, 都是函数

下面 target是原对象, propKey是操作的key,value是赋值的值, propDesc 描述符对象(configuable,writable,enmuable,value), proto 原型对象(其实也是一个对象),若属性是 configurable 是false 或者 writable false

- get(target, propKey, receiver)

  拦截对象的读取 返回一个值

  可以做filter 可以做点手脚在把值抛出去, 也可以做个记录 配合set还可以实现私有属性的设置

- set(target, propKey, value, receiver)

  拦截对象的赋值,返回 Boolean

  可以做filter 设置值的时候可以做视图更新,配合set还可以实现私有的属性

- has(target, propKey)

  拦截 propKey in proxy 的操作 返回Boolean

  in 操作符会触发这个方法,可以实现属性的隐藏. 返回false 表示属性不存在

  如果某个属性不可配置,或者目标对象不可扩展,比如设置了configurable  或者 preventExtension has就不能返回false, 即不能隐藏对象.

  for...in... 不生效

- deletePrototy(target, propKey)

  拦截 delete 操作 返回 boolean 返回false 表示删除不成功

- ownkey(target)

  拦截 Object.getOwnPropertyNames(proxy), Object.getOwnPropertySymboal(proxy), Object.keys(proxy) 这个只返回可遍历的属性数组, 返回数组
  
- getOwnPropertyDescriptor(target, propKey, propDesc)

  拦截Object.getOwnPropertyDescriptor(proxy, propDesc) 返回属性描述符对象

- definedProperty(target, propKey)

  拦截Object.definedProperty(proxy, propKey) Object.definedProperties(proxy, propDescs) 返回一个 boolean

- preventExtensions(target)

 拦截 Object.preventExtensions(proxy) 返回一个boolean

- getPrototypeOf(target)

  拦截 Object.getprototypeOf(proxy) 返回proxy 的原型对象(其实就是一个普通对象)

- isExtensible(target)

  拦截 Object.isExtensible(proxy)

- setPrototyOf(target, proto)

  拦截 Object.stePrototypeOf(proxy, proto)

- apply(target, object, args)

  Proxy实例作为函数调用的操作(拦截的是 call(), apply() 等等的操作),比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

  apply接收的是3个参数,目标对象,目标对象的上下文对象(this),参数数组

  `var proxy = new Proxy(function () {}, handler)` 这样声明的proxy 调用时就会触发apply

- construct(target, args, newTarget)

  拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)

以上都是针对proxy实例,别不是 target 对象

## Proxy的方法

- Proxy.revocable() 返回一个可取消的Proxy实例

```js
var {proxy, revoke} = new Proxy({},{});
proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // 抛出一个错误
```

当revoke 调用了之后,proxy对象不能获取值,也不能设置值

## this问题

`var proxy = new Proxy(target,handle)`

proxy.xxx 时, target内的this指向proxy
target.xxx 时, target内的this指向target