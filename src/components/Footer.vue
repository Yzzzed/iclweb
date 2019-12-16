<template>
  <div class="footer">
    <ul class="footer-list">
      <li class="footer-item" v-for="(item, index) of footerList" :key="index">
        <!-- <el-image :src="item.url" class="footer-item-img" fit="scale-down"></el-image> -->
        <img :src="item.url" class="footer-item-img" />
        <span class="footer-item-desc">{{item.desc}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import CON from '@/assets/imgs/CONFER.png'
// import DON from '@/assets/imgs/DON.png'
// import FOR from '@/assets/imgs/FOR.png'
// import NEW from '@/assets/imgs/NEW.png'
export default {
  name: 'Footer',
  data () {
    return {
      footerList: [
        {
          url: 'https://image.hyzed.cn/CONFER.png',
          desc: 'CONFERNCE DETAILS'
        },
        {
          url: 'https://image.hyzed.cn/NEW.png',
          desc: 'NEWSLETTER-SUBSCRIPTION'
        },
        {
          url: 'https://image.hyzed.cn/FOR.png',
          desc: 'FORWARDING'
        },
        {
          url: 'https://image.hyzed.cn/DON.png',
          desc: 'DOWNLOADS'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .footer
    // height 12.96rem
    background-color $mainColor
    .footer-list
      padding 0.185185rem /* 10/54 */
      display flex
      flex-wrap wrap
      justify-content space-around
      align-items center
      .footer-item
        color $fontColor
        display flex
        flex-direction column
        align-items center
        .footer-item-img
          width 1.666667rem /* 90/54 */
          height 1.666667rem /* 90/54 */
          object-fit scale-down
          padding 0.185185rem /* 10/54 */
          @media screen and (max-width: 976px)
            width 0.555556rem /* 30/54 */
            height 0.555556rem /* 30/54 */
        .footer-item-desc
          text-align center
          @media screen and (max-width: 766px)
            display none
</style>
