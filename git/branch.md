# 分支基础
- git checkout
  > 查看分支
## 切换分支

- git checkout -b iss53
  > 等同于同时执行:
    >> git branch iss53
    >> git checkout iss53

    _注意:切换分支之前,要保持当前分支处于一个干净的状态,有一个方法可以解决这个问题,保存进度(stashing)和修改提交(amending)_

- git checkout master
  > 切换分支以后,工作目录会被改变

- git merge branchname 合并分支
  > 注意:例如,要想把a分支合并到b分支,要先切换到b分支,再进行合并操作
  > "fast-forward" 如果当前分支没有改动,只在分支上改动,那么合并操作就只是简单的将指针向前移动,这种情况下合并并不需要解决分歧,这就叫做fast-forward(快进)

-  git branch -d hotfix(branchname) 删除不需要的分支
  > 不要保存多余的分支

## 解决合并冲突

- git status 查看合并冲突
  > unmerged paths:下的文件代表还没有合并的文件

- 冲突标记
  - <<<<<<< xxxx 冲突头
  - ========= 冲突分隔 上面表示当前分支的内容,下面表示要合并的分支的与之冲突的内容.
  - >>>>>>>> xxx  冲突尾
- 冲突要手动解决.
## 分支管理

- git branch 不加参数可以查看所有的分支. 前面带*号的分支代表当前所在的分支

- git branch --no-merged 查看所有未合并的分支

- 还没合并的分支 不允许删除,若想强制删除,请使用-D参数

## 分支开发工作流
- 长期分支
  > 在整个项目开发周期的阶段,你可以同时拥有多个开放分支,并且可以定期的吧某些特性的分支合并入其他的分支

- 特性分支
  > 特性分支是一种短期分支，对任何规模的项目都适用。


## 远程分支
- git clone origin 这个命令会创建本地得master分支和一个远程master分支引用，名字叫 origin/master
- git fetch origin 这个命令查找 "origin" 是哪一个服务器，从中抓取本地没有得数据，并且更新本地数据库。
- 
