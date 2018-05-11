<template>
  <div>

    <div class="detailHead_left detailHeadImg">
        <div class="detailHead_left_right_img">
          <img src="../../assets/mIcon/title_back_white.png" alt="">
        </div>
      </div>

      <div class="detailHead_right detailHeadImg">
        <div class="detailHead_left_right_img">
          <img src="../../assets/mIcon/title_back_white.png" alt="">
        </div>
      </div>

    <div class="detailHead">
        <ul class="detailHead_text">
          <li>宝贝</li>
          <li>评价</li>
          <li>详情</li>
        </ul>
    </div>

    <div class="detailSwipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(data,index) in detailLbtImg" :key="index">
            <img :src="'http://www.d1sc.com/'+data.path+'/'+data.name">
        </mt-swipe-item>
      </mt-swipe>
    </div>

      <div class="detailMain">

          <div class="detailMain1 aaasss">
            <p class="detailMainP wwww">{{titlePriceSales.goods_name}}</p>
            <div class="detailMainF wwww">
                <div class="detailMainImg">
                    <img src="../../assets/mIcon/icon_danbaoren.png" alt="">
                </div>
                <p>分享赚钱</p>
            </div>
          </div>

          <div class="detailMain2">
              <p>供货价: {{titlePriceSales.store_price}}</p>
              <div class="detailMain2S">
                  <span>建议售价: {{titlePriceSales.goods_price}}</span>
                  <span>总销量: {{titlePriceSales.goods_salenum}}</span>
              </div>
          </div>

          <div class="detailMain3" @click="selectionSpecificationShow()">
              <span class="detailMain3s specification">选择规格</span>
              <span class="detailMain3Img"><img src="../../assets/mIcon/title_back_normal.png" alt=""></span>
          </div>
      
          <div class="detailMain3s_selection1">
              <div class="detailMain3s_selection1Img"  @click="selectionSpecificationHide()">
                <img src="../../assets/mIcon/icon_market_aihao.png" alt="">
              </div>
              <div class="detailMain3s_selection1X" @click="selectionSpecificationHide()">
                <img src="../../assets/mIcon/xx.png" alt="">
              </div>
              <h3 class="detailMain3s_selection1H">数量</h3>
              <div class="count">
                <span class="count-btn reduce">-</span>
                <span class="count-btn countNumber">1</span>
                <span class="count-btn add">+</span>
              </div>
              <button type="submit" class="detailMain3s_selection1Btn">确定</button>  
            </div>
          <div class="detailMain3s_selection" @click="selectionSpecificationHide()"></div>

          <div class="detailMain4 aaasss">
              <span>商品评价（{{evaluation.evaluateSum}}）</span>
              <span>查看评价</span>
              <span><img src="../../assets/mIcon/title_back_normal.png" alt=""></span>
          </div>

          <div class="detailMain5">
            <div class="detailMain5Span">
              <span>好评（{{evaluation.praiseNum}}）</span>
              <span>中评（{{evaluation.commonlyNum}}）</span>
              <span>差评（{{evaluation.badNum}}）</span>
            </div>
            <div class="detailMain5M">
              <div class="detailMain5Mimg">
                <img :src="'http://www.d1sc.com/'+evaluationn.path+'/'+evaluationn.name">
              </div>
              <span>{{evaluationnn.userName}}</span>
            </div>
            <p class="detailMain5P">{{evaluationnnn.assessingCharacter}}</p>
          </div>

          <div class="detailMain6">
              <div class="detailMain6He">
                  <div class="detailMain6HeImg">
                      <img src="../../assets/mIcon/icon_bonus_list.png" alt="">
                  </div>
                  <div class="detailMain6HeP">
                      <p>{{Merchants.userName}}</p>
                      <p>已缴纳保证金{{depositt.deposit}}元</p>
                  </div>
                  <button class="detailMainBtn">进店逛逛</button>
              </div>
              <div class="detailMain6Ma">
                  <div>
                      <span>卖家服务</span>
                      <span>{{serving.storeAverageScore+'.0 '+ serving.filedExplainShow}}</span>
                  </div>
                  <div>
                      <span>物流服务</span>
                      <span>{{serving.storeExpressAverageScore+'.0 '+ serving.expressSiledExplainShow}}</span>
                  </div>
              </div>
          </div>

          <div class="detailMain7 aaasss"></div>

      </div>

      <div class="detailFoot">
        <div class="detailFootImgP">
            <div>
                <img src="../../assets/mIcon/icon_bonus_list.png" alt="">
            </div>
            <p>店铺</p>
        </div>
        <div class="detailFootS">
            <span class="specification" @click="selectionSpecificationShow()">加入购物车</span>
            <span class="specification"  @click="selectionSpecificationShow()">立即购买</span>
        </div>
      </div>

  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      detailLbtImg: [], //轮播
      titlePriceSales: "", //标题，价格，销量
      evaluation: "", //评价
      evaluationn: "", //用户的头像（评价）
      evaluationnn: "", //用户的名字（评价）
      evaluationnnn: "", //用户的内容（评价）
      depositt: "", //保证金
      Merchants: "", //商家用户名
      serving: "" //服务
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios
        .post(
          "http://www.d1sc.com/api_goods_detail.htm",
          qs.stringify({
            id: 78781
          })
        )
        .then(res => {
          console.log(res);
          this.detailLbtImg = res.data.result.goods_photos; //轮播
          this.titlePriceSales = res.data.result; //标题，价格，销量
          this.evaluation = res.data.result.appEvaluateDate; //评价
          this.evaluationn =
            res.data.result.appEvaluateDate.evaluate.user.photo; //用户的头像（评价）
          this.evaluationnn = res.data.result.appEvaluateDate.evaluate.user; //用户的名字（评价）
          this.evaluationnnn =
            res.data.result.appEvaluateDate.evaluate.assessingDiscourse; //用户的内容（评价）
          this.depositt = res.data.result.appEvaluateDate; //保证金
          this.Merchants = res.data.result.goods_store.user; //商家用户名
          this.serving = res.data.result.storeScoreEntity; //物流和卖家服务
        })
        .catch(function(error) {
          console.log(error);
        });
    },

  // 选择规格
      selectionSpecificationShow: function() {
        $(".detailMain3s_selection").animate({top:"0"},200);
        $(".detailMain3s_selection1").animate({bottom:"0"},200);
      },
      selectionSpecificationHide: function() {
        $(".detailMain3s_selection").animate({top:"19.2rem"},200);
        $(".detailMain3s_selection1").animate({bottom:"-13.5rem"},200);
      },
  }
};
</script>
<style lang="scss">
.detailHead_left {
  top: 1.11rem;
  left: 0.42rem;
}
.detailHead_right {
  top: 1.11rem;
  right: 0.42rem;
}
.detailHeadImg {
  z-index: 999;
  width: 0.9rem;
  height: 0.9rem;
  background: #666666;
  border-radius: 100%;
  position: fixed;
  opacity: 0.5;
  .detailHead_left_right_img {
    padding-top: 0.2rem;
    width: 0.25rem;
    height: 0.43rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.detailHead {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 3.9rem;
  background: #fff;
  display: none;
  .detailHead_text {
    position: absolute;
    li {
      width: 3.6rem;
      height: 1.48rem;
      text-align: center;
      line-height: 1.48rem;
      float: left;
      top: 2.42rem;
      position: relative;
    }
    .active {
      color: red;
    }
  }
}
.detailSwipe {
  .mint-swipe {
    height: 10.8rem;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .mint-swipe-indicators {
      left: 13%;
    }
  }
}
.detailMain {
  .detailMain1 {
    height: 1.65rem;
    border-bottom: 0.02rem solid #f2f2f2;
    .detailMainP {
      width: 7.6rem;
      margin: 0.37rem 0.64rem 0 0.44rem;
      font-size: 0.42rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .detailMainF {
      height: 1.65rem;
      border-left: 0.02rem solid #f2f2f2;
      .detailMainImg {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0.26rem 0 0.25rem 0.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 0.32rem;
        color: #a3a3a3;
        margin-left: 0.3rem;
      }
    }
    .wwww {
      float: left;
    }
  }
  .detailMain2 {
    height: 2.4rem;
    border-bottom: 0.12rem solid #f2f2f2;
    p {
      margin-top: 0.06rem;
      line-height: 1.3rem;
      font-size: 0.4rem;
      color: #fe0002;
      margin-left: 0.46rem;
    }
    .detailMain2S {
      margin-left: 0.46rem;
      font-size: 0.34rem;
      color: #a3a3a3;
      :nth-child(2) {
        position: absolute;
        right: 0.46rem;
      }
    }
  }
  .detailMain3 {
    position: relative;
    height: 1.35rem;
    border-bottom: 0.12rem solid #f2f2f2;
    span {
      position: absolute;
    }
    .detailMain3s {
      font-size: 0.36rem;
      left: 0.43rem;
      line-height: 1.35rem;
    }
    .detailMain3Img {
      display: inline-block;
      width: 0.26rem;
      height: 0.51rem;
      right: 0.42rem;
      top: 0.42rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detailMain4 {
    height: 1.35rem;
    border-bottom: 0.03rem solid #f2f2f2;
    span {
      line-height: 1.35rem;
      position: absolute;
    }
    :nth-child(1) {
      color: #343434;
      font-size: 0.37rem;
      left: 0.44rem;
    }
    :nth-child(2) {
      color: #ee422c;
      font-size: 0.37rem;
      right: 0.72rem;
    }
    :nth-child(3) {
      width: 0.2rem;
      height: 0.33rem;
      display: inline-block;
      right: 0.42rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detailMain5 {
    position: relative;
    height: 4.2rem;
    border-bottom: 0.12rem solid #f2f2f2;
    .detailMain5P {
      position: absolute;
      font-size: 0.34rem;
      top: 3.2rem;
      left: 0.65rem;
      color: #333333;
      width: 5.7rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .detailMain5Span {
      span {
        width: 1.89rem;
        height: 0.74rem;
        display: inline-block;
        float: left;
        line-height: 0.74rem;
        text-align: center;
        background: #fecccb;
        color: #6a6464;
        font-size: 0.34rem;
        margin: 0.69rem 0.45rem 0.54rem 0.45rem;
      }
    }
    .detailMain5M {
      position: absolute;
      .detailMain5Mimg {
        width: 0.66rem;
        height: 0.66rem;
        border-radius: 100%;
        position: absolute;
        top: 1.97rem;
        left: 0.54rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      span {
        position: relative;
        font-size: 0.28rem;
        top: 2.16rem;
        left: 1.39rem;
      }
    }
  }
  .detailMain6 {
    .detailMain6He {
      position: relative;
      height: 2.32rem;
      .detailMain6HeImg {
        position: absolute;
        width: 1.44rem;
        height: 1.44rem;
        left: 0.45rem;
        top: 0.48rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .detailMain6HeP {
        position: absolute;
        left: 2.36rem;
        top: 0.56rem;
        :nth-child(1) {
          font-size: 0.41rem;
          margin-bottom: 0.36rem;
        }
        :nth-child(2) {
          font-size: 0.32rem;
          color: #309744;
        }
      }
      .detailMainBtn {
        position: absolute;
        color: #fff;
        background: red;
        border: none;
        right: 0.44rem;
        top: 1.36rem;
      }
    }
    .detailMain6Ma {
      position: relative;
      height: 1.38rem;
      :nth-child(1) {
        left: 1.29rem;
      }
      :nth-child(2) {
        right: 1.29rem;
      }
      div {
        position: absolute;
        float: left;
        line-height: 1.38rem;
        :nth-child(1) {
          font-size: 0.34rem;
        }
        :nth-child(2) {
          font-size: 0.26rem;
          color: #df4938;
        }
      }
    }
  }
  .detailMain7 {
    position: absolute;
    height: 5rem;
    width: 100%;
    top: 26rem;
  }
    .detailMain3s_selection {
      position: fixed;
      z-index: 998;
      width: 100%;
      height: 19.2rem;
      bottom: 0;
      background: #3f3838;
      opacity: .5;
      top: 19.2rem;
  }
  .detailMain3s_selection1 {
    width: 100%;
    position: fixed;
    z-index: 999;
    background: #fff;
    padding-left: .48rem;
    padding-bottom: .48rem;
    bottom: -13.5rem;
    height: 12.42rem;
    .detailMain3s_selection1Img{
      width: 3rem;
      height: 3rem;
      top: -.6rem;
      position: absolute;
    }
    .detailMain3s_selection1X{
      width: .66rem;
      height: .66rem;
      position: absolute;
      right: 1rem;
      top: .45rem;
    }
    .detailMain3s_selection1H{
      font-size: .45rem;
      position: absolute;
      top: 4.02rem;
      left: .73rem;
      font-weight: normal;
    }
    .count{
      position: absolute;
        top: 3.78rem;
        right: 1rem;
      .count-btn{
        display: inline-block;
        height: .9rem;
        width: 1.68rem;
        line-height: .9rem;
        text-align: center;
        background: #f97314;
        color: #fff;
        font-weight: bold;
        border-radius: 8%;
      }
      .countNumber{
        color: #757575;
        background: none;
        border: .02rem solid #757575;
        margin: 0 .28rem;
        font-weight: normal;
      }
    }
    .detailMain3s_selection1Btn{
      width: 9.84rem;
      height: 1.44rem;
      background: #f97314;
      color: #fff;
      font-size: .43rem;
      font-weight: bold;
      outline: none;
      border: none;
      border-radius: 2%;
      position: absolute;
      bottom: .48rem;
    }
}
}
.detailFoot {
  position: fixed;
  height: 1.67rem;
  width: 100%;
  bottom: 0;
  border-top: 0.01rem solid #999999;
  background: #fff;
  .detailFootImgP {
    position: relative;
    div {
      width: 0.54rem;
      height: 0.52rem;
      position: absolute;
      top: 0.27rem;
      left: 0.54rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      position: absolute;
      top: 1rem;
      left: 0.44rem;
    }
  }
  .detailFootS {
    span {
      position: absolute;
      line-height: 1.66rem;
      text-align: center;
      font-size: 0.53rem;
      color: #fff;
    }
    :nth-child(1) {
      display: inline-block;
      width: 4.07rem;
      background: #f97314;
      right: 3.47rem;
    }
    :nth-child(2) {
      display: inline-block;
      width: 3.47rem;
      background: #f13f3f;
      right: 0;
    }
  }
}
</style>