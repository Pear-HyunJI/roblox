import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/reset.css";

import { i18n } from "@/i18n";

import VueMarqueeSlider from "vue-marquee-slider";
Vue.use(VueMarqueeSlider);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
