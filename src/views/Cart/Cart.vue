<template>
  <main
    :style="
      `background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: auto 60%`
    "
  >
    <Header />
    <p>Cart</p>
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
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
