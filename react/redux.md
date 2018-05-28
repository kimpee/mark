# redux

  注意:多事用Object.assgin();array.slice(),concat()

  把数据分成一个又一个的state,把state分成一个又一个的action,然后用reducer来管理state和action;

  state的设计,因为一个app只一个总的state对象存放数据,所以要设计好state的结构.

## API
  - createStore()

    传入一个reducer(纯函数,返回值只取决于参数)返回一个对象
    第二个参数为applyMiddleware(middleware1,middleware2,middleware3...)
  - combineReducers()

    传入一个对象,对象里装着同级reducer,返回一个reducer,把这个reducer扔进createStore中,就可以了.
  
## 概念
  
  - 使用`action`(实际是一个对象),来描述数据的变化,必须要有一个字符串类型的type属性;
  - `reducer`(实际是一个纯函数),来决定action如何改变state;

    不要在reducer里执行以下操作,保持reducer的纯净

    - 修改传入参数；
    - 执行有副作用的操作，如 API 请求和路由跳转；
    - 调用非纯函数，如 Date.now() 或 Math.random()。
   
  - `store`,数据存放层,管理action和reducer;

### reducer的拆分
- reducer是决定如何处理state和action的,每种不一样的state和action,请单独使用一个reducer处理,最后在把reducer合并成一个reducer

## store API
  - dispatch分发,这个方法传入一个action,会触发listener;
  - getState 获得reducer返回的state;
  - subscibe 传入一个listener,在dispath中触发;

## redux方法的实现

  - createStore的实现

  ```js
  const createStore = (reducer) => {
    let state;
    let listeners=[];
    const getState = () => state;
    const dispatch = (action) => {
      state = reducer(state,action);
      listeners.forEach(item=>item());
    }
    //初始化state  妙哉妙哉
    dispath({});
    const subscribe = (listener)=>{
      listeners.push(listener);
      //取消订阅
      listeners = listenrs.fittle( l => l!==listener)
    }
    return {dispath,getState,subscribe}
  }
  ```

  - combineReducer的实现

    该函数接受一个属性是,reducer函数的对象,返回一个reducer
  ```jsx
  combineReducer(redecers){

    return (state={},action)=>{
      return Object.keys(state).reduce(
        (nextState,key)=>{
          nextState[key] = reducers[key](state[key],
          action)
          return nextState;
        },
        {}
      )
    }
  }
  ```

## react-redux (终于到你了兄弟,react-redux基本原理是context,在组件通信的context章节中有一个简易版的`Provider`基本原理都能体现出来)

### `<Provider store={store}>` : 核心 数据提供者
  使用时必须传入一个store
### makeStateToProps=(state)=>({})
  这里的State是reudx的State 并不是react component的state, 把state和connect()传入的组件的Props连接在一起.每当store发生改变,这个方法都会被调用(内部getState) 尼玛,我懂了;
### makeDispatchToProps=(dispatch)=>({})
  把dispatch和Props连接在一起,返回对象,对象属性名字就是函数名字

### connect(make...,make...)(component),
  把`makeStateToProps`和`makeDispatchToProps`传进函数返回一个函数,在把组件传进,返回一个组件,该组件应该实现了 `contextTypes` 属性来达到效果;


## 中间件
  在触发action的时候可以做更多的事情,比如异步;因为异步操作时,同步写法不能触发reducer更新state(因为存在还没得到值就返回了state的情况),使用中间件,不触发dispacth就不会触发下一个dispatch直到原始的dispacth,就不会更新state;

### applyMiddleware(middleware1,middleware2)
  ```jsx
  function applyMiddleware(stroe,middlewares){ //在api中这个store由cereateStroe内部传入,第二个插件是一个中间件数组
    middleswares = middlewares.slice();
    middleswares = middlewares.reverse; //把mididlewares颠倒
    let dispatch = store.dispatch
    middlewares.forEach((middleware)=>{ //循环电刀的middlewares
       //把dispatch传给middleware,并且把返回的dispath保存并且在下一次循环中传给下一个dispath
      dispatch = middleware(store)(dispatch);
      //先走第一个中间件的dispatch,逐步往后,一直走到原始的dispatch
    })
  }
  ```