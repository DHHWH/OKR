<template>
  <div class="content">
            <div class="contentHead">
                <div class="c-logo">
                </div>
            </div>
            <div class="reg-login">
                <span>注册</span>
            </div>
            <div class="boxs">
                <img src="./images/user.png" alt="">
                <input type="text" >
            </div>
            <div class="boxs">
                <img src="./images/pwd.png" alt="">
                <input type="password" >
            </div>
            <div class="boxs">
                <img src="./images/phone.png" alt="">
                <input type="text" >
            </div>
            <div class="boxs">
                <img src="./images/verify.png" alt="" class="last">
                <input type="text">
                <span>获取验证码</span>
            </div>
            <div class="sure" @click="userRegister">
                确定
            </div>
            <div class="footer">
                登陆表示你同意该软件用户服务协议和隐私政策和隐私政策
            </div>
        </div>
</template>

<script>
export default {
    name:"Register",
    data() {
        return {
           
        }
    },
    methods: {
       userRegister(){
        this.$router.push("/login")
       }
    },
}
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
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #F5BCBC;
            border-bottom: 1px solid #000000;
        }

        .boxs {
            position: relative;
            width: 315px;
            height: 53px;
            margin-left: 91px;
            margin-top: 15px;
            border: 1px solid #000000;
        }

        .boxs img {
            width: 32px;
            height: 35px;
            margin-top: 9px;
            margin-left: 10px;
        }

        .boxs input {
            position: absolute;
            height: 22px;
            width: 116px;
            left: 60px;
            bottom: 13px;
            border: 0px;
        }

        .boxs span {
            display: inline-block;
            position: absolute;
            top: 0;
            right: 0;
            width: 133px;
            height: 51px;
            background: rgba(254, 218, 218, 0.69);
            border: 1px solid rgba(254, 218, 218, 0.42);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 51px;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
        }
        .sure {
            width: 156px;
            height: 52px;
            border-radius: 66px;
            background: rgba(255, 209, 209, 0.66);
            margin-top: 18px;
            margin-left: 164px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 52px;
            text-align: center;
            color: #FFFFFF;
        }
        .footer {
            width: 312px;
            height: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.59);
            margin-top: 53px;
            margin-left: 98px;
        }
</style>