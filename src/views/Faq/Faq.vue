<template>
<main :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: 60% auto; background-position: 0 6em;`">
  <Header></Header>
  <section class="min-height main-container">
    <h1 class="h1">Frequent questions</h1>
    <collapsible :items="collapsibleItem"></collapsible>
  </section>
</main>
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
.min-height {
  min-height: calc(100vh - 54px);
}
</style>