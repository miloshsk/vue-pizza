<template>
	<form class="order-form" @submit.prevent="isValidForm">
		<div class="order-form__group">
			<label for="order-name" class="order-form__label">Ваше имя</label>
			<input 
				v-model="client.name"
				type="text" 
				id="order-name" 
				class="order-form__input">
			<p 
				v-if="errors.name.show" class="order-error">
				{{errors.name.error}}
			</p>
		</div>
		<div class="order-form__group">
			<label for="order-address" class="order-form__label">Ваш адрес</label>
			<input 
				v-model="client.adress"
				type="text" 
				id="order-address" 
				class="order-form__input">
			<p 
				v-if="errors.adress.show" class="order-error">
				{{errors.adress.error}}
			</p>
		</div>
		<input 
			type="submit" 
			value="Подтвердить данные" 
			class="order-form__submit">
	</form>
</template>

<script>
	export default {
		props: {
			nextStep: Function
		},
		data() {
			return {
				client: {
					name: '',
					adress: ''
				},
				errors: {
					name: {
						error:  'Заполните имя!',
						show: false
					},
					adress: {	
						error: 'Заполните адрес!',
						show: false
					}
				}
			}
		},
		methods: {
			isValidForm() {
				let emptyFields = 0;
				for(let i in this.client) {
					if(!this.client[i]) {
						this.errors[i].show = true;
						setTimeout( () => {
							this.errors[i].show = false;
						}, 2000);
						emptyFields++;
					}
				}
				if(!emptyFields) {
					this.nextStep();
				}
			}
		}
	}
</script>

<style lang="sass">
	.order-form
		max-width: 250px 
		width: 100%
	.order-error
		margin: 2px 0
		font-family: 'Montserrat', sans-serif
		color: red
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
		max-width: 200px
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
		&:disabled
			cursor: not-allowed
			background-color: #fff
			color: #494949
</style>