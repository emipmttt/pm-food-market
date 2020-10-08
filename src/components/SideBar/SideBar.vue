<template>
  <div class="container">
    <div class="control">
      <img
        @click="showNav"
        :src="require('@/assets/icons/menu.svg')"
        class="control__img"
      />
    </div>

    <nav v-show="showLink" class="navigation-links">
      <img
        @click="showNav"
        :src="require('@/assets/icons/menu.svg')"
        class="control__img"
      />
      <transition-group name="fade">
        <router-link to="/" v-show="showLink" key="1">Home</router-link>
        <a v-show="showLink" key="2" @click="favorites">Favorites</a>
        <a v-show="showLink" key="3">Subscription</a>
        <router-link to="/faq" v-show="showLink" key="4">FAQ</router-link>
      </transition-group>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "SideBar",

  data: () => {
    return {
      showSidebar: false,
      showLink: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      signup_view: (state) => state.auth.signup_view,
    }),
  },
  methods: {
    ...mapMutations({
      update_state: "global/update_state",
    }),
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        this.showLink = true;
      }
    },
    favorites() {
      if (this.user.uid) {
        this.$router.push("/favorites");
      } else {
        this.update_state({
          propertie: "signup_view",
          value: !this.signup_view,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-width: 0 1px 0 0;
  transition: all 0.5s ease-in-out;

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;

    &__img {
      width: 30px;
      cursor: pointer;
    }
  }
  .navigation-links {
    position: fixed;
    padding: 14px;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba($color: #fff, $alpha: 0.8);
    backdrop-filter: blur(5px);
    a {
      display: block;
      font-size: 1.35rem;
      margin: 20px;
      cursor: pointer;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #f4a261;
        text-decoration: none;
      }
    }
  }
}
@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform linear calc(0.1s * #{$var}), display 0.5s;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>