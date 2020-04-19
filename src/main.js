import Vue from "vue";
import App from "./App.vue";

import "bootstrap";

import "devicons/css/devicons.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
