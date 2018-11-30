<template>
  <div>
    <home-header></home-header>
    <router-link to="/list">列表页</router-link>
  </div>
</template>
<script>
import homeHeader from '@/components/header'
export default {
  name: 'home',
  components: {
    homeHeader
  }
}
</script>
<style>
.home {
  font-size: 30px;
}
</style>
