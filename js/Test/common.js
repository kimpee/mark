
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
    return '';
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

/**
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

//
function animate(ele,attr,target){
  //开启定时器之前先要关闭定时器
  clearInterval(ele.timer);
  let speed = 0;
  ele.timer=setInterval(()=>{
    //获取当前的属性值
    let current=window.getComputedStyle(ele)[attr];

    let unit = current.match(/[a-z]+$/i);
    unit = unit ? unit[0] : '';
    //计算差值
    current =parseFloat(current);
    let dis= target- current;
    speed = parseInt(dis/10);
    if(attr === 'opacity'){
      speed = dis/10;
    }
    if ( current === target || speed === 0) {
      clearInterval(ele.timer);
      current = target - speed;
    }
    current += speed;
    // console.log(current);
    ele.style[attr] = current + unit;
  },30);
}
// 缓冲动画
function animatePuls(ele,opt,callback){
  //开启定时器之前先要关闭定时器
  let animateCount =0;
  for (let key in opt) {
    animateCount++;

    startAnimate(key);
  }
  let speed = 0;
  function startAnimate(key){
    let timerName = key+'timer';
    clearInterval(ele[timerName]);
    ele[timerName]=setInterval(()=>{
      //获取当前的属性值
      let current=window.getComputedStyle(ele)[key];

      let unit = current.match(/[a-z]+$/i);
      unit = unit ? unit[0] : '';
      //计算差值
      current =parseInt(current);
      let dis= opt[key]- current;
      speed =  dis/10;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if ( current === opt[key] || speed === 0) {
        animateCount--;
        clearInterval(ele[timerName]);
        current = opt[key] - speed;
        // if(animateCount === 0){
        animateCount === 0 && typeof callback === 'function' && callback();
        // }
      }
      current += speed;
      // console.log(current);
      ele.style[key] = current + unit;
    },30);
  }
}
// 匀速动画
function uniformAnimatePuls(ele,opt,speed,callback){
  //开启定时器之前先要关闭定时器
  let animateCount =0;
  for (let key in opt) {
    animateCount++;
    // console.log(key);
    startAnimate(key);
  }
  function startAnimate(key){
    let timerName = key+'timer';
    clearInterval(ele[timerName]);
    ele[timerName]=setInterval(()=>{
      //获取当前的属性值
      let current=window.getComputedStyle(ele)[key];

      let unit = current.match(/[a-z]+$/i);
      unit = unit ? unit[0] : '';
      current =parseInt(current);

      if ( current >= opt[key] || speed === 0) {
        animateCount--;
        clearInterval(ele[timerName]);
        current = opt[key] - speed;
        // if(animateCount === 0){
        animateCount === 0 && typeof callback === 'function' && callback();
        console.log(current);
        // }
      }
      current += speed;
      // console.log(current);
      ele.style[key] = current + unit;
    },30);
  }
}

// animate(box,'opacity',target);

/*
浏览器自动刷新可以用
<script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>');
    </script>
*/
