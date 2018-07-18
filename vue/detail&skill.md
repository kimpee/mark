# 细节与技巧

## 细节

- 事件名

  尽量使用 xxx-xxx 的命名 因为html 对大小写不敏感

- 特殊html机构,例如,ul>li,dl>dt+dd,select>option 使用组件的时候这样使用
    ```html
      <ul id="app">
        <li is="test"></li>
      </ul>
      <script type="text/javascript">
        new Vue({
          el:"#app",
          component:{
            test:{
              template:"<li>呵呵</li>"
            }
          }
        })
      </script>
    ```
  - 通过渲染了子组件以后,才能$children属性才有子组件对象;

## 技巧

- 过滤和排序

  如果你不想删除数据,只是对数据做一些过滤或者排序的操作

  ```html

  <li v-for="item in evenNumbers">{{n}}</li>
  <script type="text/javascript">
    new Vue({
      data:{
        numbers:[1,2,3,4,5],
      },
      computed:{
        evenNumbers:function(){
          return this.numbers.fiter(function(number,idx,arr){

            return number%2===0;
          });
        }
      }
    });
    </script>
    <!-- 如果computed解决不适用.例如在嵌套`v-for`循环中,那就使用methods -->
    <div id="app" v-for="item in even(numbers)">

    </div>
    <script>
    new Vue({
      data:{
        numbers:[1,2,3,4,5],
      },
      methods:{
        even:function(numbers){
          return numbers.fiter(function(number,idx,arr){

            return number%2===0;
          });
        }
      }
    });
  </script>
  ```

## vuex 使用场景

1. 弹窗数据保存

2. 一个组件多次使用

