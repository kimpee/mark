# 正确使用 react 动画的方法

  以往动画的实现,js使用不停操作dom元素或者使用css 加 transition 来实现,但是在 react 中并不推荐直接操作dom那么动画又该如何搞掂呢,下来让我们来揭晓

##　方式一
  利用　componentWillReceiveProps(nextProps) hook (钩子)函数,is a bad way

  ```js
  import React from 'react'
  import {findDOMNode} from 'react-dom'
  class FadeComponent extends React.Component{
    constructor(){
      super()
    }
    componentWillRecevieProps(nextProps){
      if(nextProps.visible !== this.props.visible){
        if(nextProps.visible){
          $(findDOMNode(this)).stop(true,true).fadeIn('slow');
        }else{
          $(findDOMNode(this)).stop(true,true).fadeOut('slow');
        }
      }
    }
    render(){
      return <div className="example"></div>
    }
  }
  ```

  <p style="color:red">以上方法获得原始的DOM 元素,直接操作DOM元素来执行动画,但是他打破了react框架的规则,react 规则是不操作原生DOM , 原生DOM 由数据更新来决定如何更新,但是他是在数据更新的时候 执行的 所以算是打破了规则的遵循规则</p>

  虽然上面的写法有效,但是他有以下局限性,且不合标准

  1. 虽然他在这个上下文中适用,但是你会在更多复杂的场景中使用动画,例如,如果你想在他从dom中完全移除之前淡出其他一些东西,在更新数据之前,你必须要等fade动画完成,才能删除组件,这是可管理的,但这通常比你想要加一些UI糖采用更复杂.
  2. jquery 不完全是一个库,他压缩后有85K,仅仅为了动画引入jquery是很浪费性能的,特别是有更好的解决方案的时候.
  3. 随着无状态功能组建的到来(也就是函数组件),组件的生命周期(包括以上实例中使用能够的 componentWillRecevieProps)不在可以使用,无状态函数组件能初进良好的编码实践,非常容易测试,并且基于他们的类组件上提供了性能优化.

## 方式二 the better way 
  achieve(实现),我们可以在无状态函数里面使用 css transition 实现同样的动画.

  ```js
  const ExampleComponent = ({show})=>{
    let classList = ["example-component"]
    if(show){
      classList.push('show');
    }
    return <div className={classList.join(' ')}>test</div>
  }
  ```
  ```css
  .example-component {
    width: 100px;
    height: 100px;
    background-color: red;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden; 
  }
  .example-component.show {
    opacity: 1;
    visibility: visible; 
  }
  ```
  
注意 transiton 中 dispaly 不提供动画,他只会删除元素,fade使用opacity 删除元素用 visibility 

css transition 的问题

1. transition 的浏览器兼容问题.
2. leaves white content after fade out because visibility rules does't remove the element. 如果要解决的话,你可以把元素的宽高变为0也放在变换过程能够中, 但是这样的话可能会改变元素的排列方式,可使用transition-delay 动画的延迟来实现这个功能. `transiton: height 500ms 500ms ,opacity 500ms 0ms`代表元素马上执行透明过渡,透明完了以后执行高度过渡.这是弹出写法.
3. 有时你想在主见mounted之后直接进行动画处理,或者在unmounted 之前.现在假设你有一个对象数组,并且为这个数据使用 map 生成对象的列表,现在你想 fade in 你添加的item 或者 fade out 你删除的item , 这是一个问题,因为一旦你改变了 item, React 会立即在你的动画开始之前 unmount(也可以叫更新) 你的组件,同样,如果你使用函数组件,当你第一次 mounted 时你没有生命周期函数来让他 fade in 就想你添加一个item 进 数组一样.

## 方式三 (以下组件为旧版组件,新版组件名称为TtansitionGroup)用法相同
  使用官方组件 CSSTransitionGroup,该组件任何的子组件的mounts都会经历 transiton right 在mounts 之后.任何子组件的unmounts 在unmounts之前都会经历 unmounts

  该组件会把transitionEnterTimeout and transitionLeaveTimeout as props.传入子组件,实际上这两个属性,让这个组件知道什么时候移除 CSS类 停止动画和知道什么时候 unmounts 组件,
