<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/header/Nav.vue';
export default {
  components: {
    appNav: Nav
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserra')
  *
    box-sizing: border-box
  body
    font-family: 'Merriweather', serif
  ul
    list-style-type: none
    padding: 0
    margin: 0
  h1
    letter-spacing: 1.5px
    font-size: 36px
  .container
    max-width: 1400px
    width: 100%
    padding: 0 10px
    margin: 0 auto
  .btn
    font-family: 'Montserrat', sans-serif
    font-size: 18px
    margin-top: 10px
    border: none
    padding: 10px
    color: #fff
    background-color: #247BA0
    cursor: pointer
    transition: 0.3s ease
    outline: none
    &:hover,
    &:focus
      background-color: #054F6F
</style>
