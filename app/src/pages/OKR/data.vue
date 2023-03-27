<template>
  <div class="content">
            <div class="top">
                <img src="./images/back.png" alt="">
            </div>
            <div class="data">
                <img src="./images/Group 298.png" alt="">
            </div>
        </div>
</template>

<script>
export default {
    name:'data'
}
</script>

<style scoped>
    .content {
            float: left;
            position: absolute;
            left: 284px;
            width: 1177px;
            height: 880px;
            border-radius: 21px;
            background: rgba(255, 249, 249, 0.8);
        }

        .content .top {
            position: relative;
            width: 1176px;
            height: 64px;
        }

        .content .top img {
            position: absolute;
            left: 36.3px;
            top: 17.07px;
            width: 50px;
            height: 36px;
        }
        .data img{
            margin-left: 41px;
        }
</style>