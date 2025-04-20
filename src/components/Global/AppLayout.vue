<template>
  <div>
    <div class="layouts">
      <v-layout>
        <MenuDrawer />
        <v-main>
          <slot></slot>
        </v-main>
        <AppNav v-if="showNav && windowWidth > 990" />
        <ResponsiveNav v-if="showNav && windowWidth < 990" />
      </v-layout>
    </div>
  </div>
</template>

<script setup>
import AppNav from "@/components/Global/AppNav.vue";
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ResponsiveNav from "@/components/Global/ResponsiveNav.vue";
import MenuDrawer from "@/components/Global/MenuDrawer.vue";
const route = useRoute();
const showNav = computed(() => route.name !== "login");
const windowWidth = ref(0);
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<style setup></style>
