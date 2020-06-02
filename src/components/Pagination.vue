<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:25:29
 * @LastEditTime: 2020-05-25 17:25:45
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div class="pagination">
    <ul>
      <li class="prev-page" v-if="hasFirst">
        <a :href="'/page/'+(current_page - 1)" @click="prevPage()">上一页</a>
      </li>
      <!-- <li v-for="()in ">
        <a href="http://www.daqianduan.com/">1</a>
      </li>
      <li class="active">
        <span>2</span>
      </li>
      <li>
        <a href="http://www.daqianduan.com/page/3">3</a>
      </li>
      <li>
        <a href="http://www.daqianduan.com/page/4">4</a>
      </li>
      <li>
        <a href="http://www.daqianduan.com/page/5">5</a>
      </li>
      <li>
        <span>...</span>
      </li>-->
      <li class="next-page" v-if="hasLast">
        <a :href="'/page/'+ (current_page + 1)" @click="nextPage()">下一页</a>
      </li>
      <li>
        <span>共 {{last_page}} 页</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { allBlog } from "@/request/api";

export default {
  name: "Pagination",
  props: {
    current_page: {
      type: Number,
      default: 1
    },
    last_page: {
      type: Number,
      default: 1
    },
    total: Number
  },

  methods: {
    prevPage() {
      console.log(this.current_page - 1);
      this.$emit("turnPage", this.current_page - 1);
    },
    nextPage() {
      console.log(this.current_page + 1);
      this.$emit("turnPage", this.current_page + 1);
    }
  },
  computed: {
    hasFirst() {
      if (this.current_page === 1) {
        return false;
      } else {
        return true;
      }
    },
    hasLast() {
      if (this.current_page === this.last_page) {
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    console.log("current_page:" + this.current_page);
  }
};
</script>