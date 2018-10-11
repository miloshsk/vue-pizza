<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Nav from './components/Nav.vue';
export default {
  components: {
    appHome: Home,
    appNav: Nav
  }
}
</script>

<style lang="sass">
  *
    box-sizing: border-box
  ul
    list-style-type: none
    padding: 0
    margin: 0
  .container
    max-width: 1400px
    width: 100%
    padding: 0 10px
    margin: 0 auto
</style>
