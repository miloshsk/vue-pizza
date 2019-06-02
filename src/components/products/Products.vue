<template>
		<div class="container">
		<h1 class="products__caption">Меню</h1>
    <app-product-filter></app-product-filter>
    <appProductPromo></appProductPromo>
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
	import ProductPromo from './ProductPromo.vue';
	export default {
		components: {
			appProductItem: ProductItem,
      appProductFilter: ProductFilter,
      appProductPromo: ProductPromo
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
.products__caption
  margin: 10px 0
.products__wrapper
  display: flex
  flex-wrap: wrap
  margin-left: -20px
@media screen and 	(max-width: 420px)
  .products__wrapper
    justify-content: center
</style>
