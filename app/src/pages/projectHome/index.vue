<template>
  <div>
    <div class="homepage1">积分排行</div>
    <div class="homepage2">持有Token</div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309" @click="showPoints">分配积分</div>
    </div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309">分配积分</div>
    </div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309">分配积分</div>
    </div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309">分配积分</div>
    </div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309">分配积分</div>
    </div>
    <div class="homepage3">
      <div class="homepage301">名称</div>
      <img src="./images/image 65.png" alt="" class="homepage302" />
      <div class="homepage303">0</div>
      <div class="homepage304">0</div>
      <div class="homepage309">分配积分</div>
    </div>
    <div class="righta"></div>
    <div class="rightb"></div>
    <div class="rightc">
      <div class="rightc1">小do：水电工加入了我们的组织！</div>
      <div class="rightc2">小do：水电工退出了我们的组织！</div>
      <div class="rightc3">小do：由hh发起的仲裁提案投票已通过 !</div>
      <div class="rightc4">小do：我们的项目获得了xxx一等奖 !</div>
      <div class="rightc5">小do：水电工加入了我们的组织！</div>
      <div class="rightc6">小do：水电工退出了我们的组织！</div>
      <div class="rightc7">小do：由hh发起的仲裁提案投票已通过 !</div>
    </div>
    <div class="rightd"></div>
    <div class="righte"></div>
    <div class="rightf">
      <div class="rightf1">投票</div>
    </div>
    <div class="rightg">
      <div class="rightg1" @click="toSon">文件</div>
    </div>
    <div class="righth">
      <div class="righth1">申请</div>
    </div>
    <div class="righti" @click="toMyOkr">
      <div class="righti1">OKR</div>
    </div>
    <div class="rightj">
      <div class="rightj1">日历</div>
    </div>
    <div class="rightk">
      <div class="rightk1" @click="showListss">积分详情</div>
    </div>
    <div class="rightl">
      <div class="rightl1">哈哈哈</div>
      <div class="rightl2"></div>
      <div class="rightl3">
        <div class="rightl31">@大哈哈</div>
        <div class="rightl32">你好呀！</div>
      </div>
      <div class="rightl4">哈哈哈</div>
      <div class="rightl5"></div>
      <div class="rightl6">
        <div class="rightl61">邀请你协助我完成页面设计可以吗？</div>
      </div>
      <div class="a1">
        <div class="a1-1">请输入你的内容.....</div>
        <div class="a1-2"></div>
        <div class="a1-3"></div>
      </div>
    </div>
    <div class="container6" v-show="IssuingPoints">
      <div class="module1">您本纪元内所剩余的积分为：</div>
      <div class="module2">15</div>
      <div class="module3">请输入您将分配的积分：</div>
      <div class="module4">
        <div class="module4-1">5</div>
      </div>
      <div class="module5">
        <div class="module5-1">确认</div>
      </div>
    </div>
    <div class="fr" v-show="showLists">
      <div class="b1">本纪元</div>
      <div class="b2">积分数</div>
      <div class="b3">已分配积分数</div>
      <div class="b4">
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
        <div>
          <img src="./images/image 66.png" alt="" class="b4-1" />
          <span class="b4-2">哈哈哈</span>
          <span class="b4-3">10</span>
          <span class="b4-4">10</span>
        </div>
      </div>
      <div class="d1">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectHome",
  data() {
    return {
      IssuingPoints: false,
      showLists:false
    };
  },
  methods: {
    toMyOkr() {
      this.$router.push("/myokr");
    },
    showPoints() {
      this.IssuingPoints = !this.IssuingPoints;
    },
    toSon() {
      this.$router.push("/projectson");
    },
    showListss(){
        this.showLists=!this.showLists
    }
  },
};
</script>

<style scoped>
.homepage1 {
  position: absolute;
  width: 128px;
  height: 39px;
  left: 165px;
  top: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  color: #8e8585;
}

.homepage2 {
  position: absolute;
  width: 156px;
  height: 39px;
  left: 326px;
  top: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  color: #8e8585;
}

