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
        <a href="https://demo.themebetter.com/dux" title="DUX主题官方演示站">
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
        <li
          id="menu-item-6"
          class="aaa menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-6"
        >
          <router-link to="/">
            <i class="fa fa-home"></i> 首页
          </router-link>
        </li>
        <li
          id="menu-item-413"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-413"
        >
          <router-link to="/product">
            <i class="fa fa-heart"></i> 产品中心
          </router-link>
          <ul class="sub-menu">
            <li
              id="menu-item-476"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-476"
            >
              <a href="https://demo.themebetter.com/dux/product/erji">产品二级目录</a>
              <ul class="sub-menu">
                <li
                  id="menu-item-477"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-477"
                >
                  <a href="https://demo.themebetter.com/dux/product/erji/p31">产品三级目录</a>
                </li>
                <li
                  id="menu-item-478"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-478"
                >
                  <a href="https://demo.themebetter.com/dux/product/erji/p22">产品三级目录2</a>
                </li>
                <li
                  id="menu-item-479"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-479"
                >
                  <a href="https://demo.themebetter.com/dux/product/erji/p33">产品三级目录3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li
          id="menu-item-7"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7"
        >
          <router-link to="/tech">
            <i class="fa fa-plug"></i> 科技
          </router-link>
        </li>

        <li
          id="menu-item-118"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-118"
        >
          <a>
            <i class="fa fa-file-text-o"></i> 独立页面
          </a>
          <ul class="sub-menu">
            <li
              id="menu-item-123"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-123"
            >
              <a href="https://demo.themebetter.com/dux/sample-page">友情链接</a>
            </li>
            <li
              id="menu-item-122"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-122"
            >
              <a href="https://demo.themebetter.com/dux/archives">页面存档</a>
            </li>

            <li
              id="menu-item-156"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156"
            >
              <a href="https://demo.themebetter.com/dux/no-sidebar">无边栏页面</a>
            </li>
            <li
              id="menu-item-121"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-121"
            >
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
      <i class="fa fa-bars m-icon-nav"></i>
      <a rel="nofollow" href="javascript:;" class="signin-loader m-icon-user">
        <i class="fa fa-user"></i>
      </a>
    </div>
  </header>
</template>



<script>
export default {
  name: "Header"
};
</script>


<style>
</style>