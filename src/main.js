/*
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 11:14:33
 * @LastEditTime: 2020-05-26 11:40:05
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//引入全局JS和CSS

// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.min.css";
// import "./assets/css/main.css";
// import "./assets/css/style.min.css";

import "./assets/fonts/fa-brands-400.woff2";
import "./assets/fonts/fa-regular-400.woff2";
import "./assets/fonts/fontawesome-webfont.woff2";

// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.min.js";
// import "./assets/js/loader.js";
// import "./assets/js/main.js";
// import "./assets/js/swiper.min.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
