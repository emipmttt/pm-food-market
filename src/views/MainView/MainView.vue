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
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import ToggleFilter from "../../components/ToggleFilter/ToggleFilter";

export default {
  components: {
    Header,
    Card,
    ToggleFilter,
  },
};
</script>

<style>
</style>