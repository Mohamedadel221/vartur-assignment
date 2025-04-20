import axios from "axios";
import { defineStore } from "pinia";
export const products = defineStore("productsModules", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.products = response.data;
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    },
  },
});
