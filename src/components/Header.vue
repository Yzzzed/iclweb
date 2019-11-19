<template>
  <div>
    <div class="header">
      <el-menu
        class="el-menu-container"
        mode="horizontal"
        background-color="#003d8f"
        text-color="#fff"
        active-text-color="#fff"
        router
      >
        <el-menu-item index="/">
          <div class="item-imgs">
            <el-image :src="homeURL" fit="scale-down"></el-image>
          </div>
        </el-menu-item>
        <el-submenu index="/about">
          <template slot="title">GENERAL INFORMATIONS</template>
          <el-menu-item index="/about">About ICL</el-menu-item>
          <el-menu-item index="/topics">Topics</el-menu-item>
          <el-menu-item index="/venue">Venue</el-menu-item>
          <el-menu-item index="/important">Important Dates</el-menu-item>
        </el-submenu>
        <el-menu-item index="/invited">INVITED SPEAKERS</el-menu-item>
        <el-menu-item index="/abstract">ABSTRACT</el-menu-item>
        <el-menu-item index="/registration">REGISTRATION</el-menu-item>
        <el-submenu index="/conference">
          <template slot="title">PROGRAM</template>
          <el-menu-item index="/conference">Conference Program</el-menu-item>
          <el-menu-item index="/social">Social Event</el-menu-item>
          <el-menu-item index="banquet">Banquet</el-menu-item>
        </el-submenu>
        <el-submenu index="/hotel">
          <template slot="title">ACCOMMODATION</template>
          <el-menu-item index="/hotel">Hotel Accommodation</el-menu-item>
          <el-menu-item index="/access">Access Information</el-menu-item>
        </el-submenu>
        <el-menu-item index="/sponsorship">SPONSORSHIP</el-menu-item>
        <el-menu-item index="/committees">COMMITTEES</el-menu-item>
        <el-menu-item index="/">
          <div class="item-imgs">
            <el-image :src="envpURL" fit="cover"></el-image>
          </div>
        </el-menu-item>
      </el-menu>
      <i class="el-icon-menu" @click="drawer = !drawer"></i>
    </div>
    <el-drawer title="ICL2020" :visible.sync="drawer" direction="ltr" :size="size">
      <el-menu
        class="el-menu-icon-container"
        mode="horizontal"
        background-color="#003d8f"
        text-color="#fff"
        active-text-color="#fff"
        :unique-opened="true"
        router
      >
        <el-menu-item index="/">
          <div class="item-imgs">
            <el-image :src="homeURL" fit="scale-down"></el-image>
          </div>
        </el-menu-item>
        <el-menu-item index="/">
          <div class="item-imgs">
            <el-image :src="envpURL" fit="cover"></el-image>
          </div>
        </el-menu-item>
      </el-menu>
      <el-menu
        default-active="0"
        class="el-menu-container"
        background-color="#003d8f"
        text-color="#fff"
        active-text-color="#fff"
        :unique-opened="true"
        router
      >
        <el-submenu index="/about">
          <template slot="title">GENERAL INFORMATIONS</template>
          <el-menu-item index="/about">About ICL</el-menu-item>
          <el-menu-item index="/topics">Topics</el-menu-item>
          <el-menu-item index="/venue">Venue</el-menu-item>
          <el-menu-item index="/important">Important Dates</el-menu-item>
        </el-submenu>
        <el-menu-item index="/invited">INVITED SPEAKERS</el-menu-item>
        <el-menu-item index="abstract">ABSTRACT</el-menu-item>
        <el-menu-item index="/registration">REGISTRATION</el-menu-item>
        <el-submenu index="/conference">
          <template slot="title">PROGRAM</template>
          <el-menu-item index="/conference">Conference Program</el-menu-item>
          <el-menu-item index="/social">Social Event</el-menu-item>
          <el-menu-item index="/banquet">Banquet</el-menu-item>
        </el-submenu>
        <el-submenu index="/hotel">
          <template slot="title">ACCOMMODATION</template>
          <el-menu-item index="/hotel">Hotel Accommodation</el-menu-item>
          <el-menu-item index="/access">Access Information</el-menu-item>
        </el-submenu>
        <el-menu-item index="/sponsorship">SPONSORSHIP</el-menu-item>
        <el-menu-item index="/committees">COMMITTEES</el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import homeImg from '@/assets/imgs/主页.png'
import envpImg from '@/assets/imgs/信封.png'
export default {
  name: 'Header',
  data () {
    return {
      size: '65%',
      drawer: false,
      homeURL: homeImg,
      envpURL: envpImg,
      headerNavList: [
        'GENERAL INFORMATIONS',
        'INVITED SPEAKERS',
        'ABSTRACT',
        'REGISTRATION',
        'PROGRAM',
        'ACCOMMODATION',
        'SPONSORSHIP',
        'COMMITTEES'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height 1.111111rem /* 60/54 */
    background-color $mainColor
    @media screen and (max-width: 1176px)
      padding 0 0.37037rem /* 20/54 */
      display flex
      flex-direction flex-start
    .el-icon-menu
      color #fff
      display none
      @media screen and (max-width: 1176px)
        display flex
        align-items center
        font-size 0.37037rem /* 20/54 */
    .el-menu-container
      display flex
      justify-content center
      flex-wrap nowrap
      @media screen and (max-width: 1176px)
        display none
      .item
        padding 0.185185rem /* 10/54 */ 0
        margin 0 0.185185rem /* 10/54 */
        font-size 0.259259rem /* 14/54 */
        color $fontColor
        text-align center
        cursor pointer
        .el-icon-arrow-down
          font-size 0.222222rem /* 12/54 */
  .el-menu-icon-container
    display flex
    justify-content space-around
  .el-menu-icon-container>>>.el-menu-item
    flex 1
    display flex
    justify-content center
  >>>.el-menu-item
    display flex
    align-items center
  >>>.el-image
    display flex
    align-items center
  >>>.el-menu
    border-right none
  >>>.el-menu.el-menu--horizontal
    border-bottom none
  >>>.el-submenu__title, .el-menu-item
    padding 0 0.185185rem /* 10/54 */
  >>>.el-drawer__header>:first-child
    color #fff
  >>>.el-icon-close
    color #fff
  >>>.el-drawer__header
    margin-bottom 0.37037rem /* 20/54 */
  >>>.el-drawer
    background #003d8f
    color #fff
    .icon-container
      display flex
      padding 0.37037rem /* 20/54 */
    .item-imgs
      box-sizing border-box
      width 50%
      display flex
      justify-content center
      .icon-imgs
        @media screen and (max-width: 766px)
          width 0.740741rem /* 40/54 */
          height 0.740741rem /* 40/54 */
    .list
      display flex
      flex-direction column
      .item
        padding 0.185185rem /* 10/54 */
        text-align center
        font-size 0.37037rem /* 20/54 */
</style>
