<template>
  <main
    :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: auto 60%`"
  >
    <Header />
    <div class="empty" v-if="!cart.length">
      <h2>¡No has agregado nada al carrito de compras!</h2>
      <router-link to="/">
        <button>Busca una receta</button>
      </router-link>
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: [],
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 184px);
}
button {
  font-size: 20px;
  height: 40px;
  background-color: #e76f51;
  color: white;
  border: 1px solid #e76f51;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
</style>
