<template>
  <div>
<<<<<<< HEAD
    <div class="title">
            项目信息
        </div>
        <div class="box">
            <div class="c1">项目logo</div>
            <div class="c2" @click="showSubmit">
                <div class="c2-1"></div>
                <div class="c2-2"></div>
            </div>
            <div class="c3">
                <div class="c3-1">点击上传</div>
            </div>
            <div class="c4">仅支持JPG、GIF、PNG格式，文件小于5M。</div>
            <div class="d1">项目名称</div>
            <div class="d2">
                <input type="text" placeholder="简洁清晰，不多于50字" class="d2-1">
            </div>
            <div class="d3">提示：提交成功后，项目名称不可修改</div>
            <div class="d4">所在地</div>
            <div class="d5">
                <!-- <div class="d5-1">请选择国家</div>
                <div class="d5-2">∨</div> -->
                <select name="selectNation" id="" class="d5-1">
                    <option value="">中国</option>
                    <option value="">美国</option>
                    <option value="">俄罗斯</option>
                </select>
            </div>
            <div class="d6">所属领域</div>
            <div class="e1">
                <div class="e1-1">农、林、牧、渔业</div>
            </div>
            <div class="e2">
                <div class="e2-1">房地产业</div>
            </div>
            <div class="e3">
                <div class="e3-1">租赁和商务服务业</div>
            </div>
            <div class="e4">
                <div class="e4-1">水、电、热力、燃气生产及供应 建筑业</div>
            </div>
            <div class="e5">
                <div class="e5-1">批发和零售业</div>
            </div>
            <div class="e6">
                <div class="e6-1">交通运输、仓储和物流业</div>
            </div>
            <div class="e7">
                <div class="e7-1">水利、环境和公共设施管理</div>
            </div>
            <div class="e8">
                <div class="e8-1">信息技术服务业</div>
            </div>
            <div class="e9">
                <div class="e9-1">医疗和社会工作 文化、体育和娱乐业</div>
            </div>
            <div class="e10">
                <div class="e10-1">科学技术服务业</div>
            </div>
            <div class="e11">
                <div class="e11-1">住宿和餐饮业</div>
            </div>
            <div class="e12">
                <div class="e12-1">教育</div>
            </div>
            <div class="e13">
                <div class="e13-1">金融业</div>
            </div>
            <div class="e14">
                <div class="e14-1">采矿业</div>
            </div>
            <div class="e15">
                <div class="e15-1">制造业</div>
            </div>
            <div class="e16">
                <div class="e16-1"> 居民服务、修理和其他服务业</div>
            </div>
            <div class="e17">
                <div class="e17-1">批发和零售业</div>
            </div>
            <div class="e18">
                <div class="e18-1">沉淀项目库</div>
            </div>
            <div class="d7">项目概述</div>
            <div class="f">
                <div class="f-1">不少于100字，不多于1000字。</div>
            </div>
        </div>
    <div class="container1" v-show="submit" @click="toProjectHome">
        提交成功
