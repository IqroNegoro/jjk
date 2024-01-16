import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cube from '../views/Cube.vue'
import About from '../views/About.vue'
import Characters from '../views/Characters.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: '/cube',
    name: 'cube',
    component: Cube
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
