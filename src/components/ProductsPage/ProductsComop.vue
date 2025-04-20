<template>
  <div class="products-comopo">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="3"
          lg="4"
          sm="6"
          v-for="(prod, i) in paginatedUsers"
          :key="i"
        >
          <v-card class="pa-3 text-capitalize" elevation="1" height="300">
            <v-card-title class="text-capitalize text-center"
              >title
            </v-card-title>
            <v-card-text class="text-capitalize">
              <span> {{ prod.title }}</span>
            </v-card-text>
            <v-card-title class="title-body text-capitalize text-center"
              >body
            </v-card-title>
            <v-card-text class="text-capitalize">
              <span> {{ prod.body }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--pagination-->
      <div class="pagination mt-5">
        <v-pagination v-model="currentPage" :length="totalPages" color="dark" />
      </div>
      <!--pagination-->
    </v-container>
  </div>
</template>

<script setup>
import { products } from "@/store/prodcuts";
import { ref, computed, onMounted } from "vue";
//Pagintion//
const itemsPerPage = 9;
const currentPage = ref(1);
const totalPages = computed(() => {
  return Math.ceil(prodcutData.products.length / itemsPerPage);
});
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return prodcutData.products.slice(start, end);
});
//Pagintion//
// Get Products Data From Pinia //
const prodcutData = products();
onMounted(() => {
  prodcutData.getProducts();
});
// Get Products Data From Pinia //
</script>

<style lang="scss" scoped>
@media (max-width: 667px) {
  .title-body {
    font-size: 13px;
  }
}
</style>
