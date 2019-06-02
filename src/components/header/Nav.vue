<template>
	<div class="page-header">
		<div class="header-info">
			<button 
				class="mobile-menu"
				:class="{'mobile-menu-active': showMenu}"
				@click="toggleMenu">
				<span class="mobile-menu__line mobile-menu__line-top"></span>
				<span class="mobile-menu__line mobile-menu__line-middle"></span>
				<span class="mobile-menu__line mobile-menu__line-bottom"></span>
			</button>
		</div>
		<nav 
			class="header-menu"
			:class="{'page-nav-mobile': showMenu}">
			<ul class="header-menu__list">
				<li>
					<router-link to="/" tag="a" class="header-menu__link" active-class="header-menu__link-active" exact @click.native="toggleMenu">Главная</router-link>
				</li>
				<li>
					<router-link to="/products" tag="a" class="header-menu__link" active-class="header-menu__link-active" @click.native="toggleMenu">Меню</router-link>
				</li>
				<li>
					<router-link to="/reviews" tag="a" class="header-menu__link" active-class="header-menu__link-active" @click.native="toggleMenu">Отзывы</router-link>
				</li>
			</ul>
		</nav>
		<div class="cart">
			<router-link to="/cart" tag="a" class="header-menu__link cart__link" active-class="header-menu__link-active">
				<font-awesome-icon icon="shopping-cart" />
			</router-link>
      <div class="cart__length" v-if="getLength > 0">
        {{getLength}}
      </div>
    </div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				showMenu: false,
        cartItems: null
			}
		},
    computed: {
      getLength() {
        return this.$store.getters.getCartItemsLength;
      }
    },
		methods: {
			toggleMenu() {
				if(window.innerWidth <= 450) {
					this.showMenu = !this.showMenu
				}
			}
		}
	}
</script>

<style lang="sass">
.cart
  position: fixed
  right: 20px
  top: 20px
  z-index: 10
  &:hover .cart__link
    background-color: #B01E1A
.cart__link
  background-color: #F25F5C
  border-radius: 50%
  width: 50px
  height: 50px
  outline: none
  &:focus,
  &:active
    background-color: #B01E1A
  .fa-shopping-cart
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
.cart__length
  width: 25px
  height: 25px
  background-color: #fff
  border-radius: 50%
  border: 2px solid #F25F5C
  position: absolute
  bottom: -5px
  left: -5px
  text-align: center
  line-height: 20px
  font-size: 14px
  font-weight: 600
.page-header
  background-color: #247BA0
.header-info
  padding: 10px
  text-align: right
  display: none
.header-menu
  margin-bottom: 50px
  overflow-y: hidden
  transition: 0.5s ease
  transition-delay: 0.5s
.header-menu__list
  display: flex
  transition: all  0.3s ease
.header-menu__link
  display: block
  text-decoration: none
  color: #fff
  font-size: 20px
  font-weight: 600
  padding: 10px
  transition: 0.3s ease
  &:hover:not(.cart__link)
    color: #F25F5C
  &:focus:not(.cart__link)
    color: #F25F5C
.header-menu__link-active:not(.cart__link)
  color: #F25F5C
.mobile-menu
  position: relative
  width: 30px
  height: 20px
  padding: 0
  background-color: inherit
  border: none
  visibility: hidden
  cursor: pointer
.mobile-menu__line
  position: absolute
  width: 100%
  height: 3px
  background-color: #fff
  transition: 0.3s ease
.mobile-menu__line-top
  top: 2px
.mobile-menu__line-middle
  top: 10px
.mobile-menu__line-bottom
  top: 18px
.mobile-menu-active
  .mobile-menu__line-top
    top: 10px
    transform: rotate(45deg)
  .mobile-menu__line-middle
    width: 0
    opacity: 0
  .mobile-menu__line-bottom
    top: 10px
    transform: rotate(-45deg)
@media screen and 	(max-width: 450px)
  .cart
    top: auto
    bottom: 20px
  .header-info
    display: block
  .header-menu
    margin: 0
    max-height: 0
    visibility: hidden
  .mobile-menu
    visibility: visible
  .header-menu__list
    flex-direction: column
  .header-menu__link
    padding: 15px 10px
  .page-nav-mobile
    max-height: 500px
    visibility: visible
</style>
