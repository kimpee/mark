# 一些常用的第三方模块应用
## zlib
  - 压缩模块,详情查看modules的链式流部分

## request 名词 (请求)
  ```js
    //返回一个流,也就是可以使用管道方法把装着内容的流导入到其他的流中,比如输入流
    let stream = request.get('url',function(err,res,body){
      // body是内容
      // res包括头信息等一推东西
      // url位置可以传递一个对象
    });
    request();//默认是get方式用法同上

    //post请求
    // request支持application/x-www-from-urlencoded 和 mulitpart/form-data实现表单上传;
    // application......(URL-Encoded-Forms)
    request.post('http://service.com/upload',{form{key:'value'}}[,callback(err,resp,body)]);
    request.post('http://service.com/upload').form({key:'value'})
    //mulitpart.....(Mulitpart Form Uploads)

  ```

## Express(封装了http模块的框架)
  - 这个东西很牛逼,在nodejs中的地位就好像是jquery在js中的地位一般
  ```js
  const express = require('express'); //他返回的是一个方法,调用这个方法返回一个对象,牛逼把
  const app = express();
  //开始表演
  // 开启服务
  app.listen(8080,function(){//此回调函数没有参数,且该方法好像只会执行一次
    console.log('xixi');
  })

  app.get("/",function(req,res){
    let data = req.query.name;
    res.send(data);//可以传字符串和对象,数字不可以
  });
  //nodejs默认不能访问静态资源,可以使用sendFile 发送资源
  app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );//这里不能用../ 所以资源可能要在js目录的同级或者下级目录才能被访问?
  });
  //express get参数的接收
  app('/',function(req,res){
    res.send(req.query);
  });
  //express get路径方式接收参数 localhost:8080/kimpee/handsome/xixi
  app.get('/:name/:tezheng/:koutouchang',function(req,res){
    res.send(req.params);//这个东西是一个对象 {name:"kimpee",tezheng:"handsome",koutouchang:"xixi"}
  });

  // express 接收 Post参数  需要解除body解析器
  let urlencoded = bodyParse.urlencoded({extended:false});
  app.post('/',urlencoded,function(req,res){
    res.send(req.body);
  });
  //跨域支持,请放在所有东西的前面
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
  });
  ```

## body-parser(解析post提交的body信息-参数)
  - 配合`Express` 获取post数据时 一同使用
  - 其实是一个中间件函数,此函数可以在调用路由回调函数的时候对req,res对象做任何修改,以此来实现在req对象上可以通过body获取所有的参数
  ```js
  app.user(bodyparser.urlencoded({extended:false}));
  app.post('/register',function(){

  })
  ```
## cookie-parser
  - 全局使用
  ```js
  const cp = require("cookie-parser");
  app.use(cp()); //全局使用cookie-parser
  ```
## express-session
  - 全局使用
  ```js
  const exp_sess = require("express-session");
  app.use(session({
    secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 5000 },  //设置maxAge是5000ms，即5s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,    
  }))
  //操作
  //请求对象
  req.session.user = {username:usesrname}
  ```

