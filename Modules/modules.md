# 模块

 模块化有3种规范,一种cmd 执行到require 才会去加载模块,amd 模块就是预加载模块,无论你的require写在哪里都会预先执行,commondjs 就是nodejs使用的规范(有一点修改,不过大体相同) 就是 require() exports module glob 等全局变量

## commonjs 与es6 modules 的区别

  commonjs 输出的是值 es6 输出的是指引用 也就是说 commonjs 输出了以后 内部值改变不会影响已经输出的值

## 浏览器中 commmonjs 的基本实现原理(非框架版(Browserify))

```js
// Usage
//
//   require.register("browser/debug.js", function(module, exports, require){
//     // Module code goes here
//   });
//
//   var debug = require("browser/debug.js");

function require(p){
  var path = require.resolve(p);
  var mod = require.modules[path];
  if (!mod) throw new Error('failed to require "' + p + '"');
  if (!mod.exports) {
    mod.exports = {};
    //这边马上调用该模块,并且传入模块(就是函数),该模块的公共对象,还有一个函数;
    mod.call(mod.exports, mod, mod.export,require.relative(path));
  }
  return mod.exports;
}

require.modules = {};

require.resolve = function (path){
  var orig = path;
  var reg = path + '.js';
  var index = path + '/index.js';
  // 判断模块是否已经存在,返回路径值,巧妙的运用 &&(前面的假,返回前面的,前面为真返回后面的) ||(前面的为假,返回后面的,前面的真返回前面的)
  return require.modules[reg] && reg
    || require.modules[index] && index
    || orig;
};

require.register = function (path, fn){
  //把注册的模块加入到全局的reuqire.modules对象里面.
  require.modules[path] = fn;
};

require.relative = function (parent) {
  return function(p){
    if ('.' != p.charAt(0)) return require(p);
    var path = parent.split('/');
    var segs = p.split('/');
    path.pop();

    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i];
      if ('..' == seg) path.pop();
      else if ('.' != seg) path.push(seg);
    }

    return require(path.join('/'));
  };
};
```

声明一个模块

require.register()

第一次注册后require.modules 变成这样:

```js
require.modules = {
  '/header': function(){}
}
```

var mod = require.modules['/header'] ==> function(){}

var header = require('/header');
