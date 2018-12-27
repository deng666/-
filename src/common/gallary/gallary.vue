<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- 轮播图片 -->
        <swiper-slide v-for="item in imgs" :key="item.index">
          <img :src="item.img" class="gallary-img" alt="">
        </swiper-slide>
        <!-- 轮播小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallaryImg',
  props: {
    imgs: null
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit;
.container
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .75);
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    .gallary-img
      width: 100%;
    .swiper-pagination
      color: #fff;
      bottom: -1rem;
</style>
