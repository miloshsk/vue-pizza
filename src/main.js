import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store/store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faRubleSign,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faPizzaSlice,
  faCheckCircle,
  faExclamationCircle,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faShoppingCart,
  faRubleSign,
  faChevronLeft,
  faChevronRight,
  faPizzaSlice,
  faArrowRight,
  faCheckCircle,
  faExclamationCircle,
  faComment
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
