<template>
  <div>
    <div class="Cart">
      <div class="cartHead">购物车</div>
      <div class="cartP">
        <div class="cartImg">
          <img src="../../assets/mIcon/img_null_goods.png" alt="" srcset="">
        </div>
        <p>你还没有相关商品</p>
        <span>可以逛逛有哪些想买的</span>
      </div>
    </div>


      <!-- 底部导航 -->
    <div class="tabfoot" >
          <ul class="tabfoot1">
            <router-link to="/"><li class="footImg1">
              <img src="../../assets/mIcon/ic_homepage_gray.png">
              <img src="../../assets/mIcon/ic_homepage_green.png" class="footImg2">
              <p>万手</p>
            </li></router-link>
            <li class="footImg1">
              <img src="../../assets/mIcon/ic_discover_gray.png">
              <img src="../../assets/mIcon/ic_discover_red.png">
              <p  class="footP">购物车</p>
            </li>
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
export default {};
</script>

<style>
@import "../../../static/style/css/cart.css";
</style>
