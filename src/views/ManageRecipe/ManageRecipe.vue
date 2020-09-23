<template>
  <main
    class="min-hei"
    :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: 60% auto`"
  >
    <section class="main-container">
      <h1 class="h1">Manage Recipe</h1>
      <form @submit.prevent="update">
        <div class="row">
          <div class="col-md-4 form-input">
            <input v-model="name" class="form-input--input" type="text" id="Title" required />
            <label class="form-input--label" for="Title">Title</label>
          </div>
          <!-- <div class="col-md-4 form-input">
            <input v-model="description" class="form-input--input" type="text" id="Description" required />
            <label class="form-input--label" for="Description">Description</label>
          </div> -->
          <!-- <div class="col-md-4 form-input">
            <input v-model="price" class="form-input--input" type="text" id="Price" required />
            <label class="form-input--label" for="Price">Price</label>
          </div> -->

          <div class="col-md-4 form-input">
            <input v-model="tags" class="form-input--input" type="text" id="Tags" required />
            <label class="form-input--label" for="Tags">Tags</label>
          </div>
          <div class="col-md-4 form-input">
            <input v-model="minutes" class="form-input--input" type="text" id="Time" required />
            <label class="form-input--label" for="Time">Time</label>
          </div>
          <!-- <div class="col-md-4 form-input">
            <input v-model="sifficulty" class="form-input--input" type="text" id="Difficulty" required />
            <label class="form-input--label" for="Difficulty">Difficulty</label>
          </div> -->

          <div class="col-md-12 form-input">
            <input v-model="ingredients" class="form-input--input" type="text" id="Ingredients" required />
            <label class="form-input--label" for="Ingredients">Ingredients</label>
          </div>
          <div class="col-md-12 form-input">
            <input v-model="steps" class="form-input--input" type="text" id="Steps" required />
            <label class="form-input--label" for="Steps">Steps</label>
          </div>
          <div class="col-md-12 form-input">
            <input
              class="form-input--input form-input--input__file"
              type="file"
              id="Photos"
              multiple
              accept="image/x-png, image/gif, image/jpeg"
              required
            />
            <label class="form-input--label active" for="Photos">Photos</label>
          </div>
        </div>

        <div class="text-right">
          <button class="btn btn-primary" type="submit">SUBMIT</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      recipe: {},

      name: "",
      tags: "",
      minutes: "",
      ingredients: "",
      steps: ""
    };
  },
  computed: {
    ...mapState({
      recipe_edit: (state) => state.recipes.recipe_edit,
    }),
  },
  methods: {
    update() {},
  },
  mounted() {
    if (this.$route.params.type == "edit") {
      this.name = this.recipe_edit.name;
      this.tags = this.recipe_edit.tags.join(",");
      this.minutes = this.recipe_edit.minutes;
      this.ingredients = this.recipe_edit.ingredients.join(",");
      this.steps = this.recipe_edit.steps;
      // para guardar necesitaras regresarlo a array se usa *.split(",")*
    }
  },
};
</script>

<style lang="scss">
.h1 {
  text-align: left;
}

.min-hei {
  min-height: calc(100vh - 9em);
}

.main-container {
  margin: auto;
  max-width: 100%;
  @media only screen and (min-width: 48em) {
    width: 40rem;
  }

  @media only screen and (min-width: 62em) {
    width: 50rem;
  }

  @media only screen and (min-width: 75em) {
    width: 55rem;
  }
}

.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

@media only screen and (min-width: 64em) {
  .col-md-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .col-md-6 {
    flex-basis: 50%;
    max-width: 50%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .col-md-12 {
    flex-basis: 100%;
    max-width: 100%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
}

.form-input {
  position: relative;
  &--input {
    color: #0000006b;
    width: 100%;
    border: none;
    border-bottom: solid 1.5px #0000006b;
    padding: 0.5em;
    margin-bottom: 1em;
    background-color: transparent;
    min-height: 2em;

    &:focus + .form-input--label,
    &:valid + .form-input--label {
      transform: translate(-0.6em, -1em) scale(0.7);
    }
    &:focus {
      outline: none;
    }

    // &__file {
    //   opacity: 0;
    // }
  }

  &--label {
    position: absolute;
    // background-color: #fff;
    top: 0.2em;
    left: 1em;
    padding: 0.2em;
    transition-duration: 0.3s;

    &.active {
      transform: translate(-0.6em, -1em) scale(0.7);
    }
  }
}

.text-right {
  text-align: right;
}

.btn {
  display: inline-block;
  color: #fff;
  border: none;
  border-radius: 5px;
  line-height: 1.2;
  padding: 0.4em;
  width: 10em;
  box-shadow: 0 1px 5px 0 #00000033;
  transition-duration: 0.3s;

  &-primary {
    background-color: hsl(12, 76%, 61%);

    &:hover {
      background-color: hsl(12, 76%, 55%);
    }
  }
}
</style>