import Vue from "vue";
import Router from "vue-router";
// import Home from "@/components/home/Home";
const Home = resolve => require(['@/components/home/Home.vue'], resolve);
const Search = resolve => require(['@/components/home/Search.vue'], resolve);
const Cart = resolve => require(['@/components/cart/cart.vue'], resolve);
const My = resolve => require(['@/components/my/my.vue'], resolve);
const sharedGoods = resolve => require(['@/components/homeGroupware/sharedGoods.vue'], resolve);
const salesVolume = resolve => require(['@/components/homeGroupware/salesVolume.vue'], resolve);
const wanshouProfit = resolve => require(['@/components/homeGroupware/wanshouProfit.vue'], resolve);
const Bonus = resolve => require(['@/components/myUse/bonus.vue'], resolve);
const Auction = resolve => require(['@/components/myUse/auction.vue'], resolve);
const Tug = resolve => require(['@/components/myUse/Tug.vue'], resolve);
const personalData = resolve => require(['@/components/myUse/personalData.vue'], resolve);
const myOrder = resolve => require(['@/components/myUse/myOrder.vue'], resolve);
const notLogin = resolve => require(['@/components/loginRegister/notlogin.vue'], resolve);
const register = resolve => require(['@/components/loginRegister/register.vue'], resolve);
const login = resolve => require(['@/components/loginRegister/login.vue'], resolve);
const bindingNumber = resolve => require(['@/components/loginRegister/bindingNumber.vue'], resolve);
const bindingAccount = resolve => require(['@/components/loginRegister/bindingAccount.vue'], resolve);
const forgetPass = resolve => require(['@/components/loginRegister/forgetPass.vue'], resolve);
const detail = resolve => require(['@/components/detail/detail.vue'], resolve);


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