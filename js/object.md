# object 笔记

## 静态方法

- Object.is(x, y)

这个东西比 === 更严格 在这里 NaN is NaN, -0 is -0

## symbol 类

- Object.getOwnPropertySymbols(object): Array<>

获得对象上的 symbol 属性 key

- Object.setPrototypeOf(sonobject, fatherobject): sonobject

设置对象的原型对象 第一个参数未target 第二个参数未 target 的 prototye

- Object.assign(targetobj,originobj1,.....)

浅拷贝, 只复制可枚举的, 包括 symbols 返回第一个参数, target

源对象的属性描述符不会拷贝到target