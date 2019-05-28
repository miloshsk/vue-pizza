<template>
	<li class="product">
		<div class="product__item">
			<img 	
				class="product__img"
				:src="showImg"
				alt="pizza">
			<h2 class="product__title">{{product.title | upperCase}}</h2>
      <div class="size-wrapper">
        <button
          :key="key"
          v-for="(size, key) in product.size"
          @click="changeKey(key)"
          class="btn btn-size"
          :class="{'btn-size-active': key === activeItem}">
          {{size}}
        </button>
      </div>
      <span class="product__cost">
				 {{showCost}}<font-awesome-icon icon="ruble-sign" />
			</span>
      <button
				class="product__order-btn"
				@click="addToCart">
				<font-awesome-icon icon="shopping-cart" />
				В корзину
			</button>
		</div>
	</li>
</template>

<script>
	export default {
		props: {
			product: Object
		},
    data() {
		  return {
		    activeItem: 0
      }
    },
		methods: {
			addToCart() {
			  const current = {
			    cost: this.product.cost[this.activeItem],
			    size: this.product.size[this.activeItem],
          img: this.product.img[this.activeItem],
          title: this.product.title,
          quantity: 1
        };
				this.$store.commit('updateCart', current);
			},
      changeKey(key) {
			  this.activeItem = key;
      }
		},
    computed: {
		  showCost() {
		    return this.product.cost[this.activeItem]
      },
      showImg() {
		    return this.product.img[this.activeItem]
      }
    },
		filters: {
 			upperCase(str) {
 				return str.charAt(0).toUpperCase() + str.slice(1);
 			}
 		}
	}
</script>

<style lang="sass">
	.product
		width: 20%
		display: inline-block
		margin-bottom: 20px
	.product__item
		padding: 10px
		margin-left: 20px
		border-radius: 5px
		box-shadow: 0 2px 10px rgba(80,81,79,0.3)
	.product__title
		margin: 5px 0
		font-size: 22px
		font-weight: 400
	.product__cost
		font-family: 'Montserrat', sans-serif
		font-weight: 600
		font-size: 18px
	.fa-ruble-sign	
		font-size: 14px
	.product__img
		width: 100%	
		height: auto
	.product__order-btn
		font-family: 'Montserrat', sans-serif
		font-size: 18px
		margin-top: 10px
		width: 100%
		border: none
		padding: 10px
		color: #fff
		background-color: #247BA0
		cursor: pointer
		transition: 0.3s ease
		outline: none
		&:hover,
		&:focus
			background-color: #054F6F
	@media screen and 	(max-width: 1024px)
		.product 
			width: 25%
	@media screen and 	(max-width: 780px)
		.product
			width: 33%
	@media screen and 	(max-width: 585px)
		.product
			width: 50%
		.product__title
			font-size: 18px
		.product__cost
			font-size: 14px
		.fa-ruble-sign
			font-size: 12px
		.product__order-btn
			font-size: 16px
			margin-top: 5px
</style>
