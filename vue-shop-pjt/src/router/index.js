import { createRouter, createWebHistory } from "vue-router";
import Kakaologin from "../views/KakaoLogin.vue";

const routes = [
  {
    path: "/kakaologin",
    name: "kakaologin",
    component: Kakaologin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
