<template>
	<div class="container">
		<h1>Корзина</h1>
		<ul class="order__steps" v-if="cartItems.length">
			<li v-for="step in steps" 
				class="order__step"
				:class="{'order__step-current': step <= currentStep}">
				{{step}}
			</li>
		</ul>
		<div v-if="currentStep === 1">
			<div v-if="cartItems.length">
				<ul>
					<app-cart-item 
						:item="item"
						:index="index"
						:key="index"
						v-for="(item, index) in cartItems">
					</app-cart-item>
				</ul>
				<p class="cart__total">Общая сумма: {{result}}</p>
				<button 
					@click="nextStep"
					class="cart__btn-order">Заказать</button>
			</div>
			<p v-else class="cart__empty">Корзина пуста</p>
		</div>
		<div v-else-if="currentStep === 2">
			<button @click="prevStep" class="order-btn-back">
				<font-awesome-icon icon="arrow-left" />
			</button>
			<app-cart-dataform
				:nextStep="nextStep"></app-cart-dataform>
		</div>
		<div v-else>
			<p>Заказ принят</p>
		</div>
	</div>
</template>

<script>
	import CartItem from './CartItem.vue';
	import CartDataForm from './CartDataForm.vue';
	export default {
		 components: {
			appCartItem: CartItem,
			appCartDataform: CartDataForm
		},
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
			prevStep() {
				this.currentStep--;
			},
			nextStep() {
				this.currentStep++;
			}
		}
	}
</script>

<style lang="sass">
	.order__steps
		margin-bottom: 20px
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
	.order-btn-back
		background-color: #fff
		border: 2px solid #7C7A7A
		width: 50px
		height: 50px
		cursor: pointer
		border-radius: 50%
		cursor: pointer
		transition: 0.3s ease
		outline: none
		&:hover
			background-color: #7C7A7A
		&:hover .fa-arrow-left
			color: #fff
	.fa-arrow-left
		color: #7C7A7A
		transition: 0.3s ease
</style>
