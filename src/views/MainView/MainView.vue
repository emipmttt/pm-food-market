<template>
  <main
    :style="
      `background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: auto 60%`
    "
  >
    <Header />
    <section class="toggle-filter-container">
      <ToggleFilter @change="12" v-for="(tag, index) in tags" :key="index" :tag="tag" />
    </section>
    <section>
      <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </section>
    <Footer />
  </main>
</template>

<script>
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import ToggleFilter from "../../components/ToggleFilter/ToggleFilter";
import Footer from "../../components/Footer/Footer";

import firebase from "@/api/firebase";

export default {
  components: {
    Header,
    Card,
    ToggleFilter,
    Footer,
  },
  data() {
    return {
      tags: [
        "desayuno",
        "almuerzo",
        "cena",
        "vegetariana",
        "postre",
      ],
      recipes: [],
    };
  },
  methods: {
    async get_main_recipes() {
      const recipes_query = await firebase
        .firestore()
        .collection("recipes")
        .limit(16)
        // para busqueda de etiquetas
        // .where("ingredients", "array-contains", "chickens")
        .orderBy("n_steps")
        .get();

      let recipes = [];
      console.log(recipes);

      recipes_query.forEach((recipe) => {
        recipes.push({
          id: recipe.id,
          ...recipe.data(),
        });
      });

      this.recipes = recipes;
    },
  },
  async mounted() {
    await this.get_main_recipes();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.toggle-filter-container {
  width: 100%;
  height: 170px;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
