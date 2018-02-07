# BFC(block formatting context)

> 他是一个独立的渲染区域,与区域外部无关

- 布局规则

> 内部的box一个接一个的垂直摆放

> 属于同一个BFC(同级元素)的两个块元素会发成margin合并,

> 每个元素的margin box的左边紧贴BFC box的左边

> BFC区域不会与float box重叠(应用场景:清除浮动)

> > overflow:hidden会触发bfc

- BFC里面的子元素不会影响到外面的元素

- 计算BFC的高度时,浮动元素也参与计算

## 有哪些属性可以触发BFC

- float不为none
- inline-bolck,flex,inline-flex
- overflow不为visible

## 自适应两栏布局

- 某一边固定宽度,另外一栏不定宽度且overflow:hidden(变为BFC box);

- 若想两个垂直摆放的元素不发生margin合并,则给他们中的任意一个套一个盒子 然后把盒子设置为BFC盒子(overflow:hidden)
