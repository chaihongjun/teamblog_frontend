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

Vue.prototype.baseUrl =
  process.env.NODE_ENV === "production" ? "http://www.tp5.com:8080/" : "/api";

//引入全局JS和CSS
// import "./assets/css/style.min.css";

// // import "./assets/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
// // import "./assets/css/font-awesome.min.css";
// import "./assets/css/main.css";

// import "./assets/fonts/fa-brands-400.woff2";
// import "./assets/fonts/fa-regular-400.woff2";
// import "./assets/fonts/fontawesome-webfont.woff2";

// import "./assets/js/main.js";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min";
// import "./assets/js/jquery.min.js";
// import "./assets/js/bootstrap.min.js";

// // import "./assets/js/loader.js";

// import "./assets/js/swiper.min.js";
import { Spin, Icon } from "view-design";
Vue.component("Spin", Spin);
Vue.component("Icon", Icon);

import "view-design/dist/styles/iview.css";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
