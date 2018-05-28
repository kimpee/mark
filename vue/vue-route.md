# vue-router

## 基本使用
  - vue-router依赖vue一齐使用
  - 如果是模块化的使用(即使用vue-cli) 需要全局使用vue-router
  - 在html页面上,使用`<router-link></router-link>`标签触发组件
  - 用`<router-view></router-view>`标签标志组件渲染的地方
  ```js
  import VueRouter from 'vue-router';
  Vue.use(router);

  //配置router
  // name属性未明
  routes=[
    {path:"/pathname",name:name,component:"componentname"},
    {path:"/pathname",name:name,component:"componentname"},
  ]
  //创建router对象
  let router = new VueRouter({
    routes
  });
  //传入Vue实例
  new Vue({
    //el属性不是必须,但是个人感觉有最好,App组件内最好放个id #app
    el:"#app",
    router,
    //渲染组件,把组件传入render属性内,这个属性是一个函数
    render:h=>h(App)
  });
  ```

## 传递参数(动态路由)
  ```html
  <router-link to="/usrer/kimpee"> </router-link>
  ```
  ```js
  routes=[
    {path:"/pathname/:username",name:name,component:"componentname"},
    {path:"/pathname/:pwd",name:name,component:"componentname"},
  ]
  ```

## 相应路由参数变化(动态路由)
  - 当你传不同的参数进入路由的时候,其实触发的是同一个组件,原来的组件实例会被复用,并不会重新渲染(但是数据会更新),所以组件的生命周期钩子函数并不会触发.
  - 若想在参数变化的时候做一些骚操作,可以在watch属性上定义函数
    ```js
    new Vue({
      watch:{
        $route:function(){
          console.log('参数改变了哟,帅哥');
        }
      },
      beforeRouteUpdata(to,form,next){
        next();
      }
    })
      //或者注意这是2.2版本引入的
    ```


## 路由嵌套
  - 通过路由触发的组件中存在路由(`router-view`,`router-link`),就叫做路由嵌套.
  
  ```html
  //这个是代码写法
  <div id="app">
   <router-view></router-view> 这里显示User,User里有个<i>router-view</i>去显示其他路由触发的组件.
  </div>
  <script>
  const User = {
   template: `
      <div class="user">
       <h2>User {{ $route.params.id }}</h2>
       <router-view></router-view>
     </div>
    `
  }
  let rotes = [
    {path:"/person",component:cp1},
    {path:"/person/:username",component:User,children:[
      //最终渲染出来的路由路径是/person/username/message
      //同时/message也可以触发此组件
      {path:"/message",component:children}

    ]},
  ];
  <script>
  ```

## 编程式导航(路由的编程实现,即免去`router-link`标签)

  - router.push(location,onComplete?,onAbort?)
  - 在vue内部,可以使用`this.$router.push()`;

  location是一个字符串路径,或者是一个描述路径的对象
  ```js
  //字符串
  router.push('home');
  //对象
  router.push({path:"home"})
  //命名路由 有name的情况下不需要path?
  router.push({name:"myname",path:"/home"})
  //参数路由
  router.push({path:"/home",params:{username:"kimpee"}})
  //带参数查询:最终渲染结果为 .../home?ueername=kimpee
  //设置了path,params会被忽略
  router.push({path:"/home",query:{username:"kimpee"}})
  ```


  *如果目的地与当前的路由相同,只有参数发生了改变,你需要使用`beforeRoyterUpdate`属性中传入方法来*

  - router.replace(locatino,onComplete?,onAort?);
    - 用法和push差不多,和push不一样的是replace不会添加历史记录,即替换掉历史记录
  - `router.go(n)` 
    - 穿梭历史记录,可以前进或者后退
  - 操作history

## 命名路由
  - 配置路由的时候可以设置名称
    - rotes=[{name:"home",path:"/home"}]; 名字随意,在链接到这个路由的时候,可以使用名称连接
    - `<router-link to="{name:"路由的名字"}"></router-link>`可以传一个对象;
    - 

## 命名视图(多个`router-view`)
  ```html
  <!-- 没有name属性,默认为default -->
  <router-view></router-view> 
  <router-view name="aside"></router-view> 
  <router-view name="content"></router-view>
  <script>
    let routes = [{
      //以上的name值在对应,下面的key值,没有名字,默认为default值
      name:"home",components:{default:componentName,aside:aside,content:content}
    }];
  </script> 
  ```

## 嵌套命名视图
  - 其实就是在嵌套路由的情况下再嵌套了多个视图;
  ```js
  const router = new VueRouter({
    routes: [
        {path: '/login', component: login},
        {path:"/home/:com",name:"home",components:{
          //components是一个嵌套视图的实现
          default : defaultcomponent,
          nameview: nameviewcomponent
        }},children:[
          //children是一个嵌套路由是js实现
          {path:"/children",component:component}
        ],
        {path:"/loading",name: "loading", component: loading}
    ]
  })
  ```


## 注意

  *同一个路径可以匹配多个路由,路由具有优先级,谁先定义,谁最高*

  _`router-view`一般要通过`router-link`或者编程模导航才能触发,不能单独使用_