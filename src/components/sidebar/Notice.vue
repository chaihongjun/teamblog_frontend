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
          <li v-for="(item,index) in noticeList" :key="index">
            <time>{{item.publish_time|getShortDate}}</time>
            <a target="_blank" :href="'/'+cateDir+'/'+item.id+'.html'">{{item.title}}</a>
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
      noticeList: [],
      cateName: "",
      cateDir: "",
      limit: 5,
      noticeId: 5
    };
  },
  filters: {
    getShortDate(value) {
      let fullDate = value; //2020-08-08 08:08:08
      let fullDay = fullDate.split(" ")[0].split("-"); //2020-08-08
      return fullDay[1] + "-" + fullDay[2]; //08-08
    }
  },
  mounted() {
    getCateDataByLimit(this.noticeId, this.limit).then(res => {
      this.noticeList = res.data;
      this.cateName = res.cateName;
      this.cateDir = res.cateDir;
    });
  }
};
</script>