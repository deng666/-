<template>
  <div>
    <div class="banner-wrapper" @click="swiperAction">
      <img class="banner-img" :src="bannerShow.img" alt="" />
      <div class="banner-info">
        <div class="banner-tittle">上海杜莎夫人蜡像馆（AAAA景区）</div>
        <div class="banner-number">
          <i class="iconfont icon-yanjing"></i>39
        </div>
      </div>
    </div>
    <gallary-img :imgs="gallaryImgs" v-show="showGallary" @close="closeGallary"></gallary-img>
  </div>
</template>

<script>
import gallaryImg from '@/common/gallary/gallary'
export default {
  name: 'detailBanner',
  props: {
    gallaryImgs: null
  },
  data () {
    return {
      showGallary: false
    }
  },
  computed: {
    bannerShow () {
      return this.gallaryImgs[0]
    }
  },
  components: {
    gallaryImg
  },
  methods: {
    aaa () {
      // console.log(this.imgList)
      console.log(this.gallaryImgs)
      console.log(this.$route.query.id)
    },
    swiperAction () {
      this.showGallary = true
    },
    closeGallary () {
      this.showGallary = false
    }
  },
  mounted () {
    this.aaa()
  }
}
</script>

<style lang="stylus" scoped>
.banner-wrapper
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img
    width: 100%;
    height: auto;
  .banner-info
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    left: 0;
    line-height: .6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    .banner-tittle
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    .banner-number
      padding: 0 .2rem;
      height: .35rem;
      line-height: .35rem;
      margin-right: .2rem;
      background-color: rgba(0, 0, 0, .8);
      border-radius: .2rem;
      font-size: .36rem;
      margin-top: .1rem;
      .icon-yanjing
        font-size: .3rem;
        margin-right: .1rem;
</style>

