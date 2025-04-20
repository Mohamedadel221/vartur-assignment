import { defineStore } from "pinia";
import axios from "axios";
export const categories = defineStore("categorieTools", {
  state: () => ({
    categoriesGet: [],
    loading: false,
    erroMessage: "",
    singleCategory: [],
  }),
  actions: {
    async getCategories() {
      try {
        const categories = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.categoriesGet = categories.data;
      } catch (error) {
        this.erroMessage = "Something Went Wrong, Please Try Agin !";
      } finally {
        this.loading = false;
      }
    },
  },
});
