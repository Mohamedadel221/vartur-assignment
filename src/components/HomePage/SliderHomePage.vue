<template>
  <div class="slider-home-page">
    <swiper
      :modules="[Autoplay, Pagination, EffectCoverflow]"
      effect="coverflow"
      :coverflow-effect="{
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }"
      grab-cursor
      centered-slides
      :slides-per-view="1"
      :space-between="0"
      :autoplay="{
        delay: 500,
        disableOnInteraction: false,
      }"
      :speed="1500"
      :pagination="{ clickable: true }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(slide, i) in slides"
        :key="i"
        class="slide"
        :style="{ backgroundImage: `url(${slide.sliderImgs})` }"
      />
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const slides = ref([
  {
    sliderImgs: require("@/assets/sliderhomepage/slideOne.jpg"),
  },
  {
    sliderImgs: require("@/assets/sliderhomepage/slideTwo.jpg"),
  },
  {
    sliderImgs: require("@/assets/sliderhomepage/slideThree.jpg"),
  },
  {
    sliderImgs: require("@/assets/sliderhomepage/slideTwo.jpg"),
  },
  {
    sliderImgs: require("@/assets/sliderhomepage/slideOne.jpg"),
  },
]);
</script>

<style scoped lang="scss">
.slider-home-page {
  width: 100%;
  height: 100vh;

  .mySwiper {
    width: 100%;
    height: 100%;

    .slide {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: -1;
    }
  }
  ::v-deep(.swiper-pagination-bullet) {
    width: 14px;
    height: 14px;
    margin: 0 8px;
    opacity: 0.7;
    transition: all 0.3s ease;
    position: relative;
    bottom: 30px !important;
  }
  ::v-deep(.swiper-pagination-bullet-active) {
    width: 18px;
    height: 18px;
    opacity: 1;
    background-color: #fff !important;
  }
}
</style>
