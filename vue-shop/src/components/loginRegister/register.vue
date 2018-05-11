<template>
  <div>
    <div class="register">
      <div class="back-withe regHead">
        <img src="../../assets/mIcon/title_back_white.png">
      </div>
      <span class="regHead registerHead">注册</span>
    </div>

    <div class="regMain">
        <div class="regIpt">
          <div class="regBackImg"></div>
          <input type="text" placeholder="请输入用户名" class="ipt1">
        </div>
        <div class="regIpt">
          <div class="regBackImg1"></div>
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="regIpt">
          <div class="regBackImg2"></div>
          <input type="text" placeholder="请输入您的密码">
        </div>
        <div class="regIpt">
          <div class="regBackImg3"></div>
          <input type="text" placeholder="请确认您的密码">
        </div>
        <div class="regIpt">
          <div class="regBackImg4"></div>
          <input type="text" placeholder="请输入担保人名称">
        </div>
        <div class="regIpt">
          <div class="regBackImg5"></div>
          <input type="text" placeholder="请输入验证码" class="regValidate">
        </div>
        <mt-button type="danger" class="regValidate1">获取验证码</mt-button>
        <mt-button type="primary" class="regFootBtn">注册</mt-button>
        <p>已有账号？ 来 <span>登录</span> 吧！</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../../../static/style/css/register.css";
</style>
