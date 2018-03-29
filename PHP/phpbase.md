# ＰＨＰ基础
  - php内置函数一般都是传对象进去,并不是对象.func();
## 变量
  - 声明
    - $name = 'name';
    - $age = 23;
    - $isman = true;

  - 操作
    - $num1 + $num2  可运算 ,字符串与数字相加,返回数字的值
    - $num1 . $num2 变量值拼接

  - 作用域
    - 在函数内部声明的变量是局部变量只能在内部使用
    - 在函数中使用一个全局变量,需要使用一个global关键字
      ```php
      $x = 5;
      $y = 10;
      function myTest(){
        global $x,$y;
        $y = $x + $y;
      }

      ```
    - php把所有的全局变量存储在一个名为$GLOBAL[index]的数组中,index保存变量的名称,也可以用来直接更新全局变量
      ```php
        $x = 5;
        $y = 10;
        function myTest(){
          $GLOBAL[$y] = $GLOBAL["x"] +  $GLOBAL['y']
        }
      ```
    - Ｓtatic 作用域 ,如果你想函数完成的时候局部变量不被删除,那么在变量声明的时候使用static关键字
      ```php
        static $name = 'kimpee'
      ```

## 常量
  ```php
    // BBBB 常量名字,羊羊常量的值
    define('BBBBBBBB','羊羊');

  ```
## Array
  - 类型
    - 数值数组-带有数字索引的数组
    - 关联数组-带有指定的键的数组,每个键关联一个值(类似与map,中间用=>连接)
    - 多维数组-包含一个或多个数组的数组
  - 创建数组
    ```php
    //数值数组
    $arr = array('ss','fp','qz','mm');
    // 关联数组
    $garr = array(
      "mm" => "妹妹",
      "ss" => "雪雪",
      "fp" => "肥婆",
      "qz" => "琼猪"
    );
    ```
  - 数组方法
    - count(arr); 获取数组的长度
    - in_array(val,arr,boolean); 判断某个值是存在数组中,第一个参数是值,第二个参数是数组,第三个参数为true时,会比较其类型是否一至
    - array_slice(arr,offst[,len,boolean]) 截取数组第一个参数为数组,第二个参数为起始位置,第三个参数为长度,第四个参数为是否不对index重新排列
    - array_rand(arr); 获取随机索引值;
  - 遍历
    - for 一般用于遍历数值数组
    ```php
    for ($i=0; $i < count(arr) ; $i++) {
      // code...
    }
    ```
    - foreach 一般用于遍历关联数组
    ```php
    foreach ($arr as $key => $value) {
      // code...
      // $keys 是键
      // $value 是值
    }
    ```
  - 排序
    - sort(arr); 升序
    - rsort(arr); 降序
    - asort(arr);根据关联数组的值,升序
    - ksort(arr);根据关联数组的键,升序
    - arsort(arr);根据关联数组的值,降序
    - krsort(arr);根据关联数组的键,降序
## String
  - 并置用 . 拼接字符串
  - strlen(str);返回字符串长度
  - mb_strlen(str) ; 返回字符串字节数的长度,一个中文等于3个字节
  - strpos();查找某个字符在字符串内的数字
## 函数
  - 自定义函数
    - 参数,参数默认值

  - return ; 返回值
## 文件读取
  - fopen(filename,mode); 打开读取文件流 返回文件对象
  - filesize(filename); 得到文件的大小
  - fread(resource,len); 读取文件 返回字符串
  - fwrite(resource,str,len);
## JSON操作
  - json_encode(var);
  ```php
  // 后面的常量表示不把中文进行unicode编码 
  json_encode($res,JSON_UNESCAPED_UNICODE)
  ```
  - json_decode(jsonstr);

## Ajax跨域
  - header()(cros跨域)
    ```php
    header('Access-Conrtol-Allow-Origin:' . 'a.com');
    header('Access-Conrtol-Allow-Origin:' . '*');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    ```
## 服务器代理跨域:(爬虫)获取某个网站所有的数据然后使用正则匹配提取数据
  - file_get_contents(url/filename);
  - preg_match_all($regexp,$str,$res)
  - preg_match($regexp,$str,$res)

## ajax
  - 获取get请求数据
    只要地址栏有参数,后端就能获取到参数
  - 获取post请求数据
    - 后端要获取前端数据,前端一定要添加请求头(在open()后设置);
    - xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');


## 对象
  - 定义
  ```php
    class Person{
      var $name = "kimpee"; // 一般不修改的值才会这样定义
      function setName($name){
        $this->name = $name; // $this 是一个指向对象实例的一个指针
      }
      function __construct ($firstName,$lastName){
        $this->fisrstName = $firstName;
        $this->lastName = $lastName;
      }
      //方法访问控制
      /*
        public 公开
        private 私有 (不继承)
        protected 保护
        static 静态
      */
      public function eat(){

      }
    }
    //继承
    class Student extends Person{

      //重写方法
      function setNmae($name){
        $this->name = $name;
      }
    }
    // 实例化 没参数时候可以加括号
    $p = new Person;
    $p = new Person();
    // 方法的调用
    $p->setName("bb");
  ```
