# 动画在React中的变现
  React中动画依赖2个库`react-transition``react-transition-group`

  默认情况下,`Transition`动画组件并不会改变渲染行为,他只会跟踪组件进入和离开状态.这取决于你给的意思和影响给那些状态(意思是由你来决定怎么动画,你不写动画的话他不会有任何的效果).

## Transiton

  `Transiton`组件主要能够跟踪一下4钟状态
  - entering
  - entered
  - exiting
  - exited

  `Transiton`状态通过 `in`属性触发,如果为true,它就会开始`Enter`状态,从 `entering` 到 `entered` 状态,

## CSSTransition
  一个用了 css transition animationed 的 Transition 组件 ,他的灵感来自,ng-animation.

  在动画的执行过程中,替换不通过的classNames,来达到动画效果,当动画完成后,动画的结束状态的将继续保持.

  当 in 属性为true 时, 组件将处于 example-enter讲被应用与组件,example-enter-action将在下一帧应用.

  Vue中的过渡与动画也是同样的形式,可以说,三大框架的动画实现方案类似.

  
