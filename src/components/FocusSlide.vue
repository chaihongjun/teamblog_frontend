<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 14:38:13
 * @LastEditTime: 2020-05-25 16:04:21
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 


<template>
  <!-- <div
      class="swiper-wrapper"
      style="transform: translate3d(-1406px, 0px, 0px); transition-duration: 0ms;"
    >
      <div
        class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
        data-swiper-slide-index="1"
        style="width: 703px;"
      >
        <a target="_blank" href="https://themebetter.com/theme/xiu">
          <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
        </a>
      </div>
      <div
        class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
        data-swiper-slide-index="0"
        style="width: 703px;"
      >
        <a target="_blank" href="https://themebetter.com/theme/xiu">
          <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
        </a>
      </div>
      <div
        class="swiper-slide swiper-slide-active"
        data-swiper-slide-index="1"
        style="width: 703px;"
      >
        <a target="_blank" href="https://themebetter.com/theme/xiu">
          <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
        </a>
      </div>
      <div
        class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
        data-swiper-slide-index="0"
        style="width: 703px;"
      >
        <a target="_blank" href="https://themebetter.com/theme/xiu">
          <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
        </a>
      </div>
  </div>-->

  <swiper
    class="swiper-container swiper-container-initialized swiper-container-horizontal"
    :options="swiperOption"
    id="focusslide"
  >
    <swiper-slide>
      <a href="https://themebetter.com/theme/xiu">
        <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://themebetter.com/theme/xiu">
        <img src="https://themebetter.com/uploads/2014/11/hs-xiu.jpg" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>

    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>



<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "FocusSlide",
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          // el: "#focusslide"
          // type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next"
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>