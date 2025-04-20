<template>
  <div class="about-compo mt position-relative">
    <v-container fluid>
      <v-row class="align-center">
        <v-col
          :cols="6"
          sm="3"
          md="3"
          lg="3"
          v-for="(grid, index) in gridOne"
          :key="index"
          class="p-0"
        >
          <div class="about-section-one">
            <div class="gridone">
              <img :src="grid.img" class="w-100 position-relative" alt="" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
// GridOneImg //
const gridOne = ref([
  {
    img: require("@/assets/about-compo/a1.jpg"),
  },
  {
    img: require("@/assets/about-compo/a2.jpg"),
  },
  {
    img: require("@/assets/about-compo/a3.jpg"),
  },
  {
    img: require("@/assets/about-compo/a4.jpg"),
  },
]);
// GridOneImg //
</script>

<style lang="scss" scoped>
.about-compo {
  img {
    position: absolute;
    top: -40px;
    z-index: 1;
    border-radius: 8px;
  }
}
</style>
