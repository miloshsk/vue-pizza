import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Reviews from './components/Reviews.vue';
import Basket from './components/Basket.vue';

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
			component: Basket
		}
	],
	mode: 'history' 
})
