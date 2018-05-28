# react路由
  此md为react路由3.0版本用法笔记,4.0版本改动较大,分开记录.

  此版本请使用15.0的react.
## 定义
  配置方式有两种,一下使用jsx语法是其中一种,还有另一种是对象数组的配置方法.

  - 路由其实是React组件
  - 引进一个对象,该对象有Router,Route,hashHistory,browserHistory,IndexRoute(默认路由);
  ```jsx
  // ...
  import { Router, Route, hashHistory } from 'react-router'
  render((
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  ), document.getElementById('app'))
  ```
### path 路径语法

- path/:name 以url方式传递一个name参数/参数必须穿
- path(/:name) 这个name参数可不传
- path/*.* 慎用,匹配所有包括文件 如 path/to/asdf/saf 或者 path/asdf/adsf/pei.avi

## 传递参数

### query传参 参数是通过router的path属性来传递的;
  