<template>
  <div class="about">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">About ICL</template>
      <template slot="section-main">
        <p class="slot-item">
          <span class="weight">International Conference on Luminescence</span> (ICL) is a long-standing
          conference being held every three years. . In past decade, it has been
          held in Lyon (France, 2008), Ann Arbor (USA, 2011), Wroclaw (Poland,
          2014), and Joao Pessoa (Brazil, 2017).
        </p>
        <p class="slot-item">
          The conference is for scientists worldwide interested in luminescence
          research to share their latest findings on luminescence phenomena,
          materials, techniques, devices and applications.
        </p>
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
  name: 'About',
  components: {
    Header,
    Footer,
    Main,
    Section
  }
}
</script>

<style lang="stylus" scoped>
  .about
    display flex
    flex-direction column
    justify-content flex-start
    min-height 100vh
  .slot-item
    padding 0.185185rem /* 10/54 */
    font-size 0.37037rem /* 20/54 */
    line-height 1.5em
    text-align center
    .weight
      font-weight bold
</style>
