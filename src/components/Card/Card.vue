<template>
  <figure class="card">
    <router-link to="/recipeview">
      <img class="card__image" src="http://lorempixel.com/output/food-q-c-640-480-1.jpg" alt />
    </router-link>
    <div class="card__description">
      <p>Lorem ipsum</p>
    </div>
    <div class="card__action">
      <button class="buy">Buy</button>
      <button class="add">Add</button>
    </div>
  </figure>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss">
.card {
  display: inline-block;
  margin: 10px;
  width: 300px;
  height: 250px;
  border-radius: 16px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  background: #fff;
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
    padding: 20px;

    p {
      margin: 0;
    }
  }
  &__action {
    display: flex;
    justify-content: flex-end;
  }
}
button {
  padding: 10px;
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
  color: #e76f51;
  font-size: 16px;
  line-height: 20px;
  border: none;
}
</style>
