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
  .size-wrapper
    width: 100%
    display: flex
    margin-bottom: 5px
    .btn-size
      flex-grow: 1
      &-active
        background-color: #054F6F
        color: #fff
  .btn
    font-size: 14px
    border: none
    padding: 10px
    transition: 0.3s ease
</style>
