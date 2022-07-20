import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BoxOfficeByDay from "../views/BoxOfficeByDay.vue";
import BoxOfficeByWeek from "../views/BoxOfficeByWeek.vue";
import BoxOffice from "../views/BoxOffice.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/boxOfficeByDay",
    name: "boxOfficeByDay",
    component: BoxOffice,
  },
  {
    path: "/boxOfficeByWeek",
    name: "boxOfficeByWeek",
    component: BoxOffice,
  },

  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
