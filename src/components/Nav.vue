<template>
	<nav class="nav">
		<ul class="link-list">
			<li>
				<router-link to="/" tag="a" active-class="active" exact>Главная</router-link>
			</li>
			<li>
				<router-link to="/menu" tag="a" active-class="active">Меню</router-link>
			</li>
			<li>
				<router-link to="/reviews" tag="a" active-class="active">Отзывы</router-link>
			</li>
			<li>
				<router-link to="/basket" tag="a" active-class="active">Корзина</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {

	}
</script>

<style lang="sass">
	.nav
		margin-bottom: 50px
	.link-list
		display: flex
	a
		text-decoration: none
		color: #000
		font-size: 24px
		padding: 10px
		&:hover
			background-color: blue
			color: #fff
	.active
		border-bottom: 3px solid blue
</style>