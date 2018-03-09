
/*
  @param cookies操作
*/
var Cookies={
  get:function(name){
    var cookies=document.cookie.split('; ');
    if(cookies.length === 0){
      return '';
    }
    for (var i = 0; i < cookies.length; i++) {
      var keyvalue=cookies[i].split('=');
      if (keyvalue[0] === name) {
        return keyvalue[1];
      }
    }
  },
  set:function(name,value,date,path){
    var cookie=name + '=' + value;
    if(date){
      cookie+= ';expires='+ date;
    }
    if (path) {
      cookoe+= ';path='+ path;
    }
    document.cookie=cookie;

    return document.cookie;
  },
  remove:function(name){
    var date=new Date();
    date.setDate(date.getDate()-1);
    this.set(name,null,date,null);
  },
  clear:function(){
    var cookies=document.cookie.split('; ');
    if(cookies.length === 0){
      return '';
    }
    for (var i = 0; i < cookies.length; i++) {
      var keyvalue=cookies[i].split('=');
      this.remove(keyvalue[0]);
    }
  }
}


/**
 * @param min 最小的值
 * @param max 最大的值
 * @returns min和max范围内的值
 */
function randomRange(min,max){

    return parseInt(Math.random() * (max - min + 1) + min);
}

//验证码
function verification(){
    var code='';
    var codeStr='0123456789abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ';
    for (let i = 0; i < 4; i++) {
        code += codeStr[parseInt(Math.random()*codeStr.length)];
    }
    return code;
}

/*
  兼容ie8的事件绑定
  @param {Element} ele  函数对象
  @param {String} type 事件类型
  @param {function} fun 事件处理函数
  @param {Boolean} isCapture 捕获(反冒泡)
*/
function bind(ele,type,fun,isCapture){
  if (ele.addEventListerner) {
    ele.addEventListerner(type,fun,isCapture);
  }else if(ele.attachEvent){
    ele.attachEvent('on'+type,fun);
  }else{
    ele['on'+type]=fun;
  }
}
/*
浏览器自动刷新可以用
<script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>');
    </script>
*/
