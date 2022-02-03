import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Tarefa from '../views/Tarefa.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/tarefa',
    name: 'Tarefa',
    component: Tarefa
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router
