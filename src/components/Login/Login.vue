<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">Login</slot>
            <button @click="$emit('close')" class="modal__header-close">
              <img src="https://img.icons8.com/ios/50/000000/xbox-x.png" />
            </button>
          </div>
          <div class="modal__body">
            <div class="social">
              <div @click="sign_in_google" class="google" href>
                <img src="../../assets/img/google.svg" />
              </div>
              <!-- <div class="facebook">
                <img src="../../assets/img/facebook.svg" />
              </div>
              <div class="twitter">
                <img src="../../assets/img/twitter.svg" />
              </div>-->
            </div>

            <form class="modal__form" @submit.prevent="sign_in_email">
              <!-- <label for="user">User</label> -->
              <!-- <input type="email" name="email" id="email" placeholder="email@example.com" /> -->
              <div class="w-100 form-input">
                <input
                  v-model="email"
                  class="form-input--input"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <label class="form-input--label" for="email">Email</label>
              </div>

              <!-- <input type="password" name="password" id="password" placeholder="Password" /> -->
              <div class="w-100 form-input">
                <input
                  v-model="password"
                  class="form-input--input"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                <label class="form-input--label" for="password">Password</label>
              </div>
              <button class="button">Login</button>
              <button class="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import auth from "@/api/auth";
import db from "@/api/db";

import swal from "sweetalert";

import { mapMutations, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  methods: {
    ...mapMutations({
      update_state: "auth/update_state",
    }),
    async sign_in_email() {
      const login = await auth.sign_in(this.email, this.password);

      if (!login.user) {
        return swal({
          title: "Something went wrong!",
          text: `${login.error.message}`,
          icon: "error",
        });
      }

      const uid = login.user.uid;
      this.sign_in(uid);
    },

    async sign_in_google() {
      const login = await auth.google_auth();

      if (!login.success) {
        return swal({
          title: "Something was wrong!",
          text: `${login.error.message}`,
          icon: "error",
        });
      }

      const uid = login.data.user.uid;

      this.sign_in(uid);
    },

    async sign_in(uid) {
      const user = await db.get("users", uid);
      if (!user.success) return alert(user.error.message);
      this.update_state({ propertie: "user", value: user.data });
      console.log(this.user);
      if (this.user.admin) this.$router.push("/admin");
      else this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  animation-duration: 0.6s;
  animation-name: animatedOpacity;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 300px;
    max-width: 100%;
    /* height: 400px; */
    margin: 0px auto;
    padding: 3em 2em 3.8em;
    position: relative;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    // font-family: Helvetica, Arial, sans-serif;
  }

  &__header {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    font-size: 32px;
    font-weight: 700;
    margin: 0;

    &-close {
      position: absolute;
      right: 0;
      top: -50px;
      cursor: pointer;
      background-color: transparent;
      padding: 0;
      margin: 0;
      width: 30px;
      height: 30px;

      img {
        background-color: white;
        border-radius: 100%;
        width: 30px;
        height: 30px;
      }
    }
  }
  &__button {
    width: 67px;
    height: 27px;
    margin: 5px;
    background: red;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 40px;
    label {
      // color: #e76f51;
      // font-size: 20px;
      // margin-bottom: 15px;
      left: 0.2em;
    }
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.42);
      margin-bottom: 40px;
    }
    input:focus {
      outline: none;
      border-bottom: 2px solid #e76f51;
    }
    .button {
      width: 100%;
      color: white;
      background-color: #e76f51;
      border-radius: 5px;
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    div {
      width: 70px;
      height: 30px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 20px;
      }
    }
  }

  .w-100 {
    width: 100%;
  }
  .text-right {
    text-align: right;
  }
  .signUp {
    margin-top: -2.5em;
    margin-bottom: 1em;
    width: 100%;
    z-index: 10;
  }
  .google {
    background-color: #dd4b39;
  }
  .facebook {
    background-color: #3b5998;
  }
  .twitter {
    background-color: #55acee;
  }

  @keyframes animatedOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
