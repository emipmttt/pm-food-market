<template>
  <section class="container">
    <h1>Manage Recipe</h1>
    <form>
      <div class="row">
        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Title" required />
          <label class="form-input--label" for="Title">Title</label>
        </div>
        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Description" required />
          <label class="form-input--label" for="Description">Description</label>
        </div>
        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Price" required />
          <label class="form-input--label" for="Price">Price</label>
        </div>

        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Tags" required />
          <label class="form-input--label" for="Tags">Tags</label>
        </div>
        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Time" required />
          <label class="form-input--label" for="Time">Time</label>
        </div>
        <div class="col-md-4 form-input">
          <input class="form-input--input" type="text" id="Difficulty" required />
          <label class="form-input--label" for="Difficulty">Difficulty</label>
        </div>

        <div class="col-md-12 form-input">
          <input class="form-input--input" type="text" id="Ingredients" required />
          <label class="form-input--label" for="Ingredients">Ingredients</label>
        </div>
        <div class="col-md-12 form-input">
          <input class="form-input--input" type="text" id="Steps" required />
          <label class="form-input--label" for="Steps">Steps</label>
        </div>
        <div class="col-md-12 form-input">
          <input class="form-input--input" type="text" id="Photos" required />
          <label class="form-input--label" for="Photos">Photos</label>
        </div>
      </div>

      <div class="text-right">
        <button class="btn btn-primary" type="submit">SUBMIT</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Quicksand", sans-serif;
}

.container {
  margin: auto;
  @media only screen and (min-width: 48em) {
    width: 46rem;
  }

  @media only screen and (min-width: 62em) {
    width: 61rem;
  }

  @media only screen and (min-width: 75em) {
    width: 71rem;
  }
}

.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.col-md-4 {
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.col-md-12 {
  flex-basis: 100%;
  max-width: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.form-input {
  position: relative;
  &--input {
    width: 100%;
    border: none;
    border-bottom: solid 1px;
    padding: 0.5em;
    margin-bottom: 1em;

    &:focus + .form-input--label,
    &:valid + .form-input--label {
      transform: translate(-0.6em, -1em) scale(0.7);
    }
  }

  &--label {
    position: absolute;
    background-color: #fff;
    top: 0.2em;
    left: 1em;
    padding: 0.2em;
    transition-duration: 0.3s;
  }
}

.text-right {
  text-align: right;
}

.btn {
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  line-height: 1.2;
  padding: .4em;
  width: 10em;
  box-shadow: 0 1px 5px 0 #00000033;
  transition-duration: .3s;

  &-primary {
    background-color: hsl(12, 76%, 61%);

    &:hover {
      background-color: hsl(12, 76%, 55%);
    }
  }
}
</style>