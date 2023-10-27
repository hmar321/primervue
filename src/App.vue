<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HolaMundo />
  <HomeComponent />
  <CineComponent />
  <MusicaComponent />
</template>

<script>
import HolaMundo from "./components/HolaMundo.vue";
import HomeComponent from "./components/Home.vue";
import CineComponent from "./components/Cine.vue";
import MusicaComponent from "./components/Musica.vue";

export default {
  name: "App",
  components: {
    HolaMundo,
    HomeComponent,
    CineComponent,
    MusicaComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
