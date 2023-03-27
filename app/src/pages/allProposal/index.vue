<template>
  <div>
            <div class="Rectangle"></div>
            <div class="return" @click="backproposal">
                <img src="./images/image01.png" alt>
            </div>
            <div class="block1">所有提案</div>
            <div class="block2"></div>
            <div class="block3">Deploy Uniswap v3 on zkSync</div>
            <div class="block4">投票结束2022年10月13日GMT+8& 12:30</div>
            <div class="block5"></div>
            <div class="block5-1">赞成</div>
            <div class="block5-2">72,421,473/40,000,000</div>
            <div class="block5-3"></div>
            <div class="block6"></div>
            <div class="block6-1">反对</div>
            <div class="block6-2">120</div>
            <div class="block6-3"></div>
            <div class="block7">详细信息</div>
            <div class="block8"></div>
            <div class="block8-1">ENS Public Resolver</div>
            <div class="block8-2">
                1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                .setText(Oxa35d592ec6e5289a387cb a1d5f82be794f495bd5a361a1fb314687c6aefea1f4,Matter La bs Uni v3 Additional
                Use Grant, Matter Labs is granted an ad ditional use grant to use the Uniswap v3 Core software code (which
                is made available to Matter Labs subject to license av ailable at
                https://github.com/Uniswap/v3-core/blob/main/LIC ENSE (the “Uniswap Code")).As part of this additional use
                gra nt, Matter Labs receives license to use the Uniswap Code for the purposes of a full deployment of the
                Uniswap Protocol v3 onto the zkSync blockchain. Matter Labs is permitted to use s ubcontractors to do this
                work.This license is conditional on Ma tter Labs complying with the terms of the Business Source Lic ense
                1.1, made available at https:/lgithub.com/Uniswap/v3-core /blob/main/LICENSE.))
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        backproposal(){
            this.$router.push("/proposallist")
        }
    },
}
</script>

<style scoped>  
            .Rectangle {
            position: absolute;
            width: 1006px;
            height: 1602px;
            left: 253px;
            top: 128px;
            background: #FFFFFF;
            backdrop-filter: blur(2px);
            border-radius: 36px;

        }

        .return {
            position: absolute;
            width: 0px;
            height: 0px;
            left: 270px;
            top: 133px;
        }

        .block1 {
            position: absolute;
            width: 104px;
            height: 31px;
            left: 328px;
            top: 149px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 31px;
            color: #000000;
        }

        .block2 {
            position: absolute;
            width: 222px;
            height: 83px;
            left: 1010px;
            top: 128px;
            background: url(./images/image02.png);
        }

        .block3 {
            position: absolute;
            width: 572px;
            height: 48px;
            left: 329px;
            top: 203px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;
            color: #000000;
        }

        .block4 {
            position: absolute;
            width: 401px;
            height: 27px;
            left: 329px;
            top: 268px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            /* identical to box height */
            color: rgba(0, 0, 0, 0.73);
        }

        .block5 {
            position: absolute;
            width: 397px;
            height: 108px;
            left: 328px;
            top: 309px;
            background: rgba(217, 217, 217, 0.54);
            border-radius: 18px
        }

        .block5-1 {
            position: absolute;
            width: 44px;
            height: 27px;
            left: 351px;
            top: 336px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            /* identical to box height */
            color: #000000;
        }

        .block5-2 {
            position: absolute;
            width: 44px;
            height: 27px;
            left: 490px;
            top: 336px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: rgba(143 137 137);
        }

        .block5-3 {
            position: absolute;
            width: 351px;
            height: 5px;
            left: 353px;
            top: 386px;
            background: #36B134;
            border-radius: 48px;
        }

        .block6 {
            position: absolute;
            width: 397px;
            height: 108px;
            left: 756px;
            top: 309px;
            background: rgba(217, 217, 217, 0.49);
            border-radius: 18px;
        }

        .block6-1 {
            position: absolute;
            width: 44px;
            height: 27px;
            left: 778px;
            top: 331px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            /* identical to box height */
            color: #000000;
        }

        .block6-2 {
            position: absolute;
            width: 44px;
            height: 27px;
            left: 1083px;
            top: 331px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: rgba(143 137 137);
        }

        .block6-3 {
            position: absolute;
            width: 351px;
            height: 5px;
            left: 778px;
            top: 381px;

            background: rgba(0, 0, 0, 0.27);
            border-radius: 48px;
        }

        .block7 {
            position: absolute;
            width: 120px;
            height: 36px;
            left: 329px;
            top: 455px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 36px;
            color: #000000;
        }

        .block8-1 {
            position: absolute;
            width: 747px;
            height: 420px;
            left: 350px;
            top: 514px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            color: red;
        }

        .block8-2 {
            position: absolute;
            width: 747px;
            height: 420px;
            left: 329px;
            top: 514px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            color: rgba(0, 0, 0, 0.6);
            word-break: break-all;
        }
</style>