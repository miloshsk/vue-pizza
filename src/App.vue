<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/header/Nav.vue';
import Header from './components/header/Header.vue';
export default {
  components: {
    appNav: Nav,
    appHeader: Header
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
  a
    text-decoration: none
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
  .fade-enter-active
    transition: all .5s ease
  .fade-enter
    transform: translateY(-20px)
    opacity: 0
  .fade-leave
    opacity: 1
  .fade-leave-to
    transition: all .5s ease
    opacity: 0
</style>
