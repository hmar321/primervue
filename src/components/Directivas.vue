<template>
  <h1 style="color: blue">Directivas vue</h1>
  <ul v-if="series.length > 0">
    <li v-for="(serie,index) in series" :key="serie">{{index+1}} {{serie}}</li>
  </ul>
  <label>Número</label>
  <input type="text" v-model="numero" />
  <h2 v-if="numero > 0" style="color: green">Positivo</h2>
  <h2 v-if="numero < 0" style="color: green">Negativo</h2>
  <h2 v-if="numero == 0" style="color: green">Cero</h2>
  <hr />
  <label>Nombre</label>
  <input type="text" v-model="nombre" />
  <br />
  <label>Edad</label>
  <input type="number" v-model="edad" />
  <h1 style="color: red">Nombre: {{ nombre }}, Edad: {{ edad }}</h1>
  <h1>
    <!-- EL SIMBOLO $ NOS PERMITE ACCEDER A CIERTOS
    ELEMENTOS DE VUE EN LA ZONA DE TEMPLATE
    POR EJEMPLO, PODEMOS ACCEDER A TODO EL COTENIDO DE data() -->
    {{ $data }}
  </h1>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "Suits", "House of Cards", "Gen V"],
      numero: 0,
      nombre: "",
      edad: 0,
    };
  },
};
</script>

<style>
</style>