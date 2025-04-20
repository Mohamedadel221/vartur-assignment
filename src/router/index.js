import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import HomeView from "../views/HomeView.vue";
import CategoriesPage from "@/views/CategoriesPage.vue";
import ProdcutsPage from "@/views/ProductsPage.vue";
import LogIn from "@/views/LogIn.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "HomePage",
    },
  },
  {
    path: "/categoriespage",
    name: "categories",
    component: CategoriesPage,
    meta: {
      title: "Categoriespage",
    },
  },
  {
    path: "/prodcutspage",
    name: "prodcuts",
    component: ProdcutsPage,
    meta: {
      title: "ProdcutsPage",
    },
  },
  {
    path: "/loginpage",
    name: "login",
    component: LogIn,
    meta: {
      title: "LoginPage",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isuserLoggedIn = Cookies.get("isUserLogin") === "true";
  if (!isuserLoggedIn && to.name !== "login") {
    next({ name: "login" });
  } else if (isuserLoggedIn && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
