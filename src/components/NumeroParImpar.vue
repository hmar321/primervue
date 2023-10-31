<template>
  <div>
    <h1>Par impar</h1>
    <input @change="comprobarNumero()" type="number" v-model="numero" />
    <div v-html="getTexto"></div>
    <button @click="comprobarNumero()">Mostrar mensaje</button>
    <h2>{{ texto }}</h2>
    <h5 v-if="numero % 2 == 0" style="color: blue">Par</h5>
    <h5 v-else style="color: red">Impar</h5>
  </div>
</template>

<script>
export default {
  name: "NumeroParImparComponent",
  data() {
    return {
      numero: 0,
      texto: "",
    };
  },
  computed: {
    getTexto() {
      var datos = "";
      if (this.numero % 2 === 0) {
        datos = "<h3 style='color:blue'>El número es par</h3>";
      } else {
        datos = "<h3 style='color:red'>El número es impar</h3>";
      }
      return datos;
    },
  },
  methods: {
    comprobarNumero() {
      if (this.numero % 2 === 0) {
        this.texto = "Par";
      } else {
        this.texto = "Impar";
      }
    },
  },
};
</script>

<style>
</style>