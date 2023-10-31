<template>
  <h1>Menu</h1>
  <ul id="menu">
    <li>
      <router-link to="/">Home | </router-link>
    </li>
    <li>
      <router-link to="/cine">Cine | </router-link>
    </li>
    <li>
      <router-link to="/musica">Música | </router-link>
    </li>
    <li>
      <router-link to="/ciclovida">CicloVida | </router-link>
    </li>
    <li>
      <router-link to="/directivas">Directivas vue | </router-link>
    </li>
    <li>
      <router-link to="/propiedadconmutada">Propiedad conmutada | </router-link>
    </li>
    <li>
      <router-link to="/numeroparimpar">Número par impar | </router-link>
    </li>
    <li>
      <router-link to="/filters">Filters | </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li{
    display: inline;
}
</style>