<template>
  <div>
    <div class="search-box">
      <div class="search-wrapper">
        <input v-model="keyword" type="text" placeholder="请输入城市名或拼音" class="search-input">
      </div>
      <div class="search-content" v-show="keyword" ref="search">
        <ul class="search-item">
          <li class="search-list" v-for="item in list" :key="item.id">
            {{item.name}}
          </li>
        </ul>
        <div class="search-list search-nodata" v-if="hasNoData">未能找到匹配数据，请检查后输入哦~</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    citiesList: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // if (!this.keyword) {
      //   this.list = []
      //   return
      // }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.citiesList) {
          this.citiesList[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          });
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search-box
  background-color: $bgColor;
  .search-wrapper
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: .3rem;
    .search-input
      width: 100%;
      border-radius: 5px;
      padding: .1rem .15rem;
  .search-content
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
    background-color: #eee;
    .search-item
      padding: 0 .2rem;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 5px 10px #ddd;
      .search-list
        line-height: .45rem;
        color: #666;
        border-top: 1px solid #eee;
    .search-nodata
      text-align: center;
      padding-top: 1rem;
</style>
