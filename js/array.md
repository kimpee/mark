# 数组

- pop() 删除数组末尾的元素并且返回
- push() 往数组的末尾添加
- shift() 在数组的头部开始删除
- unshift() 在数组的头部开始添加


- splice(start,deleteAcount,item1)方法 可以添加删除,修改多个元素
 
    > 删除参数: 只使用start参数,会删除数组的头尾元素;

    > 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 后面就是添加的选项 

    > 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 如果start的值比数据的元素个数大,就添加元素无论deleteaccount的多少

    > 删除参数: startindex value   value指删除的个数 删除的个数比start后面的元素多 就会把start在内的元素都删除

    > 修改参数: 先删除后添加 startindex value(删除个数) value(添加个数)

    > 返回值,是所有被删除的数据组成的一个新数组 

### 索引值方法

* indexOf()

* lastIndexOf()

### 迭代方法

* forEach(fn)
  
* map(fn)
  转换方法,返回一个大小相同的数组,每一位的值取决于函数的返回值;

* filter(fn)
  过滤方法,得到执行fn后 返回值为true 新数组元素

* some(fn) 
  只要有一个元素符合条件,则返回true

* every(fn)
  所有元素都返回true才返回true
以上方法都接受3个参数 item idx array 后两个可选 

### 归并方法
* reduce(fn[,initValue])
  接受一个回调函数和一个初始值
  回调函数有4个参数
  per 上一次返回的值,如果有initValue  那么第一次返回的值就是initValue,如果没有那么第一次返回第一个元素的值
  current 当前的值
  index 索引值
  array 当前数组

### 复制数组
- slice
