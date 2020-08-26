import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '../views/MainView/MainView.vue'
import RecipeView from '../views/RecipeView/RecipeView.vue'

import Recipes from "@/views/Recipes/Recipes"
import ManageRecipe from "@/views/ManageRecipe/ManageRecipe"

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
  }, {
    path: '/recipes',
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/manage-recipe",
    name: "ManageRecipe",
    component: ManageRecipe
  }
]

const router = new VueRouter({
  routes
})

export default router
