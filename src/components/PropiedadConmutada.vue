<template>
  <div>
    <h1>Propiedad conmutada</h1>
    <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul>
    <button @click="getJuegosAzules()">Juegos azules</button>
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutadaComponent",
  computed: {
    //UNA PROPIEDAD CONMUTADA O COMPUTED SIEMPRE DEVUELVE VALORES
    //Y NO PUEDE RECIBIR PARAMETROS
    juegosRojos() {
      var datos = this.juegos;
      //RECORREMOS CADA JUEGO Y LO DEVOLVEMOS EN COLOR ROJO
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:blue'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      html: "",
      juegos: [
        "Parchis",
        "Luz roja, luz verde",
        "Canicas",
        "La galleta",
        "La cuerda",
      ],
    };
  },
  methods:{
    getJuegosAzules(){
        for (var juego of this.juegos) {
            this.html+="<h4 style='color:blue'>" + juego + "</h4>";
        }
    }
  }
};
</script>

<style>
</style>