# RX编程之RXJS
  rx,响应式编程,基于观察者模式,以一种极为优雅的方式处理异步回调,异步数据操作.在RXjava中,此类库基于接口回调,下面让我们来看看 RX 在javascript 中的变现

  最经典的观察者模式便是事件监听器.

## 主要框架

### Observable(可观察者)
  一个接口,监听传入的通知,并且在适当的时候( subscribe时 )把监听到的通知发送给另一个接口.

### Subscription(订阅,注意这是一个名词)
  Observable subscribe 以后会变成一个 Subscription. (subscribe以后返回会一个Subcription,可用于结束监听)

### Observer(观察者)
  响应Observable 推出的通知 的一个借口. 通常传入 Observable()方法内 或者扔进subscribe 他有3个方法,error,next,complete.next可以把值传递给 订阅者 处理 , complete 终止 Observable 和 Observer 的合作

### Operators(操作符)
  其实是一系列的方法 用于操作 Observable 的输出,最后把输出 输出到Observe ,类似于中间件.

```js
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
 
range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));
```

