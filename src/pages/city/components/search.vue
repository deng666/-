<template>
  <div class="search-box">
    <div class="search-wrapper">
      <input type="text" placeholder="请输入城市名或拼音" class="search-input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search-box
  background-color: $bgColor;
  .search-wrapper
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: .3rem;
    .search-input
      width: 100%;
      border-radius: 5px;
      padding: .1rem .15rem;
</style>
