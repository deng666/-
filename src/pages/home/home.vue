<template>
  <div>
    <home-header></home-header>
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
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      bannerDate: '',
      iconData: [],
      recommendData: [],
      weekData: [],
      lang:'en'
    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeek
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // getHomeInfo () {
    //   axios.get('/api/index.json').then(this.getHomeInfoSucc)
    // },
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
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
