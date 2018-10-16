<template>
	<div class="container">
		<h1>Меню</h1>
		<app-product-filter></app-product-filter>
		<ul class="products__wrapper">
			<app-product-item 
				v-for="(product,index) in products"
				:key="index"
				:product="product">
			</app-product-item>
		</ul>
	</div>
</template>

<script>
	import ProductItem from './ProductItem.vue';
	import ProductFilter from './ProductFilter.vue';
	export default {
		components: {
			appProductFilter: ProductFilter,
			appProductItem: ProductItem
		},
		computed: {
			products() {
				return this.$store.getters.getProducts;
			}
		},
 		beforeCreate() {
 			this.$store.dispatch('loadProducts');
 		}
	}
</script>

<style lang="sass">
	.products__wrapper
		margin-left: -20px
		margin-top: 20px
</style>