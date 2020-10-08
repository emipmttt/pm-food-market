<template>
  <div id="app">
    <router-view />
    <Login />
    <SignUp />
  </div>
</template>
<script>
import Login from "@/components/Login/Login";
import SignUp from "@/components/SignUp/SignUp";
import { mapMutations } from "vuex";
export default {
  components: {
    Login,
    SignUp,
  },
  methods: {
    ...mapMutations({
      update_state: "auth/update_state",
    }),
    validate_user() {
      var user = localStorage.getItem("food_user_data");

      if (user) {
        user = JSON.parse(user);
        this.update_state({ propertie: "user", value: user });
      }
    },
  },
  created() {
    this.validate_user();
  },
};
</script>
<style lang="scss">
@import "./assets/css/components/btn.scss";

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
