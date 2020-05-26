<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 16:46:01
 * @LastEditTime: 2020-05-25 16:46:20
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div class="site-search">
    <div class="container">
      <form method="get" class="site-search-form" action="https://demo.themebetter.com/dux/">
        <input class="search-input" name="s" type="text" placeholder="输入关键字" value />
        <button class="search-btn" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteSearch"
};
</script>


