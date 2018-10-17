<template>
	<form 
		class="review__form"
		@submit.prevent="sendReview">
		<div class="review__form-item">
			<input 
				v-model="review.userName"
				type="text" 
				placeholder="Имя" 
				id="review__form-name"
				class="review__form-input">
		</div>
		<div class="review__form-item">
			<textarea 
				v-model="review.reviewText"
				placeholder="Отзыв"
				id="review-text" 
				cols="30" 
				rows="3"
				class="review__form-input">
			</textarea>
		</div>
		<input 
			type="submit" 
			class="review__form-btn" 
			:disabled="!formReady">
		</form>
</template>

<script>
	export default {
		data() {
			return {
				review: {
					userName: '',
					reviewText: ''
				}
			}
		},
		methods: {
			sendReview() {
				const review = {
					userName: this.review.userName,
					reviewText: this.review.reviewText
				}
				this.$store.dispatch('postReview', review)
					.then( () => {
						this.review.userName = '';
						this.review.reviewText = '';
					})
			}
		},
		computed: {
			emptyFormFields() {
				return {
					name: !this.review.userName,
					test: !this.review.reviewText
				}
			},
			formReady() {
				return Object.values(this.emptyFormFields).every(n => !n);
			}
		}
	}
</script>

<style lang="sass">
	.review__form
		max-width: 250px
		width: 100%
	.review__form-item
		margin-bottom: 10px
	.review__form-input
		width: 100%
		border: 1px solid #000
		padding: 5px
		font-family: 'Merriweather', serif
		font-size: 14px
		resize: none
		outline-color: #50514F
	.review__form-input::placeholder
		color: #000
	.review__form-btn
		max-width: 120px
		width: 100%
		padding: 5px
		border: 1px solid #000
		background-color: #fff
		cursor: pointer
		transition: 0.3s ease
		&:disabled
			border-color: #F25F5C
			color: #F25F5C
			cursor: not-allowed
		&:hover:enabled,
		&:focus:enabled
			background-color: #50514F
			color: #fff
</style>