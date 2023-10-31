import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import CineComponent from "./components/Cine.vue";
import MusicaComponent from "./components/Musica.vue";
import CicloVidaComponent from "./components/CicloVida.vue";
import DirectivasComponent from "./components/Directivas.vue";
import PropiedadConmutadaComponent from "./components/PropiedadConmutada.vue";
import NumeroParImparComponent from "./components/NumeroParImpar.vue";
import MetodosFiltersComponent from "./components/MetodosFilters.vue";


//CREAMOS UN CONSTANTE CON NUESTRAS RUTAS
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/cine", component: CineComponent },
    { path: "/musica", component: MusicaComponent },
    { path: "/ciclovida", component: CicloVidaComponent },
    { path: "/directivas", component: DirectivasComponent },
    { path: "/propiedadconmutada", component: PropiedadConmutadaComponent },
    { path: "/numeroparimpar", component: NumeroParImparComponent },
    { path: "/filters", component: MetodosFiltersComponent },
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL Y EL ARRAY DE RUTAS
//DICHA CONSTANTE, SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router=createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE ROUTER
export default router;