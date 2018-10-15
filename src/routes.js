import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Reviews from './components/Reviews.vue';
import Cart from './components/cart/Cart.vue';

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/menu',
			component: Menu
		},
		{
			path: '/reviews',
			component: Reviews
		},
		{
			path: '/basket',
			component: Cart
		}
	],
	mode: 'history' 
})
