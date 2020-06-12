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
  ///////////////////////  首页 ////////////////////////
  {
    path: "",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/page/1",
    redirect: {
      path: "/",
    },
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/page/:pageNumber", //全部文章列表
    component: () => import("../views/Index.vue"),
  },
  /////////////////////////////   列表页   /////////////////////////

  //////////////////////  一级栏目
  {
    path: "/:cateNameOne", //栏目列表
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/page/1",
    redirect: {
      path: "/:cateNameOne",
    },
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/page/:pageNumber", //栏目列表
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/:detailId" + ".html", //文章详情
    component: () => import("../views/Detail.vue"),
  },
  //////////////////////  二级栏目
  {
    path: "/:cateNameOne/:cateNameTwo/", //栏目列表
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/:cateNameTwo/page/1",
    redirect: {
      path: "/:cateNameOne/:cateNameTwo/",
    },
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/:cateNameTwo/page/:pageNumber", //栏目文章列表
    component: () => import("../views/List.vue"),
  },
  //////////////////////  三级栏目
  {
    path: "/:cateNameOne/:cateNameTwo/:cateNameThree", //栏目列表
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/:cateNameTwo/:cateNameThree/page/1", //栏目列表
    redirect: {
      path: "/:cateNameOne/:cateNameTwo/:cateNameThree",
    },
    component: () => import("../views/List.vue"),
  },
  {
    path: "/:cateNameOne/:cateNameTwo/:cateNameThree/page/:pageNumber", //栏目文章列表
    component: () => import("../views/List.vue"),
  },
  ///////////////////////////////  详情  ////////////////////////

  {
    path: "/:cateNameOne/:cateNameTwo/:cateNameThree/:detailId" + ".html", //文章详情
    component: () => import("../views/Detail.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
