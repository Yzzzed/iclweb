<template>
  <div class="section">
    <div class="header">
      <i class="el-icon-chat-dot-round"></i>
      <div class="header-slot-container">
        <slot name="section-header"></slot>
      </div>
    </div>
    <div class="main">
      <slot name="section-main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style lang="stylus" scoped>
  .section
    margin 0.37037rem /* 20/54 */ 0.185185rem /* 10/54 */ 0.740741rem /* 40/54 */ 0.185185rem /* 10/54 */
    border 1px solid #ccc
    border-radius 10px
    display flex
    flex-direction column
    flex 1
    .header
      pading 0.555556rem /* 30/54 */
      display flex
      justify-content flex-start
      border-bottom dashed 2px #ccc
      align-items center
      .el-icon-chat-dot-round
        padding 0.185185rem /* 10/54 */
        font-size 0.740741rem /* 40/54 */
      .header-slot-container
        padding 0.37037rem /* 20/54 */ 0.185185rem /* 10/54 */
        font-size 0.37037rem /* 20/54 */
        font-weight bold
    .main
      margin 0.37037rem /* 20/54 */ 0.185185rem /* 10/54 */
      font-size 0.296296rem /* 16/54 */
</style>
