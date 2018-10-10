<template>
	<div>
		<h1>Меню</h1>
		<ul class="products">
			<li v-for="product in products" class="product">
				<div class="product__item">
					<img 	
						class="product__img"
						:src="product.img" 
						alt="pizza">
					<h2 class="product__title">{{product.title | upperCase}}</h2>
					<span class="product__cost">
						{{product.cost}} 
						<font-awesome-icon icon="ruble-sign" />
					</span>
					<button 
						class="product__order-btn"
						@click="addToCart(product)">
						<font-awesome-icon icon="shopping-cart" />
						В корзину
					</button>

				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		methods: {
			addToCart(product) {
				this.$store.commit('updateCart', product);
			}
		},
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
	@import url('https://fonts.googleapis.com/css?family=Merriweather|Montserra')

	.products
		display: flex
		flex-wrap: wrap
		width: 1200px
		margin: 0 auto
	.product
		width: 20%
		margin-bottom: 25px
	.product__item
		width: 220px
		padding: 10px
		border-radius: 5px
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3)
	.product__title
		margin: 5px 0
		font-size: 22px
		font-weight: 400
		font-family: 'Merriweather', serif
	.product__cost
		font-family: 'Montserrat', sans-serif
		font-weight: 600
	.fa-ruble-sign	
		font-size: 14px
	.product__img
		width: 100%	
	.product__order-btn
		font-size: 18px
		margin-top: 10px
		width: 100%
		border: none
		padding: 10px
		color: #fff
		background-color: blue
		cursor: pointer
</style>