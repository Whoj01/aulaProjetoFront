import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'produtos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/produtos.vue')
  },
  {
   path: '/categorias',
   name: 'categoria',
   component: () => import(/* webpackChunkName: "about" */ '../views/departamentos.vue')
  },
  {
    path: '/categorias/novo',
    name: 'categoriasCreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/categoriaCreate.vue')
  },
  {
    path: '/produto/novo',
    name: 'produtoCreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/produtoCreate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
