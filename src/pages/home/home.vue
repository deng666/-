<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div class="home-content">
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-week></home-week>
      <router-link to="/list">列表页</router-link>
    </div>
    
  </div>
</template>
<script>
import homeHeader from '@/components/home/header'
import homeSwiper from '@/components/home/swiper'
import homeIcons from '@/components/home/icons'
import homeRecommend from '@/components/home/recommend'
import homeWeek from '@/components/home/week'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeek
  }
}
</script>
<style lang="stylus" scoped>

</style>