=======
    <div class="title">项目信息</div>
    <div class="box">
      <div class="c1">项目logo</div>
      <div class="c2" @click="showSubmit">
        <div class="c2-1"></div>
        <div class="c2-2"></div>
      </div>
      <div class="c3">
        <div class="c3-1">点击上传</div>
      </div>
      <div class="c4">仅支持JPG、GIF、PNG格式，文件小于5M。</div>
      <div class="d1">项目名称</div>
      <div class="d2">
        <input type="text" placeholder="简洁清晰，不多于50字" class="d2-1" />
      </div>
      <div class="d3">提示：提交成功后，项目名称不可修改</div>
      <div class="d4">所在地</div>
      <div class="d5">
        <!-- <div class="d5-1">请选择国家</div>
                <div class="d5-2">∨</div> -->
        <select name="selectNation" id="" class="d5-1">
          <option value="">中国</option>
          <option value="">美国</option>
          <option value="">俄罗斯</option>
        </select>
      </div>
      <div class="d6">所属领域</div>
      <div class="e1">
        <div class="e1-1">农、林、牧、渔业</div>
      </div>
      <div class="e2">
        <div class="e2-1">房地产业</div>
      </div>
      <div class="e3">
        <div class="e3-1">租赁和商务服务业</div>
      </div>
      <div class="e4">
        <div class="e4-1">水、电、热力、燃气生产及供应 建筑业</div>
      </div>
      <div class="e5">
        <div class="e5-1">批发和零售业</div>
      </div>
      <div class="e6">
        <div class="e6-1">交通运输、仓储和物流业</div>
      </div>
      <div class="e7">
        <div class="e7-1">水利、环境和公共设施管理</div>
      </div>
      <div class="e8">
        <div class="e8-1">信息技术服务业</div>
      </div>
      <div class="e9">
        <div class="e9-1">医疗和社会工作 文化、体育和娱乐业</div>
      </div>
      <div class="e10">
        <div class="e10-1">科学技术服务业</div>
      </div>
      <div class="e11">
        <div class="e11-1">住宿和餐饮业</div>
      </div>
      <div class="e12">
        <div class="e12-1">教育</div>
      </div>
      <div class="e13">
        <div class="e13-1">金融业</div>
      </div>
      <div class="e14">
        <div class="e14-1">采矿业</div>
      </div>
      <div class="e15">
        <div class="e15-1">制造业</div>
      </div>
      <div class="e16">
        <div class="e16-1">居民服务、修理和其他服务业</div>
      </div>
      <div class="e17">
        <div class="e17-1">批发和零售业</div>
      </div>
      <div class="e18">
        <div class="e18-1">沉淀项目库</div>
      </div>
      <div class="d7">项目概述</div>
      <textarea class="f" placeholder="不少于100字，不多于1000字。"></textarea>
      <div class="projectInfo">
        <span class="projectText">项目概述</span>
        <el-radio-group v-model="radio" class="radio-1">
          <el-radio :label="3" class="radio-text">创意计划阶段</el-radio>
          <el-radio :label="6" class="radio-text">已注册公司运营</el-radio>
          <el-radio :label="9" class="radio-text">已注册社会组织</el-radio>
        </el-radio-group>
      </div>
      <div class="pravite">
        <span class="pravite-1">隐私设置</span>
        <span class="radio-p"> 
          <el-radio v-model="radios" label="1">保密</el-radio>
          <el-radio v-model="radios" label="2">向投资人公开</el-radio>
      </span>
      </div>
      <div class="projectTip">
        <span class="tips">项目计划书</span>
        <button class="selectInfo">选择文件</button>
      </div>
      <button class="save">保存</button>
      <button class="submits">提交</button>
    </div>
      
    <div class="container1" v-show="submit" @click="toProjectHome">
      提交成功
>>>>>>> 8abbc2d (hh)
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
    name:"createProject",
    data() {
        return {
            submit:false
        }
    },
    methods: {
        showSubmit(){
            this.submit = !this.submit
        },
        toProjectHome(){
            this.$router.push("/projecthome")
        }
    },
=======
  name: "createProject",
  data() {
    return {
      submit: false,
      radio:3,
      radios:1
    };
  },
  methods: {
    showSubmit() {
      this.submit = !this.submit;
    },
    toProjectHome() {
      this.$router.push("/projecthome");
    },
  },
>>>>>>> 8abbc2d (hh)
};
</script>

