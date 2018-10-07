import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({	
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
		loadProducts({commit}, value) {
			Vue.http.get('https://test-88920.firebaseio.com/products.json')
				.then( res => {
					return res.json()
				})
				.then(data => {
					commit('updateProducts', data)
				});
		}
	}
})