<template>
  <div class="content">
    <div class="top">
      <img src="./images/back.png" alt="" />
    </div>
    <div class="module">
      <div class="module1">
        <div class="head">
          <span class="index1">协助目标</span>
          <span class="tip1">完成海报制作</span>
        </div>
        <div class="KRAim">
          <span class="index2">协助KR :</span>
          <span class="tip2">掌握项目的特点，根据特点找到核心元素</span>
        </div>
        <div class="task">
          <span class="index3">关联任务 :</span>
          <a href="#">页面的制作</a>
        </div>
        <button class="finish">完成</button>
      </div>
      <div class="module1">
        <div class="head">
          <span class="index1">协助目标</span>
          <span class="tip1">完成海报制作</span>
        </div>
        <div class="KRAim">
          <span class="index2">协助KR :</span>
          <span class="tip2">掌握项目的特点，根据特点找到核心元素</span>
        </div>
        <div class="task">
          <span class="index3">关联任务 :</span>
          <a href="#">页面的制作</a>
        </div>

        <button class="finish">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "assit",
};
</script>

<style scoped>
.content {
  float: left;
  position: absolute;
  left: 284px;
  width: 1116px;
  height: 1372px;
  border-radius: 21px;
  background-color: rgba(255, 255, 255, 0.8);
}

.content .top {
  width: 1176px;
  height: 64px;
}

.content .top img {
  position: absolute;
  left: 23.3px;
  top: 17.07px;
  width: 50px;
  height: 36px;
}

.content .module {
  position: absolute;
  top: 72.72px;
  left: 172px;
  width: 879px;
  height: 135px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
}

.module .head {
  height: 55px;
  width: 100%;
}
.module .module1 {
  position: relative;
  width: 100%;
  height: 100%;
}
.module .index1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #f9a21f;
  margin-left: 24px;
}

.module .tip1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #4a4848;
  margin-left: 30px;
}

.module .KRAim {
  width: 100%;
  height: 34px;
}

.module .index2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #4a4848;
  margin-left: 57px;
}

.module .tip2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #4a4848;
  margin-left: 30px;
}

.module .task {
  margin-top: 9px;
  margin-left: 57px;
  width: 273px;
  height: 34px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #4a4848;
}

.module .task a {
  text-decoration: none;
}

.module1 button {
  width: 74px;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f9a21f;
  position: absolute;
  left: 799px;
  top: 96px;
}
</style>