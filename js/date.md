# 时间

* 定义
  var date=new Date();

* 获取时间的各个部分
  date.getFullYear();
  date.getMonth();
  date.getDate();日
  date.getDay();星期
  date.getHours();
  date.getMinutes();
  date.getSeconds();

## 日期处理
- getTime()/setTime();
- toLocaleDateString();以特定地区格式,显示年,月,日
- toUTCString();转换成UTC时间.

## ES5方法
* Date.parse('2015-8-24');
* Date.now('2015-8-24');返回执行这行代码时距1970-1-1零时的毫秒数.

##延时与定时器

- setTimeout(fn,200);
- cleanTimeout(timeoutId);
- setInterval(fn,200);
- cleanInterval(intervalId);

