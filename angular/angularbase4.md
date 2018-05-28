# angular4.0
  angular 是出来得比较早的MVVM 框架,1.0版本和2.0版本差别较大,前者使用js居多,后者使用ts作为模版开发.

  cli命令
  <table>
    <thead>
        <tr>
            <th>应用程序</th><th>命令</th><th>快捷键</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>新建 (Class)</td>
            <td>ng generate class my-new-class</td>
            <td>ng g cl my-new-class</td>
        </tr>
        <tr>
            <td>新建组件 (Component)</td>
            <td>ng generate component my-new-component</td>
            <td>ng g c my-new-component</td>
        </tr>        
        <tr>
            <td>新建指令 (Directive)</td>
            <td>ng generate directive my-new-directive</td>
            <td>ng g d my-new-directive</td>
        </tr>
        <tr>
            <td>新建枚举 (Enum)</td>
            <td>ng generate enum my-new-enum</td>
            <td>ng g e my-new-enum</td>
        </tr> 
        <tr>
            <td>新建模块 (Module)</td>
            <td>ng generate module my-new-module</td>
            <td>ng g m my-new-module</td>
        </tr>  
        <tr>
            <td>新建管道 (Pipe)</td>
            <td>ng generate pipe my-new-pipe</td>
            <td>ng g p my-new-pipe</td>
        </tr>  
        <tr>
            <td>新建服务 (Service)</td>
            <td>ng generate service my-new-service</td>
            <td>ng g s my-new-service</td>
        </tr>                                     
    </tbody>
</table>

  启动了 cli 后,看 angular.json 配置文件.

  build 字段里声明了主组件.

  注意: angular 里用到的装饰器,都要 import 进来,如 Input, Output,Directive,使用的时候加上装饰符 @ 


## 基本操作
  ```typescript
  //主模块配置
  @ngModule({
    declarations:[//所有的组件与指令都要在这里定义
      AppComponent
    ],
    imports:[
      BrowserModule//imports进来的,此处这个东西是涌来解析ts的
    ],
    providers:[],//自己写的依赖注入
    bootstrap:[AppComponent]//并非是css框架,在这里理解为启动的意思,他启动了AppComonent跟组件.
  })

  //组件配置
  //组件属于指令
  @Component({
    selector:"app-root",//定义组件的作用域.
    templateUrl:"./app.component",
    styleUrls:"./app.component.css"
  })
  //指令配置
  @Directive({
    selector : '[h1]' // 用法:把这个 h1 当属性一样放在元素上,元素就会应用这个指令.
  })
  ```

## 指令类型
  angular里指令有四种类型,以下标题是类型下面是使用方法

  组件属于指令E类型(element)

### A(attr)
  属性类型指令
  `<div ng-kp></div>`
### E(element)
  组件类型指令  
  `<kp></kp>`
### 结构类型指令
  指代可以改变DOM 布局的指令 例如ngFor列表渲染,ngIF
### C(class)
  `<div class="actiove"></div>`


## 指令
  angular的指令以 ng 前缀开头

- 条件判断

  `ngIF`在 angular1 版本里 使用 ng-repeat

- ngSwitch指令



- 循环渲染

  `ngFor`
  ```html
  //angular 写法 *号是简写方式.
  <div *ngFor="let obj of datas; let idx = index trackBy: trackByName"></div>
  // Vue 写法
  <div v-for="(obj,idx) in datas"></div>
  ```  
  trackByName 方法是自己定义的方法,return 一个 字符串, 这个跟vue中的 key 原理是一样的

  模版输入变量,在angular中循环渲染可以用一下四种写法接受循环中生成的变量

  - let odd = odd(奇数)
  - let even = even(偶数)
  - let first = first(偶数)
  - let last = last(偶数)

- 内联样式绑定

  `<p [style.width.px]="mysize" [style.color]="red"></p>`

- 事件绑定
  用中括号表示.
  `<input type="button" value="config($even,args)"></input>`

- 双向绑定
  双向绑定比较特殊,只能用于表单元素,在使用的时候要import {FormsModule} from "@angular/forms" 
  `<input type="text" [(ngModule)]></input>`

- 本地变量
  可以理解为 vue中的 ref , 使用`#`定义
  `<input></inpupt>`

## 自定义指令

  可以使用命令创建,也可以手动创建.

  配置看上面基本操作
  ```js
  exprot class HighLight {
    constructor(el:ElementRef){//指令的构造函数接受一个形参.后面指定类型,el为DOM元素

    }
  //指令事件的定义 第一个参数为依赖注入的angular本身对象(此处是一个事件对象),
    @HostListener('$even',['$even']) onclick(even){
     console.log(even.target) 
    }
    //获取自定义属性的属性值
    @Input() ahl : string 
    @Input('ahl') age : string  //别名写法
  }
  ```

