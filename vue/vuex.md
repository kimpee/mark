# vuex

## vuex.store

   ```js
   //store.js
   import Vue from 'vue';
   import Vuex from 'vuex';
   Vue.use(Vuex); // 全局使用Vuex
  //  const vue = require('vue')
  // 注意属性名一定要是state 和 mutations
  // 大写的S
  const store = new Vuex.Store({
    state:{name:"Joey"},
    mutations:{
      log(){
        console.log('恭喜恭喜恭喜你呀');
      }
    }
  });

  export default store;

  //使用
  import store from './store'
  
  new Vue({
    template: `<p>{{$store.state.count}}</p>`,
    store,
    mounted(){
      this.$store.commit('log');
    }
  })
   ```

    Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

## mutations

  改变state 的 唯一途径 里面的方法决定state 如何改变 类似 redux 的 reducer  并且 所有操作均为同步操作

## action

  可通过执行 mutations 里的方法去改变state 并且 多事异步操作,在回调函数里调用 mutations 里的方法

## modules:{}

  写在 store 里面 里面是 多个 store 的子 store 里面有store 该有的属性 不过是局部的 , 最后在store 里面 全部声明, 框架内部会帮我们合并store

  ```js
  const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
  }

  const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
  }

  const store = new Vuex.Store({
    modules: {
      a: moduleA,
      b: moduleB
    }
  })

  store.state.a // -> moduleA 的状态
  store.state.b // -> moduleB 的状态
  ```