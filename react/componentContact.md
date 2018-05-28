# 组件通信
  react中的原生组件通信并没有Vue中那么方便,Vue比react多了一个$parent,$children的方式

## 父调用子方法
  通过ref获得子组件实例,然后就可以调用子组件的方法;

## 子调用父方法
  props可以给子组件传函数,子组件调用这个函数来触发父组件的函数,props可以传数组,对象,等类型数据;

## 利用上下文(contxt)传递数据
  - `const ContextDemo = React.createContext('light');`传入的是一个默认值
  - 返回的是一个对象,可以当组件使用;(说不定就是一个组件),参数传入的是一个默认值.使用的时候使用value属性传值,
  - ContextDemo.Provitor 数据提供者
  - ContextDemo.Cousumer 数据接受者
  
    数据接受者,会接受组件树上最近的一个Provitor的值,没有就使用默认值,里面的内容是一个函数,这个函数返回一个基于`value`的虚拟DOM(渲染一些东西)

  - 就算值传入的是一个undefined,也不会触发默认值
  - 如果传递的是对象,可能会出现问题,因为内部使用Object.is(),去比较

  用法:
  ```jsx
  // Context lets us pass a value deep into the component tree
  // without explicitly threading it through every component.
  // Create a context for the current theme (with "light" as the default).
  const ThemeContext = React.createContext('light');

  class App extends React.Component {
    render() {
      // Use a Provider to pass the current theme to the tree below.
      // Any component can read it, no matter how deep it is.
      // In this example, we're passing "dark" as the current value.
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
  }

  // A component in the middle doesn't have to
  // pass the theme down explicitly anymore.
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton(props) {
    // Use a Consumer to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    return (
      <ThemeContext.Consumer>
        {theme => <Button {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }

  ```

### 手动写context数据提供者
  ```jsx
  //以下例子在Provider里面传入一个store
  class Provider extends React.Component{
    //该方法在state或者props发生改变时执行.call by react
    getChildrenContext(){
      return {
        store:this.props.store
      }
    }
    render(){
      return this.props.children
    }
  }
  //在子组件中(数据接受者)必须定义contextTypes才可以接受提供者的数据,consumer组件应该就是通过这个实现的
  ```
   上下文以上只是基础,详情见`https://reactjs.org/docs/context.html#dynamic-context`