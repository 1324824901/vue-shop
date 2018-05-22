<template>
<div>
      <div class="header">
        <div class="headerImg hh" onclick="window.history.go(-1)">
            <img src="../../assets/mIcon/title_back_white.png" alt="">
        </div>
        <p class="headerP hh">
            评价
        </p>
      </div>

     <div class="detailEvaluationMain">
        <ul class="detailEvaluationTabTitle">
          <li>全部(0)</li>
          <li>好评(0)</li>
          <li>中评(0)</li>
          <li>差评(0)</li>
        </ul>


        <div class="detailEvaluationTabMain1">
            <div>
                <img src="../../assets/mIcon/img_null_goods.png" alt="">
            </div>
            <p class="p1">没有找到相关数据哦</p>
            <p class="p2">你可以去别的地方看看</p>
            <button>重新加载</button>
        </div>


        <ul class="detailEvaluationTabMain2">
            <li v-for="c in 20">
                <div class="detailEvaluationTabMain2Img">
                    <img src="../../assets/mIcon/icon_market_jixie.png" alt="">
                </div>
                <p class="detailEvaluationTabMain2P">王艳霞</p>
                <div class="detailEvaluationTabMain2Span">
                    <span class="detailEvaluationTabMain2Span1" v-for="b in 5"><img src="../../assets/mIcon/Pentagram.png" alt=""></span>
                    <span class="detailEvaluationTabMain2SpanTime">2018-04-28</span>
                </div>
                <p class="detailEvaluationTabMain2P1">好评</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import "../../../static/style/sass/_header.scss";
.detailEvaluationMain {
    background: #fafafa;
  .detailEvaluationTabTitle {
    height: 2.63rem;
    border-bottom: 0.03rem solid #f2f2f2;
    li {
      width: 1.89rem;
      height: 0.74rem;
      background: #fecccb;
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
      float: left;
      text-align: center;
      line-height: 0.74rem;
      margin-left: 2.4rem;
      margin-top: 0.36rem;
    }
  }
  .detailEvaluationTabMain1 {
    display: none;
    width: 100%;
    text-align: center;
    div {
      width: 3.08rem;
      height: 2.5rem;
      margin: 3.23rem 0 0.65rem 4rem;
    }
    .p1 {
      font-size: 0.45rem;
      margin-bottom: 0.2rem;
    }
    .p2 {
      font-size: 0.38rem;
      color: #999999;
      margin-bottom: 0.3rem;
    }
    button {
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
      border: 0;
      background: #fff;
      border: 0.02rem solid #999999;
      width: 2.04rem;
      height: 0.87rem;
      font-size: 0.34rem;
      outline: none;
    }
  }
  .detailEvaluationTabMain2{
      li{
         margin-top: .21rem;
         position: relative;
         height: 2.46rem; 
         background: #fff;
         .detailEvaluationTabMain2Img{
             position: absolute;
             width: .72rem;
             height: .72rem;
             top: .46rem;
             left: .39rem;
         }
         .detailEvaluationTabMain2P{
             left: 1.5rem;
             top: .36rem;
             position: absolute;
             font-size: .25rem;
         }
         .detailEvaluationTabMain2Span{
             .detailEvaluationTabMain2Span1{
                 left: 1.2rem;
                 top: .85rem;
                 position: relative;
                 width: .5rem;
                 height: .5rem;
                 display: inline-block;
                 margin-left: .25rem;
             }
             .detailEvaluationTabMain2SpanTime{
                 position: absolute;
                 color: #999999;
                 font-size: .35rem;
                 right: .4rem;
                 top: .95rem;
             }
         }
         .detailEvaluationTabMain2P1{
             bottom: .31rem;
             left: 1.25rem;
             position: absolute;
             font-size: .38rem;
         }
      }
  }
}
</style>
