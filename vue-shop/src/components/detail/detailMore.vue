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
}
</style>
