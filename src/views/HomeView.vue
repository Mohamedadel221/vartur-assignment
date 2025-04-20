<template>
  <div class="home">
    <!-- Slider Component -->
    <SliderHomePage />
    <!-- End Slider Component -->
    <!-- About Component -->
    <FourImg />
    <!-- End About Component -->
    <!-- GridOme Component -->
    <GridOne />
    <!-- End GridOne Component -->
    <!-- GridTwo Component -->
    <GridTwo />
    <!-- End GridTwo Component -->
  </div>
</template>

<script setup>
import SliderHomePage from "@/components/HomePage/SliderHomePage";
import FourImg from "@/components/HomePage/FourImg.vue";
import GridOne from "@/components/HomePage/GridOne.vue";
import GridTwo from "@/components/HomePage/GridTwo.vue";
</script>
