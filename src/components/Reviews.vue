<template>
	<div class="container">
		<h1>Отзывы</h1>
		<p>Тут вы можете оставить свой отзыв</p>
		<form 
			class="review__form"
			@submit.prevent="sendReview">
			<div class="review__form-item">
				<input 
					v-model="review.userName"
					@input="isValidForm"
					type="text" 
					placeholder="Имя" 
					id="review__form-name"
					class="review__form-input">
			</div>
			<div class="review__form-item">
				<textarea 
					v-model="review.reviewText"
					@input="isValidForm"
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
				:disabled="formReady">
		</form>
		<ul>
			<li v-for="item in reviews" class="review__item">
				<h2>{{item.userName}}</h2>
				<p>{{item.reviewText}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				review: {
					userName: '',
					reviewText: ''
				},
				formReady: true
			}
		},
		methods: {
			isValidForm() {
				if(this.review.userName && this.review.reviewText) {
					this.formReady = false;
				} else {
					this.formReady = true;
				}
			},
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
			reviews() {
				return this.$store.getters.getReviews
			}
		},
		beforeCreate() {
			this.$store.dispatch('loadReviews')
		}
	}
</script>

<style lang="sass" >
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
		outline-color: blue
	.review__form-input::placeholder
		color: #000
	.review__form-btn
		max-width: 120px
		width: 100%
		padding: 5px
		border: 1px solid #000
		background-color: #fff
		cursor: pointer
		&:disabled
			border-color: grey
			color: grey
			cursor: not-allowed
	.review__item
		max-width: 250px
		width: 100%
		margin-bottom: 20px
		border-bottom: 1px solid #000
</style>