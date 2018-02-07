# 新增特性

- 语义特性 -

## 语义标签

- header
- nav
- main

> 一般只有一个

- article

> 文章块~语义块更强

- section

> 章节,区块

- aside

- footer

- hgroud

> 对标题进行组合

- figure 子标签 figcaption

> 对图片和文字组合  

- time

> `<time datetime="2018-2-15">新年</time>`

> > datetime 属性在所有浏览器中不会渲染任何效果

- 待定

- details(只有chrome,safari支持)

> `<summary>` 为细节定义标题

- mark(定义带有几号的文本,在需要突出显示时突出)

- progress

> 进度条属性:max,value

> > `<progress max="200" value="100"> <span>50</span>% </progress>`

- meter度量尺

> 属性:min="30" max="100" value="38" low="60"(较低的值) high="90" optimum(较佳的值,若该值大于较高的值,则是越高越好,若小于较高的值,则越低越好)

> > 完成多少 属性值改变 标签内的值也要改变(最好)

- ruby注释标签 内嵌rt标签

> 像添加拼音一样

> > 若是浏览器不支持用rp标签包住里面的标签然后用小括号扩住 然后再加一个rp

> > > 像这样`<ruby><rp>(<rp>嘻<rt>xixi</rt></rp>)</rp></ruby>`

- datalist 配合input使用 list属性填上datalist的id 实现拥有下拉功能的下拉列表 safari不支持

- output

> 配合input,form使用

> > 给他们的name一个值

- input type="color" 拾色器

- input type="email" 包含正则(验证表达式)

- input type="number"

- input type="tel"

- input type="seacrh"

- input type="range"

> 属性 min max value step="10"

- input type="date" 时间选择
- input type="money"
- input type="week"
- input type="time"
- input type="datetime-local" 年月日时分都有
- input type="text" placehoder="年货节抢红包" autofocus 属性 自动聚焦
- input type="text" requiered 具有此属性 不能为空
- input type="tel" pattern="/\d{7,11}/"
- vedio src autoplay loop controls(控制器) width height poster="src..."

> 可内嵌source标签 属性 src="" type="video/ogg"(不可缺)

- audio src

## 边框阴影
- box-shadow: 1px(x-offset) 1px(y-offset) 2px(blur模糊区域) 23px(spread扩展区域) red(还用说?) inset(向内延伸),;

## 边框图片 border-image
- border-image-source:url(). 引入后,图片会默认放在边框的四个角.
- border-image-slice:10 12 12 12;边框图片切割,取值遵循上右下左,不带单位
- border-image-width:10px;要是比边框宽度小则放不满边框
- border-image-outset:0px;不能取负值,往边框外部延伸
- border-image-repeat:repeat/round; 边框图片的重复 默认拉伸 repeat-重复 round 拉伸过的重复(多用)
- border-radius: 50%;(圆) 可以连写(top,right,bottom,left)
>  border-top-left-radius:50px(horizontal) 100px(vertical);

>  border-top-right-radius:50px(horizontal) 100px(vertical);

>  border-bottom-left-radius:50px(horizontal) 100px(vertical);

>  border-bottom-right-radius:50px(horizontal) 100px(vertical);

>  border-radius:12px 20px 39px/100px 92px;(斜杠左边是水平方向,右边是垂直方向,两个组合为一个角)
## 背景线性渐变

- background:-webkit-gradient:(linear,startx starty, endx endy,from(color),to(color));(不带px单位)

- background:-webkit-gradient:(linear,startx starty, endx endy,color-stop(0.5(开始渐变的位置,可以写多多个取值0-1),red),color-stop(0.8,bule));(color-stop中的两个参数要用逗号隔开)

- background: -webkit-linear-gradient(方向||角度,颜色 渐变开始的位置单位%)

> 往左是0deg

- background: linear-gradinet(方向||角度,颜色 渐变开始的位置单位%)
> 往上是0度

> 加了前缀的的角度(老版本)+不加前缀就是(新版本)=90

## 背景径向渐变

- background:-webkit-radial-gradient(50% 50%(圆心),red 15%,blue 50%,greed 100%);

- background:-webkit-radial-gradient(50% 50%(圆心),circle farthest(渐变到达哪里), red 15%,blue 50%,greed 100%(渐变开始的位置));

## 背景重复渐变

- background:-webkit-repeating-linear-gradient(50%,50%,red 15%,blue 50%,greed 100%);

- background:-webkit-repeating-radial-gradient(50%,50%,red 15%,blue 50%,greed 100%);

## 过渡 transition
- transtion-property:;过渡属性
- transtion-duration:;过渡时间
- transtion-timing-function:; 可能的值(linear ease-in ease-out ease, ease-in-out)过渡方式
- transtion-delay:; 延迟过渡

## 变换 transform

- 可用transform:translate(-50%,-50%);代替margin-left:-width/2;的定位方式来让子元素在父元素中居中

- transfrom:scale(2,0.5);

- transfrom:rotate(); 顺时针为正方向 单位deg

- transfrom:skew(45deg,45deg); 扭曲 分X轴和Y轴 水平为Y(顺时针为正值),垂直为X(逆时针为正值)

- transfrom-origin:horizontal vertical;
> 可写,竖直,百分比 或者方位

- 多个变化写在同一个transfrom中 用空格隔开 写多个transfrom是垃圾所为

- 
