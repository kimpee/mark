# ubantu平台下的翻墙

- ssocks 方式

- apt-get update

- apt-get install python-pip 安装这个包管理工具

- pip install shadowsocks 安装ss

- 在软件商店安装 ssocks 软件 就会生成/var/snap/ssocks/current/config/json 文件
> 内容如下

```json
{
            "server":"45.124.66.234",
            "server_port":2126,
            "local_port":1080,
            "password":"qwe1314520",
            "method":"rc4-md5",
            "timeout":600
}
```

- 然后用下面命令开启sslocal -c /var/snap/ssocks/current/config.json

- 最后开启系统的代理为自动代理 设置socks 的主机为127.0.0.1 端口为1080；