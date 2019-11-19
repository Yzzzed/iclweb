<template>
  <div class="venue">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Venue</template>
      <template slot="section-main">
        <p
          class="slot-item"
        >The conference will be held at South Lake Hotel, which is located in the South Lake Park (3798 Nanhu Rd, Changchun, 130022, China).</p>
        <p
          class="slot-item"
        >In the conference building, there is a big lecture hall (for more than 550 seats) as well as three small halls. It will be possible to plan four parallel sessions of lectures at the same time.</p>
        <p class="slot-item">There is a banquet hall that can accommodate up to 500 people.</p>
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
  name: 'Venue',
  components: {
    Header,
    Footer,
    Main,
    Section
  }
}
</script>

<style lang="stylus" scoped>
  .venue
    display flex
    flex-direction column
    justify-content flex-start
    min-height 100vh
  .slot-item
    padding 0.185185rem /* 10/54 */
    font-size 0.37037rem /* 20/54 */
    line-height 1.5em
    text-align center
</style>
