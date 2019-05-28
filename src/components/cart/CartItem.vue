<template>
	<li class="cart__item">
		<h2 class="cart__title">{{item.title | upperCase}} <span>{{item.size}}</span></h2>
		<div class="cart__row">
			<span class="cart__cost">
				{{calcItemCost}}
				<font-awesome-icon icon="ruble-sign" />
			</span>
			<button 
				class="cart-btn"
				@click="removeItemFromCart(index)">
					<span class="cart-btn__cnt">-</span>
				</button>
			<span>{{item.quantity}}</span>
			<button 
				class="cart-btn"
				@click="addItemToCart(item)">
					<span class="cart-btn__cnt">+</span>
				</button>
		</div>
	</li>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		filters: {
 			upperCase(str) {
 				return str.charAt(0).toUpperCase() + str.slice(1);
 			}
 		},
 		computed: {
 			calcItemCost() {
 				return this.item.cost * this.item.quantity;
 			}
 		},
 		methods: {
 			addItemToCart(item) {
				this.$store.commit('updateCart', item);
			},
			removeItemFromCart(index) {
				this.$store.commit('removeCartItem', index);
			}
 		}
	}
</script>

<style lang="sass">
	.cart__row
		display: flex
		justify-content: space-between
		align-items: center
	.cart__item
		margin: 10px 0
		width: 150px
	.cart__title
		margin: 0
		font-size: 22px
		font-weight: 400
	.cart__cost
		font-family: 'Montserrat', sans-serif
		font-weight: 600
	.cart__total
		font-family: 'Montserrat', sans-serif
		font-size: 18px
	.cart__btn-order
		max-width: 150px
		width: 100%
		padding: 10px 20px
		border: none
		background-color: #247BA0
		color: #fff
		cursor: pointer
		transition: 0.3s ease
		&:hover
			background-color: #054F6F
	.cart-btn
		position: relative
		width: 30px
		height: 30px
		background-color: #247BA0
		color: #fff
		border: none
		border-radius: 5px
		cursor: pointer
		transition: 0.3s ease
		&:hover
			background-color: #054F6F
	.cart-btn__cnt
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
</style>
