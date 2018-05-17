<template>
 <div>
    <!-- 搜索 -->
   <router-link to='./Search'><mt-search
   placeholder="输入商品名，店铺名"
   ></mt-search></router-link>

   <!-- <mt-loadmore :top-method="loadTop"
　　　　:bottom-method="loadBottom"
　　　　:bottom-all-loaded="allLoaded"
　　　　ref="loadmore"> -->
    <!-- 轮播 -->

    <mt-swipe :auto="3000" class="swipe1">
    <mt-swipe-item v-for="(data,index) in lbtImgList" :key="index"><img :src="'http://www.d1sc.com/'+data.defaultGoods.goods_main_photo.path+'/'+data.defaultGoods.goods_main_photo.name" @click="goto_detail(data)"/></mt-swipe-item>
    </mt-swipe>
      <!-- 栅格 -->
    <div class="grid">
      <div><p>品格就是财富，分享就能挣钱...</p></div>
      <div><router-link to="./sharedGoods"><p>共享商品</p><span>{{sharedGood}}</span></router-link></div>
      <div><router-link to="./salesVolume"><p>万手销量榜</p><img src="../../assets/mIcon/icon_sales_list.png" class="gridImg"></router-link></div>
      <div><router-link to="./wanshouProfit"><p>万手盈利榜</p><img src="../../assets/mIcon/icon_bonus_list.png" class="gridImg1"></router-link></div>
    </div>
    <!-- 轮播 -->
  <mt-swipe :auto="0" class="mint-swipe2">
    <mt-swipe-item>
      <div class="grid2">
        <div>
          <span><img src="../../assets/mIcon/icon_market_nvzhuang.png"></span>
          <p>女装市场</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_nvxie.png"></span>
          <p>女鞋市场</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_nanzhuang.png"></span>
          <p>男装市场</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_nanxie.png"></span>
          <p>男鞋市场</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_yundong.png"></span>
          <p>运动鞋服</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_fushi.png"></span>
          <p>服饰配饰</p>
        </div>
        <div>
      <span><img src="../../assets/mIcon/icon_market_shipin.png"></span>
          <p>食品保健</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_neiyi.png"></span>
          <p>内衣市场</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_riyong.png"></span>
          <p>日用市场</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_zhubao.png"></span>
          <p>珠宝饰品</p>
        </div>
      </div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="grid2">
        <div>
         <span><img src="../../assets/mIcon/icon_market_wenhua.png"></span>
          <p>文化用品</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_aihao.png"></span>
          <p>爱好市场</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_shenghuo.png"></span>
          <p>生活服务</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_gonyipin.png"></span>
          <p>工艺品</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_zihua.png"></span>
          <p>民间藏品</p>
        </div>
        <div>
       <span><img src="../../assets/mIcon/icon_market_jixie.png"></span>
          <p>机械五金</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_jiudian.png"></span>
          <p>酒店住宿</p>
        </div>
        <div>
       <span><img src="../../assets/mIcon/icon_market_sichou.png"></span>
          <p>丝绸</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_piaowu.png"></span>
          <p>虚拟票务</p>
        </div>
        <div>
          <span><img src="../../assets/mIcon/icon_market_jiaoyu.png"></span>
          <p>教育培训</p>
        </div>
      </div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="grid2">
        <div>
      <span><img src="../../assets/mIcon/icon_market_meirong.png"></span>
          <p>美容市场</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_tonzhuang.png"></span>
          <p>童装童鞋</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_shuma.png"></span>
          <p>数码市场</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_xiangbao.png"></span>
          <p>箱包市场</p>
        </div>
        <div>
     <span><img src="../../assets/mIcon/icon_market_jiadian.png"></span>
          <p>家电市场</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_wanjv.png"></span>
          <p>玩具市场</p>
        </div>
        <div>
         <span><img src="../../assets/mIcon/icon_market_muying.png"></span>
          <p>母婴市场</p>
        </div>
        <div>
     <span><img src="../../assets/mIcon/icon_market_huwai.png"></span>
          <p>户外运动</p>
        </div>
        <div>
  <span><img src="../../assets/mIcon/icon_market_jiajv.png"></span>
          <p>家居建材</p>
        </div>
        <div>
        <span><img src="../../assets/mIcon/icon_market_qiche.png"></span>
          <p>汽车用品</p>
        </div>
      </div>
    </mt-swipe-item>
  </mt-swipe>
  
      <!--上拉下拉
