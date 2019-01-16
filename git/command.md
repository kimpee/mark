# progit command

## 打印

- git log -p 显示每次要提交的内容差异.

- git log -p -2 加上-2 显示最近的两次提交

- git log --stat 查询简易信息

- git log --pretty==oneline 打印一行

- git log --pretty==short 只显示commitID 和 commit信息

- git log --pretty==full 显示名字 email commitID commit内容

- git log --pretty==fuller 显示时间 包括authorDate和commitDate 名字 email commitID commit内容

## 最有意思的是 format

- git log --pretty=format:"%h - %an, %ar : %s"

### format常用选项

- %H  --- 显示完整的commit 哈希值字串
- %h  --- 显示简短的commit 哈希值字串
- %T  --- 显示完整的commit 哈希值字串(树对象tree)
- %t  --- 显示简短的commit 哈希值字串(树对象tree)
- %P  --- 显示完整的commit 哈希值字串(父对象)
- %p  --- 显示简短的commit 哈希值字串(父对象)
- %an --- 作者的名字
- %ae --- 作者的邮件地址
- %ar --- 作者修订日期,按多久以前的方式显示
- %cn --- 提交者(committer)的名字
- %ce --- 提交者(committer)的邮箱地址
- %cd --- 提交日期
- %cr --- 提交日期,按多久以前的方式显示
- %s  --- 提交信息

### _作者和提交者的区别是,作者是修改的人,提交者是把修改提交到仓库的人_

> oneline 或者 format与另一个log选项--graph结合使用时很有用,这个选项添加了一个ascii 字符串来形象地展示你的分支,合并历史:

## 撤销操作

- git commit --amend(修改)
- _可以覆盖上一次commit 只添加更改 不添加提交次数_
- git reset `<file>`...
- _取消暂存_
- git reset commitID
- _版本回退_
- git checkout -- `<file>`
- _取消文件的修改,危险操作,会撤销所有的修改_

###　远程仓库

- git pull origin master --allow-unrelated-histories

此命令在仓库是在本地创建的然后在添加远程仓库的时候使用

- git remote add origin "git@github.com:lenve/test.git"

- git remote

    _查看远程仓库,名字_

- git remote -v

    _查看远程仓库的详细信息_

- git remote add `<shortname> <url>`

    _添加一个新的远程仓库,同时可以指定一个简写,如果你想拉取别人仓库中有但是自己没有东西,可以使用 git fetch `<shortname>`_

- git fetch [remote-name]

    _从中拉取所有你还没有的数据.执行完成后,你将会拥有那个远程仓库中所有分支的引用,可以随时合并或者查看_

- git clone [remote-position]

    _默认生成一个远程仓库 默认名字为origin_

- git pull

    _从最初克隆的服务器上抓取数据并且自动尝试合并到当前所在的分支_

- git pull --allow-unrelated-histories

现有本地库,再有远程库的操作,把远程库关联到本地库.

- git push origin(remote-name) master(branch-name)

    _推送到远程仓库,只有当你有所克隆的服务器的写入权限,并且之前没有人推送过时,如果别人推送过后,你再推送,毫无异味你的推送会被reject,因为远程仓库已经变化,你必须先合并别人的工作后再提交自己的工作_

- git remote show [remote-name]

    _查看远程仓库与本地仓库的信息_

- git remote rename

    _远程仓库的移除与重命名 示例 git remote rename oldname newame 注意这同样也会修改你的远程分支名字. 那些过去引用oldname/master 的现在会引用 newname/master_

- git remote rm [remote-name]

    _直接删除远程仓库_
