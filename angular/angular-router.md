# 路由

## 定义

1. 创建 Routing'模块
2. 在根模块的imports 声明 Routing 模块
3. 在Routing 模块 import RouterModule Routes from '@angular/router'
4. 在Routing 模块的 @NgModule 的exports 数组 导出 RouterModule
5. 配置路由表, const routes: Routes=[{path:'abc',component: xxxComponent}]
6. 在Routing 的 @NgModule imports 数组里 使用 RouterModule.forRoot(routes)
7. 在 组件内 写 <router-outlet></router-outlet>


## 跳转

1. 使用 <a routerLink="/abc"><a/>
2. 传参 <a routerLink="/abc/:id"><a/>

## 从组件中接收路由的参数
```ts
import { ActiveRoute,Router } from '@angular/router'

class xxxComponent{

  constructor(private route: Router , private route: ActiveRoute){
    const id = +this.route.snapshot.paramMap.get('id'); //获取 ID
    //route.snapshot 是一个路由信息快照,抓取自刚刚创建完毕
    //paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。
  }
}

```