　　　　<ul class="ul-box starth" id="ul-box">
　　　　　　<li class="li-box" v-for="(item,index) in Data" :key="'list'+index" @click="goto_detail(item)">
　　　　　　　　<span class="mark"></span>
　　　　　　　　<div class="div-box">
　　　　　　　　　　<p class="type">{{item.Content}}</p>
　　　　　　　　</div>
　　　　　　</li>
　　　　</ul>-->
  <div class="item-list">
    <ul class="item-Ulist" v-for="(data,index) in homeItemList" :key="index" @click="goto_detail(data)">
      <li class="item-img"><img :src="'http://www.d1sc.com/'+data.defaultGoods.goods_main_photo.path+'/'+data.defaultGoods.goods_main_photo.name">
      <li class="item-text">{{data.defaultGoods.goods_name}}</li>
      <li class="item-price">
        <p>供货价:&nbsp;<span class="i-price">{{data.defaultGoods.store_price}}</span>&nbsp;&nbsp;&nbsp;销量:&nbsp;<span>{{data.defaultGoods.goods_salenum
}}</span></p>
        <mt-button type="primary">立即购买</mt-button>
      </li>
    </ul>
  </div>
<!-- </mt-loadmore> -->

<!-- 底部导航 -->
    <div class="tabfoot" >
          <ul class="tabfoot1">
            <li class="footImg1">
              <img src="../../assets/mIcon/ic_homepage_gray.png">
              <img src="../../assets/mIcon/ic_homepage_green.png">
              <p class="footP">万手</p>
            </li>
            <router-link to="./cart"><li class="footImg1">
              <img src="../../assets/mIcon/ic_discover_gray.png">
              <img src="../../assets/mIcon/ic_discover_red.png" class="footImg2">
              <p>购物车</p>
            </li></router-link>
            <router-link to="./my"><li class="footImg1">
              <img src="../../assets/mIcon/ic_person_gray.png">
              <img src="../../assets/mIcon/ic_person_red.png" class="footImg2">
              <p>我的</p>
            </li></router-link>            
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
      // griddata: [], //每次加载出来的新数据
      // Data: [], //每次加载累加后的总数据
      // allLoaded: false, //若为真，则 bottomMethod 不会被再次触发
      // num: 0, //num为0时表示刷新或第一次加载，每加载一次增加1，刷新时默认为0
      // readList: [], //红点标记
      lbtImgList: [], //首页轮播
      homeItemList: [], //首页商品
      sharedGood: "",//首页共享
      id:this.$route.params.id
    };
  },

  methods: {
    goto_detail(payload) {
      //跳转到详情页
      this.$router.push({ 
        path: "/detail" ,
        name: 'detail', 
        params: { id:this.$route.params.id }
      }); 
    },
    // loadTop() {
    //   console.log(1); //下拉刷新
    //   this.num = 0;
    //   this.update(0, "top");
    // },
    // loadBottom() {
    //   console.log(2); //上拉加载
    //   this.num += 1;
    //   let offset = this.num * 10; //offset为分页偏移量，这里是每次加载增加十条数据
    //   this.update(offset, "bottom");
    // },
    // update(data, type) {
    //   //每次触发上拉加载或下拉刷新时触发的数据接口
    //   console.log(data, type);
    // },
    //数据获取
    path() {
      axios
        .post("http://www.d1sc.com/getHomePageDate.htm", qs.stringify({
        }))
        .then(res => {
          console.log(res);
          this.lbtImgList = res.data.result.homePageCarousel;
          this.homeItemList = res.data.result.homePageCommon;
          this.sharedGood = res.data.result.sharedGoodsNum;
        })
        .catch(function(error) {
          console.log(error);
        }); 
    }
  },
  updated() {
    //只要数据变化就会判断一次数据是否已读过，判断标记的显隐
  },
  created() {
    //打开页面首先自动获取一次数据
    this.path(1);
  }
};
</script>
<style>
@import "../../../static/style/css/home.css";
</style>