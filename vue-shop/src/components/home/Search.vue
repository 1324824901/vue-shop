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
      <mt-button size="small" type="primary">搜索</mt-button>                  
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
  height: 2.16rem;
  .search1 {
    float: left;
    p {
      font-size: 0.43rem;
      margin-top: 1.34rem;
      margin-right: 0.21rem;
    }
    .left-arrow {
      height: 0.6rem;
      width: 0.37rem;
      margin-top: 1.32rem;
      margin-right: 0.3rem;
      margin-left: 0.37rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom-arrow {
      margin-top: 1rem;
    }
    input {
      outline: none;
      padding: 0.3rem 1.06rem 0.32rem 0.24rem;
      font-size: 0.3rem;
      border-radius: 2%;
      border: 0;
      color: #959595;
      background: #e9e9e9;
      margin-top: 1.13rem;
      margin-right: 0.3rem;
      margin-left: 0.5rem;
    }
    .mint-button {
      width: 1.2rem;
      height: 0.92rem;
      background: #f97d23;
      padding: 0;
      margin-top: 1.17rem;
    }
  }
}
.maskLayer {
  width: 10.8rem;
  height: 16.7rem;
  background: rgb(212, 212, 212);
  margin-top: 0.4rem;
}
</style>
