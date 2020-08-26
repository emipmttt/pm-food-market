<template>
  <main
    :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: auto 60%`"
  >
    <Header />
    <section class="toggle-filter-container">
      <ToggleFilter v-for="i in 8" :key="i" />
    </section>
    <section>
      <Card v-for="i in 16" :key="i" />
    </section>
    <Footer />
  </main>
</template>

<script>
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import ToggleFilter from "../../components/ToggleFilter/ToggleFilter";
import Footer from "../../components/Footer/Footer";

export default {
  components: {
    Header,
    Card,
    ToggleFilter,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.toggle-filter-container {
  width: 100%;
  height: 170px;
  overflow-x: auto;
  white-space: nowrap;
}
</style>