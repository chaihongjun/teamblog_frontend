<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:32:36
 * @LastEditTime: 2020-05-25 18:09:09
 * @LastEditors: ChaiHongJun
 * @Description: 首页公告
--> 
<template>
  <div class="widget widget-tops">
    <ul class="widget-nav">
      <li class="active">{{cateName}}</li>
    </ul>
    <ul class="widget-navcontent">
      <li class="item item-01 active">
        <ul>
          <li v-for="(blog,index) in blogs" :key="index">
            <time>{{blog.publish_time|getShortDate}}</time>
            <a target="_blank" :href="cateDir+'/'+blog.id+'.html'">{{blog.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCateDataByLimit } from "@/request/api";
export default {
  name: "Notice",
  data() {
    return {
      limit: 5,
      noticeId: 5
    };
  },
  computed: {
    blogs() {
      return this.$store.state.noticeRes.data;
    },
    cateName() {
      return this.$store.state.noticeRes.cateName;
    },
    cateDir() {
      return this.$store.state.noticeRes.cateDir;
    }
  },
  filters: {
    getShortDate(value) {
      let fullDate = value; //2020-08-08 08:08:08
      let fullDay = fullDate.split(" ")[0].split("-"); //2020-08-08
      return fullDay[1] + "-" + fullDay[2]; //08-08
    }
  },
  mounted() {
    //异步请求 公告 栏目数据
    let payload = {
      noticeId: this.noticeId,
      limit: this.limit
    };
    this.$store.dispatch("getNoticeDataAction", payload);
  }
};
</script>