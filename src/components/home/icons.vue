<template>
  <div class="icons-wrapper">
    <swiper :options="swiperIconOption" v-if="iconList">
      <swiper-slide v-for="page of pages" :key="page.index">
         <div class="icon" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p class="icons-text">{{item.text}}</p>
        </div>
      </swiper-slide>
      <!-- 轮播小圆点 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconChild: Array
  },
  data () {
    return {
      swiperIconOption: {
        notNextTick: true,
        pagination: '.swiper-pagination'
      }
      // iconList: this.iconChild
    }
  },
  computed: {
    iconList () {
      return this.iconChild.length
    },
    pages () {
      const pages = []
      // console.log(this.iconList)
      this.iconChild.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons-wrapper >>> .swiper-container
  height: 0;
  padding-bottom: 50%;
  padding-top: 15px;
  background-color: #fff;
.icon
  width: 25%;
  float: left;
  padding: 0 0 15px 0;
  text-align: center;
  img
    width: 1.1rem;
    height: auto;
  .icons-text
    margin-top: .1rem;
    color: #212121;
    font-size: .28rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
</style>
