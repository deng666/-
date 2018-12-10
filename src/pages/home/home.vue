<template>
  <div>
    <home-header :cityChild="city"></home-header>
    <home-swiper :bannerChild="bannerDate"></home-swiper>
    <div class="home-content">
      <home-icons :iconChild="iconData"></home-icons>
      <home-recommend :recommengChild="recommendData"></home-recommend>
      <home-week :weekChild="weekData"></home-week>
      <router-link to="/list">列表页</router-link>
    </div>
  </div>
</template>
<script>
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeek from './components/week'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      city: '',
      bannerDate: '',
      iconData: [],
      recommendData: [],
      weekData: []
    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeek
  },
  methods: {
    // getHomeInfo () {
    //   axios.get('/api/index.json').then(this.getHomeInfoSucc)
    // },
    getHomeInfo () {
      debugger
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.city = data.city
        this.bannerDate = data.swperList
        this.iconData = data.iconList
        this.recommendData = data.recommendList
        this.weekData = data.weekList
      }
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
