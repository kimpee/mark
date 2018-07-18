# vue 踩坑笔记

## swiper

    swiper 若是在 mounted 里面开启，当数据发生更新时，swiper 会出现你意想不到的情况。

    `解决办法 :`在updated 里面开启

## input checkbox 切换
  ```html
  <input  @change="allContorl(item)" :checked="selected.indexOf(item.goodsId) > -1" type="checkbox" />

  <input @change="allContorl()"  :checked="selected.length == shoppingList.length" type="checkbox">

  ------------------------------------------------------------------------------------------------------

  <input  @change="allContorl(item)" checked v-if="selected.indexOf(item.goodsId) > -1" type="checkbox" />
  <input @change="allContorl(item)" v-else type="checkbox" />

  <input @change="allContorl()"  checked v-if="selected.length == shoppingList.length" type="checkbox">
  <input @change="allContorl()"  v-else type="checkbox">

  <p>在 vue 中 下面的 v-if 方法 不管用, 数组更新了以后 上放的v-if 并不会重新渲染 </p>

  <script>
  import http from "../../utils/httpclient.js";
  export default {
    data() {
      return {
        showframe: false,
        isLogin: this.$store.state.checkLogin,
        shoppingList: [{ goodsId: 2115 }],
        selected: []
      };
    },
    methods: {
      total(price, qty) {
        return price * qty;
      },
      changeqty({ num, source }) {
        let ip = "http://10.3.133.40:88";
        let carshopitem = { ...source };
        if (carshopitem.qty <= 1 && num < 0) {
          return;
        }
        carshopitem.qty = num;
        http.post(`${ip}/addCart`, carshopitem).then(res => {
          if (res.status) {
            http.post(`${ip}/getCart`).then(res => {
              this.shoppingList = res.results;
            });
          }
        });
      },
      allContorl(item) {
        if (item) {
          if (this.selected.indexOf(item.goodsId) > -1) {
            this.selected.splice(this.selected.indexOf(item.goodsId), 1);
          } else {
            this.selected.push(item.goodsId);
            }
          } else {
          this.shoppingList.forEach(({ goodsId }) => {
            if (this.selected.indexOf(goodsId) < 0) {
              this.selected.push(goodsId);
            } else {
              this.selected.splice(this.selected.indexOf(goodsId), 1);
            }
          });
        }
      }
    },
    mounted() {
      let ip = "http://10.3.133.40:88";
      http.post(`${ip}/getCart`, {}).then(res => {
        this.shoppingList = res.results;
      });
    }
  };
  </script>
  ```
