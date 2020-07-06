<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 17:06:48
 * @LastEditTime: 2020-05-26 10:03:48
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <section class="container">
    <div class="content-wrap">
      <div class="content">
        <!-- <div class="orbui orbui-cat orbui-cat-01">
          <a
            class="tbas"
            href="https://themebetter.com/theme/dux"
            target="_blank"
          >广告位，电脑和手机可分别设置，可放任何广告代码</a>
        </div>-->
        <Loading></Loading>
        <div class="catleader">
          <h1>{{cateName}}</h1>
        </div>
        <article class="excerpt" v-for="(blog,index) in blogs" :key="index">
          <a class="focus" :href="cateDir+'/'+blog.id+'.html'" @click="updateDetailId(blog.id)">
            <img
              :data-src="'localhost:8080/public'+blog.thumb"
              :alt="blog.title"
              src="https://demo.themebetter.com/dux/wp-content/themes/dux/img/thumbnail.png"
              class="thumb"
            />
          </a>
          <header>
            <h2>
              <a
                :href="cateDir+'/'+blog.id+'.html'"
                :title="blog.title"
                @click="updateDetailId(blog.id)"
              >{{blog.title}}</a>
            </h2>
          </header>
          <p class="meta">
            <time>
              <i class="fa fa-clock-o"></i>
              {{blog.publish_time}}
            </time>
            <span class="author">
              <i class="fa fa-user"></i>
              {{blog.author}}
            </span>
            <span class="pv">
              <i class="fa fa-eye"></i>阅读(16147)
            </span>
            <a class="pc" href="https://demo.themebetter.com/dux/70.html#respond">
              <i class="fa fa-comments-o"></i>评论(0)
            </a>
            <a href="javascript:;" etap="like" class="post-like" data-pid="70">
              <i class="fa fa-thumbs-o-up"></i>赞(
              <span>212</span>)
            </a>
          </p>
          <p class="note">{{blog.introduction}}...</p>
        </article>
        <Pagination
          :currentPageProp="current_page"
          :lastPageProp="last_page"
          :totalProp="total"
          :cateDir="cateDir"
        ></Pagination>
      </div>
    </div>
    <Sidebar></Sidebar>
  </section>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import Sidebar from "@/components/Sidebar.vue";
import { getCateDataByPagination } from "@/request/api";
import Bus from "@/bus";
import Loading from "@/views/Loading";
export default {
  name: "List",
  data() {
    return {
      // cateBlogs: [],
      // total: 0,
      // current_page: 1
      // last_page: 0,
      // cateName: "",
      // cateDir: "",
      // cateId: 0
    };
  },
  computed: {
    blogs() {
      return this.$store.state.cateRes.data;
    },
    total() {
      return this.$store.state.cateRes.total;
    },
    current_page() {
      return this.$store.state.cateRes.current_page;
    },
    last_page() {
      return this.$store.state.cateRes.last_page;
    },

    cateDir() {
      return this.$store.state.cateRes.cateDir;
    },

    cateId() {
      return this.$store.state.cateRes.cateId;
    },

    cateName() {
      return this.$store.state.cateRes.cateName;
    },

    cateDirPerPage() {
      return this.$store.state.cateRes.cateDirPerPage;
    }
  },
  components: {
    Pagination,
    Sidebar,
    Loading
  },
  mounted() {
    // 路由接收的页码
    if (this.$route.params.pageNumber === undefined) {
      this.$store.commit("updateCurrentPage", 1);
    } else {
      this.$store.commit("updateCurrentPage", this.$route.params.pageNumber);
    }
    let payload = {
      cateId: this.$store.state.current_cateId, //栏目ID
      current_page: this.$store.state.current_page //当前分页
    };

    console.log(payload);
    // 异步获取栏目数据
    this.$store.dispatch("getCateDataAction", payload);
  },
  methods: {
    //更新文章ID
    updateDetailId(payload) {
      this.$store.dispatch("updateDetailId", payload);
      // this.$store.commit("updateDetailId", payload);
    }
  }
};
</script>