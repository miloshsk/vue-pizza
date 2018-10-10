export default {
	state: {
		cart: []
	},
	getters: {
		getCartItems(state) {
			return state.cart	
		},
		getCartTotalCost(state) {
			let result = 0;
			for(let item of state.cart) {
				result += parseInt(item.cost);
			}
			return result;
		}
	},
	mutations: {
		updateCart(state, data) {
			state.cart.push(data)
		},
		removeCartItem(state, index) {
			state.cart.splice(index, 1)
		}
	}
}