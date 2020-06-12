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
      <li class="prev-page" v-show="hasFirst">
        <a :href="getCateDir+'/page/'+prevPageNum" @click="turnPage(prevPageNum)">上一页</a>
      </li>
      <li
        v-for="(num,index) in pageNumArray"
        :key="index"
        :class="{'active':index===getCurrentPageIndex}"
      >
        <a :href="getCateDir+'/page/'+num" @click="turnPage(num)">{{num}}</a>
      </li>
      <li class="next-page" v-show="hasLast">
        <a :href="getCateDir+'/page/'+ nextPageNum" @click="turnPage(nextPageNum)">下一页</a>
      </li>
      <li>
        <span>共 {{lastPageProp}} 页</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    currentPageProp: {
      type: [Number, String]
    },
    lastPageProp: {
      type: [Number, String]
    },
    totalProp: {
      type: [Number, String]
    },
    cateDir: {
      type: String
    }
  },
  data() {
    return {
      pageNum: [],
      currentPageIndex: 0,
      index: 1
    };
  },
  computed: {
    hasFirst() {
      if (this.currentPageProp === 1) {
        return false;
      } else {
        return true;
      }
    },
    hasLast() {
      if (this.currentPageProp === this.lastPageProp) {
        return false;
      } else {
        return true;
      }
    },
    prevPageNum() {
      return this.currentPageProp - 1;
    },
    nextPageNum() {
      return this.currentPageProp + 1;
    },
    getCurrentPageIndex() {
      this.currentPageIndex = this.currentPageProp - 1;
      return this.currentPageIndex;
    },
    getCateDir() {
      if (this.cateDir === null) {
        return "";
      } else {
        return this.cateDir;
      }
    },
    //转换数组 [1,2,...]
    pageNumArray() {
      this.pageNum = [];
      for (let i = 1; i < this.lastPageProp + 1; i++) {
        this.pageNum.push(i);
      }
      return this.pageNum;
    }
  },
  methods: {
    turnPage(pageNum) {
      this.$store.commit("updateCurrentPage", pageNum);
    }
  }
};
</script>