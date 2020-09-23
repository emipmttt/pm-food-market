<template>
  <header class="header">
    <nav class="header__navbar">
      <SideBar />
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header__navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & figure {
    margin: 10px;
  }
  &--menu img {
    width: 30px;
  }
  &--input {
    background: white;
    padding: 10px;
    padding-left: 10px;
    align-items: center;
    display: flex;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border-radius: 5px;
    img {
      padding: 0;
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }
  &--input input {
    height: 30px;
    width: 500px;
    border: none;
    padding: 10px;
  }
  &--input input:focus {
    outline: none;
  }
  &--cart img {
    width: 30px;
  }
}
</style>
