# 依赖注入(这可是个很强大的东西)

## 为什么要依赖注入(DI)
### 场景: 在一个类中,需要用到其他类的功能或者特性.
  
#### 方法一:

  在类里面声明其他类的对象,然后使用该对象.

  缺点: `对象高度依赖于内部声明的类的对象,若是该对象更新了声明模式,如需要传进参数才能实例化对象,则这个类基本是废了,其次这个类的运行环境必须要有其依赖类的条件下才能正常运行.`

#### 方法二:
  把依赖类的对象,作为形参传递进来.

  优点 : `把方法一的缺点完全解决,依赖的对象是在外部传入,若是该依赖对象发生改变,只需要外部传入时改变,并不影响内部.`
  
  缺点 : `外部的工作大大增加,平时只需要创建一个类就可以使用,现在要创建所有依赖类`
  
##### 解决方案:
写一个巨型类(工厂类),由工厂类来生成所需要的对象.

缺点:

当依赖的类多是,这个类会变得好庞大.


## angular依赖注入
  创建一个可注入的 server 这是 angular 中依赖注入的实现.

### 注入器(injector)
  `let car = injector.get(Car)`

  完美,不需要知道Car内部依赖了哪些类,不需要往Car类中传参数,不需要工厂类来生产依赖对象,直接交给注入器,注入器就会给我们一个我们想要的Car类.

  1. 服务在 injector 中注册之前, 这个服务只是一个普通的类
  2. angular 的 injector 负责创建服务的实例,并把他们注入到组件中.
  3. 你很少需要自己创建注入器,angular 会创建这些的注入器,首先会在引导过程中创建一个 根注入器.
  4. angular 无法确定你是想自己创建服务实例,还是由 injector 来创建服务实例,所以 你需要配置 provider 来告诉angular如何确定创建该服务

### 服务(server)
  

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',//这个东西,告诉angular root injector 负责调用 HeroService 类来创建一个实例.这个实例在整个应用中都是可用的.
})
export class HeroService {
  constructor() { }
}
```

### provider
 为 injector  inject provider 的方式

- @Injectable 的provides 数组

  @Injecttable 装饰器指明了 哪些服务或者类 是用来注入的,他来能为这些服务提供配置项.
  ```TS
  import { Injectable } from '@angular/core';
  @Injectable({
    //以下两种都可以指定由哪些 注入器 生成服务.
    // providedIn: HeroModule, 
    providedIn: 'root',
  })
  export class HeroService {
    constructor() { }
  }
  ```

- @NgModule 的 providers 

  ```ts
  providers: [
    UserService,//直接指定服务类
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  ```
  第一条使用 UserService 这个注入令牌（injection token）注册了 UserService 类（代码中未显示）。 第二条使用 APP_CONFIG 这个注入令牌注册了一个值（HERO_DI_CONFIG）。

  借助这些注册语句，Angular 现在可以向它创建的任何类中注册 UserService 或 HERO_DI_CONFIG 值了。

- @Component providers

  ```ts
  import { Component } from '@angular/core';
  import { HeroService } from './hero.service';

  @Component({
    selector: 'app-heroes',
    providers: [ HeroService ],
    template: `
      <h2>Heroes</h2>
      <app-hero-list></app-hero-list>
    `
  })
  export class HeroesComponent { }
  ```

  `注意 : `上面三种方式配置 provider,到底如何选择,这里给出一些参考,当这个服务实例好多地方都要用到就用 @NgModule 的方式配置,如果需要小体积的打包就在服务上的 @Injectable 上配置.









    