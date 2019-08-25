<template>
  <button
    class="burger"
    :class="{ 'burger-active': showMenu }"
    @click="toggleMenu"
  >
    <span class="burger__line burger__line-top"></span>
    <span class="burger__line burger__line-middle"></span>
    <span class="burger__line burger__line-bottom"></span>
  </button>
</template>

<script>
export default {
  name: "BurgerBtn",
  props: {
    showMenu: Boolean
  },
  methods: {
    toggleMenu() {
      this.$emit("menuToggle");
    }
  }
};
</script>

<style lang="scss" scoped>
.burger {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: transparent;
  border: none;
  visibility: hidden;
  cursor: pointer;
  right: 15px;
  top: 15px;
  z-index: 101;
  &__line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: $white;
    transition: 0.3s ease;
    &-top {
      top: 10px;
    }
    &-middle {
      top: 18px;
    }
    &-bottom {
      top: 26px;
    }
  }
  &-active {
    .burger__line {
      &-top {
        top: 18px;
        transform: rotate(45deg);
      }
      &-middle {
        width: 0;
        opacity: 0;
      }
      &-bottom {
        top: 18px;
        transform: rotate(-45deg);
      }
    }
  }
}
@include media("xs") {
  .burger {
    top: 12.5px;
    visibility: visible;
  }
}
</style>
