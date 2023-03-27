<template>
  <div>
    <div class="content">
      <div class="contentInfo">
        <div class="top">
          <img src="./images/back.png" alt="" />
        </div>
        <div class="UserID">
          <div class="ID">
            <img src="./images/image 66.png" alt="" />哈哈哈（我）
          </div>
          <div class="ID"><img src="./images/image 66.png" alt="" />笑哈哈</div>
          <div class="ID"><img src="./images/image 66.png" alt="" />小哈哈</div>
          <div class="ID"><img src="./images/image 66.png" alt="" />要哈哈</div>
          <div class="ID"><img src="./images/image 66.png" alt="" />不哈哈</div>
        </div>
        <div class="test">
          <div class="one">
            <div class="oneHead">
              <span class="index">01:</span>
              <span class="tip">完成海报制作</span>
            </div>
            <div class="KR">
              <span class="index">KR1:</span>
              <span class="tip">掌握项目的特点，根据特点找到核心元素</span>
            </div>
            <div class="add">
              <span class="button1">
                <img src="./images/Group 64.png" alt="" /> 添加Key Result
              </span>
              <span class="button2">
                <img src="./images/Group 64.png" alt="" /> 关联任务 :
                <a href="">页面的制作</a>
              </span>
            </div>
            <div class="last">
              <img src="./images/Group 246.png" alt="" @click="controlupdate"/> 100%
              <img src="./images/Group 247.png" alt=""  @click="controldiscuss"/> 7
              <img src="./images/Group 248.png" alt=""  @click="addconfidence"/> {{num}}
              <img src="./images/Ellipse 22.png" alt="" @click="controlconfidence"/> 1
              <button class="compile">编辑</button>
              <button class="delete">删除</button>
            </div>
          </div>
          <div class="one">
            <div class="oneHead">
              <span class="index">02:</span>
              <span class="tip">完成海报制作</span>
            </div>
            <div class="KR">
              <span class="index">KR1:</span>
              <span class="tip">掌握项目的特点，根据特点找到核心元素</span>
            </div>
            <div class="add">
              <span class="button1">
                <img src="./images/Group 64.png" alt="" /> 添加Key Result
              </span>
              <span class="button2">
                <img src="./images/Group 64.png" alt="" /> 关联任务 :
                <a href="">页面的制作</a>
              </span>
            </div>
            <div class="last">
              <img src="./images/Group 246.png" alt="" /> 100%
              <img src="./images/Group 247.png" alt="" /> 7
              <img src="./images/Group 248.png" alt="" /> 1
              <img src="./images/Ellipse 22.png" alt="" /> 1
              <button class="compile">发布</button>
              <button class="delete">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="discuss" v-show="showdiscuss">
      <span class="top">评论（1）</span>
      <img src="./images/Vector 70.png" alt="" class="off">
      <div class="table">
        <img src="./images/image 66.png" alt="" class="user">
        <textarea name="" id="" cols="30" rows="10" class="">添加评论.....</textarea>
        <span class="smile">
          <img src="./images/smile.png" alt="">
        </span>
        <span class="put">发送</span>
      </div>
      <div class="comment">
        <img src="./images/user1.png" alt="" class="user1">
        <span class="username">哈哈哈</span><span class="time">2023-11-2 23:33</span>
        <div class="comment1">再加油就实现了</div>
        <button class="answer">回复</button>
        <div>
          <img src="./images/Group 248.png" alt="" class="good">
          <span class="number">1</span>
        </div>
      </div>
    </div>
    <div class="confidence" v-show="showconfidence">
      <div class="now">当前信心</div>
      <img src="./images/Vector 70.png" alt="" class="off">
      <input type="number" placeholder="1" class="percentage">
      <div class="update">更新说明</div>
      <textarea name="textarea" id="textarea" cols="30" rows="10" class="explain">请保持进度更新，相关合作者会关注哦~</textarea>
      <button class="agree">确认</button>
    </div>
    <div class="Container" v-show="showupdate">
      <div class="header">
          <h5>当前进度</h5>
          <img src="./images/Vector 70.png" alt="">
          <input class="schedule" placeholder="100">
          <div class="percent">%</div>
      </div>
      <div class="state">状态</div>
      <div class="bootstrap">
          <span class="normal"><img src="./images/Group 253.png" alt="">正常</span>
          <span class="risk"><img src="./images/Group 254.png" alt="">风险</span>
          <span class="postpone"><img src="./images/Group 255.png" alt="">延期</span>
      </div>
      <div class="declare">
          <h5>更新说明</h5>
          <textarea name="" id="" cols="30" rows="10">请保持进度更新，相关合作者会关注哦~ </textarea>
      </div>
      <button class="queren">确认</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "myOKR",
  data() {
    return {
      showdiscuss:false,
      showconfidence:false,
      showupdate:false,
      num:0
    }
  },
  methods: {
    controldiscuss(){
      this.showdiscuss=!this.showdiscuss
    },
    controlconfidence(){
      this.showconfidence=!this.showconfidence
    },
    controlupdate(){
      this.showupdate=!this.showupdate
    },
    addconfidence(){
      this.num++
    }
  },
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