.homepage3 {
  position: relative;
  width: 786px;
  height: 80px;
  margin-top: 55px;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(2px);
}

.homepage301 {
  display: inline-block;
  position: absolute;
  width: 32px;
  height: 19px;
  left: 65px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d2d;
}

.homepage302 {
  position: absolute;
  display: inline-block;
  width: 67px;
  height: 54px;
  border-radius: 36px;
  left: 48px;
  top: 24px;
}

.homepage303 {
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 39px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  left: 224px;
  top: 20px;
}

.homepage304 {
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 39px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  left: 412px;
  top: 20px;
  color: #000000;
}

.homepage309 {
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  width: 99px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #f9a21f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  color: #b63f3f;
  left: 518px;
  top: 20px;
  text-align: center;
}

.righta {
  position: absolute;
  width: 389px;
  height: 0px;
  left: 711px;
  top: 106px;
  border: 1px solid #eb3434;
}

.rightb {
  position: absolute;
  width: 389px;
  height: 0px;
  left: 711px;
  top: 331px;
  border: 1px solid #eb3434;
  transform: rotate(-0.15deg);
}

.rightc {
  position: absolute;
  width: 444px;
  height: 194px;
  left: 681px;
  top: 123px;
  background: rgba(254, 249, 249, 0.8);
  border-radius: 75px;
}

