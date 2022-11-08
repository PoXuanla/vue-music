import LoginVue from "@/layouts/Login.vue";
import MainVue from "@/layouts/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginVue,
    },
  ],
});

export default router;
