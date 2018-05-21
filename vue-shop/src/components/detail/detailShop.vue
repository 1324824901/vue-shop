<template>
    <div>
        <div class="detailShopHead">

            <div class="detailShopHead1">
                <div class="detailShopHead1Img">
                    <img src="../../assets/mIcon/title_back_white.png" alt="">
                </div>
                <router-link to="/detail/detailSearch"><div class="detailShopHead1Ipt">
                    <div class="detailShopHead1IptImg">
                        <img src="../../assets/mIcon/sousuo.png" alt="">
                    </div>
                    <input type="text">
                    <p>请输入商品名</p>
                </div></router-link>
            </div>

            <div class="detailShopHead2">
                <div class="detailShopHead2Img">
                    <img :src="'http://www.d1sc.com/'+ShopCaution.user.photo.path+'/'+ShopCaution.user.photo.name" alt="">
                </div>
                <h3>{{ShopCaution.store.store_name}}</h3>
                <p class="detailShopHead2P">{{ShopCaution.user.userName}} {{ShopCaution.bumen.name}} {{ShopCaution.zhiWei.name}} {{ShopCaution.zhiXian.name}}</p>
            </div>

            <ul class="detailShopHead3">
                <li>
                    <p>257048</p>
                    <p>近三个月</p>
                </li>
                 <li style='border-left: .02rem solid #fff;border-right: .02rem solid #fff;'>
                    <p>7676</p>
                    <p>销量</p>
                </li>
                 <li>
                    <p>21</p>
                    <p>店铺总商品</p>
                </li>
            </ul>

        </div>

        <div class="detailShopSecurity">
                <div class="detailShopSecurityImg">
                    <img src="../../assets/mIcon/security.png" alt="">
                </div>
                <p>已缴纳保证金{{ShopCaution.bail}}元，出现问题先行赔付，请勿线下交易！</p>
        </div>
        

        <div class="detailShopMain"  v-for="a in 10">
            <li>
                <p class="detailShopMainP">口服液</p>
                <router-link to="/detail/detailMore"><p class="detailShopMainP1">更多...</p></router-link>
                <div class="detailShopMainImg">
                    <img src="../../assets/mIcon/img_ac_sales_list_bg.png" alt="">
                </div>
                <p class="detailShopMainP2">真珠美学石榴红利果蔬抗糖化美白饮品口服液抗衰老缩小毛孔真珠美学石榴红利果蔬抗糖化美白饮品口服液抗衰老缩小毛孔</p>
                <div class="detailShopMainPriceBtn">
                    <span class="detailShopSupplyPrice">供货价：</span>
                    <span class="detailShopSupplyPrice1">￥ 258.0</span>
                    <span class="detailShopVolume">销量：90</span>
                    <span class="detailShopMainBtn"><button>立即购买</button></span>
                </div>
            </li>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
        data(){
            return{
            ShopCaution:'',//保证金和头部个人信息
            storeId:'',//取到本身的id
            }
        },
        mounted(){
            this.personalMall();
        },
        methods:{
            personalMall() {
            axios
                .post(
                "http://www.d1sc.com/getStoreHomePage.htm",
                qs.stringify({
                    storeId:this.$route.params.storeId
                })
                )
                .then(res => {
                console.log(res);
                this.ShopCaution = res.data.result; //保证金和头部个人信息
                })
                .catch(function(error) {
                console.log(error);
                });
            },
        }
}
</script>

<style lang='scss'>
.detailShopHead{
    background: #ccc;
    position: relative;
    .detailShopHead1{
        height: 2.26rem;
        .detailShopHead1Img{
            top: .47rem;
            left: .36rem;
            position: absolute;
            width: .36rem;
            height: .6rem;
        }
        .detailShopHead1Ipt{
            .detailShopHead1IptImg{
                top: .5rem;
                left: 1.75rem;
                position: absolute;
                width: .43rem;
                height: .57rem;
            }
            input{
                top: .31rem;
                left: 1.5rem;
                position: absolute;
                width: 7.5rem;
                height: 1rem;
                border: 0;
                outline: none;
                border-radius: .1rem;
                opacity: .5;
            }
            p{
                top: .53rem;
                left: 2.43rem;
                position: absolute;
                color: #fff;
                font-size: .34rem;
            }
        }
    }

    .detailShopHead2{
        position: relative;
        height: 2.12rem;
        .detailShopHead2Img{
            position: absolute;
            left: .36rem;
            width: 1.47rem;
            height: 1.47rem;
        }
        h3{
            position: absolute;
            color: #fff;
            font-size: .5rem;
            left: 2.38rem;
            top: .12rem;
        }
        .detailShopHead2P{
            position: absolute;
            font-size: .28rem;
            color: #fff;
            left: 2.38rem;
            top: .75rem;
        }
    }
  
    .detailShopHead3{
        height: .92rem;
        li{
            width: 3.5rem;
            float: left;
            line-height: .4rem;
            height: .92rem;
            p{
                font-size: .31rem;
                color: #fff;
                text-align: center;
            }
        }
    }
}

.detailShopSecurity{
    position: relative;
    height: .68rem;
    line-height: .68rem;
    background: #f97314;
    .detailShopSecurityImg{
        top:.08rem;
        left: .24rem;
        position: absolute;
        width: .36rem;
        height: .38rem;
    }
    p{
        font-size: .32rem;
        margin-left: .78rem;
        color: #fff;
    }
}


.detailShopMain{
    li{
        position: relative;
    .detailShopMainP,.detailShopMainP1{
        position: absolute;
        background: #ff5700;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        color: #fff;
        font-size: .31rem;
        top: .24rem;
    }
    .detailShopMainP{
        width: 1.8rem;
    }
     .detailShopMainP1{
        width: 1.5rem;
        border-radius: .6rem 0 0 .6rem;
        right: 0;
    }
    .detailShopMainImg{
        height: 5.25rem;
        width: 100%;
    }
    .detailShopMainP2{
        height: 1.25rem;
        font-size: .42rem;
        padding:0 .05rem 0 .43rem;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-height: .65rem;
    }
    .detailShopMainPriceBtn{
        position: relative;
        padding-left: .36rem;
        padding-right: .24rem;
        height: 1.08rem;
        .detailShopVolume{
            margin-left: .8rem;
        }
        .detailShopSupplyPrice,.detailShopVolume{
            font-size: .33rem;
            line-height: 1.08rem;
            color: #797979;
        }
        .detailShopSupplyPrice1{
            font-size: .48rem;
            color: #ee422c;
        }
        .detailShopMainBtn{
            button{
                position: absolute;
                width: 2.56rem;
                height: .92rem;
                background: #f97314;
                border: 0;
                border-radius: .1rem;
                font-size: .38rem;
                color: #fff;
                right: .24rem;
            }
            
        }
    }
    }
}

</style>
