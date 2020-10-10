<template>
  <main
    :style="`background-image:url('${require('@/assets/img/path3622.svg')}');background-repeat: no-repeat; background-size: 60% auto; background-position: 0 6em;`"
  >
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
  name: "faq",
  data() {
    return {
      collapsibleItem: [
        {
          header: "¿Qué es Choose and cook?",
          body:
            "Una plataforma en la cual puedes encontrar tus recetas favoritas y como elaborarlas. Pide todos los ingredientes a la puerta de tu casa con un click.",
        },
        {
          header: "¿Cómo ordeno?",
          body:
            "Solo da click en el boton de compra, selecciona todos los ingredientes o los de tu preferecia, ingresa tu direccion y forma de pago! A disfrutar.",
        },
        {
          header: "Quiero más de una receta ¿Cómo le hago?",
          body:
            "Puedes agregar a tu carrito de compras varias recetas, seleccionar los ingredientes de tu elección y recibiras en tu casa los ingredientes con sus recetas correspondientes",
        },
        {
          header: "Subscripción Premium",
          body:
            "Con la subscripción Premium olvidate del pago por envio sin limite alguno, además enterate y prueba nuevas recetas antes que los usuarios Free.",
        },
      ],
    };
  },
  components: {
    Header,
    Collapsible,
  },
};
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 54px);
}
</style>