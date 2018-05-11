<template>
  <div>
    <div class="header">
       <div class="headerImg hh">
            <img src="../../assets/mIcon/title_back_white.png" alt="">
       </div>
       <p class="headerP hh">
         我的订单
       </p>
       <div class="headerImgSousuo hh">
            <img src="../../assets/mIcon/sousuo.png" alt="">
       </div>
    </div>

    <div class="nav nav1" @click="salesTab()">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">全部</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">待付款</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">待发货</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container4'">待收货</mt-button>
    </div>  

    <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
            <mt-cell>
                <div class="orderMain">
                    <div>5</div>
                    <p>你还没有相关订单</p>
                    <p>可以逛逛有哪些想买的</p>
                </div>
            </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <mt-cell>
                <div class="orderMain">
                    <div>3</div>
                    <p>你还没有相关订单</p>
                    <p>可以逛逛有哪些想买的</p>
                </div>
            </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
            <mt-cell>
                <div class="orderMain">
                    <div>1</div>
                    <p>你还没有相关订单</p>
                    <p>可以逛逛有哪些想买的</p>
                </div>
            </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
            <mt-cell>
                <div class="orderMain">
                    <div>2</div>
                    <p>你还没有相关订单</p>
                    <p>可以逛逛有哪些想买的</p>
                </div>
            </mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>

 </div>
</template>

<script>
export default {
  data() {
    return {
      active: "tab-container1"
    };
  },
  methods: {
      salesTab: function() {
      $(".nav .mint-button:first").addClass("active");
      $(".nav .mint-button").click(function() {
        $(".nav .mint-button").removeClass("active");
        $(this).addClass("active");
        return false;
      });
    },
  }
};
</script>

<style lang="scss">
@import "../../../static/style/sass/_header.scss";
.nav {
  height: 1.38rem;
  .mint-button--small {
    float: left;
    display: inline-block;
    font-size: 0.41rem;
    padding: 0;
    height: 1.38rem;
    width: 2.7rem;
    border-radius: 0;
    background-color: #fff;
    box-shadow: none;
  }
}
.active {
  color: #db1a1a;
  border-bottom: 0.06rem solid #db1a1a;
}
.nav1 {
  .mint-button-text {
    display: block;
    line-height: 1.35rem;
  }
}
</style>
