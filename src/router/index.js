
import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router