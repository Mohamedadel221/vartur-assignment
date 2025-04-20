<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>
<script setup>
import AppLayout from "@/components/Global/AppLayout.vue";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}
</style>
