<template>
  <div class="page-header">
    <app-burger :showMenu="showMenu" @menuToggle="menuToggle"></app-burger>
    <app-nav :showMenu="showMenu" @menuToggle="menuToggle"></app-nav>
    <appHeaderCart
      :showMenu="showMenu"
      @menuToggle="menuToggle"
    ></appHeaderCart>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import BurgerBtn from "./BurgerBtn.vue";
import HeaderCart from "./HeaderCart.vue";
export default {
  components: {
    appNav: Nav,
    appBurger: BurgerBtn,
    appHeaderCart: HeaderCart
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
  min-height: 70px;
  background-color: $c-blue;
  padding: 0 5px;
  @include media("xs") {
    min-height: 60px;
  }
}
</style>
