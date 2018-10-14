<template>
	<div class="container">
		<h1>Корзина</h1>
		<ul class="order__steps">
			<li v-for="step in steps" 
				class="order__step"
				:class="{'order__step-current': step === currentStep}">
				{{step}}
			</li>
		</ul>
		<div v-if="currentStep === 1">
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
					@click="makeOrder"
					class="cart__btn-order">Заказать</button>
			</div>
			<p v-else class="cart__empty">Корзина пуста</p>
		</div>
		<div v-else-if="currentStep === 2">
			<form class="order-form" @submit.prevent="orderSubmit">
				<div class="order-form__group">
					<label for="order-name" class="order-form__label">Ваше имя</label>
					<input type="text" id="order-name" class="order-form__input">
				</div>
				<div class="order-form__group">
					<label for="order-address" class="order-form__label">Ваш адрес</label>
					<input type="text" id="order-address" class="order-form__input">
				</div>
				<input type="submit" value="Заказать" class="order-form__submit">
			</form>
		</div>
		<div v-else>
			<p>Заказ принят</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				steps: [1,2,3],
				currentStep: 1
			}
		},
		computed: {
			cartItems() {
				return this.$store.getters.getCartItems;
			},
			result() {
				return this.$store.getters.getCartTotalCost;
			}
		},
		methods: {
			makeOrder() {
				this.currentStep = 2;
			},
			addItemToCart(item) {
				this.$store.commit('updateCart', item);
			},
			removeItemFromCart(index) {
				this.$store.commit('removeCartItem', index);
			},
			orderSubmit() {	
				this.currentStep = 3;
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
	.order__step
		position: relative
		display: inline-block
		width: 50px
		height: 50px
		border: 2px solid #7C7A7A
		color: #7C7A7A
		border-radius: 50%
		text-align: center
		font-size: 18px
		line-height: 45px
		margin-right: 25px
		&:after
			content: ''
			display: block
			width: 29px
			height: 2px
			background-color: #7C7A7A
			position: absolute
			right: -29px
			top: 50%
		&:nth-child(3)
			margin-right: 0
			&:after
				content: none
	.order__step-current
		background-color: #7C7A7A
		color: #fff
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
	.order-form
		max-width: 250px 
		width: 100%
	.order-form__group
		display: flex
		flex-direction: column
		margin-bottom: 10px
	.order-form__label
		font-family: 'Montserrat', sans-serif
		font-size: 18px
		margin-bottom: 5px
	.order-form__input
		border-radius: 5px
		border: 2px solid #7C7A7A
		padding: 3px
		outline: none
		&:focus,
		&:active
			border-color: #494949
	.order-form__submit
		outline: none
		max-width: 150px
		width: 100%
		padding: 5px
		cursor: pointer
		background-color: #fff
		border: 2px solid #7C7A7A
		font-family: 'Montserrat', sans-serif
		font-size: 18px
		color: #494949
		transition: 0.3s ease
		&:hover
			background-color: #494949
			color: #fff
			border-color: #494949
		&:focus,
		&:active
			border-color: #494949
</style>
