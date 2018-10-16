<template>
	<div class="container">
		<h1>Отзывы</h1>
		<p>Тут вы можете оставить свой отзыв</p>
		<app-reviews-form>
			
		</app-reviews-form>
		<ul>
			<li v-for="item in reviews" class="review__item">
				<h2>{{item.userName}}</h2>
				<p>{{item.reviewText}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import ReviewsForm from './ReviewsForm.vue'
	export default {
		components: {
			appReviewsForm: ReviewsForm
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
	.review__item
		max-width: 250px
		width: 100%
		margin-bottom: 20px
		border-bottom: 1px solid #000
</style>