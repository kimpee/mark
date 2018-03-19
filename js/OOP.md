# 面向对象

# 原型对象
- 原型对象的属性和方法可以被所有的对象实例共享
  - 实例的原型对象是构造函数的prototype,构造函数的prototype也有原型对象,向上一级构造函数的prototype属性.
  ```javascript
    Person.prototype;
  ```
  - 所有的函数的prototype都有一个constructor属性指向自己

  - 判断原型和实例的关系
    ```javascript
      obj.constructor === Object
      obj instanceof Object

      // isPrototypeOf():判断当前对象是否为实例的原型
       Object.prototype.isprototypeOf(obj);

    ```
- es5 对象扩展
