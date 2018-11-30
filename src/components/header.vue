<template>
  <div class="header-wrap">
    <div class="header-left">123</div>
    <div class="header-input">
      <input type="text" placeholder="城市">
    </div>
    <div class="header-right">123</div>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="stylus" scoped>
  .header-wrap
    height: .44rem;
    line-height: .44rem;
    display: flex;
    .header-left
      width: .32rem;
      float: left;
    .header-right
      width: 2rem;
      float: right;
      text-align: right;
    .header-input
      flex: 1;
</style>



