import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

import MenuOne from '../views/menus/MenuOne.vue'
import MenuTwo from '../views/menus/MenuTwo.vue'
import MenuThree from '../views/menus/MenuThree.vue'
import MenuFour from '../views/menus/MenuFour.vue'

import PageOne from '../views/pages/PageOne.vue'
import PageTwo from '../views/pages/PageTwo.vue'
import PageThree from '../views/pages/PageThree.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Layout,
    children: [
      { path: '', name: 'MenuOne', component: MenuOne },
      { path: 'menu-2', name: 'MenuTwo', component: MenuTwo },
      { path: 'menu-3', name: 'MenuThree', component: MenuThree },
      { path: 'menu-4', name: 'MenuFour', component: MenuFour }
    ]
  },
  { path: '/page-1', name: 'PageOne', component: PageOne },
  { path: '/page-2', name: 'PageTwo', component: PageTwo },
  { path: '/page-3', name: 'PageThree', component: PageThree },
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
