# 模版语法
  - 模版兼容所有的html标签,默认是完全覆盖,即若是自定义一个test组件,template里面的模版会完全覆盖掉test标签.最终在页面上并看不见test标签.
## 插值
  - 文本,以双大括号的形式绑定
  - 双大括号内可以使用javascript表达式,注意只能是单个表达式,并不是语句或者流控制表达式.

## 修饰符
  - `v-on:click.prevnet`后面的`.prevent`被称为修饰符,以上修饰符的意思是cilck时间触发的方法,阻止默认事件.

## 缩写
  - `v-bind:href`缩写`:href`
  - `v-on:click`缩写`@click`
