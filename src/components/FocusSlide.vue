<!--
 * @Author: ChaiHongJun
 * @Date: 2020-05-25 14:38:13
 * @LastEditTime: 2020-05-25 16:04:21
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
--> 


<template>
  <div
    id="focusslide"
    class="swiper-container swiper-container-initialized swiper-container-horizontal"
  >
    <div
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
    </div>
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
      <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
      <span
        class="swiper-pagination-bullet swiper-pagination-bullet-active"
        tabindex="0"
        role="button"
        aria-label="Go to slide 2"
      ></span>
    </div>
    <div
      class="swiper-button-next swiper-button-white"
      tabindex="0"
      role="button"
      aria-label="Next slide"
    >
      <i class="fa fa-chevron-right"></i>
    </div>
    <div
      class="swiper-button-prev swiper-button-white"
      tabindex="0"
      role="button"
      aria-label="Previous slide"
    >
      <i class="fa fa-chevron-left"></i>
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
  </div>
</template>