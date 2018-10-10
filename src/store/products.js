import Vue from 'vue';

export default {
	state: {
		products: []
	},
	getters: {
		getProducts(state) {
			return state.products
		}
	},
	mutations: {
		updateProducts(state, data) {
			state.products = data
		}
	},
	actions: {
		loadProducts({commit}) {
			Vue.http.get('https://test-88920.firebaseio.com/products.json')
				.then( res => {
					return res.json()
				})
				.then( data => {
					commit('updateProducts', data)
				});
		}
	}
}