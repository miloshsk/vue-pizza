<template>
	<div class="container">
		<h1>Меню</h1>
		<form 
			@submit.prevent="sortPizzaByPrice"
			class="products__filters">
			<legend>Цена:</legend>
			<div class="products__filters-row">
				<label>
					от
					<input type="text" 
							class="products__filters-cost"
							v-model="costRange.min">
				</label>
				<label>
					до
					<input type="text" 
							class="products__filters-cost"
							v-model="costRange.value">
				</label>
				<input 
					type="range"
					class="products__filters-range"
					:min="costRange.min"
					:max="costRange.max"
					step="25"
					v-model="costRange.value">
				<input 
					type="submit" 
					value="Показать"
					class="products__filters-submit">
			</div>
		</form>
		<ul class="products__wrapper">
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
		data() {
			return {
				costRange: {
					min: 400,
					max: 600,
					value: 500
				},
				sorted: false
			}
		},
		methods: {
			addToCart(product) {
				this.$store.commit('updateCart', product);
			},
			sortPizzaByPrice() {
				this.$store.commit({
					type:'sortPizzaByPrice', 
					min: this.costRange.min,
					max: this.costRange.value
				});
			}
		},
		computed: {
			products() {
				return this.$store.getters.getProducts;
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
	.products__filters
		max-width: 450px
		width: 100%
		font-family: 'Montserrat', sans-serif
	.products__filters-cost
		max-width: 50px
		width: 100%
		padding: 2px
		border: 1px solid #7C7A7A
	.products__filters-range
	  -webkit-appearance: none
	  width: 35%
	  &:focus
	    outline: none
	  &::-webkit-slider-runnable-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-webkit-slider-thumb
	    height: 19px
	    width: 50px
	    border: 2px solid #7C7A7A
	    border-radius: 15px
	    background-color: #fff
	    cursor: pointer
	    -webkit-appearance: none
	    margin-top: -5.5px
	  &::-moz-range-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-moz-range-thumb
	    height: 19px
	    width: 50px
	    border: 2px solid #7C7A7A
	    border-radius: 15px
	    background-color: #fff
	    cursor: pointer
	    -webkit-appearance: none
	    margin-top: -5.5px
	  &::-ms-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-ms-fill-lower
	    background: #7C7A7A
	  &::-ms-fill-upper
	    background: #7C7A7A
	  &::-ms-thumb
	    border: 0px solid #7C7A7A
	    height: 19px
	    width: 50px
	    border-radius: 14px
	    background: #ffffff
	    height: 10px
	  &:focus
	    &::-ms-fill-lower
	      background: #7C7A7A
	    &::-ms-fill-upper
	      background: #7C7A7A
	.products__filters-submit
		max-width: 120px
		width: 100%
		padding: 10px
		background-color: #7C7A7A
		color: #fff
		border: none
		cursor: pointer
		&:hover
			background-color: #494949
	.products__filters-row
		display: flex
		align-items: center
		justify-content: space-between
		margin-top: 10px
	.products__wrapper
		margin-left: -20px
		margin-top: 20px
	.product
		width: 20%
		display: inline-block
		margin-bottom: 20px
	.product__item
		padding: 10px
		margin-left: 20px
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
		font-size: 18px
	.fa-ruble-sign	
		font-size: 14px
	.product__img
		width: 100%	
		height: auto
	.product__order-btn
		font-size: 18px
		margin-top: 10px
		width: 100%
		border: none
		padding: 10px
		color: #fff
		background-color: #7C7A7A
		cursor: pointer
	@media screen and 	(max-width: 1024px)
		.product 
			width: 25%
	@media screen and 	(max-width: 780px)
		.product
			width: 33%
	@media screen and 	(max-width: 585px)
		.product__title
			font-size: 18px
		.product__cost
			font-size: 14px
		.fa-ruble-sign
			font-size: 12px
		.product__order-btn
			font-size: 16px
			margin-top: 5px
	@media screen and 	(max-width: 585px)
		.product
			width: 50%
</style>