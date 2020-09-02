<template>
  <div>
    <AdminSideNav />
    <main
      :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: 60% auto`"
    >
      <section class="main-container">
        <h1 class="h1">Recipes</h1>

        <form @submit.prevent="upload_json">
          <textarea v-model="json_data" placeholder="JSON Data"></textarea>
          <br />
          <button>Add Data</button>
        </form>

        <table class="recipe-table">
          <tbody>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>cooking recipe</td>
              <td>
                <router-link to="/manage-recipe">
                  <span class="material-icons">edit</span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import firebase from "@/api/firebase";
import AdminSideNav from "@/components/AdminSideNav/AdminSideNav";
export default {
  data() {
    return {
      json_data: "",
    };
  },
  components: {
    AdminSideNav,
  },
  methods: {
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
}
</style>