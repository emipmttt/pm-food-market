<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">Login</slot>
            <img src="https://img.icons8.com/ios/50/000000/xbox-x.png" />
          </div>

          <div class="modal__body">
            <div class="social">
              <div class="google" href>
                <img src="../../assets/images/google.svg" />
              </div>
              <div class="facebook" href>
                <img src="../../assets/images/facebook.svg" />
              </div>
              <div class="twitter" href>
                <img src="../../assets/images/twitter.svg" />
              </div>
            </div>

            <form class="modal__form" action="/">
              <label for="user">User</label>
              <input type="email" name="email" id="email" placeholder="email@example.com" />

              <input type="password" name="password" id="password" placeholder="Password" />

              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Login",
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

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 250px;
    height: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &__header {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    font-size: 32px;

    img {
      position: relative;
      left: 170px;
      bottom: 80px;
      width: 30px;
      height: 30px;
      background-color: white;
      border-radius: 100%;
      cursor: pointer;
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
      color: #e76f51;
      font-size: 20px;
      margin-bottom: 15px;
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
    button {
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
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 25px;
      }
    }
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
}
</style>