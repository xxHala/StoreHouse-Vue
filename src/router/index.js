import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import productsView from "../views/ProductsView.vue";
import usersView from "../views/UsersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: productsView,
    },
    {
      path: "/all-users",
      name: "users",
      component: usersView,
    },
  ],
});

export default router;
