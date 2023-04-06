import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/Todo.vue')
    }
  ]
})

export default router
