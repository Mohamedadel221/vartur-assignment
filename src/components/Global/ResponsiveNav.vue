<template>
  <div class="app-responsive">
    <v-app-bar>
      <v-container>
        <v-row class="align-center">
          <v-col col="4">
            <div
              class="logo-img"
              v-for="logo in navbar.logoImg"
              :key="logo.img"
            >
              <img
                @click="$router.push({ name: 'home' })"
                :src="logo.img"
                alt=""
              />
            </div>
          </v-col>
          <v-col cols="4 d-flex justify-center">
            <v-btn @click="logoutUser()" class="text-capitalize">logout</v-btn>
          </v-col>
          <v-col col="4" class="justify-end d-flex">
            <v-app-bar-nav-icon v-model="drawer" @click="openMenu()">
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { pagesModules } from "@/store/navbar";
import router from "@/router";
import Cookies from "js-cookie";
import { inject, ref } from "vue";
const navbar = pagesModules();
const emitter = inject("emitter");
const drawer = ref(false);
const openMenu = () => {
  emitter?.emit("openMenu");
};
const logoutUser = () => {
  Cookies.remove("isUserLogin");
  router.push({ name: "login" });
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  background-color: transparent;
}
.logo-img {
  img {
    width: 80px;
    cursor: pointer;
  }
}
</style>
