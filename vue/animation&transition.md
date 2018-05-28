# vue动画过渡
  - `enter-to` 和 `leave-to`在2.18的版本后才有
  - 有时候<transition-group>不可用,可以用is来结局这个问题`<tbody is="transition-group">`(is可以绑定在dom中绑定组件)
## 过渡

### 在transition组件中插入或者删除数据,vue会做一下事情
  1. 自动嗅探transition有没有使用了过度,如果是,在恰当的时候添加/删除类名
  2. 如果过渡组件提供了javascript钩子函数(生命周期函数),这些函数会在恰当的时候调用
  3. 如果以上都没有,那么插入和删除操作早下一帧中马上执行,此处帧是指浏览器逐帧动画的机制


### 过渡的类名
  1. v-enter: 定义进入过渡的初始状态,在元素插入之前生效,在元素插入之后的下一帧移除
  2. v-enter-active:定义进入过渡生效时的状态,在整个过渡阶段应用,在动画/过渡完成之后移除.
  3. v-enter-to: 定义进入过渡的结束状态,在元素插入之后的下一帧生效
  4. v-leave :定义过渡离开时的初始状态,在元素删除的立即生效,下一帧移除
  5. v-leave-active:定义离开过渡生效时,
  6. v-leave-to:定义离开过渡的最终形态,在元素删除之后的下一帧生效

  个人理解:`动画从enter状态到enter-to状态,enter-active通常是定义transition,因为次状态在动画过程中一直有`
  ```html
  <style>
    .fade-enter-active{
      transition: all .5s;
    }
    .fade-enter{
      opacity:0;
    }
  </style>
  <div id="app">
    <button @click="show=!show">toggle</button>
    <transition name="fade">
      <p v-if="show">呵呵</p>
    </transition>
  </div>
  <script>
    var app = new Vue({
      el:"#app",
      data:{
        show : false
      }
    });
  </script> 
  ```
  
## 动画
  - vue动画和vue过渡用法一致,不同的是,v-enter类名在节点插入DOM后不会立即删除,而是在animationend 事件触发时删除.

### 自定义动画
  1. enter-class:
  2. enter-active-class
  3. enter-to-class;(2.1.8)
  4. leave-calss
  5. leave-active-class
  6. leave-to-class(2.1.8)

  对于三方的动画库的同时使用很有作用

  eg: 
  ```html
  <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  <div id="app">
    <transiton 
    name="custom"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
    > 
      <p>哈哈哈</p>
    </transiton>
  </div>
  <script>
    new Vue({
     el:"#app" 
    })
  </script>
  ```

  ### 同时使用过渡和动画
    - vue为了知道过渡的完成,必须设置相应的监听函数,如果你是用了其中的一中,vue会自动的识别并设置监听.如果你同时使用了两种,你可能需要设置一个type来确定是`animation`或者'transition'

### 显性的过渡持续时间(2.2新增.我不懂)
   在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 transitionend 或 animationend 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一序列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。

  在这种情况下你可以用 <transition> 组件上的 duration 属性定制一个显性的过渡持续时间 (以毫秒计)：
  ```html
  <transition :duration="1000">...</transition>
  ```
  你也可以定制进入和移出的持续时间：
  ```html
  <transition :duration="{ enter: 500, leave: 800 }">...</transition>
  ```
### javascript钩子
  - 可以在属性中声明javascript钩子函数
  ```html
    <transiton
      @before-enter:"beforeEnter"
      <!-- 与CSS结合时候使用最好 -->
      @enter:"enter"
      @after-enter:"afterenter"
      @enter-cancelled:"enterCancelled"

      @before-leave:"beforeLeave"
      <!-- 和css结合时使用最好 -->
      @leave:"leave"
      @afer-levae:"afterLeave"
      @leave-cancelled:"leaveCancelled"
    >

    </transiton>  
  ```

  `当只用 JavaScript 过渡的时候， 在 enter 和 leave 中，回调函数 done 是必须的 。否则，它们会被同步调用，过渡会立即完成。`

  对于仅仅用`javascript`过渡时候,使用v-bind:css="false" 以防止css对过渡的影响



### 初始渲染的过渡
    初始渲染使用transition的appear appear-class appear-active-class 三个属性,
  ```html
  <style type="text/css" media="screen">
    .fade-enter{opacity: 0;}
    .fade-enter-active{transition: all 3s;}
  </style>
  <div id="app">
    <transition appear appear-class="fade-enter" appear-active-class="fade-enter-active">
        <img src="imgs/green.jpg" />
    </transition>
  </div>
  <script>
    new Vue({
      el:"app",
    })
  </script>
  ```
  <!-- 用到再看暂时先知道这么多 -->