<template>
<div>
    <div class="detailSearch">
        <router-link to="/detail/detailShop"><div class="detailSearchImg">
            <img src="../../assets/mIcon/title_back_normal.png" alt="">
        </div></router-link>
        <div class="detailSearchIpt">
            <div>
                <img src="../../assets/mIcon/sousuoa4a4a4.png" alt="">
            </div>
            <input type="text" placeholder="输入商品名称">
        </div>
        <div>
            <button class="detailSearchBtn">搜本店</button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.detailSearch{
    position: relative;
    height: 1.2rem;
    background: #f9f9f9;
    .detailSearchImg{
        position: absolute;
        width: .36rem;
        height: .6rem;
        top: .3rem;
        left: .45rem;
    }
    .detailSearchIpt{
        div{
            position: absolute;
            width: .43rem;
            height: .57rem;
            left: 1.27rem;
            top: .14rem;
            z-index: 999;
        }
        input{
            position: absolute;
            height: .93rem;
            border: 0;
            border-bottom: .03rem solid #999999;
            padding-left:.69rem;
            width: 6.45rem; 
            background: #f9f9f9;
            left: 1.26rem;
            outline: none;
        }
    }
    .detailSearchBtn{
        position: absolute;
        height: .8rem;
        width: 1.52rem;
        background: #ff5800;
        color: #fff;
        font-size: .36rem;
        border: 0;
        border-radius: .1rem;
        right: .44rem;
        top:.2rem;
    }
}
    
</style>
