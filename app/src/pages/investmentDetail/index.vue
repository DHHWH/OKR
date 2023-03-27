<template>
  
  <div>
    <div class="banner">
    <div class="globe">项目概述</div>
    <div class="glone">
      <div class="glone-in">
        描述你的产品，试着从市场机会、竞争优势等方面进行描述......
      </div>
    </div>
    <div class="cd">项目进展</div>
    <div class="hd">
      <div class="hd-in">描述你的项目所处阶段并尽可能详细.....</div>
    </div>
    <div class="gd">项目描述</div>
    <div class="jd">
      <div class="jd-in">举例：获奖情况、项目难点</div>
    </div>
    <div class="ad" @click="showcircumstance">投资情况</div>
    <div class="sd">（点击查看详情）</div>
    <div class="rd">全部成员</div>
    <div class="wd"></div>
    <div class="yd">哈哈哈</div>
    <div class="fr">双击图片可放大</div>
    <div class="down">
      <div class="up"></div>
      <div class="fl"></div>
    </div>
    <div class="insert">
      <div class="insert-in" @click="showjoinsuccess">投资</div>
    </div>
    <div class="join">
      <div class="join-in">加入</div>
    </div>
  </div>
  <div class="box" v-show="circumstance">
    <img src="./images/insert.png">
  </div>
  <div class="container4" v-show="joinsuccess">
      <div class="joinProjects">
         您已成功加入该项目
      </div>
      <button class="sure4" @click="toprojecthome">
         确认
      </button>
   </div>
  </div>
</template>

<script>
export default {
  name: "investmentDetail",
  data() {
    return {
        circumstance:false,
        joinsuccess:false
    }
  },
methods: {
    showcircumstance(){
        this.circumstance=!this.circumstance
    },
    showjoinsuccess(){
        this.joinsuccess=!this.joinsuccess
    },
    toprojecthome(){
        this.$router.push("/projecthome")
    }
},
};
</script>

<style scoped>
.banner {
  width: 1235px;
  height: 1282px;
  left: 171px;
  top: 109px;
  margin-top: 14px;
  margin-left: 179px;
  background: rgba(254, 249, 249, 0.8);
  backdrop-filter: blur(2px);

  border-radius: 27px;
}

.globe {
  position: absolute;
  width: 96px;
  height: 29px;
  left: 199px;
  top: 137px;
  margin-top: -113px;
  margin-left: -172px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #f9a21f;
}

.glone {
  position: absolute;
  width: 568px;
  height: 212px;
  left: 307px;
  top: 137px;
  margin-top: -108px;
  margin-left: -168px;
  background: #ffffff;
  border: 1px solid #f9a21f;
  border-radius: 6px;
}

.glone-in {
  width: 443px;
  height: 19px;
  left: 313px;
  top: 145px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.49);
}

.cd {
  position: absolute;
  width: 96px;
  height: 29px;
  left: 199px;
  top: 363px;
  margin-top: -104px;
  margin-left: -172px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #f9a21f;
}

.hd {
  position: absolute;
  width: 568px;
  height: 51px;
  left: 307px;
  top: 366px;
  margin-top: -100px;
  margin-left: -168px;
  background: #ffffff;
  border: 1px solid #f9a21f;
  border-radius: 6px;
}

.hd-in {
  width: 279px;
  height: 19px;
  left: 314px;
  top: 371px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.49);
}

.gd {
  position: absolute;
  width: 96px;
  height: 29px;
  left: 199px;
  top: 430px;
  margin-top: -90px;
  margin-left: -165px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #f9a21f;
}

.jd {
  position: absolute;
  width: 568px;
  height: 51px;
  left: 307px;
  top: 434px;
  margin-top: -88px;
  margin-left: -165px;
  background: #ffffff;
  border: 1px solid #f9a21f;
  border-radius: 6px;
}

.jd-in {
  width: 168px;
  height: 17px;
  left: 314px;
  top: 439px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #a6a1a1;
}

.ad {
  position: absolute;
  width: 96px;
  height: 29px;
  left: 199px;
  top: 500px;
  margin-top: -90px;
  margin-left: -164px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #f9a21f;
}

.sd {
  position: absolute;
  width: 112px;
  height: 17px;
  left: 295px;
  top: 512px;
  margin-top: -91px;
  margin-left: -166px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #837b7b;
}

.rd {
  position: absolute;
  width: 96px;
  height: 29px;
  left: 199px;
  top: 546px;
  margin-top: -90px;
  margin-left: -165px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #f9a21f;
}

.wd {
  position: absolute;
  width: 46px;
  height: 46px;
  left: -20px;
  top: 478px;
  margin-top: -15px;
  margin-left: 165px;
  background: url(./images/image\ .png);
}

.yd {
  position: absolute;
  width: 60px;
  height: 24px;
  left: 206px;
  top: 485px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
}

.fr {
  position: absolute;
  width: 98px;
  height: 17px;
  left: 933px;
  top: 135px;
  margin-top: -110px;
  margin-left: -147px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #837b7b;
}

.banner .down {
  position: relative;
  width: 400px;
  height: 331px;
  margin-left: 785px;
  top: 59px;
  background: #d9d9d9;
  border-radius: 6px;
}

.up {
  position: absolute;
  width: 117.02px;
  height: 5.69px;
  left: 300px;
  top: 329px;
  margin-top: -155px;
  margin-left: -173px;
  background: #ffffff;
  transform: matrix(0, -1, 1, 0, 0, 0);
}

.fl {
  position: absolute;
  width: 121px;
  height: 5.51px;
  left: 245px;
  top: 268px;
  margin-top: -83px;
  margin-left: -117px;
  background: #ffffff;
}

.insert {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 29px;
  gap: 10px;
  margin-top: 471px;
  margin-left: 811px;

  width: 87px;
  height: 40px;
  left: 1173px;
  top: 945px;

  background: #ffffff;
  border: 1px solid #f9a21f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 37px;
}

.insert-in {
  width: 44px;
  height: 27px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;

  color: #f9a21f;

  flex: none;
  order: 0;
  flex-grow: 0;
}

.join {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 29px;
  gap: 10px;

  position: absolute;
  width: 87px;
  height: 40px;
  left: 1289px;
  top: 945px;
  margin-top: -147px;
  margin-left: -269px;
  background: #ffffff;
  border: 1px solid #f9a21f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 37px;
}

.join-in {
  width: 44px;
  height: 27px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;

  color: #f9a21f;

  flex: none;
  order: 0;
  flex-grow: 0;
}
.box {
      position: absolute;
      width: 890px;
      height: 461px;
      left: 311px;
      top: 260px;
    }

    .box img {
      width: 890px;
      height: 461px;
    }
    .container4 {
         position: absolute;
         left: 510px;
         top: 341px;
         width: 416px;
         height: 301px;
         background: #FFFCFC;
         border: 1px solid #F7C4C4;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         border-radius: 36px;
      }

      .joinProjects{
         width: 216px;
         height: 29px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 24px;
         line-height: 29px;
         color: #000000;
         margin-left: 112px;
         margin-top: 69px;
      }

      .sure4 {
         display: block;
         width: 123px;
         height: 59px;
         text-align: center;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 32px;
         line-height: 59px;
         color: #F9A21F;
         background: #FFFFFF;
         border: 1px solid #F9A21F;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         border-radius: 16px;
         margin-left: 147px;
         margin-top: 38px;
      }
</style>