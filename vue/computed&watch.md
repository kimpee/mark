# 计算属性和监听器
  - computed属性用于处理复杂的逻辑
  - 属性名与data的属性名不能重复

## computed(所有复杂的逻辑都应该放在这里执行)
  - computed函数返回的值有缓存作用,即绑定的数据不更新(叫依赖,通俗一点就是变量),返回的值会返回上一次执行的值,如果不想有缓存,那么请使用methods里的方法
  - computed里函数会根据数据的改变而重新执行,若是computed里能解决的问题,就不要在watch对象里面定义解决方法
  - 计算属性有一个默认`getter`,必要时你也可以设置一个`setter`
  ```html
  <div id="app">
    <p>{{calctotal}}</p>
  </div>
  ```
  ```js
  new Vue({
    el:"app",
    data:{
      name :"kimpee"
    },
    computed:{
      calctotal:function(){
        //this指向此vue实例
        this
        // name的值发生变化,如果这里引用了name变量,这里的方法就会重新执行一次
        return this.name.toUpperCase();
      },
      fullname:{
        get:function(){
          return this.val;
        },
        set:function(val){
          this.val = val;
        }
      }

    },
    methods{
      calctotalnocatch:function(){
        //this指向此vue实例
        this
        return...
      }
    },
    watch:{
      firstname(val){
        this.fullName = val + ' ' + this.lastName
      }
    }
  });
  ```
## watch
  - 侦听器的属性名是data的属性名,代表那个数据发生改变,就执行这个属性名下的方法
  - 异步操作一般都是使用watch属性
  虽然大多数情况下,computed可以解决所有问题,但是在特殊情况下还是需要watch属性来干活,不如要执行一些开销比较大的异步操作,而且每次数据都会不同.
