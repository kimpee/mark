# reflect

## 此API的目的

  Proxy和reflect出现的目的都在于操作对象

  把一些明显属于语言内部的方法放在Reflect对象上,(比如Object.defineProperty())

  修改某些Object方法的返回结果,Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false,

  使命令式行为变成函数行为.eg: 'assign' in Object equals Reflect.has(Object, 'assign')

  Reflect的方法跟proxy的方法都是一一对应的, 所以你再Proxy里面修改的行为, 能在Reflect 里面获取默认行为

## API

receiver 是一个对象,任意对象,args指数组 , target 传错会报错, 一定要是对象

- Reflect.construct(target,args)

  构造函数 代替 new 操作符
- Reflect.apply(func,thisArg,args)

  func 是函数, thisArg是this 指向, args 参数 数组
- Reflect.get(target,name,receiver)

  在target上查找属性name,没有返回undefined,如果该属性有getter 那么该getter的this 指向 receiver
- Reflect.set(target,name,value,receiver)

  在target上的name 设置成为 value 如果该属性绑定了setter 那么setter的this 指向receiver 改函数会触发 Proxy.definedProperty() 的拦截
- Reflect.defineProperty(target,name,desc)

  定义target的属性描述符
- Reflect.deleteProperty(target,name)

  删除target的name
- Reflect.has(target,name)

  对应 in 操作符 it will 遍历原型上的可遍历属性, for in 不会
- Reflect.ownKeys(target)

  Object.keys()
- Reflect.isExtensible(target)

- Reflect.preventExtensions(target)

- Reflect.getOwnPropertyDescriptor(target, name)

- Reflect.getPrototypeOf(target)

  如果参数不是对象, 报错

- Reflect.setPrototypeOf(target, prototype)

```js
var obj = new Proxy({}, {
  set (target, name, value, receiver) {
    // 保证默认行为
    var success = Reflect.set(target, propKey, value, receiver);
    // 添加额外行为
    if(success){
      console.log('set success'))
    }
    return success
  }
})
```
