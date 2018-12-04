<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div class="home-content">
      <home-icons></home-icons>
      <router-link to="/list">列表页</router-link>
    </div>
    
  </div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/swiper'
import homeIcons from '@/components/icons'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>
<style lang="stylus" scoped>
  .home-content
    padding: 0 .15rem
</style>
