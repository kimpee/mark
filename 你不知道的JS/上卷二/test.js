//记录函数被调用多少次
// function foo(num){
//     console.log("foo:"+num);
//     this.count++;
// }
// foo.count=2;
// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }
// console.log(foo.count);

function foo(){
    var a=2;
    bar();
}
function bar(){
    console.log(this.a);
}
foo();