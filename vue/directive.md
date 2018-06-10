# 自定义指令(directive)

```js
  /**
  函数的参数
  @param el :绑定了指定的那个元素
  @param binding : 一个对象里面有若干属性
  @param vnode : 指令绑定了的那个虚拟节点 其实也是绑定到组件的整个实例
  @param oldvnode : 上一个虚拟节点,发生更新之后当前vnode 就会变成 oldvnode 只有 update 和 conponentUpdated 函数具有这个参数。
  */
  Vue.directive('focus',{
    bind(el,binding,vnode){ // 此方法只掉用一次,指定第一次绑定到元素时.

    },
    inserted(el,binding,vnode){ // 被绑定元素插入父节点调用,不保证已经在 dom中

    },
    update(el,binding,vnode,oldVNode){ //所在组件的VNode更新时调用,但是可能发生在其子VNode 更新之前。指令的值可能发生改变,也可能没有,但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
    },
    componentUpdate(el,binding,oldVNode){ //指令所在组件的 VNode 以及其所在的私有子 Vnode 更新后调用;

    },
    unbind(el,binding,vnode){ // 接触绑定时调用,只调用一次,一般做资源的释放

    }
  })
```

## 使用场景

  一般需要操作原生dom的 情景都是需要使用自定义指令去完成, 或者一个 v-for 去循环一个数组,若是要在某个位置执行某些操作,那么就可以定义一个自定义指令,让没个 元素都经过这个指令函数,然后在这个指令内部做判断.

1. 图片的延迟加载

  可以 new一个 Image 然后设置啊的 src 属性去加载图片, 真正的图片的src设置一个默认的图片然后在onload 监听 里面 给真正的img 标签设置src, 那么浏览器就会从缓存获取该图片,达到良好的用户体验.
  
2. 但凡遇到集成第三方插件,都可以考虑使用指令来做。