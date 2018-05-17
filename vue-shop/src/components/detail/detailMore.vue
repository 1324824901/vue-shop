<template>
    <div>
        <div class="detailMore">

            <div class="detailShopHead1">
                <div class="detailShopHead1Img">
                    <img src="../../assets/mIcon/title_back_normal.png" alt="">
                </div>
                <div class="detailShopHead1Ipt">
                    <div class="detailShopHead1IptImg">
                        <img src="../../assets/mIcon/sousuoa4a4a4.png" alt="">
                    </div>
                    <input type="text">
                    <p>请输入商品名称</p>
                </div>
            </div>


            <ul class="detailMoreTabTitle">
                <li>人气</li>
                <li>价格
                    <div class="sx-arrow-up"></div>
                    <div class="sx-arrow-down"></div>
                </li>
                <li>销量</li>
                <li>时间</li>
            </ul>
            <ul class="detailMoreTabMain">
                <li v-for="a in 10">
                    <div class="detailMoreTabMainImg">
                        <img src="../../assets/mIcon/img_ac_sales_list_bg.png" alt="">
                    </div>
                    <p>真珠美学石榴红利果蔬抗糖化美白饮品口服液抗衰老缩小毛孔真珠美学石榴红利果蔬抗糖化美白饮品口服液抗衰老缩小毛孔</p>
                    <div class="detailMoreTabMainSpan">
                        <span>￥258.0</span>
                        <span>销量：89</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.detailMore{
    position: relative;
.detailShopHead1{
        height: 1.56rem;
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
                z-index: 999;
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
                background: #e9e9e9;
            }
            p{
                top: .53rem;
                left: 2.43rem;
                position: absolute;
                font-size: .34rem;
                color: #6b6b6b;
            }
        }
    }

    .detailMoreTabTitle{
        height: 1.34rem;
         :nth-child(2){
             position: relative;
            .sx-arrow-up{
                border-style:dashed dashed solid dashed;
                border-color: transparent transparent #251716 transparent;
                border-width:.2rem;
                width:0;height:0;
                position: absolute;
                top: .25rem;
                right: .4rem;
            }
            .sx-arrow-down{
                border-style:solid dashed dashed dashed;
                border-width:.2rem;
                border-color:#251716 transparent transparent transparent;
                width:0;height:0;
                position: absolute;
                top: .7rem;
                right: .4rem;
            }
        }
        li{
            height: 1.34rem;
            text-align: center;
            line-height: 1.34rem;
            font-size: .44rem;
            width: 2.7rem;
            float: left;
        }
    }
    .detailMoreTabMain{
       
        li{
            width: 5.22rem;
            height: 7.71rem;
            border: .01rem solid #e5e5e5;
            float: left;
            margin: .06rem;
            border-radius: .1rem;
            .detailMoreTabMainImg{
                height: 5.29rem;
                width: 5.22rem;
                margin-bottom: .36rem;
                img{
                    border-radius: .1rem .1rem 0 0;
                }
            }
            p{
                font-size: .34rem;
                padding:0 .19rem 0 .44rem;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
            }
            .detailMoreTabMainSpan{
                    margin-top: .28rem;
                    :nth-child(1){
                        font-size: .47rem;
                        margin-left: .44rem;
                        color: #fe0002;
                    }
                    :nth-child(2){
                        font-size: .29rem;
                        margin-left: 1.42rem;
                        color: #777777
                    }
            }
        }
    }
}
</style>
