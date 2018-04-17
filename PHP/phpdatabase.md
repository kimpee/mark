# php数据库操作

## 数据库操作
  - sqli(连接)
    ```php
    // 设置头
    header('COntent-Type:text/html;charset=utf-8');
    $servicename = "localhost"; // 数据库地址
    $username = "username";
    $password = "passwork";
    $dbname = "dbname"; //数据库名字

    $mysql = mysqli($servicename,$username,$passwork,$dbname); // 返回一个对象
    //检测连接
    if ($mysql->connect_error) {
      // code...
      die('连接失败' . $mysql->connect_error);
      //die() 函数输出一条消息，并退出当前脚本。该函数是 exit() 函数的别名
    }
    $mydql->charset('utf-8');

    ```

  - 查询
    ```php
    $sql = 'select * from student'
    //插入数据也是使用这个方法;
    $students = $mysql->query($sql);
    $varstedents = $students->fecth_all(MYSQLI_ASSOC);
    $students->close(); // 关闭结果集.释放资源
    $mysql->close();//关闭数据库连接,释放资源
    ```

  - 插入数据
    - 字符串拼接(注意:这曾经把我坑死)
    ```php
    $sql = "INSERT INTO usermessage (user, password) VALUES (' ".$phone." ', '".$pwd."' )";

    ```

  - 获取数据
    ```php
    $students->num_rows; //返回表的数据条数
    $students->fetch_assoc(); //返回第一条数据
    $students->fetch_all(); //返回所有数据

    ```
