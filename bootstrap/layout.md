# 布局

## Containers
  - Containers是布局最基本的元素,在使用默认的网格布局时,这个是必须的;
    container可以嵌套,但是大多数情况下,并不需要嵌套;
  - `container`的3种方式
    - responsive(相应式的)
    - fixed-width(意味着使用max-width和断点来控制宽度);
    - fluid-width(百分比布局)
      ```html
      <div class="container">
        <!-- content here -->
      </div>
      ```
  - `.container-fluid` 百分比布局占用整个视口


## 网格布局
  - base
    ```html
    <div class="container">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
    ```
  - 行是一个容器 使用flex布局
  - 每一列都有一个padding 叫(gutter)去控制他们之间的空白,用于抵消具有负margin or border的行.
  - 此方法使内容在视口上左对齐

  - 使用网格布局,内容必须放在`col-sm`里面,且只有列可以做row的直接孩子
  - 如果不想使用 gutter 可以在 row 里使用 `.no-gutters` 取消 row 的 `margin` 和 columns的`padding`;
  - 使网格相应,设置有5个断点((extra small), small, medium, large, and extra large)
  - 网格断点基于最小宽度的媒体查询,所以子元素可以应用大于他们断点的媒体查询(例如`.col-sm-4`应用 small,medium,large,extra latge.但是不会相应 extra small (xs))
  - `.col-sm-6`不确定多少列时用这个.
  - 等款列可以有多行,但是safari旧版有 *flxed box bug* 需要在换行处添加一个`w-100`类用于换行  


## 设置一行的宽度
  - code
    ```html
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <!-- 设置了这行的宽度,其他行用col自适应宽度 -->
      <div class="col-6">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
    ```
  - 需要设置的列使用适合的类名,其他列使用 `col`类

## 可变宽度内容
  - 使用 `col-{breakpoint}-auto` 可以让内容宽度来决定列的宽度
    ```html
      <div class="row justify-content-md-center">
       <div class="col col-lg-2">
         1 of 3
       </div>
       <!-- 此div宽度自适应 -->
       <div class="col-md-auto">
         Variable width content
       </div>
       <div class="col col-lg-2">
         3 of 3
       </div>
      </div>
    ```
  - 除非你需要一个特别的宽度(`col-*`),否则请使用`col`
  -
## mix and match (混合与匹配)
  - 不想某一行发生 换行使用 组合class来应付
    ```html
    <!-- 在合适的媒体查询中,col-md-4 生效,会覆盖掉前面的css属性 -->
    <div class="col-6 col-md-4">

    </div>  
    <div class="col-6 col-md-4">

    </div>  
    <div class="col-6 col-md-4">

    </div>  
    ```

##　对齐(alignment)
  - 使用flexbox 设置水平的对齐和垂直的对齐
  - vertical
    - 在row上加上如下类`align-items-start`,`align-items-center`,`align-items-end`
    - 在col上加上如下类`align-self-start`,`align-self-center`,`align-self-end`
  - horizontal
    - 在row上加上如下类`justify-content-start`,`justify-content-center`,`justify-content-end`,`justify-content-around`,`justify-content-between`

## no gutters (防止行负边界) (中文翻译排水沟???)
  - 在row内添加`no-gutters` 可以移除row的margin和col的padding

## 列容器(column wrapping)
  - 当一行超过了12列,会启用新行,新行依然能装12列(这还用说?)

## 排序
  - `order-*`

## 偏移
  - `.offset-md-*` 表示想左偏移*列

## 重置offset 除了在相应处换行外,其他情况可能需要重置offset
  ```html
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
      .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
    </div>
  </div>
  ```

## margin utilities
  - 随着v4移向了 flexd ,有可以像 `.mr-auto` 这样使用margin utileties来让兄弟列远离另一列(sibling columns away from another column)
    ```html
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
      <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
    </div>
    <div class="row">
      <div class="col-auto mr-auto">.col-auto .mr-auto</div>
      <div class="col-auto">.col-auto</div>
    </div>
    ```

## nesting(嵌套)
  - 添加你的内容到默认表格,可以在存在的列中嵌套`.row`
