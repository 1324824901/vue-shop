<template>
  <div>
    <div class="sharedd">
      <div class="back-withe shar">
        <router-link to="/"><img src="../../assets/mIcon/title_back_white.png"></router-link>
      </div>
      <div class="shar"><p>万手盈利榜</p></div>
    </div>
    <div class="salesImg">
        <img src="../../assets/mIcon/img_bonus_list_head_bg.png">
    </div>
    <!-- tab切换 -->
    <div class="nav nav1" @click='salesTab()'>
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">日盈利</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">月盈利</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">年盈利</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container4'">总盈利</mt-button>
    </div>  
      
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          
        <mt-tab-container-item id="tab-container1">
            <!-- cell组件 -->
          <mt-cell v-for="(data,index) in daySalesVolume" :key="index">
              <div class="salesVolumeImg">
                  <img :src="'http://www.d1sc.com/'+data[4]+'/'+data[5]">
              </div>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>  
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      active: "tab-container1",
      daySalesVolume: [], //销量
      alwaysSalesVolume: [] //总销量
    };
  },
  methods: {
    //数据获取
    path() {
      axios
        .post(
          "http://www.d1sc.com.com/personalEarningsRankings.htm",
          qs.stringify({})
        )
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });

      //   axios
      //     .post("http://www.d1sc.com/appGetGoodsSequence.htm", qs.stringify({
      //     }))
      //     .then(res => {
      //       console.log(res);
      //       this.alwaysSalesVolume = res.data.result;
      //       console.log(this.alwaysSalesVolume = res.data.result);
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
    },
    salesTab: function() {
      $(".nav .mint-button:first").addClass("active");
      $(".nav .mint-button").click(function() {
        $(".nav .mint-button").removeClass("active");
        $(this).addClass("active");
        return false;
      });
    },
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
<style lang='scss'>
@import "../../../static/style/css/salesProfit.css";
.active {
  color: #db1a1a;
  border-bottom: 0.06rem solid #db1a1a;
}
.nav1 {
  .mint-button-text {
    display: block;
    line-height: 1.28rem;
  }
}
</style>
