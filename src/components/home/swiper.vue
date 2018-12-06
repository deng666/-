<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList">
      <!-- 轮播图片 -->
      <swiper-slide v-for="item in bannerChild" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" alt="">
      </swiper-slide>
      <!-- 轮播小圆点 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    bannerChild: null
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000
      }
      // swiperList: this.bannerChild
    }
  },
  computed: {
    swiperList () {
      return this.bannerChild.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff;
  .wrapper
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.8%;
    background-color: #fafafa;
    .swiper-img
      width: 100%;
</style>
