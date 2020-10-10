<template>
  <div>
    <!-- <AdminSideNav /> -->
    <main
      :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: 60% auto`"
    >
      <section class="main-container">
        <h1 class="h1">Recipes</h1>

        <form @submit.prevent="upload_json">
          <textarea class="text--json" v-model="json_data" placeholder="JSON Data"></textarea>
          <br />
          <button class="button--json">Add Data</button>
        </form>

        <table class="recipe-table">
          <tbody>
            <tr v-for="recipe in recipes" :key="recipe.id">
              <td>{{recipe.name}}</td>
              <td>
                <button @click="editRecipe(recipe)" class="recipe-table--btn">
                  <img src="../../assets/img/edit.svg" />
                </button>
                <button class="recipe-table--btn" @click="deleteRecipe(recipe)">
                  <img src="../../assets/img/delete.svg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
    <Footer />
    <div @click="create_recipe" class="float-button">+</div>
  </div>
</template>

<script>
import firebase from "@/api/firebase";
// import AdminSideNav from "@/components/AdminSideNav/AdminSideNav";
import Footer from "../../components/Footer/Footer";
import db from "@/api/db";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      json_data: "",
      recipes: [],
    };
  },
  components: {
    // AdminSideNav,
    Footer,
  },
  methods: {
    ...mapMutations({
      update_state: "recipes/update_state",
    }),
    upload_json() {
      const data = JSON.parse(this.json_data);

      var db = firebase.firestore();

      var batch = db.batch();

      data.forEach((recipe) => {
        var recipeRef = db.collection("recipes").doc();
        batch.set(recipeRef, recipe);
      });

      batch.commit().then(function () {
        alert("Recetas actualizadas correctamente");
      });
    },
    async get_main_recipes() {
      const recipes_query = await firebase
        .firestore()
        .collection("recipes")
        .orderBy("n_steps")
        .get();

      var recipes = [];

      recipes_query.forEach((recipe) => {
        recipes.push({
          id: recipe.id,
          ...recipe.data(),
        });
      });

      this.recipes = recipes;
    },
    deleteRecipe(recipe) {
      // console.log(recipe['id'])
      db.delete("recipes", recipe.id)
        .then((response) => {
          console.log(response);
          // console.log('Eliminó')
          this.get_main_recipes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editRecipe(recipe) {
      var data = {
        propertie: "recipe_edit",
        value: recipe,
      };

      this.update_state(data);

      this.$router.push("/manage-recipe/edit");
    },
    create_recipe() {
      this.$router.push("/manage-recipe/create");
    },
  },
  async mounted() {
    await this.get_main_recipes();
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.h1 {
  text-align: left;
}

.main-container {
  margin: auto;
  padding: 10px;

  max-width: 100%;
  @media only screen and (min-width: 48em) {
    width: 46rem;
  }

  @media only screen and (min-width: 62em) {
    width: 61rem;
  }

  @media only screen and (min-width: 75em) {
    width: 71rem;
  }
}
.recipe-table {
  width: 100%;
  border-spacing: 0;

  td {
    text-align: left;
    font-weight: 700;
    border-bottom: solid 1px #0000001f;
    padding: 1em;

    &:last-child {
      text-align: right;
    }
  }

  &--btn {
    display: inline-block;
    margin-left: 0.5em;
    background-color: transparent;
    border: none;
    border-radius: 0.4em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
}

.text--json {
  width: 40em;
  height: 5em;
  border: none;
  border-bottom: solid 1px #272727;
}

.button--json {
  padding: 5px 10px;
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  border: none;
  outline: none;
  text-decoration: none;

  background-color: #e76f51;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 2px rgba(231, 111, 81, 0.5);
}
</style>