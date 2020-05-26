<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:39:51
 * @LastEditTime: 2020-05-26 10:00:48
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 


<template>
  <div class="sidebar">
    <div class="widget widget-tops">
      <ul class="widget-nav">
        <li class="active">网站公告</li>
      </ul>
      <ul class="widget-navcontent">
        <li class="item item-01 active">
          <ul>
            <li>
              <time>07-08</time>
              <a
                target="_blank"
                href="https://demo.themebetter.com/dux/501.html"
              >DUX主题文章图片暗箱功能测试，请在手机端查看</a>
            </li>
            <li>
              <time>06-30</time>
              <a target="_blank" href="https://demo.themebetter.com/dux/106.html">大前端和阿里百秀背后的团队</a>
            </li>
            <li>
              <time>06-30</time>
              <a
                target="_blank"
                href="https://demo.themebetter.com/dux/104.html"
              >你是否希望大前端做服务器合租代管服务？</a>
            </li>
            <li>
              <time>06-30</time>
              <a
                target="_blank"
                href="https://demo.themebetter.com/dux/101.html"
              >大前端D8主题等其他主题支持wordpress 3.8版本</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <div class="widget widget_ui_textorbui">
      <a class="style02" href="https://themebetter.com/theme/dux" target="_blank">
        <strong>吐血推荐</strong>
        <h2>DUX主题 新一代主题</h2>
        <p>DUX Wordpress主题是大前端当前使用主题，是大前端积累多年Wordpress主题经验设计而成；扁平的风格和干净白色的架构会让网站显得内涵而出色...</p>
      </a>
    </div>-->

    <RandRecommend></RandRecommend>

    <HotTags></HotTags>

    <StickyPost></StickyPost>

    <Statistics></Statistics>
  </div>
</template>


<script>
import RandRecommend from "@/components/sidebar/RandRecommend.vue";

import HotTags from "@/components/sidebar/HotTags.vue";

import StickyPost from "@/components/sidebar/StickyPost.vue";
import Statistics from "@/components/sidebar/Statistics.vue";
export default {
  name: "Sidebar",
  components: {
    RandRecommend,
    HotTags,
    StickyPost,
    Statistics
  }
};
</script>