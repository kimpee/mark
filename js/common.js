/**
 * @param min 最小的值
 * @param max 最大的值
 * @returns min和max范围内的值
 */
function randomRange(min,max){

    return parseInt(Math.random() * (max - min + 1) + min);
}

function verification(){
    var code='';
    var codeStr='0123456789abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ';
    for (let i = 0; i < 4; i++) {
        code += codeStr[parseInt(Math.random()*codeStr.length)];
    }
    return code;
}

/*
  @param {Element} ele  函数对象
  @param {String} type 事件类型
  @param {function} fun 事件处理函数
  @param {Boolean} isCapture 捕获
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
