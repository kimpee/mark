# 时间循环

  因为JavaScript 是一个单线程的脚本语言, 所以一些异步操作,久放在一个任务队列里面,然后通过循环执行这些任务队列达到,多线程的效果.

## microtask&&macrotask

  在执行了主逻辑后,JavaScript会把一些属于 microtask 的任务放在 microtask 任务列表中,属于macrotask的任务放到macrotask当中去,然后会循环这两个任务列表去执行任务.