<template>
  <div class="main">
            <div class="back"><img src="./images/back.png" alt="" @click="backsearch"></div>
            <div class="tab"></div>
            <div class="head"><img src="./images/image 114.png" alt=""></div>
            <div class="first">
                <span class="name fontsize a">哈哈哈</span>
                <span class="sex fontsize b">性别 ：性别</span>
                <span class="age fontsize b">年龄 ：年龄</span>
                <span class="email fontsize b">电子邮箱 ：邮箱号码 </span>
            </div>
            <div class="second">
                <img src="./images/image 105.png" alt="">
                <span class="intention fontsize a">求职意向</span>
                <div class="left fontsize b">
                    <p>意向岗位：求职岗位</p>
                    <p>期望薪资：期望薪水</p>
                </div>
                <div class="right fontsize b">
                    <p>意向地区：求职地区</p>
                    <p>求职类型：求职类型</p>
                </div>
            </div>
            <div class="third">
                <img src="./images/image 106.png" alt="">
                <span class="edu fontsize a">教育经历</span>
                <span class="time fontsize b">开始时间 - 结束时间</span>
                <span class="specific fontsize c">专业 - 学历</span>
                <span class="explain fontsize c">大学之前的教育经历建议不写，尽量写与求职行业或者求职岗位相关的课程，有交流交换的经验可以在教育经历中展示。
                    工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块。成绩优异则建议写上GPA
                    及排名等信息，尽量简洁。</span>
            </div>
            <div class="forth">
                <img src="./images/image 107.png" alt="">
                <span class="job fontsize a">工作经历</span>
                <span class="time fontsize b">开始时间 - 结束时间</span>
                <span class="position fontsize c">职位名称 - 行业</span>
                <span class="explain fontsize c ">详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，
                    将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，
                    尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。</span>
            </div>
            <div class="fifth">
                <img src="./images/image 108.png" alt=""><span class="project a">项目经历</span>
                <div class="one fontsize box" @click="todetail">项目名称</div>
                <div class="two fontsize box" @click="todetail">项目名称</div>
<<<<<<< HEAD
=======
                <button class="join-1">进入</button>
                <button class="join-2">进入</button>
            </div>
            <div class="myself">
                <div class="myselfs">自我评价</div>
                <div class="myText">
                    篇幅不要太长踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从
                </div>
>>>>>>> 8abbc2d (hh)
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        todetail(){
            this.$router.push("/projectdetail")
        },
        backsearch(){
            this.$router.push("/searchassits")
        }
    },
}
</script>

<style scoped>
    .main {
    position: absolute;
    width: 1016px;
    height: 1537px;
    left: 265px;
    top: 125px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
}
.main .a {
    font-size: 30px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.73);
}
.main .b {
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.78);
}
.main .c {
  font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.78);
}
.tab {
    position: absolute;
    left: 68px;
    width: 0px;
    height: 1205.5px;
    top: 2px;
    border: 1px solid #000000;
    transform: rotate(-0.14deg);
}

.back img {
    position: absolute;
    width: 28px;
    height: 29.38px;
    left: 15px;
    top: 12px;

}

.main .head img {
    position: absolute;
    width: 155px;
    height: 188px;
    left: 136px;
    top: 12px;

}

.name {
    position: absolute;
    height: 36px;
    left: 335px;
    top: 31px;
    
}

.sex {
    position: absolute;
    left: 339px;
    top: 92px;
    
}

.age {
    position: absolute;
    left: 636px;
    top: 92px;

}

.email {
    position: absolute;
    top: 141px;
    left: 339px;
}

.intention {
    position: absolute;
    left: 135px;
    top: 214.5px;
    
}

.main .left {
    position: absolute;
    left: 140px;
<<<<<<< HEAD
    top: 271.5px;
=======
    top: 242.5px;
>>>>>>> 8abbc2d (hh)
   
}

.main p {
    padding-top: 10px;
}

.main .right {
    position: absolute;
    left: 519px;
<<<<<<< HEAD
    top: 271.5px;
=======
    top: 242.5px;
>>>>>>> 8abbc2d (hh)
}

.edu {
    position: absolute;
    width: 120px;
    height: 36px;
    left: 135px;
    top: 368.5px;
}

.third .time {
    position: absolute;
    left: 141px;
    top: 416.5px;
}

.third .specific {
    position: absolute;
    left: 141px;
    top: 443.5px;
  
}

.third .explain {

    position: absolute;
    left: 141px;
    top: 473.5px;
}

.forth .job {
    top: 564.5px;
    position: absolute;
    left: 131px;
}

.forth .time {
    position: absolute;
    left: 139px;
    top: 611.5px;
}

.forth .position {
    position: absolute;
    left: 139px;
    top: 638.5px;
}
.forth .explain {
    position: absolute;
    width: 848px;
    height: 57px;
    left: 137px;
    top: 671.5px;

}

.fifth .project {
    position: absolute;
<<<<<<< HEAD

=======
>>>>>>> 8abbc2d (hh)
    left: 135px;
    top: 750.5px;
}
.fifth .box {
    width: 299px;
    height: 172px;
    background: #FFFFFF;
    font-size: 32px;
    line-height: 39px;
    color: #806FEA;
    text-align: center;

}
.fifth .one {
    position: absolute;
    left: 135px;
    top: 804.5px;
}

.fifth .two {
    position: absolute;
    left: 495px;
    top: 804.5px;

}

.second img {
    position: absolute;
    width: 48px;
    height: 43px;
    left: 46px;
    top: 216.5px;
    border-radius: 35px;
}

.third img {
    position: absolute;
    width: 43px;
    height: 41px;
    left: 48px;
    top: 365.5px;
    border-radius: 25px;
}

.forth img {
    position: absolute;
    width: 41px;
    height: 40px;
    left: 50px;
    top: 564.5px;
    border-radius: 25px;
}

.fifth img {
    position: absolute;
    width: 40px;
    height: 42px;
    left: 50px;
    top: 747.5px;
    border-radius: 28px;
}
<<<<<<< HEAD
=======
.join-1{
    position: absolute;
width: 100px;
height: 49px;
left: 229px;
top: 900px;
background: #FFFFFF;
border: 1px solid #F9A21F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 49px;
color: #F9A21F;
}
.join-2{
    position: absolute;
width: 100px;
height: 49px;
left: 593px;
top: 900px;
background: #FFFFFF;
border: 1px solid #F9A21F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 49px;
color: #F9A21F;
}
.myself{
    position: absolute;
    top: 1004px;
    left: 135px;
    width: 700px;
}
.myselfs{
   font-size: 30px;
}
.myText{
    margin-top: 10px;
    font-size: 16px;

}
>>>>>>> 8abbc2d (hh)
</style>