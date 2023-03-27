<template>
  <div class="content">
    <div class="top">
      <img src="./images/back.png" alt="" />
    </div>
    <div class="contentBody">
      <input type="text" placeholder="点击添加待办事项" v-model="thing" @keyup.enter="addItem()"/>
      <div class="text">
        <ul v-for="item in list" :key="item.done">
          <li><button @click="success"></button>{{ item.done }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allToBeDone",
  data() {
    return {
      list:[
        {done:"一起做项目文案"},
        {done:"掌握项目的特点，根据特点找到核心元素"},
      ],
      thing:''
    }
  },
  methods: {
    addItem(){
      var tobe ={
        done:this.thing
      };
      this.list.unshift(tobe);
      this.thing=""
    },
    success(item){
      var ind=this.list.findIndex(value=>value.done==item.done);
      this.list.splice(ind,1);
    }
  },
};
</script>
 
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 主体盒子 */
.content {
  float: left;
  position: absolute;
  left: 284px;
  width: 1177px;
  height: 1371.43px;
  border-radius: 21px;
  background-color: #f0ebeb;
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

.content .contentBody {
  float: right;
  width: 1120px;
  height: 1070px;
  background-color: #fef2f4;
}

.content .contentBody input {
  display: block;
  width: 1071px;
  height: 72px;
  margin: 17.2px auto 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
}

.content .contentBody .text {
  width: 95%;
  height: 50px;
  margin: 10px auto;
}
.content .contentBody .text li {
  display: block;
  list-style: none;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-top: 34px;
}
.content .contentBody .text button {
  width: 22px;
  height: 21px;
  border-radius: 50%;
  border-color: #2bb99f;
}
</style>