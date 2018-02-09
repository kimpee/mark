# 数组

- splice(start,deleteAcount,item1)方法 可以添加删除,修改多个元素
 
    > 删除参数: 只使用start参数,会删除数组的头尾元素;

    > 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 后面就是添加的选项 

    > 添加参数: startindex deleteacount(删除0个元素)  value1,value2,value3,.... 如果start的值比数据的元素个数大,就添加元素无论deleteaccount的多少

    > 删除参数: startindex value   value指删除的个数 删除的个数比start后面的元素多 就会把start在内的元素都删除

    > 修改参数: 先删除后添加 startindex value(删除个数) value(添加个数)

    > 返回值,是所有被删除的数据组成的一个新数组 