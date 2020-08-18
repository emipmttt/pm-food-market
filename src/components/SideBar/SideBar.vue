<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <img
        class="control__img"
        src="https://img.icons8.com/ios/50/000000/menu.png"
        @click="showNav"
      />
    </div>

    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" key="1">Home</div>
        <div v-show="showLink" key="2">Log In</div>
        <div v-show="showLink" key="3">Sign Up</div>
        <div v-show="showLink" key="4">Subscription</div>
        <div v-show="showLink" key="5">FAQ</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: () => {
    return {
      showSidebar: false,
      showLink: false,
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
  position: absolute;
  top: 100px;
  left: 0;
  width: 0;
  padding: 0px;
  min-height: calc(100vh - 20px);
  background-color: rgba($color: #fff, $alpha: 0.8);
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;
    &__img {
      width: 30px;
      padding-left: 40px;
      cursor: pointer;
    }
  }
  &.show {
    width: 180px;
  }
  .navigation-links {
    padding-top: 14px;
    float: left;
    div {
      font-size: 1.35rem;
      padding-left: 20px;
      padding-bottom: 10px;
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