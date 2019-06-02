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
    filterProducts(state, data) {
		  state.sorted = state.products.filter(item => {
		    return data.value.every(val => {
		      return item.composition.indexOf(val) >= 0;
        })
      });
    }
	},
	actions: {
    loadProducts({commit}) {
      Vue.http.get('https://api.myjson.com/bins/7255j')
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
