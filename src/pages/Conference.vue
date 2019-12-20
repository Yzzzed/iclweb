<template>
  <div class="conference">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Conference Program</template>
      <template slot="section-main">
        <p
          class="slot-item"
        >ICL2020 will contain invited plenary lectures, keynote/invited lectures, contributed presentations and posters.</p>
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
  name: 'Conference',
  components: {
    Header,
    Footer,
    Main,
    Section
  }
}
</script>

<style lang="stylus" scoped>
  .conference
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
