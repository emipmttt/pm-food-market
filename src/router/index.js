import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView/MainView.vue'
import RecipeView from '../views/RecipeView/RecipeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/recipeview',
    name: 'RecipeView',
    component: RecipeView
  }
]

const router = new VueRouter({
  routes
})

export default router
