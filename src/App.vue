<template>
  <div id="app">
    <Header></Header>
    <Search></Search>
    <router-view />

    <Footer></Footer>
    <Float></Float>
    <div class="m-mask" @click></div>
    <MobileNav></MobileNav>
  </div>
</template>
  <script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Float from "@/components/Float";
import MobileNav from "@/components/MobileNav";
export default {
  name: "App",
  components: {
    Header,
    Search,
    Footer,
    Float,
    MobileNav
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      //this.$store.replaceState()替换 store 的根状态
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
