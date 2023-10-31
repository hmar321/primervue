<template>
  <div>
    <h1>Metodos filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num">{{$filters.getNumeroDoble(num)}}</li>
    </ul>
    <ul>
        <li v-for="name in nombres" :key="name">{{$filters.mayuscula(name)}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodosFiltersComponent",
  data(){
    return{
        numeros:[6,4,8,16,8,48,15,8],
        nombres:["Adrian","Lucia","Diana","Carlos","Antonia"],
    }
  }
};
</script>

<style>
</style>