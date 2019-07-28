<template>
  <div id="app" class="wrapper">
    <app-header></app-header>
    <div class="wrapper__content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@import "./scss/_starting";
h1 {
  letter-spacing: 1.5px;
  font-size: 36px;
}

.btn {
  font-size: 18px;
  border: none;
  padding: 10px;
  color: $white;
  background-color: $c-blue;
  cursor: pointer;
  transition: 0.3s ease;
  outline: none;
  &:hover,
  &:focus {
    background-color: $c-blue-dark;
  }
}
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  transition: all 0.5s ease;
  opacity: 0;
}
</style>
