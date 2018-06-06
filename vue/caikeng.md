# vue 踩坑笔记

## swiper

    swiper 若是在 mounted 里面开启，当数据发生更新时，swiper 会出现你意想不到的情况。

    `解决办法 :`在updated 里面开启