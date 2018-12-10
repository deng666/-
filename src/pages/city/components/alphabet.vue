<template>
  <div class="city-right-alphabet">
    <ul>
      <li v-for="item in alphabetChild" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    alphabetChild: Array
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
