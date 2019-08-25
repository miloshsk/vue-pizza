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
  },
};
</script>

<style lang="scss">
@import "./scss/_starting";
h1 {
  letter-spacing: 1.5px;
  font-size: 36px;
}
.form-el {
  margin-bottom: 20px;
  position: relative;
  &__icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
  &__success {
    color: $c-green;
    visibility: hidden;
    opacity: 0;
  }
  &__error {
    color: $c-red-dark;
    visibility: hidden;
    opacity: 0;
  }
  &__input {
    width: 100%;
    border: none;
    border-bottom: 2px solid $c-blue;
    padding: 15px 0;
    font-size: 14px;
    resize: none;
    outline: none;
    transition: 0.3s ease;
  }
  &__input::placeholder {
    color: $black;
  }
  &__text {
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 16px;
    transition: 0.3s ease;
    &.focused {
      top: 0;
      font-size: 12px;
    }
  }
}
.btn {
  font-size: 18px;
  border: 2px solid $c-blue;
  border-radius: 25px;
  padding: 10px 25px;
  color: $c-blue;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s ease;
  outline: none;
  position: relative;
  &:hover,
  &:focus {
    background-color: $c-blue;
    color: $white;
  }
  &:disabled {
    background-color: $c-red-dark;
    border-color: $c-red-dark;
    color: $white;
    cursor: not-allowed;
  }
  &_order {
    .order__icon {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover,
    &:focus {
      .order__icon {
        visibility: visible;
        opacity: 1;
      }
      padding-right: 40px;
    }
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
