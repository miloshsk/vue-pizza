import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Products from './components/products/Products.vue';
import Reviews from './components/reviews/Reviews.vue';
import Cart from './components/cart/Cart.vue';

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/products',
			component: Products
		},
		{
			path: '/reviews',
			component: Reviews
		},
		{
			path: '/cart',
			component: Cart
		}
	],
	mode: 'history' 
})
