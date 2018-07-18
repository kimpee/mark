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

## 在组件上使用 v-model
  
  v-model 多在 input 中调用，若是想把数据放在组件外部，组件内部的 input 显示的是外部数据，则可以在组件中绑定一个 props 值 然后在内部 input 中把值绑定为 value 然后 在 input 事件中 把 input 的value 的值传出去父组件，然后父组件在外面把这个值赋值给该值，如此完成了跨组件的 v-model

  ```html
    <template>
      <custom-input :value="value" v-on:changeValue="changeValue"></custom-input>
    </template>
    <script>
      export default {
        data () {
          return {
            value: ''
          }
        },
        methods: {
          changeValue (value) {
            this.value = value;
          }
        }
      }
    </script>
    <!-- custon-input -->
    <template>
      <input :value="value" @input = "$emit('changeValue', $envent.target.value)"></input>
    </template>
    <script>
      export default {
        props: ['value']
      }
    </script>
  ```

## solt

  solt 可以接收在父组件中向子组件中传输的内容（注意：并不是属性），给抽象组件带来更多的可能。

## 动态组件

场景：

一个动态切换导航，每次切换的组件都是不一样的。一样的建议传参数。

  ```html
    <component v-bind:is="currentTabComponent"></component>
  ```

上诉的 currentTabComponent 可以是一个

- 已注册的组件名字
- 一个组件的选项对象 ({name: 'suibian', component: {template: `<div>woshiasdfsdf</div>`}})

## 自定义组件的 v-model
