# react基础
  - 默认属性在16.0版本的react中转移到prop-type,包
  - 3.0的react-router,使用的是15.0的react,所以使用react套件时,注意版本问题
  - 引入
    ```html
    <!--React 核心库-->
     <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <!--React 跟 Dom 相关的功能库-->
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <!--babel 库，将 JSX 语法转为 JavaScript 语法-->
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
    ```
## jsx语法糖
  1. 不加引号,且一定要有标签结束符号`/>`

  ```html
  <div id="app"><div>
  <!-- 标签type一定要写text/babel -->
  <script type="text/babel">
    var h1 = <h1>我是一个H1</h1>;
    
    <!-- 核心渲染方法 -->
    ReactDOM.render({
      h1,document.querySelector('#app');
    });
  </script>
  ```

  2. 只能有一个根节点
  3. 不能在标签当中注释
  4. 可以和js混合

  ```jsx
  var a = 'name'
  var h1 = <h1>{a}</h1>

  ``` 
## 技巧
   在react中,当某个组件的状态发生变化时,会更新整个组件树的下级,如果下级组件确定不需要更新,可以使用 PureComponent组件包裹子组件 和 shouldComponentUpdate(),手动阻止子组件更新,而这种方法都必须要该自组件的更新完全取决于props时,才完美运行. 

---------------------------------


# 大神的概念
  
  react作者认为把组件分为两类比较好维护,比喻为表面组件(presentational)/容器组件,肥/瘦,聪明/蠢萌,有状态/无状态,屏幕/组件

## peesentational(表面组件)
  - 关心如何展示
  - 可能包含表面组件和容器组件,通常有一些DOM的特征和样式表
  - 经常允许this.props.children containment
  - 不依赖于APP
  - 不指定数据的加载或者突变.也就是不做数据操作
  - 只通过props接收数据
  - 很少有自己的数据,就算是有,都是跟UI有关的数据
  - 通常是用函数组件的写法创建,除非有自己的state
  - eg: Page, Sidebar, Story, UserInfo, List.

## container
  - 关心如何工作
  - 可能包含两者,但是除了warpper div 其他东西绝对没有dom特征,绝对没有样式
  - 提供数据给其他的容器组件或者表面组件
  - 调用action并把他作为回调给表面组件
  - 通常是有状体的,因为他们提供数据
  - 他们通常是更高阶组件生成,比如react-redux的 connect函数,而不是手写
  - eg: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

## 好处
  - 更好的分离问题,让你更理解自己写了啥
  - 可重用性大大提升,你可以使用相同的表面组件去显示不同的数据.或者把他放进另外一个容器组件中进一步重用
  - 表面组件实际上是你的app的调色板,你可以把它放在一个但页面应用上,让设计师调整样式,且不会影响他的逻辑
  - 迫使你提取布局组件

### 何时引入容器组件

  作者建议,一开始使用表面组件来构建你的app,当你意识到(其实一定会遇到),你往中间组件传入了太多的`props`,其实一些中间组件用不到他们接收的`props`只是将他们转发,所以当你要在你的`children`组件需要更多的数据的时候,你不得不去改写中间件,这就是时候引入容器组件,通过这种方式,你可以把数据和行为`props`放到叶子组件,而不会增加中间组件的负担.

  这是一个持续的过程,所以不要想着一定要达到标准,如果你尝试这种模式,你会在提取容器组件的时候有直观的感觉.

  - 有状态和无状态(state)<br>
  这不是一个硬性规则,两者都可以有

  - 函数和class(两种定义state的方式)<br>
  除非你使用state 性能优化,和声明周期,不然我建议你使用函数组件

  - 纯组件和非纯组件<br>
  如果你传入相同的`props`和`state`返回一个相同的结果,那这个组件就是纯组件.函数组件和类组件都可以做到这点,并且state也是可有可无,另外一个重要的点是state和props都不依赖突变(也就是在内部不改变state和props),所以他们渲染的信息都可以在shouldComponentUpdata()钩子函数中优化,当前来说只有类组件能定义shouldComponentUpdata,但是这回在未来改变.

  表面组件倾向于,无状态(state),纯函数,而容器组件倾向于有状态(state),纯calss,但是这并不是规则,有时候也是不一样的.(言外之意,靠你自己理解了兄弟)
  
  Remember, components don’t have to emit DOM. They only need to provide composition boundaries between UI concerns.

    
