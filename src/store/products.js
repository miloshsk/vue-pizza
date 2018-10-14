import Vue from 'vue';

export default {
	state: {
		products: [],
		sorted: []
	},
	getters: {
		getProducts(state) {
			return state.sorted;
		}
	},
	mutations: {
		updateProducts(state, data) {
			state.products = data;
		},
		updateSorted(state) {
			state.sorted = state.products;
		},
		sortPizzaByPrice(state, data) {
			state.sorted = state.products.filter((elem) => {
				for(let item of state.products) {
					if(elem.cost <= data.max && elem.cost >= data.min) {
						return elem;
					}
				}
			})
		}
	},
	actions: {
		loadProducts({commit}) {
			Vue.http.get('https://test-88920.firebaseio.com/products.json')
				.then( res => {
					return res.json()
				})
				.then( data => {
					commit('updateProducts', data);
					commit('updateSorted',);
				})
		}
	}
}