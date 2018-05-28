# vuex

## 
  - vuex.store
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