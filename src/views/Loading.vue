


<template>
  <div class="mask" v-if="$store.state.isShow">
    <Spin fix v-if="$store.state.isShow">
      <Icon type="ios-loading" size="50" class="spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
  </div>
</template>


<script>
export default {
  name: "Loading"
};
</script>


<style scoped>
.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.mask {
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.8); */
}
</style>
