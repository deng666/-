<template> 
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet> 
  </div>
</template>

<script>
import cityHeader from './components/header'
import cityList from './components/list'
import citySearch from './components/search'
import cityAlphabet from './components/alphabet'
export default {
  name: 'city',
  components: {
    cityHeader,
    cityList,
    citySearch,
    cityAlphabet
  },
}
</script>

<style lang="stylus" scoped>

</style>
