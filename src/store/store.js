import Vue from "vue";
import Vuex from "vuex";
import Products from "./products";
import Cart from "./cart";
import Reviews from "./reviews";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Products,
    Cart,
    Reviews
  }
});
