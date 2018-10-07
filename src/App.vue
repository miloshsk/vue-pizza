<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
export default {
  components: {
    appNav: Nav,
    appHome: Home
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
</style>
