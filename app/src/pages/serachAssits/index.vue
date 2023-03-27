<template>
  <div>
    <div class="search">
      <div class="fl">
        <div class="fl-1">输入你需要的功能吧</div>
        <div class="fl-2">
          <input type="text" placeholder="前端、java" class="wz" />
        </div>
      </div>
      <div class="fr">
        <div class="fr-1">返回</div>
      </div>
    </div>
    <div class="main">
      <div class="name">哈哈哈</div>
      <div class="tx">
        <img src="./images/image 66.png" alt="" />
      </div>
      <div class="work">有五年前端相关工作任职经历</div>
      <div class="jl">
        <div class="jl-1" @click="showPay">查看简历</div>
      </div>
    </div>
    <div class="container5" v-show="pay">
      <div class="pay">您需要支付15token</div>
      <button class="sure2" @click="toResume">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchAssits",
  data() {
    return {
        pay:false
    }
  },
  methods: {
    showPay(){
        this.pay = !this.pay
    },
    toResume(){
        this.$router.push("/resume")
    }
  },
};
</script>

<style scoped>
.search .fl .fl-1 {
  position: absolute;
  width: 144px;
  height: 19px;
  left: 142px;
  top: 114px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #958b8b;
}

.search .fl .fl-2 {
  box-sizing: border-box;
  position: absolute;
  width: 947px;
  height: 73px;
  left: 142px;
  top: 139px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #fbd3c7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.search .fl .fl-2 .wz {
  position: absolute;
  width: 200px;
  height: 19px;
  margin-left: 23px;
  margin-top: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border: 0px;
  background-color: transparent;
}

.search .fl .fl-2 .fh {
  position: absolute;
  width: 32px;
  height: 32px;
  margin-left: 890px;
  margin-top: 26px;
}

.search .fr {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 18px;
  gap: 10px;
  position: absolute;
  width: 84px;
  height: 53px;
  left: 1359px;
  top: 149px;
  background: #eeb887;
  border: 1px solid #fdcd86;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.search .fr .fr-1 {
  width: 48px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.main .name {
  position: absolute;
  width: 48px;
  height: 19px;
  left: 151px;
  top: 265px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d2d;
}

.main .tx {
  position: absolute;
  width: 67px;
  height: 54px;
  left: 142px;
  top: 287px;
}

.main .work {
  position: absolute;
  width: 336px;
  height: 29px;
  left: 221px;
  top: 300px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #5a5855;
}

.main .jl {
  box-sizing: border-box;
  position: absolute;
  width: 133px;
  height: 54px;
  left: 1055px;
  top: 287px;
  background: #eeb887;
  border: 1px solid #fdcd86;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.main .jl .jl-1 {
  width: 96px;
  height: 29px;
  margin-left: 18px;
  margin-top: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #ffffff;
}
.container5 {
  position: absolute;
  left: 435px;
  top: 275px;
  width: 595px;
  height: 376px;
  background: #fffcfc;
  border: 1px solid #f7c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.pay {
  width: 372px;
  height: 48px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-left: 109px;
  margin-top: 100px;
}

.sure2 {
  display: block;
  width: 84px;
  height: 53px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 53px;
  color: #f9a21f;
  background: #ffffff;
  border: 1px solid #f9a21f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-left: 253px;
  margin-top: 51px;
}
</style>