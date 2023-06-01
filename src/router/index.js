import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hire-angular-developers',
      name: 'hire-angular-developers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HireView.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsView.vue')
    },
    {
      path: '/jobs/:job_title',
      name: 'job_page',
      component: () => import('../views/JobPageView.vue')
    },
    {
      path: '/agencies',
      name: 'agencies',
      component: () => import('../views/AgenciesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/job-alerts',
      name: 'job-alerts',
      component: () => import('../views/JobAlertsView.vue')
    },
  ]
})

export default router