# 服务器上的git

## 协议

- 本地协议 可克隆本地项目到本地
  - git clone /opt/git/project.git
- ssh协议
  - 创建ssh公匙
    - ls -al ~/.ssh 检查是否存在
    - ssh-keygen 创建默认的ssh
    - /c/Users/Joey/.ssh/id_rsa 默认位置
    - qwe1314520 passphrase
    - ssh-add ~/.ssh/id_rsa adding ssh key to the ssh-agent
    - 把公钥添加到github acount里 使用ssh连接提交
