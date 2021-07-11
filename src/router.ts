import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import ('./views/Home.vue') },
  { path: '/about', component: () => import ('./views/About.vue') },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
});
