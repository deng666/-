<template>
  <div class="icons-wrapper">
    <swiper>
      <swiper-slide v-for="page of pages" :key="index">
         <div class="icon" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p class="icons-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      iconList: [{
        id: '01',
        imgUrl: '/static/img/icon1.7f5686c.png',
        text: '景点名票'
      }, {
        id: '02',
        imgUrl: '/static/img/icon2.8f55e7d.png',
        text: '一日游'
      }, {
        id: '03',
        imgUrl: '/static/img/icon3.ebc5af4.png',
        text: '上海必游'
      }, {
        id: '04',
        imgUrl: '/static/img/icon4.e46641c.png',
        text: '上海海昌'
      }, {
        id: '05',
        imgUrl: '/static/img/icon5.f620d2c.png',
        text: '打卡圣地'
      }, {
        id: '06',
        imgUrl: '/static/img/icon7.dafc525.png',
        text: '泡温泉'
      }, {
        id: '07',
        imgUrl: '/static/img/icon6.db8ec0c.png',
        text: '上海欢乐谷'
      }, {
        id: '08',
        imgUrl: '/static/img/icon8.3c64d38.png',
        text: '野生动物园'
      },{
        id: '09',
        imgUrl: '/static/img/icon6.db8ec0c.png',
        text: '上海欢乐谷'
      }, {
        id: '10',
        imgUrl: '/static/img/icon8.3c64d38.png',
        text: '野生动物园'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      console.log(this.iconList)
      this.iconList.forEach((item, index) => {
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
