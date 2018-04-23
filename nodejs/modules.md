# nodejs原生模块
  - 以下只是常用的方法示例.详细的请参考文档
## http模块
  - 创建服务 `http.createServer((res,resp)=>{})`
  ```js
    let http = require('http');
    let url = require('url');
    let querystring = require("querystring");
    http.createServer(function(req,resp){
      //处理get请求,获取参数
      url.parse(res.url,true).query.name;
      resp.end('连接成功');
      //处理post请求 post请求数据在请求体中
      let data = '';
      //事件绑定
      req.on('data',functino(){
          //接受数据拼接成字符串
          data+=data;
      });
      req.on('end',function(){
        //querystring可以把字符串解析为符合post请求的格式
        //实验过后 发现这里拿到的data并没有数据
        data = querystring.parse(data);//这返回的是个啥?
        resp.end(datas);
      });

    }).linsten(8080);

  ```
## url模块
  - 解析url串为对象或者解析对象成为url串 `url.parse(res.url,true)`
  - 第一个参数是一个url字符串
  - 返回对象属性:
    - query:参数字符串,若parse第二个参数为ture,query为一个参数对象
    - search:参数字符串,`带问号?`
    - hostname:主机名字
    - port:端口
    - host:url 主机名，包括端口信息，小写
    - href:完整的url
    - protocol:协议.小写;
    - pathname:url中的路径/...
    - path:pathname和search的合集
    - hash:锚点部分(#idname)包括#
  - 方法
    - resolve()
    ```js
    url.resolve('http://localhost:8080','/html/login/')
    ```
  - 对象转url对象
  ```js
  //一定要符合规矩
  var urlObj = {
    firstname: 'dk',
    url: 'http://dk-lan.com',
    lastname: 'tom',
    passowrd: '123456'
  }
  var urlString = url.format(urlObj);
  ```
## querystring模块
  - 一般跟url模块一同使用
  - querystring.parse(url.query);
  - querystring.stringify(obj); 返回query字符串
## event模块
  ```js
  let event = require('event');//获取enevt对象
  let eventEmitter = new event.EventEmitter();//创建一个evenEmitter(事件排放,跟队列差不多意思把);
  eventEmitter.on('name',function(){
    // TODO:

  });
  //触发事件
  eventEmitter.emit('name');

  ```
## fs模块
    - 读取文件
    ```js
    let fs = require("fs");
    // 同步读取readFileSync
    fs.readFile(url,functino(err,data){

      console.log(data.toString);
    });

    ```
    - 写入文件
    ```js
    //覆盖写入
    fs.writeFile(url,data,function(err){
      if (err) {
        return console.error(err);
      }
    });
    fs.appendFile(url,data.functino(err){
      if (err) {
        return console.error(err);
      }
    })

    ```
    - 读取图片
    ```js
    //同步读取文件,没有callback函数
    let data = fs.readFileSync('test.jpg');
    //在先进浏览器中,可以直接返回data
    fs.readFile("test.jpg",functino(err,data){

    });
    ```
## stream模块

  ```js
  //输入流
  var fs = require('fs');
  //创建一个读取流传入一个url
  var readStream = fs.createReadStream('input.txt');
  readStream.setEncoding('utf8');
  //处理流事件
  let data = '';
  readStream.on('data',function(chunk){
    data+=chunk;
  });
  readStream.on('finsh',function(){
    console.log(finsh);

  });
  //输入流
  let writeStream = fs.createWriteStream('out.txt');//传入路径
  writeStream.write('data','utf8');//写入data 编码方式是utf8
  writeStream.end();//标记文本末尾,一般都要添加
  writeStream.on('finsh',function(){
    console.log('finsih');
  });
  writeStream.on('error',function(err){
    console.log(err.stack);
  });

  //管道流 pipe是流的方法
  let zlib = require('zlib');//第三方模块需要安装才能使用
  readStream.pipe(writeStream);
  //链式流(链式调用)
  readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('output.zip'));

  ```
