# vue基础笔记
  - 模版

    vue允许采用模版来声明式的讲数据渲染进dom元素,也叫文本插值

    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <div id="app">
      <h1>{{title}}</h1>
    </div>
    ```
    ```js
      let vue = new Vue({
        el:"#app",
        data{
          title:"恭喜恭喜"
        }
      });
    ```

## 指令
  - `v-bind`

    类似v-bind 被称为指令,指令带有v-前缀,指令只作用于宿主元素;
    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <div id="app">
      <h1 v-bind:title>{{title}}</h1>
    </div>
    ```
    ```js
      let vue = new Vue({
        el:"#app",
        data{
          title:"恭喜恭喜"
        }
      });
    ```

  - `v-if`
    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <div id="app">
      <h1 v-if="show">{{title}}</h1>
    </div>
    ```
    ```js
      new Vue({
        el:"#app",
        data:{
          show:true
        }
      })
    ```
  - `v-for`
    - 可以循环的属性包括,数组,对象,字符串,数字
    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <div id="app">
      <h1 v-for="(val,idx) in 3">{{title}}+{{val}}</h1>
    </div>
    ```
    ```js
      new Vue({
        el:"#app",
        data:{
          show:true
        }
      })
    ```
  - `v-on`
    - 处理时间的函数放在methods属性里
    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <div id="app">
      <h1 @click="click" v-for="(val,idx) in 3">{{title}}+{{val}}</h1>
    </div>
    ```
    ```js
      new Vue({
        el:"#app",
        data:{
          show:true
        },
        methods:{
          click:function(){
            console.log("点击我了",this);
          }
        }
      })
    ```
  - `v-model`
  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <div id="app">
    <h1 @click="click" v-for="(val,idx) in 3">{{title}}+{{val}}</h1>
    <input v-model="message" type="text" name="" value="">
  </div>
  ```
  ```js
    new Vue({
      el:"#app",
      data:{
        show:true,
        message:"恭喜恭喜恭喜你呀"
      },
      methods:{
        click:function(){
          console.log("点击我了",this);
        }
      }
    })
  ```

## 组件
  - 没有`props`属性的组件很单调,数据并不会发生动态改变;
  - 有`props`属性时候,在template属性里面的html表达式内可以使用`props`内的对象
  - 每一个组件都要加个`key`值,且`key`值不能在`template`内使用
  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <div id="app">
    <div class="">
      <test
        v-for:"item in demodatas"
        v-bind:demo:"item.data"
        v-bind:demos:"item"
        v-bind:key"item.id"
      >
      </test>
    </div>
  </div>
  ```
  ```js
    Vue.component("test",{
      props:['demo','demos'],
      template:"<p>{{demo}}+{{damos.data}}</p>"
    });
    new Vue({
      el:"#app",
      data:{
        demodatas:[
          {id:1,data:"一追再追"},
          {id:1,data:"风继续吹"},
          {id:1,data:"当年情"}
        ]
      }
    })
  ```