.content .contentInfo {
  position: relative;
  width: 100%;
  height: 400px;
}

.content .UserID {
  position: absolute;
  height: 350px;
  width: 400px;
}

.UserID .ID {
  width: 158px;
  height: 37px;
  background-color: rgba(250, 198, 198, 0.5);
  border-radius: 30px;
  font-size: 14px;
  line-height: 37px;
  direction: rtl;
  margin-left: 40px;
  margin-top: 10px;
  text-align: center;
}

.UserID .ID1 {
  width: 158px;
  height: 37px;
  background-color: rgba(250, 198, 198, 0.5);
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  text-align: center;
  line-height: 37px;
  direction: rtl;
  margin-left: 40px;
}

.UserID .ID img {
  width: 37.76px;
  height: 35px;
  float: left;
  margin-left: 6px;
  margin-top: 1px;
}

.contentInfo .test {
  position: absolute;
  width: 839px;
  height: 600px;
  left: 214px;
  top: 120px;
}

.test .one {
  width: 700px;
  height: 180px;
  background-color: #fffdfb;
  border-radius: 20px;
  margin-top: 10px;
}
.oneHead .index {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #f9a21f;
}

.oneHead .tip {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #4a4848;
  margin-left: 15px;
}

.one .KR .index {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 45px;
}

.one .KR .tip {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 45px;
  color: black;
  margin-left: 15px;
}

.button1 {
  margin-left: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 45px;
  color: black;
}

.button2 {
  margin-left: 90px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 45px;
  color: black;
}

.button2 a {
  text-decoration: none;
}

.last {
  float: right;
  margin-top: 5px;
  height: 45px;
  width: 700px;
  padding-bottom: 5px;
  font-size: 20px;
}

.last img {
  vertical-align: middle;
  width: 31px;
  height: 30px;
  margin-left: 20px;
}

.last button {
  margin-right: 10px;
  float: right;
  width: 40px;
  height: 24px;
  color: #f1c69d;
  border-radius: 10px;
  border: #f1c69d solid 1px;
  background-color: #fff;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  box-shadow: 1px 2px 3px #808080;
}
.discuss {
  position: absolute;
  width: 450px;
  height: 458px;
  background-color: #ffffff;
  left: 977px;
  top: 100px;
  z-index: 2;
}

.top {
  width: 90px;
  height: 24px;
  margin-left: 14px;
  padding-top: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
}

.off {
  float: right;
  width: 14px;
  height: 14px;
  margin-right: 13px;
  margin-top: 8px;
}

.table {
  position: relative;
  width: 100%;
  height: 102px;
  margin-top: 15px;
}

.table .user {
  position: absolute;
  width: 39px;
  height: 39px;
  left: 20px;
  top: 0px;
}

.table textarea {
  width: 346px;
  height: 102px;
  position: absolute;
  left: 72px;
  background: #ffffff;
  border: 1px solid #dad9d9;
  border-radius: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
}

.smile {
  position: absolute;
  left: 95px;
  bottom: 0px;
}

.smile img {
  width: 17px;
  height: 16px;
}

