<template>
  <div class="content">
    <div class="contentHead">
      <div class="c-logo"></div>
    </div>
    <div class="reg-login">
      <span>登陆</span>
    </div>
    <div class="loginUser">
      <div class="user">
        <img src="./images/user.png" alt="" />
        <input type="text" />
      </div>
      <div class="pwd">
        <img src="./images/pwd.png" alt="" />
        <input type="password" />
      </div>
    </div>
    <div class="noHave" @click="goRegister">没有账号？立即注册</div>
    <div class="forget">忘记密码</div>
    <div class="sure" @click="goHomePage">确定</div>
    <div class="three">第三方登录</div>
    <img src="./images/fox.png" alt="" class="fox" />
    <img src="./images/email (2).png" alt="" class="email" />
    <div class="footer">
      登陆表示你同意该软件用户服务协议和隐私政策和隐私政策
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    goRegister(){
        this.$router.push("/register")
    },
    goHomePage(){
      this.$router.push("/home")
    }
  },
};
</script>

<style scoped>
/* 内容部分 */
.content {
  width: 495px;
  height: 708px;
  margin: 49px auto;
  background-color: #ffffff;
}

.content .contentHead {
  position: relative;
  width: 495px;
  height: 215px;
  background: url("./images/registerBac.png") no-repeat;
}

.content .contentHead .c-logo {
  width: 75px;
  height: 70px;
  background: url("./images/registerlogo.png") no-repeat;
  position: absolute;
  left: 207.48px;
  top: 69.28px;
}

.content .reg-login {
  display: flex;
  width: 495px;
  height: 62px;
}

.content .reg-login span {
  flex: 1;
  line-height: 62px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #f5bcbc;
  border-bottom: 1px solid #000000;
}

.loginUser {
  width: 495px;
  height: 134px;
  margin-top: 22px;
}

.loginUser .user {
  position: relative;
  width: 249px;
  height: 67px;
  margin: 0 auto;
  border-bottom: 1px solid #000000;
}

.loginUser .user img {
  width: 32px;
  height: 35px;
  margin-top: 18px;
}

.loginUser .user input {
  position: absolute;
  height: 41px;
  left: 49px;
  bottom: 10px;
  border: 0px;
}

.loginUser .pwd {
  position: relative;
  width: 249px;
  height: 67px;
  margin: 0 auto;
  border-bottom: 1px solid #000000;
}

.loginUser .pwd img {
  width: 32px;
  height: 35px;
  margin-top: 18px;
}

.loginUser .pwd input {
  position: absolute;
  height: 41px;
  left: 49px;
  bottom: 10px;
  border: 0px;
}
.noHave {
  display: inline-block;
  width: 120px;
  height: 12px;
  margin-left: 120px;
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #000000;
}
.forget {
  display: inline-block;
  width: 50px;
  height: 12px;
  margin-left: 82px;
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #000000;
}

.sure {
  width: 156px;
  height: 52px;
  border-radius: 66px;
  background: rgba(255, 209, 209, 0.66);
  margin-top: 18px;
  margin-left: 164px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 52px;
  text-align: center;
  color: #ffffff;
}

.three {
  width: 60px;
  height: 12px;
  margin-top: 32px;
  margin-left: 215px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}

.fox {
  width: 55.91px;
  height: 50px;
  margin-left: 164px;
  margin-top: 9px;
}

.email {
  width: 55.91px;
  height: 50px;
  margin-left: 53.09px;
  margin-top: 9px;
}

.footer {
  width: 312px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.59);
  margin-top: 53px;
  margin-left: 98px;
}
</style>