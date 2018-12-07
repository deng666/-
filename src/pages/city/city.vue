<template> 
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cityChild="clityDetail"></city-list>
    <city-alphabet></city-alphabet> 
  </div>
</template>

<script>
import cityHeader from './components/header'
import cityList from './components/list'
import citySearch from './components/search'
import cityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {      
      clityDetail: {
        local: '',
        hotCity: [],
        alphabetList: [],
        // provincial: []
      }
    }
  },
  components: {
    cityHeader,
    cityList,
    citySearch,
    cityAlphabet
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          debugger
          let data = res.data
          // this.clityDetail.local = data.local
        }
      })
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
