<template>
  <div class="gridtwo-compo mt-2">
    <v-container fluid>
      <div class="parent" v-for="(img, i) in imgs" :key="i">
        <v-row>
          <v-col cols="12" md="5" lg="5" sm="12">
            <div class="height-img">
              <img :src="img.landScape" class="w-100" alt="" />
            </div>
          </v-col>
          <v-col cols="12" md="7" lg="7" sm="12">
            <div class="img-land">
              <img :src="img.largImg" class="w-100" alt="" />
            </div>
            <v-row class="align-center">
              <v-col cols="6" v-for="(gImg, j) in img.girdImgs" :key="j">
                <div class="two-img">
                  <img :src="gImg" class="w-100" alt="" />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="text-center get-more-info mb-3 mt-3">
          <h2 class="text-capitalize">see more categories !</h2>
          <p class="mt-3 mb-2 text-start mx-auto pl-4 text-capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at
            reiciendis repellendus id dignissimos et enim? Nam similique,
            dolorum nulla assumenda provident architecto obcaecati totam quod in
            accusantium tempora reiciendis!
          </p>
          <v-btn
            color="000"
            variant="outlined"
            elevation="0"
            density="compact"
            width="180"
            class="text-capitalize"
            height="40"
            @click="$router.push({ name: 'categories' })"
            >see all categories</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imgs = ref([
  {
    largImg: require("@/assets/products/l1.jpg"),
    girdImgs: [
      require("@/assets/products/g3.jpg"),
      require("@/assets/products/g4.jpg"),
    ],
    landScape: require("@/assets/products/l3.jpg"),
  },
]);
</script>

<style lang="scss" scoped>
.gridtwo-compo {
  margin-top: -52px;
  .seemore-prod {
    .v-btn {
      text-decoration: underline;
    }
  }
  .get-more-info {
    p {
      max-width: 500px;
    }
  }
}
@media (max-width: 767px) {
  .get-more-info {
    p {
      font-size: 10px;
    }
  }
  .gridtwo-compo {
    flex-direction: column-reverse !important;
  }
}
</style>
