<template>
	<div>
		<h1>Меню</h1>
		<ul class="products">
			<li v-for="product in products" class="product-item">
				<h2>{{product.title | upperCase}}</h2>
				<img 	
					class="product-img"
					:src="product.img" 
					alt="pizza">
				<div class="product-row">
					<span>{{product.cost}}</span>
					<button>В корзину</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		computed: {
			products() {
				return this.$store.getters.getProducts
			}
		},
 		beforeCreate() {
 			this.$store.dispatch('loadProducts');
 		},
 		filters: {
 			upperCase(str) {
 				return str.charAt(0).toUpperCase() + str.slice(1);
 			}
 		}
	}
</script>

<style lang="sass">
	.products
		display: flex
		flex-wrap: wrap
		width: 1200px
		margin: 0 auto
	.product-item
		width: 300px
		padding: 0 20px
	.product-img
		width: 250px	
		height: 250px
	.product-row
		display: flex
		justify-content: space-between
		align-items: center
</style>