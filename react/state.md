# state
  - state可以理解为props,不过props是可读的,并不修改,在react中 state 发生改变,render方法会被重生执行,虚拟dom会发生更新.
  - es5中state的改变需要通过this.setState方法

    该方法接受一个对象,或者一个函数,当他接受一个函数的时候,第一个参数是上一个state的状态,第二个参数是自己props,该函数放回一个对象.
    
  - es5使用state前要先`getInitialState`初始化state,每次render都会调用这个方法 
  - es6中,直接state就可以`state={...}`

  ```jsx
  // es5
  var Component = React.createClass({
    getInitialState:function (){
      return {
        text:''
      }
    }
    change:function(e){
      this.setState({
        text:e.target.value
      })
    }
    render:function (){
      return <div>
        <p><input onClick={this.change}>按钮</input></p>
        <p>{this.state.text}</p>
      </div>
    }
  });
  ```

## 状态提升(lifting state up)

  当你想把多个孩子的数据合并,或者两个孩子之间通信,你可以把他们的数据合并到父亲的state中,并通过props把数据传递给孩子