.rightc1 {
  position: absolute;
  width: 245px;
  height: 19px;
  margin-left: 71.49px;
  margin-top: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc2 {
  position: absolute;
  width: 245px;
  height: 19px;
  margin-left: 70.49px;
  margin-top: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc3 {
  position: absolute;
  width: 290px;
  height: 19px;
  margin-left: 70.49px;
  margin-top: 61px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc4 {
  position: absolute;
  width: 263px;
  height: 19px;
  margin-left: 70.49px;
  margin-top: 90px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc5 {
  position: absolute;
  width: 245px;
  height: 19px;
  margin-left: 70.49px;
  margin-top: 115px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc6 {
  position: absolute;
  width: 245px;
  height: 19px;
  margin-left: 71.49px;
  margin-top: 139px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightc7 {
  position: absolute;
  width: 290px;
  height: 19px;
  margin-left: 70.49px;
  margin-top: 166px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #817b7b;
}

.rightd {
  position: absolute;
  width: 189px;
  height: 165px;
  left: 1229px;
  top: 93px;
  background: url(./images/image\ 68.png);
}

.righte {
  position: absolute;
  width: 30.79px;
  height: 30px;
  left: 1463px;
  top: 91px;
  background: url(./images/image\ 125.png);
  border-radius: 35px;
}

.rightf {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 39px;
  left: 1165px;
  top: 271px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.rightf1 {
  width: 44px;
  height: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.rightg {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 39px;
  left: 1281px;
  top: 271px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.rightg1 {
  width: 44px;
  height: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.righth {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 39px;
  left: 1397px;
  top: 271px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.righth1 {
  width: 44px;
  height: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.righti {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 39px;
  left: 1165px;
  top: 317px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.righti1 {
  width: 46px;
  height: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.rightj {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 88px;
  height: 39px;
  left: 1280px;
  top: 317px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.rightj1 {
  width: 44px;
  height: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.rightk {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  position: absolute;
  width: 114px;
  height: 41px;
  left: 1394px;
  top: 317px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.rightk1 {
  width: 80px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f9a21f;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.rightl {
  position: absolute;
  width: 737px;
  height: 590px;
  left: 732px;
  top: 369px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
}

.rightl1 {
  width: 48px;
  height: 19px;
  margin-left: 33px;
  margin-top: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d2d;
}

.rightl2 {
  width: 67px;
  height: 54px;
  margin-left: 24px;
  margin-top: 39px;
  background: url(./images/image\ 66.png);
}

.rightl3 {
  width: 173px;
  height: 44px;
  margin-left: 111px;
  margin-top: -40px;
  background: #ebe9e9;
  border-radius: 5px;
}

.rightl31 {
  width: 159px;
  height: 24px;
  margin-left: 14px;
  margin-top: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #4179bb;
}

.rightl32 {
  width: 159px;
  height: 24px;
  margin-left: 100px;
  margin-top: -20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #393737;
}

.rightl4 {
  width: 48px;
  height: 19px;
  margin-left: 33px;
  margin-top: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d2d;
}

.rightl5 {
  width: 67px;
  height: 54px;
  margin-left: 24px;
  margin-top: 15px;
  background: url(./images/image\ 66.png);
}

.rightl6 {
  width: 341px;
  height: 44px;
  margin-left: 113px;
  margin-top: -45px;
  background: #ebe9e9;
  border-radius: 5px;
}

.rightl61 {
  width: 320px;
  height: 24px;
  margin-left: 12px;
  margin-top: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #393737;
}

.a1 {
  box-sizing: border-box;
  width: 653px;
  height: 61px;
  margin-left: 50px;
  margin-top: 270px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 17px;
}

.a1-1 {
  width: 168px;
  height: 24px;
  margin-left: 23px;
  margin-top: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(57, 55, 55, 0.37);
}

.a1-2 {
  width: 30px;
  height: 0px;
  margin-left: 589px;
  margin-top: -14px;
  border: 1px solid #000000;
  transform: rotate(90deg);
}

.a1-3 {
  width: 29px;
  height: 29px;
  margin-left: 615px;
  margin-top: -12px;
  background: url(./images/image\ 67.png);
}
.module1 {
  position: absolute;
  width: 316px;
  height: 27px;
  left: 17px;
  top: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: #554e4e;
}

.module2 {
  position: absolute;
  width: 316px;
  height: 27px;
  left: 301px;
  top: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */
  color: red;
}

.module3 {
  position: absolute;
  width: 176px;
  height: 19px;
  left: 17px;
  top: 65px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.61);
}

.module4 {
  box-sizing: border-box;
  position: absolute;
  width: 57px;
  height: 33px;
  left: 200px;
  top: 60px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  border-radius: 10px;
}

.module4-1 {
  position: absolute;
  width: 29.77px;
  height: 18.27px;
  left: 21px;
  top: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #f9a21f;
}

.module5 {
  box-sizing: border-box;
  position: absolute;
  width: 54px;
  height: 30px;
  left: 325px;
  top: 112px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  border-radius: 16px;
}

.module5-1 {
  position: absolute;
  width: 28.38px;
  height: 16.5px;
  left: 13px;
  top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #f9a21f;
}
.container6 {
  box-sizing: border-box;
  position: absolute;
  width: 407px;
  height: 155px;
  left: 552px;
  top: 274px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
}
.fr {
position: absolute;
  width: 616px;
  height: 658px;
  left: 448px;
  top: 162px;
  background: #ffffff;
  z-index: 999;
}

.b1 {
  width: 72px;
  height: 29px;
  position: absolute;
  left: 22px;
  top: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #a2a0a0;
}

.b2 {
  position: absolute;
  width: 60px;
  height: 24px;
  left: 238px;
  top: 26px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.b3 {
  position: absolute;
  width: 120px;
  height: 24px;
  left: 405px;
  top: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.b4 {
  position: absolute;
  width: 616px;
  height: 589px;
  bottom: 0;
  background: #ffffff;
}

.b4-1 {
  width: 67px;
  height: 54px;
  margin-left: 22px;
  margin-top: 14px;
}

.b4-2 {
  width: 60px;
  height: 24px;
  margin-left: 19px;
  margin-top: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2650e8;
}

.b4-3 {
  width: 22px;
  height: 24px;
  margin-left: 89px;
  margin-top: 27px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.b4-4 {
  width: 22px;
  height: 24px;
  margin-left: 175px;
  margin-top: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.d1 {
  box-sizing: border-box;
  position: absolute;
  left: 516px;
  top: 608px;
  width: 84px;
  height: 37px;
  background: #ffffff;
  border: 1px solid #ffb4b4;
  border-radius: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 37px;
  text-align: center;
  color: #f9a21f;
}
</style>