# react组件 
  - 使用class定义主见的构造函数时候,要手动super().
  - 组件中的大括号内直接写虚拟DOM标签时,只能写一个根元素
  - 循环渲染元素时,最好加上key属性,类似Vue,同辈(多指兄弟)元素key值不可重复

> 组件首字母必须大写</br>
> 函数必须返回一个虚拟DOM</br>
> 类组件必须要有一个render方法并且返回一个虚拟COM</br>

## 定义
  - 函数定义
  ```jsx
  // 方式一
  var Component1 = ()=>{
    return <div></div>;
  }

  ```
  - 类组件 es5
  ```jsx
    var ClassComponent = React.createClass({
      render(){
        return (
        <div>
          <h1></h1>  
        </div>)
      }
    })
    ReactDOM.render(<ClassComponent/>,document.querySelector('#app'))
  ```
  - 类组件 es6

    在类组件中如果要使用构造函数,必须要调用super(),来引用父类的构造函数

  ```jsx
  class Component1 extends React.Component{

    constructor(props){
      super(props);
    }
    
    render(){
      return (
      <div>
        {
          this.props.data;
        }
      </div>)
    }
  }
  ReactDOM.render(<Component1 />,document.querySelector('#app'));
  ```

## 组件属性

  html属性写在组件上,在类组件中可以通过this.props,来获取整个props对象.

  属性和state改变都会触发重新触发render方法,若要其他数据更新也要触发render,使用this.forceUpdata()

  - 函数式    
    ```html
    <div id="app">

    </div>
    <script type="text/babel"><sctipt>
    function PropsTest (props){
      return <h1>{props.name}</h1>
    }
    ReactDOM.render(<PropsTest name="kimpee" />,$('#app'));
    ```
  - 类组件

  ```html

  <script type="text/bael">
    var Component = React.component({
      render(){
        <!-- this.props是一个属性对象 -->
        return <h1>{this.props.name}</h1>
      }
    });
    ReactDOM.render(<Component name="kimpee" />,document.querySelector('#app'))
  </script>
  ```

### 默认属性
  - 组件属性除了可以在dom的属性值里传递,还可以设置默认的属性值.默认属性值只会获取一次,也就是说该方法(getDefaultProps)只会执行一次
  ```jsx
    // es5
    var Component = React.createClass({
      getDefaultProps(){
        return {data:"Joey"}
      }
      render(){
        return <h1>this.props.data</h1>
      }
    });
    // es6
    class Component1 extends React.createClass{
      static defaultProps = {
          name: 'Tom',
          age: 20
      }
      render(){
          return (
            <div>
                <h1>姓名：{this.props.name}</h1>
                <h1>年龄：{this.props.age}</h1>
            </div>
          )
      }
    }
  ```
### 属性的类型规则
  在16.0版本中类型规则并不包含在react包,需要另外使用props-type包
  - propsType

    ```html
    
    <script type="text/babel">
      var compoment = React.createClass({
        <!-- name是属性的名字,后面是指定的类型,类型对象的属性统一小写 -->
        propTypes:{
          <!-- PropTypes需要引入 -->
          name:PropTypes.string
        },
        render(){
          return <h1>this.props.name</h1>
        }
      })
    <script>
    ```
  - PropsType常用类型
    - PropsType.string
    - PropsType.number
    - PropsType.object
    - PropsType.array
    - PropsType.bool
    - PropsType.symbol
    - PropsType.any.isRuquired;(any代表所有的类型)



## 受控组件与不受控组件

  大多数情况下,请使用受控组件(数据由组件处理),不受控组件,数据由DOM自己处理(就是 input 不能有value,否则value不可更改)

  `<input ref={input=>{this.input = input}} />`
  上面代码渲染的时候, this.input 就会拿到原生的input DOM 元素.

## 动态组件

  - 组件中渲染组件,可以通过条件判断来实现;
    ```html
    <script type="text/babel">
    let Rc_c1 = () => <h1>c2</h1>;
    let Rc_c2 = ()=><h1>c2</h1>;
    let Rc_c3 = ()=>{
      if(判断一些骚东西){
        return <div>{Rc_c1}</div>
      }else{
        return <div>{Rc_c2}</div>

      }
    };
    </script>
    ```
## 列表渲染
  - 利用虚拟DOM对象数组
    ```jsx
    let doms = [<h1>name</h1>,<h1>age</h1>]
    ReactDOM.render(<div>{doms}</div>);
    ``` 
  - 利用for循环
    ```jsx
    let doms = ['name','age']
    let lis = [];
    for(var i = 0;i<doms.lenght;i++){
      lis.push(<h1>{doms[i]}<h1>);
    }
    ReactDOM.render(<div>{lis}</div>,$('app'));
    ``` 
  - 对象数组
    ```jsx
    let objlis = [{id:1,name:"Jeoy"},{id:2,name:"yu"},{id:3,name:"cm"}]
    ReactDOM.render(<div>{
      objlis.map(item=><div>{
        <div>
          for(var key in item){
            
          } 
        </div>}</div>)
    }</div>,$('app'))
    ```

## ref属性(组件只能用在类组件上)
  ref用在htmlelement上获得的是DOM元素,用在组件上获得的是组件实例.

  新版本中ref可以使用React.createRef();创建

  在函数组建内可以使用

## 生命周期

### Mounting
  渲染阶段
  - constructor() 类组件先执行构造函数

    组件初始化
  - static getDerivedStateFromProps(nextProps, prevState) 

    此方法会发生在props改变的时候,这应该返回一个state,如果不想state发生改变,则返回null,
    注意如果是父组件引发的重新渲染,这个方法也会执行
  - componentWillMount()---16.0 /UNSAFE_componentWillMount() ---17.0

    在此方法中调用 setState() 不会重新执行render(),更建议在构造函数中初始化 state
  - render()

    渲染dom
  - componentWDidMount()

    渲染了dom以后,在此处可执行异步操作.
    如果在此处订阅了事件之类的函数,不要忘记在componentWillUnmount() 取消订阅
    在这里谨慎使用 setState() 因为他会重新render() 但并不是不可使用,当一些元素需要测试位置才可以渲染时,这并不失为一个好方法.

### 更新阶段
  当props或者state发生改变时候
  - componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - componentWillUpdate() / UNSAFE_componentWillUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

### 销毁阶段

  - componentWillUnmount()

### 错误阶段
  - componentDidCatch()

## 其他api
  - forceUpdata()强制更新

  此方法触发所有儿子的更新数据生命周期,但是当前组件的会直接跳过shoudComponentUpdata()生命周期方法,直接走render;当你的render显示依赖于其他数据,而这些数据更新并不会引起render方法的调用,这个API用于手动执行render
  