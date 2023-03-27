<template>
  <div class="content">
    <div class="top">
      <img src="./images/back.png" alt="" />
    </div>
    <div class="sub">
      <div class="nav">
        <div class="br">收到一条@.</div>
        <img src="./images/sign.png" alt="" />
        <div class="dr">2022.6.30</div>
      </div>
      <div class="nav nav2">
        <div class="br">哈哈哈回复了你的评论</div>
        <img src="./images/sign.png" alt="" />
        <div class="dr">2022.6.30</div>
      </div>
    </div>
    <div class="detail">
      <div class="detailHead">哈哈哈在OKR<a href="#">完成海报</a>中@了你</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myMessage",
};
</script>

<style scoped>
.content {
  float: left;
  position: absolute;
  left: 284px;
  width: 1177px;
  height: 880px;
  border-radius: 21px;
  background: rgba(255, 249, 249, 0.8);
}

.content .top {
  position: relative;
  width: 1176px;
  height: 64px;
}

.content .top img {
  position: absolute;
  left: 36.3px;
  top: 17.07px;
  width: 50px;
  height: 36px;
}

.content .sub {
  display: inline-block;
  position: relative;
  width: 422px;
  height: 880px;
  background-color: rgb(254, 238, 238);
  background: rgba(236, 229, 229, 0.67);
  border-radius: 22px;
}

.content .sub .nav {
  width: 422px;
  height: 87px;
  background-color: rgba(236, 229, 229, 0.67);
  border-radius: 10px;
  position: relative;
}

.sub .br {
  position: absolute;
  left: 23px;
  top: 15px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.58);
}

.nav img {
  display: block;
  width: 19px;
  height: 10px;
  position: absolute;
  left: 381px;
  top: 9.74px;
}

.nav .dr {
  position: absolute;
  width: 115px;
  height: 29px;
  left: 288px;
  top: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: rgba(0, 0, 0, 0.53);
}

.content .sub .nav2 {
  background-color: #ffffff;
}

.detail {
  display: inline-block;
  position: absolute;
  width: 755px;
  height: 879px;
  top: 0;
}

.detail .detailHead {
  height: 54px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.47);
  line-height: 54px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.76);
}
.detail .detailHead a {
  text-decoration: none;
}
</style>