<template>
  <div>
    <router-link v-if="showAbs" to="./" class="header-abs">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <div class="header-fixed" v-else  :style="opacityStyle">
      <router-link to="./">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      上海杜莎夫人蜡像馆
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      // console.log(document.documentElement.scrollTop)
      if (scrollTop > 60) {
        let opacity = scrollTop / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.header-abs
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .6rem;
  height: .6rem;
  border-radius: .6rem;
  background-color: rgba(0, 0, 0, .7);
  .icon-fanhui
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
.header-fixed
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .88rem;
  line-height: .88rem;
  text-align: center;
  color: #fff;
  font-size: .3rem;
  background-color: #00bcd4;
  .icon-fanhui
    float: left;
    padding-left: .2rem;
    color: #fff;
</style>
