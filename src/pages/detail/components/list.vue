<template>
  <div>
    <div class="list-wapper" v-for="item in listChild" :key="item.index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
       <div class="item-children" v-if="item.children">
         <detail-list :listChild="item.children"></detail-list>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    listChild: null
  }
}
</script>

<style lang="stylus" scoped>
.item-title-icon
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  position: relative;
  top: 5px;
  background-size: .4rem 3rem;
.item-title
  line-height: .8rem;
  font-size: .32rem;
  padding: 0 .2rem;
.item-children
  padding: 0 .2rem;
</style>
