<template>
  <div>
    <div class="main">
      <div class="invite">
        <span class="head fontsize">邀请信息</span><br />
        <span class="content fontsize">您收到了一条邀请信息，随食--...</span
        ><br />
        <span class="date fontsize">2022.6.30</span><br />
      </div>
      <div class="response">
        <span class="head fontsize">成员回复</span>
        <span class="content fontsize">果果对您的邀请进行了回复...</span>
        <span class="date fontsize">2022.4.30</span>
      </div>
      <div class="maincontent">
        <span class="fontsize"
          ><a href="#">随食--食安心</a>邀请你加入该项目</span
        >
        <button class="fontsize" @click="showanswer">回答</button>
      </div>
    </div>
    <div class="answer" v-show="answer">
        <div class="close"><img src="./images/Vector 85 (1).png" alt=""></div>
        <textarea name="content"  cols="30" rows="10" >请输入您的回复说明.....</textarea>
        <div class="btn">
            <button class="refuse sty">拒绝</button>
            <button class="agree sty">同意</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            answer:false
        }
    },
    methods: {
        showanswer(){
            this.answer=!this.answer
        }
    },
};
</script>

<style scoped>
.main {
  position: absolute;
  width: 1145px;
  height: 880px;
  left: 181px;
  top: 127px;
  background: rgba(255, 249, 249, 0.8);
  backdrop-filter: blur(2px);
}

.invite {
  width: 422px;
  height: 100px;
  position: absolute;
  left: 2px;
  top: 3px;
  background: rgba(217, 214, 214, 0.4);
  border-radius: 22px;
}

.response {
  width: 422px;
  height: 100px;
  position: absolute;
  left: 3px;
  top: 107.23px;
  background: #ffffff;
  border-radius: 22px;
}

.head {
  position: absolute;
  top: 4px;
  left: 16px;
  font-size: 20px;
  line-height: 24px;
}

span.content {
  position: absolute;
  font-size: 22px;
  line-height: 27px;
  top: 34px;
  left: 47px;
}

.date {
  position: absolute;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  bottom: 3px;
  right: 10px;
}

.maincontent {
  position: absolute;
  width: 718px;
  height: 853px;
  right: 0px;
  top: 1px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 31px;
  padding-top: 13px;
  padding-left: 15px;
}

.maincontent a {
  font-size: 24px;
  line-height: 29px;
  color: rgba(30, 120, 171, 0.69);
  text-decoration: none;
}

.maincontent span {
  font-size: 24px;
  line-height: 29px;
  color: #000000;
}

button {
  position: absolute;
  width: 76px;
  height: 36px;
  left: 619px;
  top: 89px;
  background: #ffffff;
  border: 1px solid #fdcd86;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-size: 20px;
  line-height: 24px;
  color: #eeb887;
}
.answer {
    position: absolute;
    width: 360px;
    height: 207px;
    left: 528px;
    top: 256px;
    border: 1px solid #000000;
}

textarea {
    position: absolute;
    width: 340px;
    height: 108px;
    top: 22px;
    left: 10px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    resize: none;
    padding-top: 4px;
    padding-left: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: rgba(0, 0, 0, 0.4);

}

.btn .sty {
    width: 76px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #FDCD86;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    top: 153px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #EEB887;
}

.refuse {
    position: absolute;
    left: 175px;
}

.agree {
    position: absolute;
    left: 274px;
}

img {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 339px;
    top: 7px;

}
</style>