<template>
  <h1>Ciclo vida</h1>
  <button @click="cambiarSaludo()">Modificar saludo</button>
  <h1 style="color:green">{{saludo}}</h1>
</template>

<script>
export default {
  name: "CicloVidaComponent",
  data(){
    return{
        saludo:"hoy es martes"
    }
  },
  methods: {
    //AQUI DENTRO DEBEMOS INCLUIR NUESTROS METODOS PERSONALIZADOS
    cambiarSaludo(){
        //DENTRO DE LOS METHODS, PARA ACCEDER A LAS VARIABLE DE data()
        //DABEMOS UTILIZAR LA PALABRA this
        this.saludo="Y esta noche es Halloween!!!"
    }
  },
  mounted() {
    console.log("component montado");
  },
  unmounted() {
    console.log("component desmontado");
  },
  updated() {
    console.log("component actualizado");
  },
  created() {
    console.log("component creado");
  },
};
</script>

<style>
</style>