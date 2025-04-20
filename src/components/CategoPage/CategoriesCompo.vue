<template>
  <div class="catego-compo mt-10">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="3"
          lg="4"
          sm="6"
          v-for="(cat, i) in paginatedUsers"
          :key="i"
        >
          <v-card class="pa-5 text-capitalize" elevation="1">
            <v-card-text
              class="d-flex justify-space-between align-center text-capitalize"
            >
              <span><strong>userName: </strong> {{ cat.username }}</span>
              <span><strong>name: </strong> {{ cat.name }}</span>
            </v-card-text>

            <v-card-text class="d-flex justify-space-between align-center">
              <span><strong>Email: </strong> {{ cat.email }}</span>
              <span><strong>Phone: </strong> {{ cat.phone }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
              <span>
                <strong>Website:</strong>
                <a :href="'http://' + cat.website" target="_blank">{{
                  cat.website
                }}</a>
              </span>
              <span><strong>Company:</strong> {{ cat.company.name }}</span>
            </v-card-text>

            <v-card-text class="text-center">
              <span><strong>City:</strong> {{ cat.address.city }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--pagination-->
      <div class="pagination mt-4">
        <v-pagination v-model="currentPage" :length="totalPages" color="dark" />
      </div>
      <!--pagination-->
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { categories } from "@/store/categories";
//Pagintion//
const itemsPerPage = 9;
const currentPage = ref(1);
const totalPages = computed(() => {
  return Math.ceil(categoData.categoriesGet.length / itemsPerPage);
});
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return categoData.categoriesGet.slice(start, end);
});
//Pagintion//
//Get Data From Pinia//
const categoData = categories();
onMounted(() => {
  categoData.getCategories();
});
//Get Data From Pinia//
</script>

<style lang="scss" scoped>
@media (max-width: 667px) {
  .v-card-text {
    span {
      font-size: 11px;
    }
  }
  .v-card-title {
    font-size: 13px;
  }
}
</style>
