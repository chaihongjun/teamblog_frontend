<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-26 09:46:26
 * @LastEditTime: 2020-05-26 09:49:29
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div class="widget widget_ui_posts">
    <h3>随机推荐</h3>
    <ul>
      <Loading></Loading>

      <li v-for="(blog,index) in blogs " :key="index">
        <a
          :href="cateDirPerPage[blog.cid]['dir']+'/'+blog.id+'.html'"
          @click="updateDetailId(blog.id)"
        >
          <span class="thumbnail">
            <img
              data-src="https://demo.themebetter.com/dux/wp-content/uploads/sites/3/2018/10/34-220x150.jpg"
              :alt="blog.title"
              src="https://demo.themebetter.com/dux/wp-content/uploads/sites/3/2018/10/34-220x150.jpg"
              class="thumb"
              style="display: block;"
            />
          </span>
          <span class="text">{{blog.title}}</span>
          <span class="muted">{{blog.publish_time|getShortDate}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Loading from "@/views/Loading";
import { getAllRandDataByLimit } from "@/request/api";
export default {
  name: "RandRecommend",
  data() {
    return {
      limit: 5
    };
  },
  components: {
    Loading
  },
  computed: {
    blogs() {
      return this.$store.state.randRes.data;
    },
    cateDirPerPage() {
      return this.$store.state.randRes.cateDirPerPage;
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
    let payload = {
      limit: this.limit
    };
    this.$store.dispatch("getRandDataAction", payload);
    // getAllRandDataByLimit(this.limit).then(res => {
    //   this.randList = res.data;
    //   // this.cateName = res.cateName;
    //   // this.cateDir = res.cateDir;
    // });
  },

  methods: {
    //更新文章ID
    updateDetailId(payload) {
      this.$store.commit("updateDetailId", payload);
    }
  }
};
</script>


