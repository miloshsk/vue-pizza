<template>
	<div>
		<div class="header-info">
			<button 
				class="mobile-menu"
				@click="toggleMenu">
				<div class="mobile-menu__line mobile-menu__line-top"></div>
				<div class="mobile-menu__line mobile-menu__line-middle"></div>
				<div class="mobile-menu__line mobile-menu__line-bottom"></div>
			</button>
		</div>
		<app-nav :showMenu="showMenu"></app-nav>
	</div>
</template>

<script>
	import Nav from './Nav.vue';
	export default {
		components: {
			  appNav: Nav
		},
		data() {
			return {
				showMenu: false
			}
		},
		methods: {
			toggleMenu() {
				this.showMenu = !this.showMenu
			}
		}
	}
</script>

<style lang="sass">
	.mobile-menu
		width: 30px
		padding: 0
		background-color: inherit
		border: none
		outline: none
		height: 20px
		position: absolute
		top: 10px
		right: 10px
		visibility: hidden
		cursor: pointer
	.mobile-menu__line
		position: absolute
		width: 100%
		height: 3px
		background-color: #000
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
		.mobile-menu__line-top
			top: 10px
		.mobile-menu__line-top
			top: 10px
</style>
