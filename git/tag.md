# git 标签

- 列出所有标签用 git tag

## 轻量标签(lightweight)

- 一个轻量标签很像一个不会改变的分支-他只是一个特定提交的引用.

    `git tag name` 如果运行 git show name 只会显示最近一次提交信息

## 附注标签(annotated)

- 是存储在git数据库中的一个完整的对象, 他们是可以被校验的;其中包含打标签的名字`电子邮件地址 日期时间,还有一个标签信息,并且可以使用 GNU privacy guard GPG签名与验证,通常建议使用附注标签.

    `git tag -a v1.4 -m 'version 1.4' ()` 运行show 会打印出达标前者信息 打标签的日期时间 附注信息 然后显示具体的提交信息

##　后期打标签

- git tag -a v1.2 9fceb02(commitID) 

##　分享标签(提交标签到远程仓库)

- git push origin v1.5 

- git push origin --tags 这会提交所有远程仓库中没有的标签到远程仓库

## 检出标签

- git checkout -b version2(branchnane) v2.0.0(tagame)

        _工作目录与仓库中特定的版本完全一样_

## git 别名

- git config --global alias.co checkout

    _git co... 就可以实现git checkout 的功能_