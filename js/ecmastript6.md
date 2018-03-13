# ecmascript6 基本新特性
- 兼容性; ie7~11 基本不支持.
## 变量声明
- let 创建块级作用域
  - 变量不提升
  - 同一个作用域不允许名字一样的变量

- const 常用于引用第三方库
  - 特性与let一样 不同的是const声明后不可修改

## 解构
- 对象 var obj={name:'pee',age:18}
  - var {name,age} =obj; 解构失败返回undefind(即没有该属性  却使用了该属性)
  - 解构失败 var {love,age} =obj; 没有love属性,会返回undefined
  - 对undefined或者Null解构,会报错
  - 可设置默认值 var {name,age=8} =obj; 当解构失败时就使用设置好的值
- 数组 var arr = [2,324,4];
  - var [a,b,c] = arr; 相当于 var a=2,b=324,c=4;
  - 其余跟对象一致

- 用途
  - 交换变量值; var [x,y]=[y,x];
  - 函数返回多个值,return [1,2,3] var [name1,name2,name3] = functionname();
  - 定义函数的形参 (*重点*)    不用再考虑参数的顺序了
    ```javascript
      function test({x,y,z}){
        //
        var {x,y,z} ={x:10,z:45,y:45}
      }
      //传参
      test({x:10,z:45,y:45});

    ```

## 对象扩展,复制
- Object.assign(obj1,obj2)(注意是Object的方法)
  - 将obj1和obj2合并 若obj1为空对象,那么此方法可以合并对象
  - 只支持浅拷贝,深拷贝可以把对象变成JSON 字符串,在把字符串转成对象.
  - 忽略不可枚举属性

## 对象简写
- 属性简写
  ```javascript
    var name = 'kimpee';
    var age =18;
    var nameobj ={name,age} ==> var nameobj={name:'kinpee',age:18};
  ```
- 方法简写
  ```javascript
  var obj = {

    fun(){
        console.log('方法简写');
    }
  };
  ```

## 字符串扩展

### 字符串模板
- \`` 反引号定义
- 字符串模板只能在\`` 里面使用
  ```javascript
    var str=\`sdfdsafdsfdsdfaf+ ${date[i].idx}`;
  ```
- 模板字符串中的所有空格,新行,缩进,都会原样的输出在生成的字符串中.

### 字符串方法
- includes(); 返回一个Boolean
  ```javascript
    'kimpee'.includes('k'); // ture
  ```
- startsWith()/endsWith() 判断是否以()内的内容开头或结尾
  ```javascript
    'kimpee'.startsWith('k'); //ture
    'kimpee'.startsWith('e'); // ture

  ```
- repeat(n); 将内容重复传入的参数的次数
  ```javascript
  'kimpee'.repeat(2); //kimpeekimpee
  ```

## 箭头函数(ladam表达式)
1. 没有参数的时候,函数用()加=>加{}表示
  ```javascript
    var fun=()=>{}

  ```
2. 当参数只有一个的时候省略小括号
  ```javascript
    var fun= x => {}
  ```
3. 当代码块只有一句代码的时候,当做return使用,省略大括号
  ```javascript
    var fun= x => x=x+5;
  ```
4. 当多个参数的时候不可省略(),多行代码的时候不可省略{}与return
  ```javascript
    var sum = (a,b) => {
      a=a+5;
      b=b+5;
      return a+b;
    };
  ```
5. 当箭头函数翻会一个对象时,紧跟箭头函数后面的{不是解析为对象的{而是函数的{,解决方法如下
  ```javascript
    var fun=(x) => ({x});
  ```
6. 箭头函数中的this
  - 箭头函数没有自己的 this
  - 会使用上一个作用域的this

## 函数扩展
- 默认参数
  ```javascript
    function fun(a=10,b=30){return a+b;}
  ```
- 剩余参数
  - 剩余参数是一个数组,剩余的参数都是他的
  ```javascript
    function fun(a,...b){}
    fun(23,24,25,26,7,6587,68,78);//a=23,b=[24,25,26,7,6587,68,78];
  ```

## Symbol数据类型.

- es6 引入的 只可创建一次,不可重新复制,且值为独一无二
- var s1 =Symbol();var s2 =Symbol(); s1===s2;//false
- Symbol值不能与其他类型的值进行运算
- 用途一 以此创建私有属性;

  1. var mySymbol=Symbol();var a= {};a[mySymbol] = 'Nani';
  2. var a = {[mySymbol] : 'Nani'}

- 用途二 ?

- 常用方法
  - Symbol.for(); 在全局中查找Symbol值,如果找不到就新建一个,如果找到了就返回这个Symbol值(只会查找通过此方法创建的Symbol)
  - Symbol.keyFor(); 返回通过for()方法创建的Symbol的值.

## Set 集合,恒等的值只能有一个,重复的自动过滤

- add(val); 添加一个值,返回Set结构本身
- delete(val); 删除一个值,返回一个Boolean值,表示是否删除成功
- has(val); 返回一个Boolean值,表示是否存在该值
- clear(); 清楚所有成员,不返回值
- 遍历; for...of;forEach();
    *Array.from(); 可以把 Set 和 Map 转成数组*

## Map 映射集合  可以存任何的数据类型;
- 定义 var map=new Map();
- set('name'/array/obj/...,'kimpee'/arr/obj/...);
- has(key); 判断该结构是否存在该key值
- delete(key); 删除key值
- clear(); 清除该结构的所有key值

- 遍历方法
  - map.keys(); 返回所有的key值
  - map.valus(); 返回所有的valus值
  - map.entries() 遍历所有的键值对,返回类数组;
  - map.forEach(); 遍历所有的成员
  ```javascript
    // 配合解构
    for(let [key,value] of map){
      console.log(key,value);
    }
  ```

## 生成器函数Generators 增强函数,可以暂停函数的执行

- function 后接一个*
- 函数内部可以使用yield 表达式,
- next();
  - 执行next()后得到一个yield或return返回值组成的对象{value:xx,done:flase};
  - 对象中的done是否为ture,取决于函数是否结束;
  ```javascript
    function* gen(){

      yield 10;
      console.log('yield1');
      yield 20;
      console.log('yield2');
      yield 40;
    }
    let g=gen();//得到一个对象,里面有两个属性,一个是value 既是yield返回的值,第二个属性时done,若为ture,表示该函数执行完成.
    g.next();
  ```
