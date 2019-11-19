<template>
  <div class="registration">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Registration</template>
      <template slot="section-main">
        <h1 class="underConstruction">Under construction ...</h1>
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
export default {
  name: 'Registration',
  components: {
    Header,
    Footer,
    Main,
    Section
  }
}
</script>

<style lang="stylus" scoped>
  .registration
    display flex
    flex-direction column
    justify-content flex-start
    min-height 100vh
  .underConstruction
    text-align center
    font-size 0.740741rem /* 40/54 */
    color #6D6B6B
  .slot-item
    padding 0.185185rem /* 10/54 */
    font-size 0.37037rem /* 20/54 */
    line-height 1.5em
    text-align center
</style>
