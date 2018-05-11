import Vue from "vue";
import Router from "vue-router";
// import Home from "@/components/home/Home";
const Home = resolve => require(['@/components/home/Home.vue'], resolve);
import Search from "@/components/home/Search";
import Cart from "@/components/cart/cart";
import My from "@/components/my/my";
import sharedGoods from "@/components/homeGroupware/sharedGoods";
import salesVolume from "@/components/homeGroupware/salesVolume";
import wanshouProfit from "@/components/homeGroupware/wanshouProfit";
import Bonus from "@/components/myUse/bonus";
import Auction from "@/components/myUse/auction";
import Tug from "@/components/myUse/Tug";
import personalData from "@/components/myUse/personalData";
import myOrder from "@/components/myUse/myOrder";

import notLogin from "@/components/loginRegister/notlogin";
import register from "@/components/loginRegister/register";
import login from "@/components/loginRegister/login";
import bindingNumber from "@/components/loginRegister/bindingNumber";
import bindingAccount from "@/components/loginRegister/bindingAccount";
import forgetPass from "@/components/loginRegister/forgetPass";
import detail from "@/components/detail/detail";


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: Home
    },
    {
      path: "/sharedGoods",
      name: "共享商品",
      component: sharedGoods
    },
    {
      path: "/salesVolume",
      name: "销量榜",
      component: salesVolume
    },
    {
      path: "/wanshouProfit",
      name: "盈利榜",
      component: wanshouProfit
    },
    {
      path: "/Search",
      name: "搜索",
      component: Search
    },
    {
      path: "/cart",
      name: "购物车",
      component: Cart
    },
    {
      path: "/my",
      name: "我的",
      component: My,
    },
    {
      path: "/my/bonus",
      name: "招兵红包",
      component: Bonus
    },
    {
      path: "/my/auction",
      name: "拍卖",
      component: Auction
    },
    {
      path: "/my/tug",
      name: "拓客系统",
      component: Tug
    },
    {
      path: "/my/personalData",
      name: "个人资料",
      component: personalData
    },
    {
      path: "/my/myOrder",
      name: "我的订单",
      component: myOrder
    },
    {
      path: "/notlogin",
      name: "未登录",
      component: notLogin
    },
    {
      path: "/register",
      name: "注册",
      component: register
    },
    {
      path: "/login",
      name: "登录",
      component: login
    },
    {
      path: "/bindingNumber",
      name: "绑定手机号",
      component: bindingNumber
    },
    {
      path: "/bindingAccount",
      name: "绑定已有账号",
      component: bindingAccount
    },
    {
      path: "/forgetPass",
      name: "忘记密码",
      component: forgetPass
    },
    {
      path: "/detail",
      name: "详情页",
      component: detail
    },
  ]
});