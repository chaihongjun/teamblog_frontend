/*
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 11:14:33
 * @LastEditTime: 2020-05-26 10:23:46
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: () => import("../views/Index.vue"),
  },

  // {
  //   path: "/page/1",
  //   redirect: {
  //     path: "/",
  //     params: {
  //       page: 1,
  //     },
  //   },
  //   component: () => import("../views/Index.vue"),
  // },

  {
    path: "/page/:id", //全部文章列表

    component: () => import("../views/Index.vue"),
  },

  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/tech", //科技栏目首页列表

    component: () => import("../views/List.vue"),
  },
  {
    path: "/tech/page/:id", //科技栏目文章列表

    component: () => import("../views/List.vue"),
  },

  // {
  //   path: "/tech/:detailId+'.html'", //科技栏目文章详情

  //   component: () => import("../views/Detail.vue"),
  // },
  {
    path: "/:cateName/:detailId" + ".html", //文章详情

    component: () => import("../views/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
