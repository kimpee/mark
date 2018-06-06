# css细节问题

## 优先级
 - 先看样式来源，也就是说样式是谁写的。同时结!important。
    
    浏览器+!important>用户 +!important>开发者 +!important> 开发者 > 用户 > 浏览器
 - 再看规则的特异性（specificity）。

    内联 > 选择器
 - 最后看声明顺序。
    
    什么内部外部根本不影响，网上错漏百出的文章太多了。


## 布局
    给父元素加一个 空元素 然后设置text-align:center 空元素设置 dispaly:inline-block; vertical-align:center 就可以把另一个也同样设置的子元素 垂直水平居中