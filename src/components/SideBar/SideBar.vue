<template>
  <div class="container">
    <div class="control">
      <img
        class="control__img"
        src="https://img.icons8.com/ios/50/000000/menu.png"
        @click="showNav"
      />
    </div>

    <nav v-show="showLink" class="navigation-links">
      <img
        class="control__img"
        src="https://img.icons8.com/ios/50/000000/menu.png"
        @click="showNav"
      />
      <transition-group name="fade">
        <a v-show="showLink" key="1">Home</a>
        <a v-show="showLink" key="2" @click="showLogin = true">Log In</a>
        <a v-show="showLink" key="3" @click="showSignup = true">Sign Up</a>
        <a v-show="showLink" key="4">Subscription</a>
        <a v-show="showLink" key="5">FAQ</a>
      </transition-group>
    </nav>
    <Login v-if="showLogin" @showLog="showLogin = $event" />
    <SignUp v-if="showSignup" />
  </div>
</template>

<script>
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
export default {
  name: "SideBar",
  components: {
    Login,
    SignUp,
  },
  data: () => {
    return {
      showSidebar: false,
      showLink: false,
      showLogin: false,
      showSignup: false,
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
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
      &:hover {
        color: #f4a261;
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
  @include nav-childs(1, 2, 3, 4, 5);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>