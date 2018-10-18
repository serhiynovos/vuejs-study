import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import {createStore} from './store';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

export function createApp (context) {
  const app = new Vue({
    store: createStore(),
    render: h => h(App)
  })

  return {
    app
  }
}
