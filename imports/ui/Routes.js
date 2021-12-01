import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Grevience from './components/Grevience.vue'
import Admin from './components/Admin.vue'

const routes = [
  {
    path: "/",
    name: "grevience",
    component: Grevience
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  },
]

const router = new VueRouter({
  routes
})

export default router