<template>
  <!-- OKR导航栏 -->
  <div class="navBar">
    <div class="navList">
      <router-link class="gobut" to="/alltobedone">全部待办</router-link>
    </div>
    <div class="navList">
      <router-link class="gobut" to="/myokr">我的OKR</router-link>
    </div>
    <div class="navList">
      <router-link class="gobut" to="/assit">我协助的</router-link>
    </div>
    <div class="navList">
      <router-link class="gobut" to="/data">数据看板</router-link>
    </div>
    <div class="navList">
      <router-link class="gobut" to="/mymessage">我的消息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OKRNav",
};
</script>

<style scoped>
/* 导航栏部分 */
.navBar {
  float: left;
}

.navList {
  margin-left: 78px;
  width: 137px;
  height: 39px;
  margin-bottom: 5px;
}

.navList .gobut {
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: white;
}

.navList .gobut:hover {
  color: #6d89c0;
  border-left: 3px solid #6d89c0;
}
</style>