import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TheMainView from "@/views/TheMainView.vue";
import TheConfigMode from "@/views/TheConfigMode.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TheMainView',
    component: TheMainView
  },
  {
    path: '/config_mode',
    name: 'TheConfigMode',
    component: TheConfigMode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
