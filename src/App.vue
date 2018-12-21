<template>
  <div id="app">
    <!-- 数据加载放在内存里，再次进入的时候不需要重新加载数据 -->
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
