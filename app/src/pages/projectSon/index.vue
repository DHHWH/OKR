<template>
  <div>
            <div class="l">
                <div class="l-1">
                    <div class="text">名称</div>
                </div>
                <div class="l-2"></div>
                <div class="l-3">
                    <div class="l-3-left"></div>
                    <div class="l-3-middle">
                        nuild
                    </div>
                    <div class="l-3-right">
                        （哈哈哈）
                    </div>
                </div>
                <div class="l-4"></div>
            </div>
            <div class="m">
                <div class="m-up">市场需求调研</div>
                <div class="m-middle">
                    <div class="m-middle-1"></div>
                    <div class="m-middle-2">协作者:</div>
                    <div class="m-middle-3"></div>
                    <div class="m-middle-4">名称</div>
                </div>
                <div class="m-down-1">描述:</div>
                <div class="m-down-2">暂无</div>
                <div class="m-down-3">创建人:</div>
                <div class="m-down-4"></div>
                <div class="m-down-5">名称</div>
            </div>
            <div class="r">
                <div class="r-1">
                    <div class="scwj">上传文件</div>
                </div>
            </div>
            <div class="footer">
                <div class="footer-1">
                    <div class="fh" @click="backHome">返回</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"projectSon",
    methods: {
        backHome(){
            this.$router.push("/projecthome")
        }
    },
}
</script>

<style scoped>
    .l .l-1 .text {
            position: absolute;
            width: 48px;
            height: 29px;
            left: 71px;
            top: 112px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .l .l-2 {
            position: absolute;
            width: 777.03px;
            height: 0px;
            left: 71px;
            top: 163px;
            border: 1px solid #FFFFFF;
            border-radius: 8px;
            transform: rotate(0.52deg);
            background: url(./images/Vector\ 21.png);
        }

        .l .l-3 .l-3-left {
            position: absolute;
            width: 64px;
            height: 58px;
            left: 71px;
            top: 188px;
            background: url(./images/image\ 73.png);
        }

        .l .l-3 .l-3-middle {
            position: absolute;
            width: 55px;
            height: 29px;
            left: 153px;
            top: 206px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .l .l-3 .l-3-right {
            position: absolute;
            width: 120px;
            height: 29px;
            left: 208px;
            top: 206px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .l .l-4 {
            position: absolute;
            width: 777.01px;
            height: 0px;
            left: 71px;
            top: 268px;
            border: 1px solid #FFFFFF;
            border-radius: 8px;
            transform: rotate(0.22deg);
            background: url(./images/Vector\ 22.png);
        }

        .m .m-up {
            position: absolute;
            width: 144px;
            height: 29px;
            left: 950px;
            top: 111px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .m .m-middle .m-middle-1 {
            position: absolute;
            width: 219px;
            height: 142px;
            left: 950px;
            top: 163px;
            background: url(./images/image\ 74.png) no-repeat;
        }

        .m .m-middle .m-middle-2 {
            position: absolute;
            width: 96px;
            height: 29px;
            left: 1200px;
            top: 172px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .m .m-middle .m-middle-3 {
            position: absolute;
            width: 39px;
            height: 33px;
            left: 1209px;
            top: 213px;
            background: url(./images/image\ 75.png);
        }

        .m .m-middle .m-middle-4 {
            position: absolute;
            width: 40px;
            height: 24px;
            left: 1266px;
            top: 220px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
        }

        .m .m-down-1 {
            position: absolute;
            width: 72px;
            height: 29px;
            left: 950px;
            top: 328px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .m .m-down-2 {
            position: absolute;
            width: 40px;
            height: 24px;
            left: 992px;
            top: 366px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
        }

        .m .m-down-3 {
            position: absolute;
            width: 96px;
            height: 29px;
            left: 950px;
            top: 413px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: #000000;
        }

        .m .m-down-4 {
            position: absolute;
            height: 33px;
            width: 39px;
            left: 992px;
            top: 465px;
            background: url(./images/image\ 75.png);
        }

        .m .m-down-5 {
            position: absolute;
            width: 40px;
            height: 24px;
            left: 1049px;
            top: 472px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
        }

        .r .r-1 {
            box-sizing: border-box;
            position: absolute;
            width: 117px;
            height: 45px;
            left: 1373px;
            top: 95px;
            background: #FFFFFF;
            border: 1px solid #FFB4B4;
        }

        .r .r-1 .scwj {
            width: 100px;
            height: 29.51px;
            margin-left: 8px;
            margin-top: 7.38px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            color: #F9A21F;
        }

        .footer .footer-1 {
            box-sizing: border-box;
            position: absolute;
            width: 117px;
            height: 56px;
            left: 1341px;
            top: 891px;
            background: #FFFFFF;
            border: 1px solid #FFB4B4;
        }

        .footer .footer-1 .fh {
            width: 64px;
            height: 39px;
            margin-left: 26px;
            margin-top: 10px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 39px;
            /* identical to box height */
            color: #F9A21F;
        }
</style>