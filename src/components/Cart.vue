<template>
	<div class="container">
		<h1>Корзина</h1>
		<div v-if="cartItems.length">
			<ul>
				<li v-for="(item, index) in cartItems">
					<div class="cart__item">
						<h2 class="cart__title">{{item.title | upperCase}}</h2>
						<span class="cart__cost">
							{{item.cost}}
							<font-awesome-icon icon="ruble-sign" />
						</span>
						<button @click="removeItemFromCart(index)">-</button>
						<span>{{item.quantity}}</span>
						<button @click="addItemToCart(item)">+</button>
					</div>
				</li>
			</ul>
			<p class="cart__total">Общая сумма: {{result}}</p>
			<button 
				class="cart__btn-order">Заказать</button>
		</div>
		<p v-else class="cart__empty">Корзина пуста</p>
	</div>
</template>

<script>
	export default {
		computed: {
			cartItems() {
				return this.$store.getters.getCartItems;
			},
			result() {
				return this.$store.getters.getCartTotalCost;
			}
		},
		methods: {
			addItemToCart(item) {
				this.$store.commit('updateCart', item);
			},
			removeItemFromCart(index) {
				this.$store.commit('removeCartItem', index);
			}	
		},
		filters: {
 			upperCase(str) {
 				return str.charAt(0).toUpperCase() + str.slice(1);
 			}
 		}
	}
</script>

<style lang="sass">
	.cart__item
		margin: 10px 0
		width: 250px
	.cart__title
		margin: 0
		font-size: 22px
		font-weight: 400
		font-family: 'Merriweather', serif
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
		background-color: #7C7A7A
		color: #fff
		cursor: pointer
	.cart__empty
		font-family: 'Montserrat', sans-serif
		font-size: 18px
</style>
