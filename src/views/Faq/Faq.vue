<template>
<div>
  <Header></Header>
  <section class="main-container">
    <h1 class="h1">Frequent questions</h1>
    <collapsible :items="collapsibleItem"></collapsible>
  </section>
</div>
</template>

<script>
import Header from "../../components/Header/Header";
import Collapsible from "../../components/Collapsible/Collapsible";

export default {
  name: 'faq',
  data(){
    return {
      collapsibleItem: [
        {
          header: 'Header 1',
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          header: 'Header 2',
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          header: 'Header 3',
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          header: 'Header 4',
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
      ]
    }
  },
  components: {
    Header,
    Collapsible
  },

};


</script>

<style lang="scss" scoped>

</style>