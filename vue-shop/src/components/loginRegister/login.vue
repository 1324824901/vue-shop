<template>
  <div>
    <div class="loginHead">
      <p>登录</p>
    </div>

    <div class="regMain">
        <div class="regIpt">
          <div class="regBackImg11"></div>
          <input type="text" placeholder="请输入您的用户名、万手号或手机号" class="ipt2">
        </div>
        <div class="regIpt">
          <div class="regBackImg1"></div>
          <input type="text" placeholder="请输入您的密码">
        </div>
        <mt-button type="primary" class="regFootBtn">登录</mt-button>
        <div class="forgetPass">忘记密码？</div>
        <p>还没有账号吧？ 来 <span>注册</span> 吧！</p>
        <div class="otherLogin">其他登录方式</div>
        <div class="loginImg">
          <img src="../../assets/mIcon/weixin.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  }
}
</script>

<style>
@import "../../../static/style/css/login.css";
</style>
