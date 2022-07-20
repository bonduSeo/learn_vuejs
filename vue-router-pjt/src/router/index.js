import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroduceView from '../views/IntroduceView.vue'
import DataBindingList from '../views/DatabindingList.vue'
import RenderingView from '../views/RenderingView.vue'
import EventClick from '../views/EventClick.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroduceView
  },
  {
    path: '/databinding',
    name: 'databindinglist',
    component: DataBindingList
  },
  {
    path: '/renderingView',
    name: 'renderingView',
    component: RenderingView
  },
  {
    path: '/eventClick',
    name: 'eventClick',
    component: EventClick
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
