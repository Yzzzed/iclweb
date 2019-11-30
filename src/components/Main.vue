<template>
  <div class="main">
    <div class="bg">
      <!-- <el-image :src="bgURL" fit="fill" class="main-img"></el-image> -->
      <!-- <el-image :src="logoURL" class="main-logo"></el-image> -->
      <img :src="bgURL" class="main-img" />
    </div>
  </div>
</template>

<script>
import bgImg from '@/assets/imgs/bg2.png'
export default {
  name: 'Main',
  data () {
    return {
      bgURL: bgImg
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main
    margin 0.277778rem /* 15/54 */ auto
    .bg
      position relative
      display flex
      justify-content flex-start
      align-items center
      .main-img
        width 100%
        // height 100%
</style>
