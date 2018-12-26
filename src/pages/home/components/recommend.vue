<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <div class="recommend-hot-list">
      <ul v-if="recommendList"> 
          <li class="recommend-item" v-for="item in recommengChild" :key="item.id" >
            <!-- @click="goDetail(item.id)" -->
            <router-link :to="'/detail?id=' + item.id">
              <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="item-info">
                <div class="item-title">
                  <span class="item-address">{{item.address}}</span>
                  {{item.title}}
                </div>
                <div class="item-operation">
                  <div class="item-right-common">
                    <i class="iconfont icon-yanjing"></i>
                    {{item.common}}
                  </div>
                  <span class="item-rmb">¥</span>{{item.perice}}
                </div>
                <div class="item-btn-wrap">
                  <button class="item-btn">查看详情</button>
                </div>
              </div>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecomm',
  props: {
    recommengChild: null
  },
  data () {
    return {
      // recommendList: this.recommengChild
      // recommendList: [{
      //   id: 1,
      //   title: '上海迪士尼乐园',
      //   address: '嘉定区',
      //   perice: 573,
      //   common: 45698,
      //   imgUrl: '/static/img/item1.c1598d7.jpg'
      // }, {
      //   id: 2,
      //   title: '上海迪士尼乐园',
      //   address: '嘉定区',
      //   perice: 573,
      //   common: 45698,
      //   imgUrl: '/static/img/item2.f286973.jpg'
      // }, {
      //   id: 3,
      //   title: '上海迪士尼乐园',
      //   address: '嘉定区',
      //   perice: 573,
      //   common: 45698,
      //   imgUrl: '/static/img/item3.491c312.jpg'
      // }, {
      //   id: 4,
      //   title: '上海迪士尼乐园',
      //   address: '嘉定区',
      //   perice: 573,
      //   common: 45698,
      //   imgUrl: '/static/img/item4.643e9ff.jpg'
      // }]
    }
  },
  computed: {
    recommendList () {
      return this.recommengChild.length
    }
  },
  methods: {
    goDetail (id) {
      // console.log(id)
      this.$router.push({
        path: '/detail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
  background-color: #eee;
  padding: 8px 15px;
.recommend-hot-list
  background-color: #fff;
  .recommend-item
    padding: .3rem 0;
    min-height: 1.5rem;
    position: relative;
    border-bottom: 1px solid #eee;
    .item-img-wrapper
      width: 1.5rem;
      height: 1.5rem;
      left: .3rem;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: .32rem;
      img
        width: 100%;
        height: 100%;
    .item-info
      padding: 0 .3rem 0 2.1rem;
      position: relative;
      line-height: 1.2;
      .item-title
        color: #333;
        font-size: .34rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .item-address
          float: right;
      .item-operation
        margin: .08rem 0;
        color: #fa5a4b;
        font-size: .4rem;
        .item-rmb
          font-size: .27rem;
          margin-right: .04rem;
        .item-right-common
          float: right;
          font-size: .25rem;
          color: #666;
          .iconfont
            position: relative;
            top: .03rem;
            font-size: .3rem;
            color: #666;
      .item-btn-wrap
        text-align: right;
        .item-btn
          padding: .05rem .1rem;
          background-color: #fa5a4b;
          color: #fff;
          border-radius: .1rem;
          border: none;
</style>
