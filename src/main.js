import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
