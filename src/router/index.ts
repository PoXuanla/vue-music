import LoginVue from "@/layouts/Login.vue";
import MainVue from "@/layouts/Main.vue";
import PerosnFile from "@/layouts/PersonFile.vue";
import NotFound from "@/layouts/NotFound.vue";
import ManageVue from "@/layouts/Manage.vue";

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
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") !== null) {
          next({ name: "home" });
          return;
        }
        next();
      },
    },
    {
      path: "/manage",
      name: "manage",
      component: ManageVue,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/personFile/:account",
      name: "personFile",
      component: PerosnFile,
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

// Auth Guard
router.beforeEach((to, from) => {
  const authToken = localStorage.getItem("token");
  console.log(authToken);
  if (to.meta.requireAuth && authToken === null) {
    console.log(from.fullPath);
    return {
      path: "/login",
    };
  }
});
export default router;
