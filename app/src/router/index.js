import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/oldhead',
      name: 'oldhead',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/woah',
      name: 'woah',
      component: () => import('../views/NewView.vue'),
    },
  ],
})

export default router
