# cookies

    cookies是客户端与服务器进行通讯使用的一个能够在浏览器本地化存储的技术
    > ps:chrome不支持本地文件的cookie读写

    - 购物车信息
    - 商品浏览记录
## 七天免登陆
- 通过传cookies参数 实现

```javascript
  var date=new Date();
  date.setDate(date.getDate()+7);
  document.cookies='name=_name'+ ';expires='+date.toUTCString();
```

## cookie的组成
- cookie由键值对形式的文本组成,完整格式如下
  > - document.cookie = name = value[;expires=date][;path='path'][;domain= '域名']
  > - []表示可选值

- name=value;是你要保存的信息
  - 利用decodeURL解码中文字符
  - 利用json保存多条信息
  - expires=date 表示cookie的失效事件

## cookie获取和设置
```javascript
  //设置
  dodument.cookie= 'name=kimpee';
  //获取
  var cookies =document.cookie;

```
- 一次只能写入一个cookie
- 获取时得到所有cookie,多个cookie之间用分号+空格(';')来隔开

## cookie删除
- 利用设置过期时间来达到删除的效果

## cookie的封装

- 封装cookie的增删改查

## cookie发送到客户端
