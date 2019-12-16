<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Welcome</template>
      <template slot="section-main">
        <p
          class="slot-item"
        >We enthusiastically invite you to attend the 19th International Conference on Luminescence (ICL2020)</p>
        <p class="slot-item">in Changchun, China, August 10─14, 2020.</p>
        <p
          class="slot-item"
        >The conference will be held at South Lake Hotel (3798 Nanhu Rd, Changchun, 130022, China)</p>
        <p class="slot-item">We are looking forward to meeting you in Changchun!</p>
        <el-image :src="ICLimg" fit="cover" class="slot-img"></el-image>
        <div class="slot-btns">
          <router-link :to="'/important'" class="btn-link">
            <el-button round class="btn-item">IMPORTANT DATES</el-button>
          </router-link>
          <router-link :to="'/abstract'" class="btn-link">
            <el-button round class="btn-item">ABSTRACT</el-button>
          </router-link>
          <router-link :to="'/registration'" class="btn-link">
            <el-button round class="btn-item">REGISTRATION</el-button>
          </router-link>
        </div>
      </template>
    </Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Section from '@/components/Section'
// import imgURL from '@/assets/imgs/img01.jpg'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Main,
    Section
  },
  data () {
    return {
      ICLimg: 'https://image.hyzed.cn/img01.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    display flex
    flex-direction column
    justify-content flex-start
  .slot-item
    padding 0.185185rem /* 10/54 */
    font-size 0.37037rem /* 20/54 */
    line-height 1.5em
    text-align center
  .slot-img
    margin 0 4.444444rem /* 240/54 */
    @media screen and (max-width: 960px)
      margin 0 2.222222rem /* 120/54 */
  .slot-btns
    padding 0.185185rem /* 10/54 */
    display flex
    justify-content center
    flex-wrap wrap
    @media screen and (max-width: 550px)
      flex-direction column
    .btn-link
      display flex
      justify-content center
    .btn-item
      margin 0.185185rem /* 10/54 */
</style>
