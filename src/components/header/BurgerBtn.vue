<template>
  <button
    class="mobile-menu"
    :class="{'mobile-menu-active': showMenu}"
    @click="toggleMenu">
    <span class="mobile-menu__line mobile-menu__line-top"></span>
    <span class="mobile-menu__line mobile-menu__line-middle"></span>
    <span class="mobile-menu__line mobile-menu__line-bottom"></span>
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
        this.$emit('menuToggle', !this.showMenu);
      }
    }
	}
</script>

<style lang="sass" scoped>
.mobile-menu
  position: absolute
  width: 40px
  height: 40px
  padding: 0
  background-color: inherit
  border: none
  visibility: hidden
  cursor: pointer
  right: 15px
  top: 10px
.mobile-menu__line
  position: absolute
  left: 0
  width: 100%
  height: 3px
  background-color: #fff
  transition: 0.3s ease
.mobile-menu__line-top
  top: 10px
.mobile-menu__line-middle
  top: 18px
.mobile-menu__line-bottom
  top: 26px
.mobile-menu-active
  .mobile-menu__line-top
    top: 18px
    transform: rotate(45deg)
  .mobile-menu__line-middle
    width: 0
    opacity: 0
  .mobile-menu__line-bottom
    top: 18px
    transform: rotate(-45deg)
@media screen and 	(max-width: 450px)
  .mobile-menu
    visibility: visible
</style>
