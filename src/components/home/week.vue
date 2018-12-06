<template>
  <div>
    <div class="week-title">周末去哪儿玩</div>
    <div class="week-detail">
      <ul v-if="weekList">
        <li class="week-list-item" v-for="item in weekChild" :key="item.id">
          <div class="week-list-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="week-desc">
            {{item.title}}
            <div class="week-text">
              {{item.desc}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeWeek',
  props: {
    weekChild: null
  },
  data () {
    return {
      // weekList: this.weekChild
      // weekList: [{
      //   id: 1,
      //   imgUrl: '/static/img/week1.6a2725f.jpg',
      //   title: '上海去哪儿泡温泉',
      //   desc: '上海的朋友总会问，哪里可以泡温泉，哪里的温泉环境好，轻松恬静'
      // }, {
      //   id: 2,
      //   imgUrl: '/static/img/week2.e7eb187.jpg',
      //   title: '上海去哪儿泡温泉',
      //   desc: '上海的朋友总会问，哪里可以泡温泉，哪里的温泉环境好，轻松恬静'
      // }]
    }
  },
  computed: {
    weekList () {
      return this.weekChild.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.week-title
  background-color: #eee;
  padding: 8px 15px;
.week-detail
  background-color: #fff;
  .week-list-item
    display: block;
    width: 100%;
    height: 100%;
    .week-list-img
      overflow: hidden;
      height: 0;
      padding-bottom: 56%;
    .week-desc
      background-color: #fff;
      font-size: .35rem;
      color: #333;
      padding: .3rem;
      .week-text
        color: #666;
        font-size: .3rem;
        line-height: .4rem;
        margin-top: .2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
</style>
