<template>
  <header class="header">
    <nav class="header__navbar">
      <SideBar />
      <div class="header__navbar--input">
        <img :src="require('@/assets/icons/search.svg')" />
        <input type="text" placeholder="Search a dish..." />
      </div>
      <div class="header__navbar__buttons">
        <div
          @click="update_state({ propertie: 'login_view', value: !login_view })"
          class="header__navbar__buttons__btn"
        >
          Login
        </div>
        <div
          @click="
            update_state({ propertie: 'signup_view', value: !signup_view })
          "
          class="header__navbar__buttons__btn"
        >
          Sign Up
        </div>
        <figure class="header__navbar--cart">
          <img :src="require('@/assets/icons/shopping_cart.svg')" />
        </figure>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import SideBar from "../SideBar/SideBar";
export default {
  name: "Header",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      signup_view: (state) => state.global.signup_view,
      login_view: (state) => state.global.login_view,
    }),
  },
  methods: {
    ...mapMutations({
      update_state: "global/update_state",
    }),
  },
};
</script>

<style lang="scss" scoped>
.header__navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  &__buttons {
    display: flex;
    align-items: center;

    &__btn {
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
    }
  }

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
