<template>
  <div class="admin-layout">
    <aside class="admin-layout__nav">
      <router-link class="admin-layout__nav__link" to="/admin/recipes">Recipes</router-link>
      <router-link class="admin-layout__nav__link" to="/admin/ingredients">Ingredients</router-link>
    </aside>
    <div class="admin-layout__contain">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-layout {
  display: flex;

  &__nav {
    flex: 1;
    padding: 10px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);

    a {
      text-decoration: none;
      color: #e76f51;
    }

    &__link {
      border-radius: 5px;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
    }

    &__link:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &__contain {
    flex: 4;
    height: 100vh;
    overflow-y: auto;
  }
}
</style>