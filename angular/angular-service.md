# angular 服务

## Location (用于与浏览器打交道)

`最佳实践 : `导航会上一个URL
```ts
import { Location } from '@angular/location'
class xxxComponent{
  constructor(private location: Location){}
  goback(){
    this.location.back();
  }
}
```