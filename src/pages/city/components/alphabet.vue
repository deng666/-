<template>
  <div class="city-right-alphabet">
    <ul>
      <li v-for="item in letters" :key="item" @click="handLetter" @touchstart="handTouchStrat" @touchmove="handTouchMove" @touchend="handTouchEnd" :ref="item">
         <!-- @touchstart="handTouchStrat" @touchmove="handTouchMove" @touchend="handTouchEnd" :ref="item" -->
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    alphabetChild: Array
  },
  data () {
    return {
      touchStstus: false
    }
  },
  computed: {
    letters () {
      let letters = (this.alphabetChild).map(item => item.name)
      console.log(letters)
      return letters
    }
  },
  methods: {
    handTouchStrat () {
      this.touchStstus = true
    },
    handTouchMove (e) {
      if (this.touchStstus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 88.8
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handTouchEnd () {
      this.touchStstus = false
    },
    handLetter (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
.city-right-alphabet
  position: absolute;
  top: 55%;
  right: 0;
  padding: 0 .2rem;
  color: #00bcd4;
  line-height: .5rem;
  transform: translateY(-50%);
</style>
