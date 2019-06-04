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
		<router-link to="/products" tag="a" class="header-menu__link" active-class="header-menu__link-active" exact>
			Вернуться в меню
		</router-link>
		<div v-if="currentStep === 1">
			<div v-if="cartItems.length">
				<app-cart-form></app-cart-form>
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
			<app-cart-dataForm :currentStep="currentStep" @updateCurrentStep="nextStep"></app-cart-dataForm>
		</div>
		<div v-else>
			<p class="order-done">Заказ принят</p>
		</div>
	</div>
</template>

<script>
	import CartDataForm from './CartDataForm.vue';
	import CartForm from './CartForm.vue';
	export default {
		 components: {
			appCartDataForm: CartDataForm,
      appCartForm: CartForm
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

<style lang="sass" scoped>
	.header-menu__link
		display: none
		color: #000
		max-width: 200px
		width: 100%
		text-align: center
		border: 3px solid #000
		outline: none
		font-size: 16px
		margin-bottom: 20px
		&:hover
			color: #000
		&:focus
			border-color: #F25F5C
	@media screen and 	(max-width: 585px)
		.header-menu__link
			display: inline-block
	.order__steps
		margin: 20px 0
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
