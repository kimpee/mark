# 样式
  - 样式可传对象`className={container}` ||`style={container}`
## class样式
  - 在react中,class用className定义
  ```html
  <div className="container"></div>
  ```
## 内联样式
  - 直接style

## 表单
  react是一个单向数据流的框架,表单处理的方式跟双向数据流的vue,差别较大
  - 输入受控<br>
  
    就是输入收到控制,弱势表单元素设置了value那么,该元素将无法从外部修改,只有不设置value才可以从外部修改value
    通过state和时间来实现外部可修改功能
 
  - select元素
 
    在html中select 需要option指定selected属性才可以有默认值

    但是在react中 只需要指定value就可以有默认值
  ```jsx
  class Component1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: 'lime'
        }
    }
    change = (e) => {
        this.setState({text: e.target.value})
    }
    render(){
        return (
            <div>
                <select value={this.state.text} onChange={this.change}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>                
            </div>
        )        
    }
  }
  ```
  - input type fo file
  
    文件input是只读的,所一需要用到ref来处理,获得元素然后使用原生或者jquery处理