.table .put {
  position: absolute;
  width: 39px;
  height: 17px;
  bottom: 6px;
  right: 50px;
  background: #ffffff;
  border: 1px solid #fdcd86;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 17px;
  text-align: center;
  color: #eeb887;
}

.comment {
  position: relative;
  width: 100%;
  height: 55px;
  margin-top: 23px;
}

.comment .user1 {
  width: 34px;
  height: 29px;
  position: absolute;
  top: 3px;
  left: 20px;
  border-radius: 24px;
}

.username {
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.84);
  left: 63px;
}

.time {
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.84);
  left: 130px;
}

.comment1 {
  position: absolute;
  width: 100px;
  height: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: rgba(0, 0, 0, 0.88);
  left: 63px;
  top: 21px;
}

.answer {
  position: absolute;
  width: 40px;
  height: 14px;
  border: 1px solid #fdcd86;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  left: 202px;
  top: 21px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #eeb887;
}

.good {
  position: absolute;
  width: 10px;
  height: 13px;
  left: 64.91px;
  top: 44px;
}

.number {
  position: absolute;
  left: 80px;
  top: 40px;
}
.confidence {
    position: relative;
    position: absolute;
    width: 450px;
    height: 347px;
    border: 1px solid black;
    left: 977px;
    background-color: #FFFFFF;
}

.now {
    width: 80px;
    height: 24px;
    margin-left: 18px;
    margin-top: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.72)
}
.off {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 13px;
    top: 8px;
}
.percentage {
    width: 94px;
    height: 38px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-left: 22px;
    margin-top: 5px;
    border: 1px solid #509ED7
}

.update {
    width: 80px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.72);
    margin-left: 22px;
    margin-top: 23px;
}

.explain {
    width: 407px;
    height: 140px;
    box-sizing: border-box;
    border: 1px solid #DAD9D9;
    background: #FFFFFF;
    margin-left: 27px;
    margin-top: 13px;
}

.agree {
    width: 76px;
    height: 36px;
    border-radius: 14px;
    background: #FFFFFF;
    border: 1px solid #FDCD86;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #EEB887;
    margin-left: 354px;
    margin-top: 11px;
}
.Container {
    position: relative;
    position: absolute;
    width: 450px;
    height: 458px;
    background-color: #fff;
    margin-left: 56px;
    margin-top: 67px;
    left: 922px;
    top: 59px;
}

li {
    list-style-type: none;
}

.header {
    position: relative;
    width: 232px;
}

.header h5 {
    width: 80px;
    height: 24px;
    position: absolute;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.72);
    left: 18px;
    top: 8px;
}

.header img {
    position: absolute;
    height: 14px;
    width: 14px;
    top: 8px;
    left: 423px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.schedule {
    position: absolute;
    top: 37px;
    left: 22px;
    width: 94px;
    height: 38px;
    border: 1px solid #509ED7;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 37px;
    color: #000000;
}

.percent {
    position: absolute;
    top: 37px;
    left: 116px;
    width: 38px;
    height: 38px;
    border: 1px solid rgba(172, 175, 177, 0.85);
    font-size: 14px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    color: rgba(0, 0, 0, 0.81);
    text-align: center;
}

.state {
    width: 40px;
    height: 24px;
    position: absolute;
    top: 108px;
    left: 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: rgba(0, 0, 0, 0.72);
}

.bootstrap {
    position: absolute;
    top: 138px;
    left: 18px;
    height: 18px;
    width: 100%;
}

.normal,
.risk,
.postpone {
    float: left;
    height: 10px;
    width: 78px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    vertical-align: top;
}

.declare h5 {
    position: absolute;
    top: 193px;
    left: 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.72);
    width: 80px;
    height: 24px;

}

.declare textarea {
    position: absolute;
    top: 230px;
    left: 23px;
    resize: none;
    width: 407px;
    height: 140px;
    background-color: #ffffff;
    border: 1px solid #DAD9D9;
    box-sizing: border-box;
}

.queren {
    position: absolute;
    width: 76px;
    height: 36px;
    left: 354px;
    top: 394px;
    color: #f1c69d;
    border-radius: 14px;
    border: #f1c69d solid 1px;
    background-color: #fff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #EEB887;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>