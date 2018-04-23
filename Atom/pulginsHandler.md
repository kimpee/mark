# Atom插件编写指南(官方文档翻译)
  - 使用package-generator
  - ctrl-shift-p 打开命令输入框输入package-generator就可以找到该命令
## 插件中的package.json文件
  - 基本和 node 的package.json相同.
  - atom独有的属性:
    - main:你的package的入口js文件路径,如果没有,默认使用index.coffe或者index.js
    - styles: 一个字符串数组,决定样式加载的顺序,默认字母顺序
    - keymaps: 一个字符串数组,键盘映射的加载顺序,默认字母
    - menus: 一个字符串数组,菜单映射顺序,默认字母
    - snippet : 字符串数组,默认字母
    - activationCommands : 一个对象,可以辨别触发激活你的包的命令,键是css选择器,值是一个字符串命令数组,只有其中一个命令在规定的css范围内触发,atom才会加载你的包,如果不指定,你的入口文件的`activate()`方法会在包加载后调用,
    - activationHooks: 不是很懂,大概是使用什么语法去解释脚本(推荐到观看英文版本)
## 源代码
  - 如果你想继承atom的行为,你的package应该包含一个单一的[top-level]顶级模块,你的代码应该写在lib目录下,然后`required`主文件(packageName.js);
  - 顶级模块是一个管理你的插件的生命周期的单一对象,无论你的插件创建了多少个视图,添加到哪个位置,这全部都有顶级模块管理
  - 顶级模块可以实现下面的方法
      - activate(state): 插件激活时被调用。如果你实现了 serialize() 接口，它会传递窗口上次的state. 一般用这个接口来初始化插件。
      - initialize(state): (Atom 1.14以后的版本支持) 与activate() 功能类似，不过被调用的更早，可以说在所有操作之前被调用。 如果你想等环境运行完毕了再初始化，请用 activate() 。如果需要在画面构造前执行什么，请用initialize() 。
      - serialize(): 在窗口被关闭的时候，允许你返回 JSON 序列，来保存当前的状态。你保存的信息，可以传递给activate() 接口，来在下次启动时恢复你的窗口状态。
      - deactivate(): 窗口关闭时会调用这个接口，如果你的插件正在使用某些资源，或关联着某些文件，请在这里释放他们。
## style-sheels
  - 你的样式应该写在styles里,当你的包激活的时候,在这个目录的任何样式都会被加载,你可以查看atom的ui组件执行styleguide命令.如果你不需要样式文件保留就好,如果你要指定颜色和大小,请使用主题提供的变量.
## keymaps
  - 指定快捷键,会coffeeScript语法,一看就懂.
## menus
  - context-menu 右键菜单,一看就懂
  - menu 导航菜单的设置
## 开始开发
  - 入口js文件有4个方法,activate(),deactivate(),serialize(),toggle();
    - deactivate(); 释放资源的方法,不要做其他事情
    - serialize(); 序列化方法,做一些状态保存的工作,不要做其他事情.
    - activate(); 唯一需要激活的方法,在atom加载后会自动执行
  - 主方法的toggle方法不会自动执行,需要手动执行.
  - CompositeDisposable class  注册插件中可以被调用的命令.
  - 本例子中toggle方法只是简单的显示画面与隐藏画面.

## the flow (流程)
  1. 启动atom
  2. 加载paceage
  3. atom read your package.json
  4. atom loads styles menus keymaps main module
  5. atom finishs loading package
  6. 在某个点,用户触发了你的toggle命令
  7. atom执行你的激活方法(`avtitave`);
  8. atom执行toggle方法.
  9. 在某个时候,用户有触发了你的toggle命令
  10. atom又执行你的toggle方法
  11. 最后atom会关闭任何你定义的序列化
  *当你不使用actitaveCommand这个属性时 执行的顺序会有所不同*
## 开始修改
  - 继承atomUI 即绘制自己的ui addModalPanel();
    ```js
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.commentHighlightView.getElement(),
      visible: false
    });
    ```
  - 继承ui方法2:you can also add items to the workspace;
    - tree view console debugger outline view 等等面板都是用这个实现的;
  - const edit = atom.workspace.getActiveTextEditor(); 获取当前编辑器对象
  - edit.getText(); 获取所有文本
  - edit.insertText(); 如果选中了文本这个方法会替换文本,如果没有则在光标处添加文本;
  - edit.getSelectedText(); 明显是获取到选择到的文本
