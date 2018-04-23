# 响应式开发
  - meta标签
  ```html
  <!-- 以下标签定义了该页面的宽度等于设备的宽度,并且缩放比例为1:1,用户不可缩放 -->
  <!-- 根据设备像素比设置初始化缩放倍数 -->
  <meta name="screen" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

  ```
      例如,iphone5的像素设备比为2,意思是css的一个像素等于iphone设备的两个像素;所以css像素要缩小一倍,那么缩放比就要设置成1/2

  - rem布局