<style scoped>
<<<<<<< HEAD
        .title {
            position: absolute;
            width: 160px;
            height: 48px;
            left: 118px;
            top: 89px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;
            color: #FEF2F2;
        }

        .box {
            position: absolute;
            width: 1235px;
            height: 824px;
            left: 118px;
            top: 158px;
            background: #FEF5F5;
        }

        .box .c1 {
            position: absolute;
            width: 105px;
            height: 29px;
            margin-left: 34.17px;
            margin-top: 13.95px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }
        
        .box .c2 {
            position: absolute;
            width: 163px;
            height: 135px;
            margin-left: 160px;
            margin-top: 21.25px;
            background: rgba(217, 217, 217, 0.81);
        }

        .box .c2 .c2-1 {
            position: absolute;
            width: 52.01px;
            height: 2.84px;
            margin-left: 55px;
            margin-top: 65px;
            background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
            transform: matrix(-0.01, -1, 1, -0.01, 0, 0);
        }

        .box .c2 .c2-2 {
            position: absolute;
            width: 54px;
            height: 2.74px;
            margin-left: 53px;
            margin-top: 65px;
            background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
        }

        .box .c3 {
            box-sizing: border-box;
            position: absolute;
            width: 118px;
            height: 47px;
            margin-left: 345px;
            margin-top: 101.25px;
            background: #FFFFFF;
            border: 1px solid #F9C0C0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
        }

        .box .c3 .c3-1 {
            position: absolute;
            width: 96px;
            height: 29px;
            margin-left: 11px;
            margin-top: 9px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #F9A21F;
        }

        .box .c4 {
            position: absolute;
            width: 323px;
            height: 19px;
            margin-left: 475px;
            margin-top: 130.25px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #AA9F9F;
        }

        .box .d1 {
            position: absolute;
            width: 96px;
            height: 29px;
            margin-left: 34.17px;
            margin-top: 185.95px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .box .d2 {
            position: absolute;
            width: 549px;
            height: 55px;
            margin-left: 161.17px;
            margin-top: 184.95px;
            background: #FFFFFF;
        }

        .box .d2 .d2-1 {
            width: 164px;
            height: 19px;
            margin-left: 6px;
            margin-top: 18px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #AA9F9F;
            border: 0px;
        }

        .box .d3 {
            position: absolute;
            width: 272px;
            height: 19px;
            margin-left: 723.17px;
            margin-top: 217.95px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #5F4CD7;
        }

        .box .d4 {
            position: absolute;
            width: 72px;
            height: 29px;
            margin-left: 34.17px;
            margin-top: 261.95px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .box .d5 {
            position: absolute;
            width: 209px;
            height: 44px;
            margin-left: 161.17px;
            margin-top: 275.95px;
            background: #FFFFFF;
        }

        .box .d5 .d5-1 {
            position: absolute;
            width: 90px;
            height: 26px;
            margin-left: 6px;
            margin-top: 14px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #AA9F9F;
        }

        .box .d5 .d5-2 {
            width: 17px;
            height: 13.5px;
            margin-left: 179px;
            margin-top: 14px;
        }

        .box .d6 {
            position: absolute;
            width: 96px;
            height: 29px;
            margin-left: 34.17px;
            margin-top: 337.95px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .box .e1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 227.09px;
            height: 49px;
            margin-left: 160.97px;
            margin-top: 335.25px;
            background: #FFFFFF;
        }

        .box .e1 .e1-1 {
            width: 192px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 133.93px;
            height: 49px;
            margin-left: 404.56px;
            margin-top: 335.25px;
            background: #FFFFFF;
        }

        .box .e2 .e2-1 {
            width: 96px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e3 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 227.09px;
            height: 49px;
            margin-left: 543.34px;
            margin-top: 335.25px;
            background: #FFFFFF;
        }

        .box .e3 .e3-1 {
            width: 192px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e4 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 443.51px;
            height: 49px;
            margin-left: 775.29px;
            margin-top: 335.25px;
            background: #FFFFFF;
        }

        .box .e4 .e4-1 {
            width: 417px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e5 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 180.51px;
            height: 49px;
            margin-left: 160.97px;
            margin-top: 404.3px;
            background: #FFFFFF;
        }

        .box .e5 .e5-1 {
            width: 144px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e6 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 296.97px;
            height: 49px;
            margin-left: 357.98px;
            margin-top: 404.3px;
            background: #FFFFFF;
        }

        .box .e6 .e6-1 {
            width: 264px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e7 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 320.26px;
            height: 49px;
            margin-left: 671.45px;
            margin-top: 404.3px;
            background: #FFFFFF;
        }

        .box .e7 .e7-1 {
            width: 288px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e8 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 203.8px;
            height: 49px;
            margin-left: 1006.26px;
            margin-top: 404.3px;
            background: #FFFFFF;
        }

        .box .e8 .e8-1 {
            width: 168px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e9 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 420.22px;
            height: 49px;
            margin-left: 160px;
            margin-top: 473.3px;
            background: #FFFFFF;
        }

        .box .e9 .e9-1 {
            width: 393px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e10 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 203.8px;
            height: 49px;
            margin-left: 602.54px;
            margin-top: 473.3px;
            background: #FFFFFF;
        }

        .box .e10 .e10-1 {
            width: 168px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e11 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 180.51px;
            height: 49px;
            margin-left: 828.66px;
            margin-top: 473.3px;
            background: #FFFFFF;
        }

        .box .e11 .e11-1 {
            width: 144px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e12 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 87.34px;
            height: 49px;
            margin-left: 1031.49px;
            margin-top: 473.3px;
            background: #FFFFFF;
        }

        .box .e12 .e12-1 {
            width: 48px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e13 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 100px;
            height: 49px;
            margin-left: 1134.37px;
            margin-top: 473.3px;
            background: #FFFFFF;
        }

        .box .e13 .e13-1 {
            width: 72px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e14 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 110.64px;
            height: 49px;
            margin-left: 160px;
            margin-top: 542.3px;
            background: #FFFFFF;
        }

        .box .e14 .e14-1 {
            width: 72px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e15 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 110.64px;
            height: 49px;
            margin-left: 291.99px;
            margin-top: 542.3px;
            background: #FFFFFF;
        }

        .box .e15 .e15-1 {
            width: 72px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e16 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 350.34px;
            height: 49px;
            margin-left: 426.88px;
            margin-top: 542.3px;
            background: #FFFFFF;
        }

        .box .e16 .e16-1 {
            width: 319px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e17 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 180.51px;
            height: 49px;
            margin-left: 795.67px;
            margin-top: 542.3px;
            background: #FFFFFF;
        }

        .box .e17 .e17-1 {
            width: 144px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .box .e18 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            width: 157.22px;
            height: 49px;
            margin-left: 1007.23px;
            margin-top: 542.3px;
            background: #FFFFFF;
        }

        .box .e18 .e18-1 {
            width: 120px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }
        .box .d7 {
            position: absolute;
            width: 96px;
            height: 29px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
            margin-left: 34.17px;
            margin-top: 611.95px;
        }

        .box .f {
            position: absolute;
            width: 825px;
            height: 438px;
            margin-left: 162.17px;
            margin-top: 616.95px;
            background: #FFFFFF;
        }

        .box .f .f-1 {
            position: absolute;
            width: 227px;
            height: 19px;
            margin-left: 14px;
            margin-top: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #AA9F9F;
        }
        .container1 {
            width: 364px;
            height: 191px;
            background: #FFFFFF;
            border: 1px solid #000000;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 191px;
            text-align: center;
            color: #000000;
            position: absolute;
            left: 628px;
            top: 395px;
        }
=======
.title {
  position: absolute;
  width: 160px;
  height: 48px;
  left: 118px;
  top: 89px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fef2f2;
}

.box {
  position: absolute;
  width: 1235px;
  height: 1200px;
  left: 118px;
  top: 158px;
  background: #fef5f5;
}

.box .c1 {
  position: absolute;
  width: 105px;
  height: 29px;
  margin-left: 34.17px;
  margin-top: 13.95px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}

.box .c2 {
  position: absolute;
  width: 163px;
  height: 135px;
  margin-left: 160px;
  margin-top: 21.25px;
  background: rgba(217, 217, 217, 0.81);
}

.box .c2 .c2-1 {
  position: absolute;
  width: 52.01px;
  height: 2.84px;
  margin-left: 55px;
  margin-top: 65px;
  background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  transform: matrix(-0.01, -1, 1, -0.01, 0, 0);
}

.box .c2 .c2-2 {
  position: absolute;
  width: 54px;
  height: 2.74px;
  margin-left: 53px;
  margin-top: 65px;
  background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
}

.box .c3 {
  box-sizing: border-box;
  position: absolute;
  width: 118px;
  height: 47px;
  margin-left: 345px;
  margin-top: 101.25px;
  background: #ffffff;
  border: 1px solid #f9c0c0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.box .c3 .c3-1 {
  position: absolute;
  width: 96px;
  height: 29px;
  margin-left: 11px;
  margin-top: 9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #f9a21f;
}

.box .c4 {
  position: absolute;
  width: 323px;
  height: 19px;
  margin-left: 475px;
  margin-top: 130.25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #aa9f9f;
}

.box .d1 {
  position: absolute;
  width: 96px;
  height: 29px;
  margin-left: 34.17px;
  margin-top: 185.95px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}

.box .d2 {
  position: absolute;
  width: 549px;
  height: 55px;
  margin-left: 161.17px;
  margin-top: 184.95px;
  background: #ffffff;
}

.box .d2 .d2-1 {
  width: 164px;
  height: 19px;
  margin-left: 6px;
  margin-top: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #aa9f9f;
  border: 0px;
}

.box .d3 {
  position: absolute;
  width: 272px;
  height: 19px;
  margin-left: 723.17px;
  margin-top: 217.95px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #5f4cd7;
}

.box .d4 {
  position: absolute;
  width: 72px;
  height: 29px;
  margin-left: 34.17px;
  margin-top: 261.95px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}

.box .d5 {
  position: absolute;
  width: 209px;
  height: 44px;
  margin-left: 161.17px;
  margin-top: 275.95px;
  background: #ffffff;
}

.box .d5 .d5-1 {
  position: absolute;
  width: 90px;
  height: 26px;
  margin-left: 6px;
  margin-top: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #aa9f9f;
}

.box .d5 .d5-2 {
  width: 17px;
  height: 13.5px;
  margin-left: 179px;
  margin-top: 14px;
}

.box .d6 {
  position: absolute;
  width: 96px;
  height: 29px;
  margin-left: 34.17px;
  margin-top: 337.95px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}

.box .e1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 227.09px;
  height: 49px;
  margin-left: 160.97px;
  margin-top: 335.25px;
  background: #ffffff;
}

.box .e1 .e1-1 {
  width: 192px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 133.93px;
  height: 49px;
  margin-left: 404.56px;
  margin-top: 335.25px;
  background: #ffffff;
}

.box .e2 .e2-1 {
  width: 96px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 227.09px;
  height: 49px;
  margin-left: 543.34px;
  margin-top: 335.25px;
  background: #ffffff;
}

.box .e3 .e3-1 {
  width: 192px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 443.51px;
  height: 49px;
  margin-left: 775.29px;
  margin-top: 335.25px;
  background: #ffffff;
}

.box .e4 .e4-1 {
  width: 417px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e5 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 180.51px;
  height: 49px;
  margin-left: 160.97px;
  margin-top: 404.3px;
  background: #ffffff;
}

.box .e5 .e5-1 {
  width: 144px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e6 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 296.97px;
  height: 49px;
  margin-left: 357.98px;
  margin-top: 404.3px;
  background: #ffffff;
}

.box .e6 .e6-1 {
  width: 264px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e7 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 320.26px;
  height: 49px;
  margin-left: 671.45px;
  margin-top: 404.3px;
  background: #ffffff;
}

.box .e7 .e7-1 {
  width: 288px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e8 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 203.8px;
  height: 49px;
  margin-left: 1006.26px;
  margin-top: 404.3px;
  background: #ffffff;
}

.box .e8 .e8-1 {
  width: 168px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e9 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 420.22px;
  height: 49px;
  margin-left: 160px;
  margin-top: 473.3px;
  background: #ffffff;
}

.box .e9 .e9-1 {
  width: 393px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e10 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 203.8px;
  height: 49px;
  margin-left: 602.54px;
  margin-top: 473.3px;
  background: #ffffff;
}

.box .e10 .e10-1 {
  width: 168px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e11 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 180.51px;
  height: 49px;
  margin-left: 828.66px;
  margin-top: 473.3px;
  background: #ffffff;
}

.box .e11 .e11-1 {
  width: 144px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e12 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 87.34px;
  height: 49px;
  margin-left: 1031.49px;
  margin-top: 473.3px;
  background: #ffffff;
}

.box .e12 .e12-1 {
  width: 48px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e13 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100px;
  height: 49px;
  margin-left: 1134.37px;
  margin-top: 473.3px;
  background: #ffffff;
}

.box .e13 .e13-1 {
  width: 72px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e14 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 110.64px;
  height: 49px;
  margin-left: 160px;
  margin-top: 542.3px;
  background: #ffffff;
}

.box .e14 .e14-1 {
  width: 72px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e15 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 110.64px;
  height: 49px;
  margin-left: 291.99px;
  margin-top: 542.3px;
  background: #ffffff;
}

.box .e15 .e15-1 {
  width: 72px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e16 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 350.34px;
  height: 49px;
  margin-left: 426.88px;
  margin-top: 542.3px;
  background: #ffffff;
}

.box .e16 .e16-1 {
  width: 319px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e17 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 180.51px;
  height: 49px;
  margin-left: 795.67px;
  margin-top: 542.3px;
  background: #ffffff;
}

.box .e17 .e17-1 {
  width: 144px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.box .e18 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 157.22px;
  height: 49px;
  margin-left: 1007.23px;
  margin-top: 542.3px;
  background: #ffffff;
}

.box .e18 .e18-1 {
  width: 120px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.box .d7 {
  position: absolute;
  width: 96px;
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
  margin-left: 34.17px;
  margin-top: 611.95px;
}

.box .f {
  position: absolute;
  width: 825px;
  height: 200px;
  margin-left: 162.17px;
  margin-top: 616.95px;
  background: #ffffff;
}

.box .f .f-1 {
  position: absolute;
  width: 227px;
  height: 19px;
  margin-left: 14px;
  margin-top: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #aa9f9f;
}
.container1 {
  width: 364px;
  height: 191px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 191px;
  text-align: center;
  color: #000000;
  position: absolute;
  left: 628px;
  top: 395px;
}
.box .projectInfo{
  position: absolute;
  top: 843px;
  left: 34.17px;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

}
.box .radio-1{
  margin-left: 50px;
}
.box .radio-1 .radio-text{
  font-size: 20px !important;
  font-weight:400px !important;
}
.pravite{
  position: absolute;
  top: 900px;
  left: 34.17px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
}
.radio-p{
  margin-left: 50px;
  font-size: 20px;
}
.projectTip{
  position: absolute;
  top: 960px;
  left: 34.17px;
}
.tips{
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
}
.selectInfo{
  margin-left: 50px;
  width: 200px;
height: 47px;
left: 328px;
top: 291px;
background: #FFFCFC;
border: 1px solid #F9A21F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 47px;
color: #F9A21F;
}
.save{
  position: absolute;
width: 123px;
height: 59px;
left: 914px;
top: 1050px;
background: #FFFFFF;
border: 1px solid #F9A21F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 59px;
color: #F9A21F;
}
.submits{
  position: absolute;
width: 123px;
height: 59px;
left: 1050px;
top: 1050px;
background: #FFFFFF;
border: 1px solid #F9A21F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 59px;
color: #F9A21F;
}
>>>>>>> 8abbc2d (hh)
</style>