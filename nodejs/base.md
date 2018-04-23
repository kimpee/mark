# Nodejs 基础
   nodejs是一门服务器语言,语法与行为与js类似,采用chromiuv8js解析引擎

## nodejs 都是模块化开发
  - 定义模块
  ```js
  //写法一

    module.exprots = {}//暴露对象
    module.exprots = {}//暴露属性
    module.exprots = FunA//暴露方法
    //写法二
    exprots.FunA = FunA;
    exprots.obj = obj;
  ```
## repl解析器,交互js
  - 在命令行输入node命令,进入交互模式

## npm script (有替代gulp grunt的趋势)
  - package.json的script选项
  - 运行 npm run test(脚本属性名)
  ```json
    "script":"node test";
  ```
  - 简写
  ```shellscript
    npm test
    npm start
    npm stop
    npm restart
  ```
  - 原理 npm run test => node test

## forever(完全基于命令行操作)
  - 后台进程,可以唤醒服务器程序
  - 常用:
  ```
    forever start app.js;
    forever stop app,js;
  ```

## Async 同步 (使异步操作的写法接近同步操作的写法)
  - 异步操作通常都伴随着回调函数,当异步操作发生嵌套时,回调函数也会发生多层的嵌套
  - 此方法用于解决嵌套过多问题,私用async需要注意以下事项
    - 该方式有两个关键字 `async` `await`
    - `async` 用于定义函数时候
    - `await` 用于调用方法前,该方法返回值必须是一个`promise`对象
    - `await` 关键字只能用在`async`方法里面
    - 详情看下方代码
    - `async`方法 无论方法内部手动返回任何只,该方法返回一个promise对象.该对象的then回调函数的参数就是你返回的值
    - `await` 变量 该变量的值是该关键字后面的promise对象的then的返回值,没有就是promise内部调用`reslove`方法的参数.(怀疑内部有一个默认的返回参数的then函数);
  ```js
  //传统写法
  function sleep(time,cb){
    setTimeout(function(){
      cb("ok");
    },time);
  }

  let start = ()=>{
    sleep(3000,function(cb){
        cb();
    });
  }

  start();
  //promise 写法
  let sleep = (time)=>new promise((resolve,reject)=>{
    setTimeout(()=>{
      reslove('ok'):
    },time);
  });

  let start = ()=>{
    sleep((3000).then((param)=>{console.log(param);});
  }
  start();
  //Async时代
  let sleep =(time)=>new promise((resolve,reject)=>{
    setTimeout(()=>{
      reslove('ok'):
    },time);
  });

  let start = async ()=>{
    let param  = await sleep(3000);//await 会等sleep(3000),这个方法执行完了以后才会返回一个值
    console.log(param);
  }
  start();
  ```
