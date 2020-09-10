<template>
  <div class="admin-layout">
    <aside class="admin-layout__nav">
      <router-link class="admin-layout__nav__link" to="/admin/recipes">Recipes</router-link>
      <router-link class="admin-layout__nav__link" to="/admin/ingredients">Ingredients</router-link>
      <div @click="logout" class="admin-layout__nav__link">Cerrar Sesión</div>
    </aside>
    <div class="admin-layout__contain">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      update_state: "auth/update_state",
    }),
    logout() {
      this.update_state({ propertie: "user", value: {} });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-layout {
  display: flex;

  &__nav {
    flex: 1;
    padding: 10px;
    border-right: solid 1px #c1c1c1;
    &__link {
      text-decoration: none;
      color: #e76f51;
      border-radius: 5px;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      text-align: left;
      cursor: pointer;
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