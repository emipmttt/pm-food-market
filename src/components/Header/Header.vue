<template>
  <header class="header">
    <nav class="header__navbar">
      <div>
        <SideBar />
      </div>
      <div class="header__navbar--input">
        <img src="https://img.icons8.com/ios/24/000000/search--v1.png" />
        <input type="text" placeholder="Search a dish..." />
      </div>
      <figure class="header__navbar--cart">
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
.header__navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  & figure {
    margin: 10px;
  }
  &--menu img {
    width: 30px;
  }
  &--input {
    display: flex;
    border: 1px solid black;
    img {
      padding: 0 10px;
      align-self: center;
      width: 20px;
    }
  }
  &--input input {
    height: 30px;
    width: 500px;
    border: none;
  }
  &--cart img {
    width: 30px;
  }
}
</style> 