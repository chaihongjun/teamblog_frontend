<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:39:51
 * @LastEditTime: 2020-05-26 10:00:48
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div class="sidebar">
    <Notice></Notice>
    <RandRecommend></RandRecommend>
    <HotTags></HotTags>
    <StickyPost></StickyPost>
    <Statistics></Statistics>
  </div>
</template>
<script>
import Notice from "@/components/sidebar/Notice.vue";
import RandRecommend from "@/components/sidebar/RandRecommend.vue";
import HotTags from "@/components/sidebar/HotTags.vue";
import StickyPost from "@/components/sidebar/StickyPost.vue";
import Statistics from "@/components/sidebar/Statistics.vue";
export default {
  name: "Sidebar",
  data() {
    return {
      noticeId: 5,
      RandRecommendId: 0,
      limit: 5
    };
  },
  components: {
    Notice,
    RandRecommend,
    HotTags,
    StickyPost,
    Statistics
  }
};
</script>