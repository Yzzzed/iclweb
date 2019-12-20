<template>
  <div class="registration">
    <Header></Header>
    <Main></Main>
    <Section>
      <template slot="section-header">Registration</template>
      <template slot="section-main">
        <el-table
          :data="tableData"
          border
          style="width: 60%; margin: 0 auto;"
          :span-method="objectSpanMethod"
        >
          <el-table-column prop="date" label="date" style="width: 50%" align="center"></el-table-column>
          <el-table-column prop="price" label="price" style="width: 50%" align="center"></el-table-column>
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
  name: 'Registration',
  components: {
    Header,
    Footer,
    Main,
    Section
  },
  data () {
    return {
      tableData: [{
        date: 'Before April 12',
        price: 'Regular: 4000 CNY  (510 EUR)'
      }, {
        date: '',
        price: 'Student: 2800 CNY   (360 EUR)'
      }, {
        date: 'After April 12',
        price: 'Regular: 4800 CNY   (610 EUR)'
      }, {
        date: '',
        price: 'Student: 3600 CNY   (460 EUR)'
      }]
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return [2, 1]
        } else {
          return [0, 0]
        }
      }
    }
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
