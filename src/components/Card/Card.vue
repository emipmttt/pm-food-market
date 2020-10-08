<template>
  <figure class="card">
    <div class="card__header">
      <Favorite :recipeId="recipe.id" class="card__header__favorite" />
    </div>
    <router-link to="/recipeview">
      <img class="card__image" :src="recipe.url.split(',')[0]" alt />
    </router-link>
    <div class="card__description">
      <h2>{{ recipe.name }}</h2>
    </div>
    <div class="card__action">
      <button class="buy">Buy</button>
      <button class="add">Add</button>
    </div>
  </figure>
</template>

<script>
import Favorite from "./components/Favorite";
export default {
  name: "Card",
  props: ["recipe"],
  components: {
    Favorite,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// para shopping cart podemos usar estas mimas pero cambiandoles
// .card{
//=======
//<style lang="scss">
// para shopping cart podemos usar estas mimas pero cambiandoles
// .card {
//>>>>>>> d0f3e70eb13b56c2d147920ffe80b8f9aa14292d
//     display: flex;
//     margin: 10px auto;
//     width: 600px;
//     height: 150px;
//       __image {
//         width: 200px;
//         height: 100%;
//       }
//     }
.card {
  display: inline-block;
  margin: 10px;
  width: 300px;
  height: 250px;
  border-radius: 16px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);

  &__header {
    position: absolute;
    padding: 10px;
    &__favorite {
      cursor: pointer;
    }
  }

  &__image {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: #c4c4c4;
    border-radius: 16px;
  }
  &__description {
    text-align: left;
    padding: 10px;
    height: 60px;

    h2 {
      margin: 0;
      font-size: 1em;
      text-transform: capitalize;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__action {
    display: flex;
    justify-content: flex-end;
  }
}
button {
  padding: 5px 10px;
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  border: none;
  outline: none;
}
.buy {
  background-color: #e76f51;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 2px rgba(231, 111, 81, 0.5);
}
.add {
  border: 1px solid #e76f51;
  border-radius: 5px;
  color: #2c3e50;
}
</style>
