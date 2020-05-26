<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 11:14:33
 * @LastEditTime: 2020-05-25 17:01:53
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 
<template>
  <div id="app">
    <Header></Header>
    <Search></Search>

    <router-view />

    <Float></Float>
    <Footer></Footer>
  </div>
</template>


  <script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Float from "@/components/Float";

export default {
  name: "App",
  components: {
    Header,
    Search,
    Footer,
    Float
  }
};
</script>




