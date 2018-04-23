# 基本技能/技巧
  - 以下是一些常用的技巧,应用,技能的记录
## 路由(也就是根据某个实例来[`参数,路径`]判断做不同的事情)
  ```js
  http.createServer(function(req,res){
    let dataobj = url.prase(req.url,ture).qeury;
    switch(dataobj.name){
      case kimpee:
        res.write('Hello KP');
      case joey:
        res.write('Hello joey');
      default:
        res.write('查无此人');
    }
    res.end('查询完毕');
  });
  ```
## 爬虫(也就是拿别人的数据,通过服务器向服务器发请求,然后过滤)
  ```js
    //通过request 和 cherrio 等第三方模块实现一个抓取图片
    const request = re.....;
    const cherrio = re.....;
    request('url',function(err,res,body){
      let $ = cherrio.load(body); //返回一个 类jqeury对象
      $('img','#idmane').each(function(index,element){
        let src = $(element).attr("src"); //获取链接路径
        let name = src.sclie(src.lastIndexOf('/')+1);
        //请求图片返回一个流然后导入到输入流中,写入本目录;
        request(src).pipe(fs.createWriteStream(name));
      });
    });
  ```
