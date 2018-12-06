<template> 
  <div>
    <city-header></city-header>
    <city-hot></city-hot>
  </div>
</template>

<script>
import cityHeader from './components/header'
import cityHot from './components/hot'
export default {
  name: 'city',
  components: {
    cityHeader,
    cityHot
  },
}
</script>

<style lang="stylus" scoped>

</style>
