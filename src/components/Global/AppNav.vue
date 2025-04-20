<template>
  <div class="app-navbar">
    <v-app-bar color="#fff" elevation="0">
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="6">
            <div
              class="logo-img"
              v-for="logo in navbar.logoImg"
              :key="logo.img"
            >
              <img
                @click="$router.push({ name: 'home' })"
                class="mr-15 mt-2"
                :src="logo.img"
                alt=""
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pagelinks">
              <v-btn
                v-for="(page, index) in navbar.categories"
                :key="index"
                class="text-capitalize"
                @click="goToPage(page.route)"
              >
                {{ page.title }}</v-btn
              >
              <v-btn @click="logoutUser()" class="text-capitalize"
                >logout</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script setup>
import { pagesModules } from "@/store/navbar";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";
// import { onMounted } from "vue";
const router = useRouter();
const navbar = pagesModules();

const goToPage = (route) => {
  router.push({ name: route });
};
const logoutUser = () => {
  Cookies.remove("isUserLogin");
  router.push({ name: "login" });
};
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
  justify-content: end;
}
</style>
