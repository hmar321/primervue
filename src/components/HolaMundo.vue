<template>
  <div>
    <h1>Mi primera app Vue</h1>
    <img src="../assets/images/batman.png" />
    <h2>
      Su nombre es:
      <span>{{ nombre }}</span>
    </h2>
    <h2>
      Su número es:
      <span>{{ numero }}</span>
    </h2>
  </div>
</template>
<script>
//SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS
//DAR AL COMPONENT EN NUESTRA APLICACION VUE
export default {
  name: "HolaMundo",
  data() {
    //AQUI DEBEMOS DECLARAR NUESTRAR VARIABLES
    //NO SE UTILIZAN PALABRAS ESPECIALES PARA SU DECLARACION
    //LA DECLARACION DE LAS VARIABLES SE REALIZA CON SU RETURN Y
    //UN OBJETO JSON QUE CONTENDRA LAS VARIABLES Y SUS VALORES
    return {
      nombre: "Alumno",
      numero: 14,
      miArray: [],
      objeto: {},
    };
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>