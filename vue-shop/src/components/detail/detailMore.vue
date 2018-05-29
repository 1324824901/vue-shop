<template>
    <div>
        <div class="detailMore">

            <div class="detailShopHead1">
                <div class="detailShopHead1Img" onclick="window.history.go(-1)">
                    <img src="../../assets/mIcon/title_back_normal.png" alt="">
                </div>
                <router-link to="/detailSearch"><div class="detailShopHead1Ipt">
                    <div class="detailShopHead1IptImg">
                        <img src="../../assets/mIcon/sousuoa4a4a4.png" alt="">
                    </div>
                    <input type="text">
                    <p>请输入商品名称</p>
                </div></router-link>
            </div>

            <ul class="detailMoreTabTitle" v-bind="MoreTab()">
                <li class="li1 a">人气</li>
                <li class="li2">价格
                    <div class="sx-arrow-up"></div>
                    <div class="sx-arrow-down"></div>
                </li>
                <li class="li3">销量</li>
                <li class="li4">时间</li>
            </ul>
            <ul class="detailMoreTabMain">
                <li v-for="(data,index) in detailMoreList" :key="index">
                    <div class="detailMoreTabMainImg">
                        <img v-lazy="'http://www.d1sc.com/'+data.goods_main_photo.path+'/'+data.goods_main_photo.name" alt=""  @click="goto_detail(data.id)">
                    </div>
                    <p>{{data.goods_name}}</p>
                    <div class="detailMoreTabMainSpan">
                        <span>￥{{data.goods_price}}</span>
                        <span>销量：{{data.store_price}}</span>
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
      storeId: "", //店铺id
      goodsClassId: "", //商品类别id
      detailMoreList: "", //商品列表
      id: "", //跳转详情页id


      goodsPrice:'',//价格
      salesNum:'',//销量
      goodsClicks:'',// 人气
      addTime:'',//添加时间
      orderType:'desc',//“desc”或”asc”升降序
    };
  },

  mounted() {
    this.ShopList();
  },

  methods: {
    goto_detail(id) {
      //跳转到详情页
      console.log(id);
      this.$router.push({
        path: "/detail",
        name: "detail",
        params: { id: id }
      });
    },
    ShopList() {
      axios
        .post(
          "http://www.d1sc.com/getStoreClassGoods.htm",
          qs.stringify({
            storeId: this.$route.params.storeId,
            goodsClassId: this.$route.params.goodsClassId,
            currentPage: 0,
            salesNum:this.salesNum,//销量
            addTime:this.addTime,//添加时间
            goodsClicks:this.goodsClicks,// 人气
            goodsPrice:this.goodsPrice,//价格
            orderType:this.orderType,//“desc”或”asc”升降序
          })
        )
        .then(res => {
          console.log(res);
          this.detailMoreList = res.data.result;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    MoreTab() {
      $(".detailMoreTabTitle li").click(function() {
        $(".detailMoreTabTitle li").removeClass("active"); 
        $(this).addClass("active");
        return false;
      });
    },
    

  }
};
</script>

<style lang='scss'>
.detailMore {
  position: relative;
  .detailShopHead1 {
    height: 1.56rem;
    .detailShopHead1Img {
      top: 0.47rem;
      left: 0.36rem;
      position: absolute;
      width: 0.36rem;
      height: 0.6rem;
    }
    .detailShopHead1Ipt {
      .detailShopHead1IptImg {
        top: 0.5rem;
        left: 1.75rem;
        position: absolute;
        width: 0.43rem;
        height: 0.57rem;
        z-index: 999;
      }
      input {
        top: 0.31rem;
        left: 1.5rem;
        position: absolute;
        width: 7.5rem;
        height: 1rem;
        border: 0;
        outline: none;
        border-radius: 0.1rem;
        background: #e9e9e9;
      }
      p {
        top: 0.53rem;
        left: 2.43rem;
        position: absolute;
        font-size: 0.34rem;
        color: #6b6b6b;
      }
    }
  }

  .detailMoreTabTitle {
    height: 1.34rem;
    :nth-child(2) {
      position: relative;
      .sx-arrow-up {
        border-style: dashed dashed solid dashed;
        border-color: transparent transparent #251716 transparent;
        border-width: 0.2rem;
        width: 0;
        height: 0;
        position: absolute;
        top: 0.25rem;
        right: 0.4rem;
      }
      .sx-arrow-down {
        border-style: solid dashed dashed dashed;
        border-width: 0.2rem;
        border-color: #251716 transparent transparent transparent;
        width: 0;
        height: 0;
        position: absolute;
        top: 0.7rem;
        right: 0.4rem;
      }
    }
    li {
      height: 1.34rem;
      text-align: center;
      line-height: 1.34rem;
      font-size: 0.44rem;
      width: 2.7rem;
      float: left;
    }
  }
  .detailMoreTabMain {
    li {
      width: 5.22rem;
      height: 7.71rem;
      border: 0.01rem solid #e5e5e5;
      float: left;
      margin: 0.06rem;
      border-radius: 0.1rem;
      .detailMoreTabMainImg {
        height: 5.29rem;
        width: 5.22rem;
        margin-bottom: 0.36rem;
        img {
          border-radius: 0.1rem 0.1rem 0 0;
        }
      }
      p {
        font-size: 0.34rem;
        padding: 0 0.19rem 0 0.44rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .detailMoreTabMainSpan {
        position: relative;
        margin-top: 0.28rem;
        :nth-child(1) {
          font-size: 0.47rem;
          margin-left: 0.44rem;
          color: #fe0002;
        }
        :nth-child(2) {
          font-size: 0.29rem;
          color: #777777;
          right: 0.4rem;
          position: absolute;
        }
      }
    }
  }
}
.active {
  color: red;
}
</style>
