<template>
<section class="container">
  <h1 class="h1">Recipes</h1>
  <table  class="recipe-table">
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
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.h1 {
  text-align: left;
}

.container {
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
    border-bottom: solid 1px;
    padding: 1em;

    &:last-child {
      text-align: right;
    }
  }
}
</style>