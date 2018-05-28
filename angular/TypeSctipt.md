# typeScript

## 特性:

- 构造器语法

  可以同时声明变量和参数
  ```ts
  constructor(private name){}
  //等同于
  private name;
  constructor(name){
    this.name = name;
  }
  ```