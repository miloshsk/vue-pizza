<template>
  <div class="page-header">
    <app-burger :showMenu="showMenu" @menuToggle="menuToggle"></app-burger>
    <app-nav :showMenu="showMenu" @menuToggle="menuToggle"></app-nav>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import BurgerBtn from "./BurgerBtn.vue";
export default {
  components: {
    appNav: Nav,
    appBurger: BurgerBtn
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    menuToggle(data) {
      this.showMenu = data;
    }
  }
};
</script>

<style scoped lang="scss">
.page-header {
  background-color: $c-blue;
  padding: 0 5px;
}
</style>
