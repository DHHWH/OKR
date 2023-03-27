<template>
  <!-- 头部部分 -->
  <div class="Head">
    <div class="Logo" @click="gohome">GOGO</div>
    <div class="label">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right" @click="showSmallNav"></div>
    </div>
    <div class="rectangle" v-show="smallNav">
        <div class="frame news" @click="tonews">消息</div>
        <div class="frame resume">我的简历</div>
        <div class="frame discord" @click="toLogin">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      smallNav:false
    }
  },
  methods: {
    showSmallNav(){
      this.smallNav=!this.smallNav
    },
    gohome(){
      this.$router.push("/home")
    },
    toLogin(){
      this.$router.push("/login")
    },
    tonews(){
      this.$router.push("/news")
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Head {
  height: 90px;
  margin: 0 auto;
}

.Logo {
  float: left;
  width: 121px;
  height: 48px;
  margin-left: 21px;
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fff4f4;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 1px #e75b5b;
}

.label {
  float: right;
  height: 90px;
}

.label > div {
  margin-right: 15px;
  margin-top: 29px;
}

.label .left {
  float: left;
  box-sizing: border-box;
  width: 146px;
  height: 39px;
  background: url(./images/Left.png);
}

.label .middle {
  float: left;
  box-sizing: border-box;
  width: 234px;
  height: 39px;
  background: url(./images/middle.png);
}

.label .right {
  float: left;
  box-sizing: border-box;
  width: 40px;
  height: 39px;
  background: url(./images/right.png);
  margin-right: 14px;
}

.rectangle {
  z-index: 999;
   box-sizing: border-box;
   position: absolute;
   width: 139px;
   height: 176px;
   right: 14px;
   top: 78px;
   background: #FFFCFC;
   border: 1px solid #F3C5C5;
   border-radius: 12px;

}

.frame {
   position: absolute;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 10px;
   position: absolute;
   width: 96px;
   height: 38px;
   background: #FFF8F8;
   border: 1px solid #FFCCCC;
   border-radius: 31px;
   left: 21px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 24px;

   color: #FBCA82;

}

.news {
   top: 19px;
}

.resume {
   top: 68px;
}

.discord {
   top: 118px;
}
</style>