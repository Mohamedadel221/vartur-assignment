import { defineStore } from "pinia";
export const pagesModules = defineStore("pagesModules", {
  state: () => ({
    // Logo  //
    logoImg: [
      {
        img: require("@/assets/logo/logo-2144403_1280-removebg-preview.png"),
      },
    ],
    // Logo //
    // Daynamic Pages //
    categories: [
      {
        title: "Home",
        route: "home",
      },
      {
        title: "Categories",
        route: "categories",
      },
      {
        title: "Products",
        route: "prodcuts",
      },
    ],
    // Daynamic Pages //
  }),
});
