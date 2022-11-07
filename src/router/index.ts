import LoginVue from "@/layouts/Login.vue";
import MainVue from "@/layouts/Main.vue";
import TestVue from "@/layouts/Test.vue";

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
    { path: "/test", name: "test", component: TestVue },
  ],
});

export default router;
