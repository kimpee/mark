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
浏览器自动刷新可以用
<script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>');
    </script>
*/