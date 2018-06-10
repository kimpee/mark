# vue组件基础

- 一个组件的模版只能包含一个根元素
- data必须是一个函数;
- prop,ref,$emit('functionname',parmas);这些都是组件通信的手段

## 定义

  ```html
  <script>
    // 全局
    Vue.component('componentname',{
      template:"<p>哈哈</p>"
    })
    // 局部
    new Vue({
      components{
        componentname:{
          template:"<p>哈哈</p>"
        }
      }
    })
  </script>
  ```
