# vue基础笔记
  - 用key来管理复用的元素
    ```html
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input>
    </template>
    //label并不会重新渲染,因为他并没有key值
    ```
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
  - `v-bind:href`:后面的叫参数.
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
    - 尽可能在v-for时提供key `:key="obj.id"`;
    - 在2.2以上版本,`v-for`用在组件上必须要加key属性
    - `v-for`跟组件一起使用的时候,尽量不把item自动的绑定在组件里面,明确组件的来源,能够使组件在其他场合重复使用.
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
  - `v-once` //没有属性值,使用后该元素数据只会更新一次
  - `v-html="rawhtml"` //双大括号内不能解析html文本,使用此属性可以将双大括号内的变量变成解析成html
  - `v-show` (这个会把元素保留在dom结构中)
    - 此指令不支持 v-else
  - `v-if` vs `v-show`
    - 频繁的切换,用`v-show`
    - 运行时,条件很少改变,用`v-if`

## 组件

  - `template`属性的值,可以是css3选择器
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

## 数组更新检测(下面方法调用时,dom对象也会刷新)
   - push()
   - pop()
   - shift()
   - unshift()
   - splice()
   - sort()
   - reverse()
   - 注意事项
    ```javascript
    let vm = new Vue({
      data:{
        items:[4,4,4,4]
      }
    })
    vm.items[1]= 'x';
    vm.items.lenght = newvalue;
    //以上两个不会引起dom元素重新渲染,用以下方法解决此类问题
    //解决第一个
    Vue.set(vm.items,indexofinfo,newvalue);
    vm.items.splice(startindex,deleteaccout)
    vm.$set(vm.items,indexofinfo,newvalue);//(这个方法是全局方法的一个别名)
    //解决第二个问题
    vm.items.splice(newvalue);
    ```

## 对象(由于javascript的限制,对象的属性的添加和删除检测不到)
  - 可以使用vm.$set()  Vue.set() 解决
  - 赋予多个新属性
  ```js
  vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
  })
  ```
