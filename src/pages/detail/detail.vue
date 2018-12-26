<template>
  <div>
    <detail-banner></detail-banner>
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
export default {
  name: 'detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人馆联票 - 杨浦售票处'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '儿童票'
      }, {
        title: '老人票'
      }, {
        title: '特惠票',
        children: [{
          title: 'sgahjlg',
          children: [{
            title: 'bsdjlzh'
          }]
        }]
      }, {
        title: '学生票'
      }]
    }
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  methods: {
    aaa () {
      console.log(this.$route.query.id)
    }
  },
  mounted () {
    this.aaa()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 20rem;
</style>

