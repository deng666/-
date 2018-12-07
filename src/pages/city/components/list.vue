<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list-wrapper">
        <div class="list-title">当前位置</div>
        <div class="list-detail">
          <button class="list-local">北京</button>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">热门城市</div>
        <div class="list-detail">
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
          <button class="list-local">北京</button>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">A</div>
        <div class="list-item">
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">A</div>
        <div class="list-item">
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">A</div>
        <div class="list-item">
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">A</div>
        <div class="list-item">
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-title">A</div>
        <div class="list-item">
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
          <div class="item">阿里尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.list
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .list-title
    background-color: #eee;
    height: .55rem;
    line-height .55rem;
    padding-left .2rem;
    color: #666;
    font-size: .26rem;
    border-bottom: 1px solid #ccc;
  .list-detail
    background-color: #fff;
    margin-top: .2rem;
    padding: 0 0 0 .2rem;
    overflow: hidden;     
    .list-local
      width: 30%;
      float: left;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0.1rem 0;
      color: #333;
      margin-right: .23rem;
      margin-bottom: .2rem;
  .list-item
    background-color: #fff;
    .item
      line-height .76rem;
      color: #666;
      padding-left: .2rem;
      border-bottom: 1px solid #ddd;
</style>
