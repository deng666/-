<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/img/1.jpg" class="swiper-img" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/2.jpg" class="swiper-img" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/3.jpg" class="swiper-img" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/4.jpg" class="swiper-img" alt="">
      </swiper-slide>
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
        pagination: '.swiper-pagination',
      },
      // swiperList: [{
      //   id: '01',
      //   imgUrl: '../assets/img/1.jpg'
      // }, {
      //   id: '02',
      //   imgUrl: '../assets/img/3.jpg'
      // }, {
      //   id: '03',
      //   imgUrl: '../assets/img/3.jpg'
      // }, {
      //   id: '04',
      //   imgUrl: '../assets/img/4.jpg'
      // }]
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
