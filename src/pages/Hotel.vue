<template>
  <div class="hotel">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Hotel Accommodation</template>
      <template slot="section-main">
        <p class="slot-item">
          We have reserved
          <span class="weight">400 guest rooms</span> in the South Lake Hotel for the participants, including > 200 single rooms, > 100 double rooms, and 20 suites.
          (main building and satellite buildings)
        </p>
        <p class="slot-item">The hotel will offer a special discount for the ICL participants.</p>
        <div class="img-container">
          <img class="south-hotel" src="https://image.hyzed.cn/room1.png" />
          <img class="south-hotel" src="https://image.hyzed.cn/room2.png" />
        </div>
        <div class="img-container">
          <img class="south-hotel" src="https://image.hyzed.cn/room3.png" />
          <img class="south-hotel" src="https://image.hyzed.cn/room4.png" />
        </div>
        <p class="slot-item">
          In addition, there are
          <span class="weight">other hotel options</span> near the South Lake Hotel.
        </p>
        <p class="slot-item">Buffet-style meals – be covered in the conference fee.</p>
        <div class="img-container">
          <img class="south-hotel" src="https://image.hyzed.cn/dinner1.png" />
          <img class="south-hotel" src="https://image.hyzed.cn/dinner2.png" />
        </div>
        <p class="slot-item">Banquet is also included in the conference fee.</p>
        <div class="img-container">
          <img class="hotel-face" src="https://image.hyzed.cn/dinner3.jpg" />
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
  export default {
    name: 'Hotel',
    components: {
      Header,
      Footer,
      Main,
      Section
    }
  }
</script>

<style lang="stylus" scoped>
  .hotel
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
    .weight
      font-weight bold
  .img-container
    margin 0 auto
    padding 0.185185rem /* 10/54 */
    display flex
    justify-content center
    align-items center
    .south-hotel
      padding 0.37037rem /* 20/54 */
      width 20%
      @media screen and (max-width: 976px)
        width 40%
    .hotel-face
      width 60%
      @media screen and (max-width: 976px)
        width 80%
</style>
