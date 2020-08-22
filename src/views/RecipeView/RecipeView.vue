<template>
  <div>
    <Header />
    <section class="recipeView">
      <article>
        <h2>Salad</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="galery">
          <div class="galery__main">
            <img src="http://lorempixel.com/output/food-q-c-640-480-1.jpg" alt />
          </div>
          <div class="galery--carrusel">
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
            <img src="http://lorempixel.com/output/food-q-c-640-480-9.jpg" alt />
          </div>
        </div>
      </article>
      <article class="recipeView__contenido">
        <h3>Ingredients</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Dessert(100gr serving)</th>
              <th scope="col">Calories</th>
              <th scope="col">Fat(g)</th>
              <th scope="col">Carbs(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
            </tr>
          </tbody>
        </table>
        <div class="contenido__botones">
          <a href="#">Buy</a>
          <a href="#">Add</a>
        </div>
      </article>
      <h2>Preparation</h2>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body,
h2,
h3,
p {
  margin: 0px;
  padding: 0px;
}

h2 {
  display: flex;
  align-items: center;
  text-align: right;
  font-weight: bold;
  font-size: 49.6px;
  line-height: 62px;
  margin-top: 0px;
}
.recipeView {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 20px;
  width: 90%;
  height: 100%;
  border: 1px solid red;
  margin: 0 auto;
  padding: 10px;
}

article {
  display: grid;
  margin: 0 auto;
  width: 100%;

  height: 650px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 85%;
    text-align: justify;
    margin-top: 5px;
  }
}

.galery {
  display: grid;
  grid-template-rows: 60% 40%;
  width: 100%;
  height: 536px;
  margin-top: 10px;

  &__main {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      margin: 10px;
      margin: 0 auto;
    }
  }

  .galery--carrusel {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    img {
      object-fit: cover;
      width: 31%;
      height: 110px;
    }
  }
}

.recipeView__contenido {
  display: inline-block;
  padding-left: 20px;
  position: relative;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  h3 {
    text-align: left;
    margin-top: 10px;
  }

  table {
    display: inline-block;
    height: 80%;
    padding: 0.75rem;
    width: 100%;
    margin-top: 20px;
  }

  .contenido__botones {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 20px;
    right: 20px;

    a {
      text-decoration: none;
      background-color: #e57373;
      width: 70px;
      height: 36px;
      margin: 0px 10px 0 10px;
      -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
      color: white;
      line-height: 36px;
    }
  }
}
</style>