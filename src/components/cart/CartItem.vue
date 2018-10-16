<template>
	<li class="cart__item">
		<h2 class="cart__title">{{item.title | upperCase}}</h2>
		<span class="cart__cost">
			{{item.cost}}
			<font-awesome-icon icon="ruble-sign" />
		</span>
		<button @click="removeItemFromCart(index)">-</button>
		<span>{{item.quantity}}</span>
		<button @click="addItemToCart(item)">+</button>
	</li>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		filters: {
 			upperCase(str) {
 				return str.charAt(0).toUpperCase() + str.slice(1);
 			}
 		},
 		methods: {
 			addItemToCart(item) {
				this.$store.commit('updateCart', item);
			},
			removeItemFromCart(index) {
				this.$store.commit('removeCartItem', index);
			}
 		}
	}
</script>