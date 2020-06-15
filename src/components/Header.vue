<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 11:16:23
 * @LastEditTime: 2020-05-26 11:13:04
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <a href="/" title="博客主页">
          <img
            src="https://demo.themebetter.com/dux/wp-content/themes/dux/img/logo.png"
            alt="DUX主题官方演示站"
          />DUX主题演示
        </a>
      </h1>
      <div class="brand">
        欢迎光临
        <br />我们一直在努力
      </div>
      <ul class="site-nav site-navbar">
        <li class="menu-item" :class="$store.state.isActive==0?'current-menu-item':''">
          <a href="/" @click="getMenuID(0)">
            <i class="fa fa-home"></i> 首页
          </a>
        </li>
        <li
          class="menu-item menu-item-has-children"
          :class="$store.state.isActive==2?'current-menu-item':''"
        >
          <a href="/product" @click="getMenuID(2)">
            <i class="fa fa-heart"></i> 产品中心
          </a>
          <ul class="sub-menu">
            <li class="menu-item menu-item-has-children">
              <a href="/product/computer" @click="getMenuID(3)">电脑</a>
              <ul class="sub-menu">
                <li class="menu-item">
                  <a href="/product/computer/pc" @click="getMenuID(4)">pc机</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu-item" :class="$store.state.isActive==1?'current-menu-item':''">
          <a href="/tech" @click="getMenuID(1)">
            <i class="fa fa-plug"></i> 科技
          </a>
        </li>
        <li class="menu-item menu-item-has-children">
          <a>
            <i class="fa fa-file-text-o"></i> 独立页面
          </a>
          <ul class="sub-menu">
            <li class="menu-item">
              <a href="https://demo.themebetter.com/dux/sample-page">友情链接</a>
            </li>
            <li class="menu-item">
              <a href="https://demo.themebetter.com/dux/archives">页面存档</a>
            </li>
            <li class="menu-item">
              <a href="https://demo.themebetter.com/dux/no-sidebar">无边栏页面</a>
            </li>
            <li class="menu-item">
              <a href="https://demo.themebetter.com/dux/navs">网址导航</a>
            </li>
          </ul>
        </li>
        <li class="navto-search">
          <a href="javascript:;" class="search-show active">
            <i class="fa fa-search"></i>
          </a>
        </li>
      </ul>
      <div class="topbar">
        <ul class="site-nav topmenu">
          <li
            id="menu-item-114"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
          >
            <a href="https://demo.themebetter.com/dux/archives">页面存档</a>
          </li>
          <li
            id="menu-item-115"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"
          >
            <a href="https://demo.themebetter.com/dux/sample-page">友情链接</a>
          </li>
        </ul>
        <a rel="nofollow" href="javascript:;" class="signin-loader">Hi, 请登录</a>
        &nbsp; &nbsp;
        <a
          rel="nofollow"
          href="https://demo.themebetter.com/dux/reset-password"
        >找回密码</a>
      </div>
      <i class="fa fa-bars m-icon-nav" @click="mobileMenu"></i>
      <a rel="nofollow" href="javascript:;" class="signin-loader m-icon-user">
        <i class="fa fa-user"></i>
      </a>
    </div>
  </header>
</template>
<script>
import Bus from "@/bus";
export default {
  name: "Header",
  // data() {
  //   return {
  //     isActive: 0
  //   };
  // },
  methods: {
    getMenuID(index) {
      this.$store.commit("updateHilightMenu", index);
      // this.isActive = index;

      console.log("点击的栏目ID：" + index);
      //通过mutation 修改栏目ID 和初始化分页
      let payload = {
        cateId: index
      };
      // 更新栏目ID 和 默认的页码
      this.$store.commit("updateCateId", payload);
      this.$store.commit("updateCurrentPage", 1);
      // this.$store.dispatch("updateCateId", payload);
      // this.$store.dispatch("updateCurrentPage", 1);
    },
    mobileMenu() {
      //显示 遮罩层和移动菜单

      document
        .getElementsByClassName("m-icon-nav")[0]
        .addEventListener("click", function() {
          document.getElementsByTagName("body")[0].classList.add("m-nav-show");

          document
            .getElementsByClassName("m-mask")[0]
            .classList.toggle("show", true);

          document
            .getElementsByTagName("body")[0]
            .classList.remove("search-on");
          document
            .getElementsByClassName(".search-show .fa")[0]
            .classList.remove("fa-remove");
        });
    }
  }
};
</script>
<style>
</style>