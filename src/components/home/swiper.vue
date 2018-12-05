<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- 轮播图片 -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000
      },
      swiperList: [{
        id: '01',
        imgUrl: '/static/img/1.830420f.jpg'
      }, {
        id: '02',
        imgUrl: '/static/img/2.3e6b674.jpg'
      }, {
        id: '03',
        imgUrl: '/static/img/3.d4f8fb0.jpg'
      }, {
        id: '04',
        imgUrl: '/static/img/4.e5ce73c.jpg'
      }]
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