import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import {store} from './store';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
