# class和style
## class
  - 对象写法
    ```html
    <div v-bind:class="{avtive:isActive}" class=""></div>
    ```
  - 函数写法
    ```html
    <div v-bind:class="computedclass"></div>
    <script type="text/javascript">
      new Vue({

        computed:{
          computedclass:function (){
            return {active:this.isActive}
          }
        }
      });
    </script>
    ```
  - 数组写法
    ```html
    <div v-bind:class="[activeclass,errorclass]"></div>
    <script type="text/javascript">
      new Vue({
        data:{
          activeclass:'active',
          errorclass:'error'
        }
      });
    </script>
    ```
  - 数组语法中可以使用对象语法.

## 用在组件上
  - 用在组件上,类会添加到组件的根元素上
## style(内联样式)
  - `:style="styleObj"` 通常直接绑定一个对象
  ```js
  styleObj:{
    color:red,
    fontSize:'13px'
  }
  ```
