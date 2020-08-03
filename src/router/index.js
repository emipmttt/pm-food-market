import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  }
]

const router = new VueRouter({
  routes
})

export default router
