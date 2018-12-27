<template>
  <div>
    <city-header></city-header>
    <city-search :citiesList="cities"></city-search>
    <city-list :hot="hotCity" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :alphabetChild="alphabetList" @change="handLetterChange"></city-alphabet>
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
      // local: '',
      hotCity: [],
      alphabetList: [],
      cities: {},      
      letter: ''  //当前选择的字母
    }
  },
  components: {
    cityHeader,
    cityList,
    citySearch,
    cityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          let data = res.data
          this.cities = data.cities
          // this.local = data.local
          this.hotCity = data.hotCities
          this.alphabetList = data.alphabetList
        }
      })
    },
    handLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo ()
  }
}
</script>

<style lang="stylus" scoped>

</style>
