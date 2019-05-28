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
		}
	},
	actions: {
    loadProducts({commit}) {
      Vue.http.get('https://api.myjson.com/bins/bbsmv')
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
