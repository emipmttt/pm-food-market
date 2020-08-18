<template>
  <header>
    <nav class="navbar">
      <div>
        <SideBar />
      </div>
      <div class="navbar__input">
        <img src="https://img.icons8.com/ios/24/000000/search--v1.png" />
        <input type="text" placeholder="Search a dish..." />
      </div>
      <figure class="navbar__cart">
        <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" />
      </figure>
    </nav>
  </header>
</template>

<script>
import SideBar from "../SideBar/SideBar";

export default {
  name: "Header",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__menu {
    margin: 10px;
  }
  &__menu img {
    width: 30px;
  }
  &__input {
    display: flex;
    border: 1px solid black;
    img {
      padding: 0 10px;
      align-self: center;
      width: 20px;
    }
    input {
      outline: none;
    }
  }
  &__input input {
    height: 30px;
    width: 500px;
    border: none;
  }
  &__cart img {
    width: 30px;
  }
}
</style>