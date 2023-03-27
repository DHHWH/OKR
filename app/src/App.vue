<template>
  <div class="body">
    <Header></Header>
    <OKRNav v-show="$route.meta.show"></OKRNav>
    <router-view></router-view>
  </div>
</template>

<script>
import  Header from '@/components/Header';
import OKRNav from '@/components/OKRNav'
export default {
  components:{
    Header,
    OKRNav
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  background: url("./assets/background.png") no-repeat;
<<<<<<< HEAD
  width: 1512px;
  overflow: hidden;
  height: 982px;
=======
  background-size: 100% 100%;
  width: 1512px;
  overflow: hidden;
  height: 1300px;
>>>>>>> 8abbc2d (hh)
  background-color: rgba(255, 250, 250, 0.75);
  position: relative;
  left: 0;
  top: 0;
}
</style>
