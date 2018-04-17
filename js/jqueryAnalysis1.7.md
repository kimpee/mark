# jquery mark
  - jquery 源码架构
    ```javascript
    (function( window, undeﬁned ) {
      // 构造jQuery 对象
      var jQuery = (function() {
        var jQuery = function( selector, context ) {
          return new jQuery.fn.init( selector, context, rootjQuery );
        }
      return jQuery;
      })();
    // 工具方法Utilities
    // 回调函数列表Callbacks Object
    // 异步队列Deferred Object
    // 浏览器功能测试Support
    // 数据缓存Data
    // 队列Queue
    // 属性操作Attributes
    // 事件系统Events
    // 选择器Sizzle
    // DOM 遍历Traversing
    // DOM 操作Manipulation
    // 样式操作CSS（计算样式、内联样式）
    // 异步请求Ajax
    // 动画Effects
    // 坐标Offset、尺寸Dimensions
      window.jQuery = window.$ = jQuery;
    })(window);
    ```
  - 构造函数的七种用法
    1. jQuery(selector[,context]);传入一个css选择器,和一个可选的上下文对象,返回一个包含DOM元素的jQuery对象
    2. jQuery.(html[,ownerDocument]),jQuery(html,props);用提供的html字符串创建元素,返回一个包含DOM元素的jquery对象
      - 当html为一个标签时,props是一个对象like this
      ```javascript
      // 属性名为jquery 支持属性
      $("<input>", {
        type: "text",
        val: "Test",
        focusin: function() {
          $(this).addClass("active");
        },
        focusout: function() {
          $(this).removeClass("active");
        }
      }).appendTo("form");
        ```
    3. jQuery(element);jQuery(elementarr);封装DOM对象为jquery对象
    4. jquery(object); 封装普通对象为jquery对象;
      - 可以方便的在put普通的javascript对象中实现自定义的事件绑定与触发
        ```javascript
          //定义一个普通的对象
          var foo = {name:'kimpee',age:18};
          //把他转化成一个jquery对象,他就可以调用jquery的方法了
          var $foo = ${foo};
          $foo.on('customer',function(){
            console.log('做点啥');
          });
          // 利用jquery的特性
          $foo.trigger('customer');

        ```
    5. jQuery(callback); 回调函数,在dom结构加载完成后执行
    6. jQuery(jQuery object);复制jQuery对象
    7. jQuery(); 返回一个空的jQuery对象;
