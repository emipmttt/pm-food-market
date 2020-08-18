<template>
  <figure class="card">
    <img class="card__image" :src="require('@/assets/images/dummy.jpg')" alt />
    <div class="card__description">
      <p>Lorem ipsum</p>
      <div class="card__action">
        <button class="buy">Buy</button>
        <button class="add">Add</button>
      </div>
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
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
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
    padding: 5px;
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