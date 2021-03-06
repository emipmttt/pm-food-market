import Vue from "vue";
import VueRouter from "vue-router";

import MainView from "../views/MainView/MainView.vue";
import RecipeView from "../views/RecipeView/RecipeView.vue";
import Recipes from "@/views/Recipes/Recipes";
import Faq from "@/views/Faq/Faq.vue";
import ManageRecipe from "@/views/ManageRecipe/ManageRecipe";
import Cart from "@/views/Cart/Cart";
import Ingredients from "@/views/Ingredients/Ingredients";
import Admin from "@/views/Admin/Admin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainView,
  },
  {
    path: "/recipeview",
    name: "RecipeView",
    component: RecipeView,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/recipes",
    children: [
      {
        path: "recipes",
        name: "Recipes",
        component: Recipes,
      },
      {
        path: "ingredients",
        name: "Ingredients",
        component: Ingredients,
      },
      {
        path: "/manage-recipe/:type",
        name: "ManageRecipe",
        component: ManageRecipe,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
