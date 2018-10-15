<template>
	<form class="order-form" @submit.prevent="nextStep">
		<div class="order-form__group">
			<label for="order-name" class="order-form__label">Ваше имя</label>
			<input 
				type="text" 
				id="order-name" 
				class="order-form__input">
		</div>
		<div class="order-form__group">
			<label for="order-address" class="order-form__label">Ваш адрес</label>
			<input 
				type="text" 
				id="order-address" 
				class="order-form__input">
		</div>
		<input type="submit" value="Подтвердить данные" class="order-form__submit">
	</form>
</template>

<script>
	export default {
		props: {
			nextStep: Function
		}
	}
</script>