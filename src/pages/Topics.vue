<template>
  <div class="topics">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Topics</template>
      <template slot="section-main">
        <p class="slot-item">New luminescent materials, new synthesis, new methods, novel phenomena</p>
        <p class="slot-item">Excitons, plasmons, polaritons; scintillation and collective phenomena</p>
        <p
          class="slot-item"
        >Optical spectroscopy in molecular and biological systems and condensed matter</p>
        <p class="slot-item">Single molecule, single-particle and quantum dot spectroscopy</p>
        <p class="slot-item">Nanocrystals, quantum-structured materials and micro-cavities</p>
        <p class="slot-item">Nonlinear optical materials and processes</p>
        <p class="slot-item">Non-radiative or non-equilibrium phonon effects; thermo-luminescence</p>
        <p
          class="slot-item"
        >Field-induced luminescence in organic and inorganic media, OLEDs and FEDs</p>
        <p class="slot-item">Applications in technology (white LED, lasers, displays, sensors, etc.</p>
        <p class="slot-item">Theoretical and computational methos for luminescence phenomena</p>
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
  name: 'Topics',
  components: {
    Header,
    Footer,
    Main,
    Section
  }
}
</script>

<style lang="stylus" scoped>
  .topics
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
</style>
