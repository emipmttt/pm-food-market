<template>
  <img
    v-if="favorite"
    @click="toggle_favorites"
    :src="require('@/assets/icons/favorite.svg')"
  />
  <img
    v-else
    @click="toggle_favorites"
    :src="require('@/assets/icons/favorite_outline.svg')"
  />
</template>

<script>
export default {
  props: {
    recipeId: String,
  },
  data() {
    return {
      favorite: false,
    };
  },
  methods: {
    validate_favorite() {
      var favorites = localStorage.getItem("favorites") || "[]";

      favorites = JSON.parse(favorites);

      const findRecipeIndex = favorites.findIndex(
        (favoriteRecipe) => favoriteRecipe == this.recipeId
      );

      if (findRecipeIndex != -1) {
        this.favorite = true;
      } else {
        this.favorite = false;
      }
    },
    toggle_favorites() {
      var favorites = localStorage.getItem("favorites") || "[]";

      favorites = JSON.parse(favorites);

      const findRecipeIndex = favorites.findIndex(
        (favoriteRecipe) => favoriteRecipe == this.recipeId
      );

      if (findRecipeIndex != -1) {
        favorites.splice(findRecipeIndex, 1);
      } else {
        favorites.push(this.recipeId);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));

      this.validate_favorite();
    },
  },
  created() {
    this.validate_favorite();
  },
};
</script>

<style>
</style>