<template>
  <div class="important">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Important Dates</template>
      <template slot="section-main">
        <el-table :data="tableData" border style="width: 60%; margin: 0 auto;">
          <el-table-column prop="date" label="date" style="width: 50%" align="center"></el-table-column>
          <el-table-column prop="event" label="event" style="width: 50%" align="center"></el-table-column>
        </el-table>
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
  name: 'Important',
  components: {
    Header,
    Footer,
    Main,
    Section
  },
  data () {
    return {
      tableData: [{
        date: 'January 6, 2020',
        event: 'Opening for abstract submission'
      }, {
        date: 'March 1, 2020',
        event: 'Deadline for abstract submission'
      }, {
        date: 'April 12, 2020',
        event: 'Deadline for early registration'
      }, {
        date: 'August 10−14, 2020',
        event: 'ICL2020'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .important
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
