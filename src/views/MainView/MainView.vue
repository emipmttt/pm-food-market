<template>
  <div>
    <Header />
    <section>
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
      <ToggleFilter />
    </section>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Footer />
  </div>
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
}
</style>