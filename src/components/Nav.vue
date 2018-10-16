<template>
	<div class="page-header">
		<div class="header-info">
			<button 
				class="mobile-menu"
				:class="{'mobile-menu-active': showMenu}"
				@click="toggleMenu">
				<div class="mobile-menu__line mobile-menu__line-top"></div>
				<div class="mobile-menu__line mobile-menu__line-middle"></div>
				<div class="mobile-menu__line mobile-menu__line-bottom"></div>
			</button>
		</div>
		<nav 
			class="page-nav"
			:class="{'page-nav-mobile': showMenu}">
			<ul class="link-list">
				<li>
					<router-link to="/" tag="a" active-class="active" exact @click.native="toggleMenu">Главная</router-link>
				</li>
				<li>
					<router-link to="/products" tag="a" active-class="active" @click.native="toggleMenu">Меню</router-link>
				</li>
				<li>
					<router-link to="/reviews" tag="a" active-class="active" @click.native="toggleMenu">Отзывы</router-link>
				</li>
				<li>
					<router-link to="/basket" tag="a" active-class="active" @click.native="toggleMenu">Корзина</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showMenu: false
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
	.page-header
		background-color: #7C7A7A
	.header-info
		padding: 10px
		text-align: right
		display: none
	.page-nav
		margin-bottom: 50px
		overflow-y: hidden
		transition: 0.5s ease
		transition-delay: 0.5s
	.link-list
		display: flex
		transition: all  0.3s ease
		a
			display: block
			text-decoration: none
			color: #fff
			font-size: 24px
			padding: 10px
			&:hover
				color: #494949
		.active
			color: #494949
	.mobile-menu
		position: relative
		width: 30px
		height: 20px
		padding: 0
		background-color: inherit
		border: none
		outline: none
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
		.header-info
			display: block
		.page-nav
			margin: 0
			max-height: 0
			visibility: hidden
		.mobile-menu
			visibility: visible
		.link-list
			flex-direction: column
			a
				padding: 5px
		.page-nav-mobile
			max-height: 500px
			visibility: visible	
</style>