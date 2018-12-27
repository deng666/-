<template>
  <div>
    <detail-banner :gallaryImgs="gallaryImg" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :listChild="list"></detail-list>
    </div> 
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      bannerImg: '',
      gallaryImg: [],
      list: []
    }
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  methods: {
    getData () {
      console.log(this.$route.query.id)
      axios.get('/api/detail.json?id=' + this.$route.query.id).then(this.getDetailInfo)
    },
    getDetailInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        console.log(data)
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.gallaryImg = data.gallaryImgs
        console.log(this.gallaryImg)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 20rem;
</style>

