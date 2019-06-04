<template>
	<div>
		<nav 
			class="header-menu"
			:class="{'page-nav-mobile': showMenu}">
			<ul class="header-menu__list">
        <li v-for="(link, key) in links">
          <router-link
            :to="link"
            tag="a"
            class="header-menu__link"
            active-class="header-menu__link-active"
            exact
            @click.native="toggleMenu">{{linkTitles[key]}}</router-link>
        </li>
			</ul>
		</nav>
		<div class="cart"
         @mouseleave="show"
         @mouseenter="show">
			<router-link
        to="/cart"
        tag="a"
        class="header-menu__link cart__link"
        active-class="header-menu__link-active">
				<font-awesome-icon icon="shopping-cart" />
			</router-link>
      <div class="cart__length" v-if="getLength > 0">
        {{getLength}}
      </div>
      <transition name="fade">
        <appCartForm v-if="showCart" class="header__cart"></appCartForm>
      </transition>
    </div>
  </div>
</template>

<script>
  import CartForm from './../cart/CartForm.vue';
  export default {
    components: {
      appCartForm: CartForm
    },
    props: {
      showMenu: Boolean
    },
		data() {
			return {
        links: ['/','products','reviews'],
        linkTitles: ['Главная','Меню', 'Отзывы'],
        showCart: false
			}
		},
    computed: {
      getLength() {
        return this.$store.getters.getCartItemsLength;
      }
    },
		methods: {
      show(e) {
        this.showCart = e.type === 'mouseenter';
      },
			toggleMenu() {
				if(window.innerWidth <= 450) {
          this.$emit('menuToggle', !this.showMenu);
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
.header__cart
  position: fixed
  top: 70px
  right: 10px
  width: auto
  height: auto
  background-color: #fff
  border: 3px solid #247BA0
  padding: 5px 55px 5px 25px
  z-index: 10
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
  z-index: 11
.header-menu
  margin-bottom: 25px
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
@media screen and 	(max-width: 450px)
  .cart
    top: auto
    bottom: 20px
  .header-menu
    padding-top: 60px
    margin: 0
    max-height: 0
    visibility: hidden
  .header-menu__list
    flex-direction: column
  .header-menu__link
    padding: 15px 10px
  .page-nav-mobile
    max-height: 500px
    visibility: visible
</style>
