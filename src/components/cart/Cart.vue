<template>
	<div class="container">
		<h1>Корзина</h1>
		<ul class="order__steps" v-if="cartItems.length">
			<li v-for="step in steps" 
				class="order__step-wrapper"
				:class="{'order__step-current': step <= currentStep}">
				<span class="order__step-number">{{step}}</span>
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
			<p class="order-done">Заказ принят</p>
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
	.order__step-wrapper
		position: relative
		display: inline-block
		width: 50px
		height: 50px
		border: 2px solid #70C1B3
		color: #70C1B3
		border-radius: 50%
		text-align: center
		font-family: 'Montserrat', sans-serif
		font-size: 18px
		margin-right: 25px
		&:after
			content: ''
			display: block
			width: 29px
			height: 2px
			background-color: #70C1B3
			position: absolute
			right: -29px
			top: 50%
		&:nth-child(3)
			margin-right: 0
			&:after
				content: none
	.order__step-number
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
	.order__step-current
		background-color: #70C1B3
		color: #fff
	.cart__empty
		font-family: 'Montserrat', sans-serif
		font-size: 18px
	.order-btn-back
		background-color: #fff
		border: 2px solid #F25F5C
		width: 50px
		height: 50px
		cursor: pointer
		border-radius: 50%
		cursor: pointer
		transition: 0.3s ease
		outline: none
		&:hover
			background-color: #F25F5C
		&:hover .fa-arrow-left
			color: #fff
	.fa-arrow-left
		color: #F25F5C
		transition: 0.3s ease
	.order-done
		font-size: 18px
</style>
