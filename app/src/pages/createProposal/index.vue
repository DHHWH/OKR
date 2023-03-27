<template>
  <div class="part1">
            <div class="part101" @click="backproposal"></div>
            <div class="part102">Creat Proposal</div>
            <div class="part103">
                <div class="part104">提示：选择操作并描述您的提案。提案提交后不可修改，提交前请核对所有信息。投票期将立即开始。</div>
            </div>
            <div class="part2">
                <div class="part201">提案</div>
                <div class="part202">提案标题</div>
                <div class="part203"></div>
                <div class="part204">## SummaryInsert <br />your summary here <br />## MethodiologyInsert your
                    methodology here <br />## ConclusionInsert your conclusion here</div>
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
 .part1 {
            position: absolute;
            width: 1006px;
            height: 1602px;
            left: 253px;
            top: 123px;
            background: #FFFFFF;
            backdrop-filter: blur(2px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 36px;
        }

        .part101 {
            position: absolute;
            width: 55px;
            height: 55px;
            left: 29px;
            top: 0px;
            background: url(./images/image01.png);
        }

        .part102 {
            position: absolute;
            width: 168px;
            height: 29px;
            left: 426px;
            top: 16px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            color: rgba(0, 0, 0, 0.97);
        }

        .part103 {
            position: absolute;
            width: 859px;
            height: 47px;
            left: 79px;
            top: 64px;
            background: rgba(254, 218, 218, 0.78);
            border-radius: 23px;
        }

        .part104 {
            position: absolute;
            width: 810px;
            height: 22px;
            left: 34px;
            top: 12px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */
            color: #E75B5B;
        }

        .part2 {
            position: absolute;
            width: 872px;
            height: 790px;
            left: 68px;
            top: 136px;
            background: rgba(241, 237, 237, 0.76);
            border-radius: 28px;
        }

        .part201 {
            position: absolute;
            width: 32px;
            height: 19px;
            left: 25px;
            top: 20px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }

        .part202 {
            position: absolute;
            width: 64px;
            height: 19px;
            left: 25px;
            top: 50px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C0BCBC;
        }

        .part203 {
            position: absolute;
            width: 835.5px;
            height: 0px;
            left: 25px;
            top: 70.5px;
            border: 1px solid #000000;
        }

        .part204 {
            position: absolute;
            width: 364px;
            height: 76px;
            left: 25px;
            top: 84px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C0BCBC;
        }
</style>