<template>
  <div class="menudrawer">
    <v-navigation-drawer v-model="drawer" location="left" temporary width="300">
      <div
        class="logo-img d-flex justify-space-between align-center"
        v-for="logo in navbar.logoImg"
        :key="logo.img"
      >
        <img
          @click="$router.push({ name: 'home' })"
          class="mt-2"
          :src="logo.img"
          alt=""
        />
        <v-icon class="mr-4 text-error" @click="drawer = false"
          >mdi-close</v-icon
        >
      </div>
      <div class="pagelinks">
        <v-btn
          v-for="(page, index) in navbar.categories"
          :key="index"
          class="text-capitalize mt-3 mb-2"
          @click="goToPage(page.route)"
          elevation="0"
        >
          {{ page.title }}</v-btn
        >
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { pagesModules } from "@/store/navbar";
import { useRouter } from "vue-router";
import { inject, onMounted, ref } from "vue";
const router = useRouter();
const navbar = pagesModules();
const emitter = inject("emitter");
const drawer = ref(false);
const goToPage = (route) => {
  router.push({ name: route });
};
onMounted(() => {
  emitter?.on("openMenu", () => {
    drawer.value = true;
  });
});
</script>
<style lang="scss" scoped>
.logo-img {
  img {
    width: 80px;
    cursor: pointer;
  }
}
.pagelinks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px;
}
</style>
