import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./modules/auth"
import recipes from "./modules/recipes"
import global from "./modules/global"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    recipes,
    global
  },
  state: {},
  mutations: {},
  actions: {}
})