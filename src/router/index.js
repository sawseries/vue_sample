import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import createAsset from '../views/assets/CreateView.vue'
import Master from '../views/Master.vue'
import Login from '../views/login.vue'

const routes = [
  { path: '/',name: 'home',component: HomeView},
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')},
  { path: '/create/assets',name: 'createasset', component: createAsset},
  { path: '/master',name: 'master', component: Master},
  { path: '/login',name: 'login', component: Login},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
