<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">Sign Up</slot>
            <img src="https://img.icons8.com/ios/50/000000/xbox-x.png" />
          </div>

          <div class="modal__body">
            <div class="social">
              <div class="google" href>
                <img src="../../assets/img/google.svg" />
              </div>
              <div class="facebook" href>
                <img src="../../assets/img/facebook.svg" />
              </div>
              <div class="twitter" href>
                <img src="../../assets/img/twitter.svg" />
              </div>
            </div>

            <form class="modal__form" action="/">
            <div class="row">
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="text" name="FirtsName" id="FirtsName" required />
                <label class="form-input--label" for="FirtsName">Firts Name</label>
              </div>
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="text" name="LastName" id="LastName" required />
                <label class="form-input--label" for="LastName">Last Name</label>
              </div>
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="date" name="Birthdate" id="Birthdate" required />
                <label class="form-input--label active" for="Birthdate">Birthdate</label>
              </div>
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="email" name="email" id="email" required />
                <label class="form-input--label" for="email">Email</label>
              </div>
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="password" name="Password" id="Password" required />
                <label class="form-input--label" for="Password">Password</label>
              </div>
              <div class="col-md-6 form-input">
                <input class="form-input--input" type="password" name="ConfirmPassword" id="ConfirmPassword" required />
                <label class="form-input--label" for="ConfirmPassword">ConfirmPassword</label>
              </div>
            </div>
              <!-- <input type="text" name="email" id="email" placeholder="Firts Name" />
              <input type="text" name="email" id="email" placeholder="Last Name" />
              <input type="date" name="email" id="email" placeholder="Birthdate" />
              <input type="email" name="email" id="email" placeholder="email@example.com" />
              <input type="password" name="email" id="email" placeholder="Password" />
              <input type="password" name="password" id="password" placeholder="Confirm Password" /> -->

              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SignUp",
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
    width: 500px;
    max-width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    // font-family: Helvetica, Arial, sans-serif;
  }

  &__header {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    font-size: 32px;
    font-weight: 700;

    img {
      position: relative;
      left: 70%;
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
    display: inline-block;
    align-items: center;
    padding-top: 10px;
    // input {
    //   border: none;
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    //   margin: 20px 10px;
    //   width: 40%;
    // }
    // input:focus {
    //   outline: none;
    //   border-bottom: 2px solid #e76f51;
    // }
    button {
      width: 50%;
      height: 30px;
      color: white;
      align-content: center;
      background-color: #e76f51;
      border-radius: 5px;
    }
  }

  .social {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    div {
      width: 70px;
      height: 30px;
      margin: 0 15px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 20px;
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