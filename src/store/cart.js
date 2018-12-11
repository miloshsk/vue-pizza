export default {
	state: {
		cart: []
	},
	getters: {
		getCartItems(state) {
			return state.cart;
		},
		getCartTotalCost(state) {
			let result = 0;
			for(let item of state.cart) {
				result += parseInt(item.cost * item.quantity);
			}
			return result;
		}
	},
	mutations: {
	  clearCart(state) {
	    state.cart = [];
    },
		updateCart(state, data) {
			let result = state.cart.find( (elem) => {
				return elem.title === data.title;	
			});
			if(result) {
				for(let item of state.cart) {
					if(item.title === data.title) {
						item.quantity++;
					}
				}
			} else {
				state.cart.push(data);
			}
		},
		removeCartItem(state, index) {
			if(state.cart[index].quantity > 1) {
				state.cart[index].quantity--;
			} else {
				state.cart.splice(index, 1);
			}
		}
	}
}
