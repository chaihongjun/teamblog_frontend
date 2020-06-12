<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 11:14:33
 * @LastEditTime: 2020-05-26 10:32:14
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div>
    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <Focus-Slide></Focus-Slide>
          <!-- <article class="excerpt-minic excerpt-minic-index">
            <h2>
              <a class="red" href="https://demo.themebetter.com/dux/see">【今日观点】</a>
              <a
                href="https://demo.themebetter.com/dux/97.html"
                title="从下载看我们该如何做事-DUX主题演示"
              >从下载看我们该如何做事</a>
            </h2>
            <p
              class="note"
            >一次我下载几部电影，发现如果同时下载多部要等上几个小时，然后我把最想看的做个先后排序，去设置同时只能下载一部，结果是不到一杯茶功夫我就能看到最想看的电影。 这就像我们一段时间内想干成很多事情，是同时干还是有选择有顺序的干，结果很不一样。同时...</p>
          </article>-->
          <div class="title">
            <h3>最新发布</h3>
            <!-- <div class="more">
              <a href="链接地址">热门标签</a>
              <a href="http://daqianduan.com">大前端</a>
              <a href="https://themebetter.com">themebetter</a>
              <a href="http://jianshiduo.com">见识多</a>
            </div>-->
          </div>
          <article class="excerpt excerpt-" v-for="(blog,index) in blogs" :key="index">
            <a class="focus" :href="cateDirPerPage[blog.cid]['dir']">
              <img
                data-src="https://demo.themebetter.com/dux/wp-content/uploads/sites/3/2015/06/Cg-4WlV-hq2IHjVBAAPc7teoM4UAAFYigItZPcAA90G612-214x150.jpg"
                alt="blog.title"
                src="https://demo.themebetter.com/dux/wp-content/themes/dux/img/thumbnail.png"
                class="thumb"
              />
            </a>
            <header>
              <a class="cat" :href="cateDirPerPage[blog.cid]['dir']">
                {{cateDirPerPage[blog.cid]['name']}}
                <i></i>
              </a>
              <h2>
                <a
                  :href="cateDirPerPage[blog.cid]['dir']+'/'+blog.id+'.html'"
                  :title="blog.title"
                >{{blog.title}}</a>
              </h2>
            </header>
            <p class="meta">
              <time>
                <i class="fa fa-clock-o"></i>
                {{blog.create_time}}
              </time>
              <span class="author">
                <i class="fa fa-user"></i>
                {{blog.author}}
              </span>
              <span class="pv">
                <i class="fa fa-eye"></i>阅读(6680)
              </span>
              <a class="pc" href="https://demo.themebetter.com/dux/63.html#respond">
                <i class="fa fa-comments-o"></i>评论(0)
              </a>
              <a href="javascript:;" etap="like" class="post-like" data-pid="63">
                <i class="fa fa-thumbs-o-up"></i>赞(
                <span>81</span>)
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
  </div>
</template>
<script>
import FocusSlide from "@/components/FocusSlide";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import { getAllData } from "@/request/api";
export default {
  name: "Index",
  data() {
    return {
      // 数据初始化
      // blogs: this.$store.getters.allBlog,
      // total: this.$store.getters.total, //  总分页数
      // current_page: this.$store.state.indexRes.current_page, //当前页页码
      // last_page: this.$store.state.indexRes.last_page, //最后一页页码
      // cateDirPerPage: this.$store.state.indexRes.cateDirPerPage,
      // cateDir: this.$store.state.indexRes.cateDir
    };
  },

  computed: {
    blogs() {
      return this.$store.state.indexRes.data;
    },
    total() {
      return this.$store.state.indexRes.total;
    },
    current_page() {
      return this.$store.state.indexRes.current_page;
    },
    last_page() {
      return this.$store.state.indexRes.last_page;
    },

    cateDir() {
      return this.$store.state.indexRes.cateDir;
    },

    cateId() {
      return this.$store.state.indexRes.cateId;
    },

    cateDirPerPage() {
      return this.$store.state.indexRes.cateDirPerPage;
    }
  },

  components: {
    FocusSlide,
    Pagination,
    Sidebar
  },
  mounted() {
    //根据路由判断分页
    if (this.$route.params.pageNumber === undefined) {
      this.$store.commit("updateCurrentPage", 1);
    } else {
      this.$store.commit("updateCurrentPage", this.$route.params.pageNumber);
    }

    let payload = {
      current_page: this.$store.state.current_page
    };

    //异步请求首页数据
    this.$store.dispatch("getIndexDataAction", payload);
  }
};
</script>
<style>
a.tbas {
  border: 2px dashed #aaa;
  padding: 40px 15px;
  font-size: 14px;
  background-color: #fff;
  display: block;
  text-decoration: none;
  color: #888;
  font-weight: bold;
  text-align: center;
}
a.tbas:hover {
  border-color: #666;
  color: #444;
}
@media (max-width: 640px) {
  a.tbas {
    font-size: 12px;
    padding: 25px 15px;
  }
}
</style>