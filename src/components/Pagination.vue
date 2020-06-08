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
        <a :href="'/'+cateDir+'/page/'+prevPageNum">上一页</a>
      </li>
      <li
        v-for="(num,index) in pageNumArray"
        :key="index"
        :class="{'active':index===currentPageIndex}"
      >
        <a :href="cateDir+'/page/'+num">{{num}}</a>
      </li>
      <li class="next-page" v-if="hasLast">
        <a :href="cateDir+'/page/'+ nextPageNum">下一页</a>
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
      type: [Number, String],
      default: 1
    },
    lastPageProp: {
      type: [Number, String],
      default: 1
    },
    totalProp: {
      type: [Number, String],
      default: 1
    },
    cateDir: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pageNum: [],
      currentPageIndex: 0,
      index: 1,
      cateDirData: this.cateDir
    };
  },
  mounted() {
    this.currentPageIndex = this.$route.params.id - 1;
    // console.log("this.$route.params.id:" + this.$route.params.id);
  },
  updated() {
    //强制在 默认首页添加 第一页高亮
    // console.log(this.$route.params.id);
    if (this.$route.params.id === undefined) {
      let pagination = document.getElementsByClassName("pagination")[0];
      let li = pagination.getElementsByTagName("li")[0];
      li.classList.add("active");
    }
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
    //转换数组 [1,2,...]
    pageNumArray() {
      this.pageNum = [];
      for (let i = 1; i < this.lastPageProp + 1; i++) {
        this.pageNum.push(i);
      }
      return this.pageNum;
    },
    //计算翻页按钮的链接
    //  href="/page/1"        首页
    //  href="/tech/page/1"   其他栏目页
    getPrevNext() {
      //首页
      if (this.cateDirData === "") {
      }
      //非首页
      else {
        return this.cateDirData;
      }
    }
  }
};
</script>