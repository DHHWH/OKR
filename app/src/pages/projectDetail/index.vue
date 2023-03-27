<template>
  <div class="main">
            <div class="head">
                <img src="./images/back.png" alt="" @click="toresume">
                <span class="tab font fontsize">标签： · 五星员工 · 繁忙的技术工</span>
            </div>
            <div class="content">
                <span class="evaluate font fontsize">成员评价：</span>
                <div class="oneeva size fontsize">和你合作很愉快</div>
                <div class="twoeva size fontsize">和你合作真的很愉快</div>
                <span class="OKR font fontsize">OKR完成情况：</span>
                <span class="detail fontsize">目前为止在随食--食安心这个项目中制定了5个OKR，下面是完成情况</span>
                <img src="./images/image 110.png" alt="" class="fir">
                <img src="./images/image 111.png" alt="" class="two">
                <span class="rank font fontsize">历次积分排名：</span>
                <div class="cicle fontsize"><span>第一个纪元</span>
                    <img src="./images/image 112.png" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        toresume(){
            this.$router.push("/resume")
        }
    },
}
</script>

<style scoped>

.title {
    position: absolute;
    height: 44px;
    left: 248px;
    top: 56px;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
}

.main {
    border-radius: 31px;
    position: absolute;
    width: 1016px;
    height: 1224px;
    left: 248px;
    top: 110px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
}

.main .head img {
    position: absolute;
    width: 28px;
    height: 29.38px;
    left: 27px;
    top: 15px;
}

.main .head .tab {
    position: absolute;
    height: 29px;
    left: 152px;
    top: 36.22px;
    font-size: 24px;
    line-height: 29px;
}
.content .font ,
.main .tab {
    color: #F9A21F;
    font-size: 20px;
    line-height: 24px;
}
.content .size {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 14px;
    gap: 10px;
    background: #FFFFFF;
    border: 1px solid #FFB4B4;
    border-radius: 16px;
    font-size: 18px;
    line-height: 22px;
    color: #6D89C0;
    flex: none;
    order: 0;
    flex-grow: 0;

}
.content .evaluate {
    position: absolute;
    height: 24px;
    left: 19px;
    top: 86.22px;
}

.content .oneeva {
   
    position: absolute;
    width: 156px;
    height: 44px;
    left: 153px;
    top: 84.22px;

}

.content .twoeva {
    position: absolute;
    width: 192px;
    height: 44px;
    left: 152px;
    top: 137px;
}

.content .OKR {
    position: absolute;
    height: 24px;
    left: 18px;
    top: 210.22px;
    
}

.content .detail {
    position: absolute;
    height: 16px;
    left: 162px;
    top: 213.22px;
    font-size: 13px;
    line-height: 16px;
    color: #3E25A3;
}

.content .fir {
    position: absolute;
    width: 698px;
    height: 218px;
    left: 159px;
    top: 236px;

}

.content .two {
    position: absolute;
    width: 349px;
    height: 226px;
    left: 159px;
    top: 454px;
}

.content .rank {
    position: absolute;
    height: 24px;
    left: 17px;
    top: 701.22px;
  
}

.content .cicle {
    position: absolute;
    width: 122px;
    height: 122px;
    left: 172px;
    top: 701px;
    background: #FFFFFF;
    border: 1px solid #FFD1D1;
    border-radius: 100%;
}

 .cicle span {
    position: absolute;
    width: 75px;
    height: 18px;
    left: 23px;
    top: 26px;
    font-size: 15px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.75);

}
.cicle img {
    position: absolute;
width: 32px;
height: 42px;
left: 45px;
top: 51px;
}
</style>