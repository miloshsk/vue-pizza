<template>
	<form 
		@submit.prevent="sortPizzaByPrice"
		class="products__filters">
		<legend>Цена:</legend>
		<div class="products__filters-row">
			<div class="products__filters-group">
				<label>
					от
					<input type="number" 
							class="products__filters-cost"
							v-model="costRange.min">
				</label>
				<label>
					до
					<input type="number" 
							class="products__filters-cost"
							v-model="costRange.value">
				</label>
			</div>
			<div class="products__filters-group">
				<input 
					type="range"
					class="products__filters-range"
					:min="costRange.min"
					:max="costRange.max"
					step="25"
					v-model="costRange.value">
			</div>
			<input 
				type="submit" 
				value="Показать"
				class="products__filters-submit">
		</div>
		</form>
</template>

<script>
	export default {
		data() {
			return {
				costRange: {
					min: 400,
					max: 600,
					value: 500
				},
				sorted: false
			}
		},
		methods: {
			sortPizzaByPrice() {
				this.$store.commit({
					type:'sortPizzaByPrice', 
					min: this.costRange.min,
					max: this.costRange.value
				});
			}
		},
	}
</script>

<style lang="sass">
	.products__filters
		max-width: 450px
		width: 100%
		font-family: 'Montserrat', sans-serif
	.products__filters-cost
		max-width: 50px
		width: 100%
		padding: 2px
		border: 1px solid #7C7A7A
	.products__filters-cost::-webkit-outer-spin-button,
	.products__filters-cost::-webkit-inner-spin-button
		-webkit-appearance: none
		margin: 0
	.products__filters-range
	  -webkit-appearance: none
	  width: 100%
	  &:focus
	    outline: none
	  &::-webkit-slider-runnable-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-webkit-slider-thumb
	    height: 19px
	    width: 50px
	    border: 2px solid #7C7A7A
	    border-radius: 15px
	    background-color: #fff
	    cursor: pointer
	    -webkit-appearance: none
	    margin-top: -5.5px
	  &::-moz-range-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-moz-range-thumb
	    height: 19px
	    width: 50px
	    border: 2px solid #7C7A7A
	    border-radius: 15px
	    background-color: #fff
	    cursor: pointer
	    -webkit-appearance: none
	    margin-top: -5.5px
	  &::-ms-track
	    height: 10px
	    cursor: pointer
	    background: #7C7A7A
	    border-radius: 5px
	  &::-ms-fill-lower
	    background: #7C7A7A
	  &::-ms-fill-upper
	    background: #7C7A7A
	  &::-ms-thumb
	    border: 0px solid #7C7A7A
	    height: 19px
	    width: 50px
	    border-radius: 14px
	    background: #ffffff
	    height: 10px
	  &:focus
	    &::-ms-fill-lower
	      background: #7C7A7A
	    &::-ms-fill-upper
	      background: #7C7A7A
	.products__filters-submit
		max-width: 120px
		width: 100%
		padding: 10px
		background-color: #7C7A7A
		color: #fff
		border: none
		cursor: pointer
		&:hover
			background-color: #494949
	.products__filters-row
		display: flex
		align-items: center
		justify-content: space-between
		margin-top: 10px
	@media screen and 	(max-width: 585px)
		.products__filters-row
			flex-direction: column
			align-items: flex-start
			margin: 10px 0
		.products__filters-group
			margin: 10px 0
			max-width: 150px
			width: 100%
		.products__filters-submit
			max-width: 150px
</style>