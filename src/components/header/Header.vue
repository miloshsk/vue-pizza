<template>
  <div class="page-header" :class="{ active: showMenu }">
    <div class="page-header__wrap container">
      <div class="overlay" @click="menuToggle"></div>
      <router-link
        to="/"
        tag="a"
        class="page-header__logo"
        exact
      >
        <img src="../../assets/logo.png" alt="" />
      </router-link>
      <app-burger :showMenu="showMenu" @menuToggle="menuToggle"></app-burger>
      <app-nav :showMenu="showMenu" @menuToggle="menuToggle"></app-nav>
      <appHeaderCart
        :showMenu="showMenu"
        @menuToggle="menuToggle"
      ></appHeaderCart>
    </div>
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
    menuToggle() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.4);
  visibility: hidden;
  opacity: 0;
}
.page-header {
  min-height: 70px;
  background-color: $c-blue;
  z-index: 100;
  &__wrap {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 50px;
    height: 50px;
    margin-right: 130px;
    img {
      display: block;
      max-width: 100%;
      height: 100%;
    }
  }
  &.active {
    .header-menu {
      transform: translateX(0);
    }
    .overlay {
      visibility: visible;
      opacity: 1;
    }
  }
  @include media("xs") {
    min-height: 60px;
  }
}
</style>
