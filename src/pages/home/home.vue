<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-link to="/list">列表页</router-link>
  </div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/swiper'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>
<style>
.home {
  font-size: 30px;
}
</style>
