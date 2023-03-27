<template>
  <div>
    <div>
      <div class="projects" @click="showSmallList">
        项目
        <span class="lists"> </span>
      </div>
      <div class="AllList">排行榜</div>
      <div class="govern" @click="toproposallist">治理投票</div>
      <div class="find" @click="tosearchAssits">寻找队友</div>
      <div class="classList" @click="toclass">按类排名</div>
      <img src="./images/set.png" alt="" class="set" />
      <div class="contents">
        <div class="name">名称</div>
        <div class="values">投资值</div>
        <div class="works">工作绩效均值</div>
        <div class="goods">点赞数</div>
        <div class="userList">
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail" @click="toinvestment">项目详情</button>
            <button class="join" @click="showjoinsuccesss">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
          <div class="userlists">
            <img src="./images/image 39.png" alt="" class="userImg" />
            <span class="username">teng</span>
            <span class="value">12345</span>
            <span class="avg">90</span>
            <div class="zan">
              <img src="./images/goods.png" alt="" class="dianzan" />
              <span class="goodsnum">999</span>
            </div>
            <button class="detail">项目详情</button>
            <button class="join">加入</button>
          </div>
        </div>
      </div>
    </div>
    <div class="Rectangle72" v-show="smallList">
      <div class="Rectangle78">
        <div class="Frame123" @click="toCreateProject">创建项目</div>
        <div class="Frame124">我的项目</div>
      </div>
    </div>
    <div class="container0" v-show="joinsuccess">
      <div class="joinSuccess">加入成功</div>
      <button class="sure2">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      smallList: false,
      joinsuccess:false
    };
  },
  methods: {
    showSmallList() {
      this.smallList = !this.smallList;
    },
    toCreateProject() {
      this.$router.push("/createproject");
    },
    tosearchAssits() {
      this.$router.push("/searchassits");
    },
    toinvestment() {
      this.$router.push("/investmentdetail");
    },
    toclass() {
      this.$router.push("/classlist");
    },
    showjoinsuccesss(){
        this.joinsuccess=!this.joinsuccess
    },
    toproposallist(){
        this.$router.push("/proposallist")
    }
  },
};
</script>

<style scoped>
.projects {
  position: absolute;
  width: 144px;
  height: 53px;
  background: #d9baba;
  border: 1px solid #ffdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  left: 402px;
  top: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
}

.AllList {
  position: absolute;
  width: 144px;
  height: 53px;
  background: #d9baba;
  border: 1px solid #ffdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  left: 677px;
  top: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
}

.govern {
  position: absolute;
  width: 144px;
  height: 53px;
  background: #d9baba;
  border: 1px solid #ffdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  left: 951px;
  top: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
}

.find {
  position: absolute;
  width: 144px;
  height: 53px;
  background: #d9baba;
  border: 1px solid #ffdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  left: 1283px;
  top: 289px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
}

.classList {
  position: absolute;
  width: 144px;
  height: 53px;
  background: #d9baba;
  border: 1px solid #ffdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  left: 1283px;
  top: 359px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 53px;
  color: #ffffff;
  text-align: center;
}

.set {
  width: 30.79px;
  height: 30px;
  position: absolute;
  left: 1463px;
  top: 91px;
}

.contents {
  position: relative;
  width: 941px;
  height: 900px;
  margin-left: 262px;
  margin-top: 115px;
  background: rgba(255, 253, 253, 0.1);
  border: 1px solid rgba(255, 253, 253, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 62px;
}

.contents .name {
  position: absolute;
  left: 114px;
  top: 24px;
  width: 40px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.contents .values {
  position: absolute;
  left: 218px;
  top: 24px;
  width: 60px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.contents .works {
  position: absolute;
  left: 346px;
  top: 24px;
  width: 120px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.contents .goods {
  position: absolute;
  left: 534px;
  top: 24px;
  width: 60px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.contents .userList {
  position: absolute;
  width: 941px;
  height: 826px;
  bottom: 0;
}

.userList .userlists {
  position: relative;
  margin-top: 10px;
  width: 941px;
  height: 40px;
}

.userImg {
  width: 38px;
  height: 39.89px;
  margin-left: 30px;
}

.username {
  position: absolute;
  width: 43px;
  height: 25.87px;
  left: 113px;
  top: 3.96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #312a2c;
}

.value {
  position: absolute;
  width: 60px;
  height: 25.87px;
  left: 217px;
  top: 3.96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #312a2c;
}

.avg {
  position: absolute;
  width: 25px;
  height: 25.87px;
  left: 397px;
  top: 3.96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #312a2c;
}

.zan {
  display: inline-block;
  position: absolute;
  left: 517px;
  top: 2.98px;
}

.zan .dianzan {
  width: 17px;
  height: 19.54px;
}

.zan .goodnum {
  width: 38px;
  height: 25.87px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  /* 项目排行榜 */

  color: #4a4848;
}

.detail {
  position: absolute;
  left: 672px;
  width: 95px;
  height: 31px;
  background: #fffcb7;
  border: 1px solid #fae498;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 31px;
  color: #f9a21f;
}
.join {
  position: absolute;
  left: 812px;
  width: 95px;
  height: 31px;
  background: #fffcb7;
  border: 1px solid #fae498;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 31px;
  color: #f9a21f;
}
.body .Rectangle72 {
  position: absolute;
  width: 1512px;
  height: 982px;
  left: 0px;
  top: 0px;
}

.body .Rectangle72 .Rectangle78 {
  box-sizing: border-box;
  position: absolute;
  width: 212px;
  height: 152px;
  left: 402px;
  top: 166px;
  background: #fffcfc;
  border: 1px solid #f3c5c5;
  border-radius: 12px;
}

.body .Rectangle72 .Rectangle78 .Frame123 {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 47px;
  gap: 10px;
  position: absolute;
  width: 174px;
  height: 52px;
  left: 20px;
  top: 13px;
  background: #fff8f8;
  border: 1px solid #ffcccc;
  border-radius: 31px;
}

.body .Rectangle72 .Rectangle78 .Frame124 {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 47px;
  gap: 10px;
  position: absolute;
  width: 174px;
  height: 52px;
  left: 20px;
  top: 88px;
  background: #fff8f8;
  border: 1px solid #ffcccc;
  border-radius: 31px;
}
.container0 {
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

      .joinSuccess {
         width: 192px;
         height: 58px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 48px;
         line-height: 58px;
         color: #000000;
         margin-left: 112px;
         margin-top: 69px;
      }

      .sure2 {
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
  