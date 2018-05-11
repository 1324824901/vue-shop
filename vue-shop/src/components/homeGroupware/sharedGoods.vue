<template>
  <div>
    <div class="sharedd">
      <div class="back-withe shar">
        <router-link to="/"><img src="../../assets/mIcon/title_back_white.png"></router-link>
      </div>
      <div class="shar"><p>共享商品</p></div>
    </div>

  <div class='share-background'>
    <ul>
      <li class="sharedGoodd"  v-for="(data,index) in sharedGoodsItem" :key="index">
        <div class="shareGooddImg">
          <img :src="'http://www.d1sc.com/'+data.goods_main_photo.path+'/'+data.goods_main_photo.name">
        </div>
        <div class="shareGoodP">
          <span>{{data.goods_name}}</span>
          <p class="share-price">￥{{data.store_price}}</p>
          <p class="share-volume">销量:&nbsp;{{data.goods_salenum}}</p>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      sharedGoodsItem: [] //共享商品列表
    };
  },
  methods: {
    //数据获取
    path() {
      axios
        .post("http://www.d1sc.com/appGetShareGoods.htm", qs.stringify({}))
        .then(res => {
          console.log(res);
          this.sharedGoodsItem = res.data.result;
          console.log(this.sharedGoodsItem = res.data.result);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    //打开页面首先自动获取一次数据
    this.path(1);
  }
};
</script>
<style>
@import "../../../static/style/css/sharedGoods.css";
</style>
