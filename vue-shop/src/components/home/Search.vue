<template>
  <div>
    <div class="search">
      <div class="search1">
        <router-link to="/"><div class="left-arrow">
          <img src="../../assets/mIcon/title_back_normal.png">
        </div></router-link>
      </div>
      <div class="search1">
        <p>商品</p>
      </div>
      <div class="search1">
        
        <div class="bottom-arrow">
          <img src="../../assets/mIcon/bottom-arrow.png">
        </div>
      </div>
      <div class="search1">
        <input type="text" placeholder="请输入要搜索的商品名称">
      </div>
      <div class="search1">
      <button type="submit" class="mint-button11">搜索</button>               
      </div>
    </div>
    <div class="maskLayer"></div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  methods: {
    path() {
      axios
        .post("http://www.d1sc.com/app_loadGoodsBySales.htm", qs.stringify({}))
        .then(res => {
          console.log(res);
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

<style lang="scss" scoped>
.search {
  height: 1.78rem;
  position: relative;
  .search1 {
    p {
      font-size: 0.43rem;
    position: absolute;
      left:1.26rem;
      top:.6rem;
    }
    .left-arrow {
      height: 0.6rem;
      width: 0.37rem;
      left: 0.36rem;
      position: absolute;
      top: 0.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom-arrow {
    position: absolute;
      height: .24rem;
      width:.32rem;
      left:2.96rem;
      top: .7rem;
    }
    input {
      outline: none;
      position: absolute;
      width: 4.69rem;
      padding: 0.25rem 0 0.32rem 0.24rem;
      border-radius: 3%;
      border: 0;
          font-size: .34rem;
      color: #959595;
      background: #e9e9e9;
      right: 1.8rem;
      height: .46rem;
      top:.4rem;
    }
    .mint-button11 {
      position: absolute;
      width: 1.2rem;
      height: 0.92rem;
      background: #f97d23;
      padding: 0;
      right:.3rem;
      top: 0.45rem;
      font-size:.34rem;
      border: 0;
      outline:none;
      color:#fff;
      border-radius: 12%;
    }
  }
}
.maskLayer {
  width: 10.8rem;
  height: 17.4rem;
  background: rgb(212, 212, 212);
}
</style>
