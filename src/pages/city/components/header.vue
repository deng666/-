<template>
  <div class="city-header">
    <router-link to="/">
      <div class="city-header-left">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-header
  height: $headerHeight;
  line-height: $headerHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  position: relative;
  .city-header-left
    width: .6rem;
    text-align: center;
    position: absolute;
    .iconfont
      color: #fff;
</style>


