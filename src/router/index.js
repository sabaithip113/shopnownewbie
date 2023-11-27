import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import GallaryView from '../views/GallaryView.vue'
import BrandView from '../views/BrandView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/gallary/:id',
    name: 'gallary',
    component: GallaryView
  },
  {
    path: '/brand',
    name: 'brand',
    component: BrandView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
