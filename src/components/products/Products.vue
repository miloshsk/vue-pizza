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
			appProductItem: ProductItem,
      appProductFilter: ProductFilter
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
  display: flex
  flex-wrap: wrap
  margin-left: -20px
@media screen and 	(max-width: 420px)
  .products__wrapper
    justify-content: center
</style>
