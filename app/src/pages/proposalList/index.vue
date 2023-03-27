<template>
  <div class="proposal">
            <div class="proposal1"></div>
            <div class="proposal2">
                <div class="proposal21">您所在的组织为投资型，他的投票类型是</div>
                <div class="proposal211">二次方投票</div>
                <div class="proposal22">您在该组织中拥有的代币数决定了您投票的的份额。</div>
            </div>
            <div class="proposal3">
                <div class="proposal31" @click="tocreateproposal">创建提案</div>
            </div>
            <div class="proposal4">
                <div class="proposal41">提案投票</div>
            </div>
            <div class="proposal5">提案</div>
            <div class="proposal6">
                <div class="proposal61" @click="toallproposal"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                <div class="proposal61"></div>
                
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        tocreateproposal(){
            this.$router.push("/createproposal")
        },
        toallproposal(){
            this.$router.push("/allproposal")
        }
    },
}
</script>

<style scoped>
            .proposal {
            position: absolute;
            width: 1059px;
            height: 854px;
            left: 226px;
            top: 128px;
            background: #FFFFFF;
            backdrop-filter: blur(2px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 36px;
        }
        .proposal1 {
            position: absolute;
            width: 50px;
            height: 55px;
            margin-left: 24px;
            margin-top: 10px;
            background: url(./images/image01.png);
        }
        .proposal2 {
            position: absolute;
            width: 609px;
            height: 81px;
            margin-left: 224px;
            margin-top: 28px;
            background: rgba(254, 218, 218, 0.78);
            border-radius: 45px;
        }
        .proposal21 {
            position: absolute;
            width: 414px;
            height: 22px;
            margin-left: 99px;
            margin-top: 14px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */
            color: #000000;
        }
        .proposal211 {
            position: absolute;
            width: 414px;
            height: 22px;
            margin-left: 425px;
            margin-top: 14px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */
            color: #2c56c0;
        }
        .proposal22 {
            position: absolute;
            width: 368px;
            height: 19px;
            margin-left: 125px;
            margin-top: 40px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #918E8E;
        }
        .proposal3 {
            box-sizing: border-box;
            /* Auto layout */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 14px 11px;
            gap: 10px;
            position: absolute;
            width: 116px;
            height: 49px;
            margin-left: 592px;
            margin-top: 140px;
            background: #FFFFFF;
            border: 1px solid #F3AAAA;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
        }
        .proposal31 {
            width: 80px;
            height: 24px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #F9A21F;
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }
        .proposal4 {
            box-sizing: border-box;
            /* Auto layout */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 14px 11px;
            gap: 10px;
            position: absolute;
            width: 116px;
            height: 49px;
            margin-left: 717px;
            margin-top: 140px;
            background: #FFFFFF;
            border: 1px solid #F3AAAA;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
        }
        .proposal41 {
            width: 80px;
            height: 24px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #F9A21F;
            flex: none;
            order: 0;
            flex-grow: 0;
        }
        .proposal5 {
            position: absolute;
            width: 56px;
            height: 34px;
            margin-left: 251px;
            margin-top: 193px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            /* identical to box height */
            color: rgba(0, 0, 0, 0.8);
        }
        .proposal6 {
            position: absolute;
            width: 683px;
            height: 629px;
            margin-left: 188px;
            margin-top: 224px;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(2px);
        }
        .proposal61 {
            width: 558px;
            height: 48px;
            margin-left: 63px;
            margin-top: 25px;
            background: url(./images/image\ 77.png) no-repeat;
            border-radius: 17px;
        }
</style>