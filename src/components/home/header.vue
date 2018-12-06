<template>
  <div class="header-wrap clearfix">
    <div class="header-left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题" class="header-input-kuang">
    </div>
    <div  class="header-right">
      {{this.cityChild}}
      <i class="iconfont icon-jiantouarrow486"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    cityChild: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-wrap
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    display: flex;
    background-color: $bgColor;
    .header-left,.header-right
      width: .6rem;
      color: #fff;
      text-align: center;
    .header-right
      width: 1.2rem;
    .header-input
      flex: 1;
      position: relative;
      .icon-sousuo
        position: absolute;
        top: 0;
        left: .1rem;
        color: #bbb;
        font-size: .36rem;
      .header-input-kuang
        height: .6rem;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: .05rem;
        width: 80%;
        padding: 0 .2rem 0 .6rem;
</style>
