export default {
  state: {
    cart: [],
    discount: false
  },
  getters: {
    getCartItems(state) {
      return state.cart;
    },
    getDiscount(state) {
      return state.discount;
    },
    getCartItemsLength(state) {
      let result = 0;
      for (let item of state.cart) {
        result += item.quantity;
      }
      return result;
    },
    getCartTotalCost(state) {
      let result = 0;
      for (let item of state.cart) {
        result += parseInt(item.cost * item.quantity);
      }
      return result;
    }
  },
  mutations: {
    clearCart(state) {
      state.cart = [];
    },
    updateDiscount(state) {
      state.discount = true;
    },
    updateCart(state, data) {
      let result = state.cart.find(elem => {
        return elem.img === data.img;
      });
      if (result) {
        for (let item of state.cart) {
          if (item.img === data.img) {
            item.quantity++;
          }
        }
      } else {
        state.cart.push(data);
      }
    },
    removeCartItem(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    }
  }
};
