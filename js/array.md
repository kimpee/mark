# 数组

- pop() 删除数组末尾的元素并且返回
- push() 往数组的末尾添加
- shift() 在数组的头部开始删除
- unshift() 在数组的头部开始添加

- splice(start,deleteAcount,item1)方法 可以添加删除,修改多个元素

  - 删除参数: 只使用start参数,会删除数组的头尾元素;

  - 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 后面就是添加的选项

  - 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 如果start的值比数据的元素个数大,就添加元素无论deleteaccount的多少

  - 删除参数: startindex value   value指删除的个数 删除的个数比start后面的元素多 就会把start在内的元素都删除

  - 修改参数: 先删除后添加 startindex value(删除个数) value(添加个数)

  - 返回值,是所有被删除的数据组成的一个新数组

## 索引值方法

- indexOf()

- lastIndexOf()

### 迭代方法

- forEach(fn)

- map(fn)
  转换方法,返回一个大小相同的数组,每一位的值取决于函数的返回值;

- filter(fn)
  过滤方法,函数返回true则要该元素 返回false为不要该元素

- some(fn)
  只要有一个元素符合条件,则返回true
- every(fn)
  所有元素都返回true才返回true
以上方法都接受3个参数 item idx array 后两个可选

### 归并方法

- reduce(fn[,initValue])

接受一个回调函数和一个初始值
回调函数有4个参数
per 上一次返回的值,如果有initValue  那么第一次返回的值就是initValue,如果没有那么第一次返回第一个元素的值
current 当前的值
index 索引值
array 当前数组

### 复制数组

- slice(num[,num]);

```js
  arr.slice(3); //从下标3(包含3)开始截取到最后
  arr.slice(2,4);// 截取下标2(包含2)到4(不包含4)的元素 也就是2个
```

## es6

- `array.of(1,2,3)`

代替 `Array` 的替代性构造器, `array.of(3)` 不会产生空槽值

- `array.from(arr, function map (item, index){}, mapcontext)`

把类数组转化成一个数组, 以享用数组的便利. 类数组对象是一个有length属性的对象

- array.copyWithin(targetposition, startposition[, endposition])

可支持负数, 不会扩展数组的长度, 到达末尾会停止拷贝.

- array.fill(undefined[, startposition, endposition])

用一个值来填充整个数组的所有空位置

- array.find(function matcher() {}, matcherthis)

与some类似, 返回的是值.

- array.findIndex(function matcher() {}, marcherthis)

寻找匹配值的index

不要使用findIndex(..) != -1（在indexOf(..)中经常这么干）来从检索中取得一个boolean，因为some(..)已经给出了你想要的true/false了。而且也不要用a[ a.findIndex(..) ]来取得一个匹配的值，因为这是find(..)完成的任务。最后，如果你需要严格匹配的索引，就使用indexOf(..)，如果你需要一个更加定制化的匹配，就使用findIndex(..)。
