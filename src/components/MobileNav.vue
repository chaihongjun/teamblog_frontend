<template>
  <ul class="m-navbar">
    <li class="menu-item">
      <a href="/" aria-current="page">
        <i class="fa fa-home"></i> 首页
      </a>
    </li>
    <li class="menu-item menu-item-has-children">
      <a href="/product">
        <i class="fa fa-heart"></i> 产品中心
      </a>
      <ul class="sub-menu">
        <li
          id="menu-item-476"
          class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-476"
        >
          <a href="/product/computer">电脑</a>
          <ul class="sub-menu">
            <li
              id="menu-item-477"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-477"
            >
              <a href="/product/computer/pc">PC机</a>
            </li>
          </ul>
          <i class="fa fa-angle-down faa"></i>
        </li>
      </ul>
      <i class="fa fa-angle-down faa"></i>
    </li>
    <li class="menu-item">
      <a href="/tech">
        <i class="fa fa-plug"></i> 科技
      </a>
    </li>

    <li class="menu-item">
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
      </ul>
      <i class="fa fa-angle-down faa"></i>
    </li>

    <li class="navto-search">
      <a href="javascript:;" class="search-show active">
        <i class="fa fa-search"></i>
      </a>
    </li>
  </ul>
</template>


<script>
export default {
  name: "MobileNav"
};
</script>