## multer (body-parse并不支持文件上传)
  - 单文件上传
  ```js
  //引入express模块  
  var express = require('express');  
  //引入multer模块  
  var multer = require ('multer');
  var path = require('path')  ;
  //设置上传的目录，  
  var upload = multer({ dest:  path.join(__dirname,'temp')});  
  var app = express();

  app.use(express.static(path.join(__dirname, '/')));

  app.post('/singleUpload', upload.single('avatar'), function (req, res, next) {  
      console.log(req.file);  
      console.log(req.body);  
      res.end("上传成功");  
  });  
  app.listen(88)  
  ```

  ```html
    <form action="http://localhost:88/singleUpload" method="post" enctype="multipart/form-data">
        <input type="text" name="username" id="">
        <input type="text" name="pwd" id="">
        <input type="file" name="avatar" id="">
        <input type="submit" value="submit">
    </form>
  ```

  - 多文件上传
    ```js
    //注意上传界面中的 <input type="file" name="photos"/>中的name必须是下面代码中指定的名  photots 必须是要input的name属性值
    app.post('/mulUpload', upload.array('photos', 12), function (req, res, next) {  
      console.log(req.files);  
      console.log(req.body);  
      res.end(req.file + "<br/><br/>" + req.body);  
    })
    ```
    - 原生js

      ```html
        <form>
            <input type="text" name="username" id="username">
            <input type="text" name="pwd" id="pwd">
            <input type="file" name="photos" id="photos" multiple>
            <input type="button" value="submit" id="btn_submit">
        </form>
        <script>
            window.onload = function(){
                document.getElementById('btn_submit').onclick = function(){
                    var myForm = new FormData();    // 创建一个空的FormData对象
                    myForm.append("username", document.querySelector('#username').value);       // append()方法添加字段
                    myForm.append("pwd", document.querySelector('#pwd').value);   // 数字123456立即被转换成字符串“123456”

                    let files = document.querySelector('[type=file]').files;
                    for(var i = 0; i < files.length; i++){
                        myForm.append("photos", files[i]);                
                    }                

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST","mulUpload");
                    xhr.send(myForm);
                }
            }
        </script>  
      ```
    - jquery

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
      </head>
      <body>
          <form>
              <input type="text" name="username" id="username">
              <input type="text" name="pwd" id="pwd">
              <input type="file" name="photos" id="photos" multiple>
              <input type="button" value="submit" id="btn_submit">
          </form>

          <script>
              $(function(){
                  $('#btn_submit').click(function(){
                      var myForm = new FormData();    // 创建一个空的FormData对象
                      myForm.append("username", document.querySelector('#username').value);       // append()方法添加字段
                      myForm.append("pwd", document.querySelector('#pwd').value);   // 数字123456立即被转换成字符串“123456”
                      let files = document.querySelector('[type=file]').files;
                      for(var i = 0; i < files.length; i++){
                          myForm.append("photos", files[i]);                
                      }
                      $.ajax({
                          url: 'mulUpload',
                          type: 'post',
                          data: myForm,
                          contentType: false,
                          processData: false,
                          success: function(res){
                              console.log(res)
                          }
                      })
                  })
              })
          </script>
      </body>
      </html>
      ```
    - 本地存储文件
      ```js
        //引入express模块  
        var express = require('express');  
        //引入multer模块  
        var multer = require ('multer');
        var path = require('path')  ;
        var fs = require('fs');
        //设置上传的目录，  
        // var upload = multer({ dest:  path.join(__dirname,'temp')});  
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                var _path = path.join(__dirname, "../uploadFile");
                if(!fs.existsSync(_path)){
                    fs.mkdirSync(_path);
                }
                cb(null, _path);    // 保存的路径，备注：需要自己创建
            },
            filename: function (req, file, cb) {
                // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
                cb(null, file.originalname);  
            }
        });

        // // 通过 storage 选项来对 上传行为 进行定制化
        var upload = multer({ storage: storage })

        var app = express();

        app.use(express.static(path.join(__dirname, '/')));

        app.post('/singleUpload', upload.single('photos'), function (req, res, next) {  
            console.log(req.file);  
            console.log(req.body);  
            res.end("上传成功");  
        });  

        app.post('/mulUpload', upload.array('photos', 12), function (req, res, next) {  
            console.log(req.files);  
            console.log(req.body);  
            res.end("上传成功");  
        })
        app.listen(88)

      ```

## ws(websocket)
  ```js
    const socketServer = require('ws').Server;
    const wss = new socketServer({
      port:8080;
    });
  ```

## soket.io
  - 配合express来使用
  - socket 用`on`定义事件 io,on('login',(client)=>{}) ; 回调函数的参数是一个socket

  - io.emit('event',_param) 此方法触发事件,参数是一个字符串

    ```js
    var express = require('express');
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    http.listen(88);
    ```
    
## jsonwebtoken(token)
  - 客户端使用用户名和密码请求登录
  - 服务端收到请求，验证登录是否成功
  - 验证成功后，服务端会返回一个 Token 给客户端，反之，返回身份验证失败的信息
  - 客户端收到 Token 后把 Token 用一种方式(cookie/localstorage/sessionstorage/其他)存储起来
  - 客户端每次发起请求时都选哦将 Token 发给服务端
  - 服务端收到请求后，验证Token的合法性，合法就返回客户端所需数据，反之，返回验证失败的信息

  ```js
    let token = require('jsonwebtoken');
    //第一个参数是数据对象,第二个参数是用于加密,解密的字符串,第三个参数是一个option对象,有一个属性控制token有效时间
    //加密
    token.sgin({..},'123456',{
      'expiresIn': 60*60*24//这里是24个小时以秒为单位
    })
    // 解密
    jwt.verify(token, '123456', (error, result) => {
        if(error){
            response.send({status: false});
        } else {
            response.send({status: true, data: result});
        }
    })
  ```
