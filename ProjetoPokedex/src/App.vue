<template>
  <div class="home">
    <h1>Pokedex </h1>
    <pesquisa @pesquisar="mostrarResultado" />
  </div>
</template>

<script>
import pesquisa from "./components/pesquisa.vue";

export default {
  components: {
    pesquisa
  },
  methods: {
    mostrarResultado(res) {
      let dadoJson = res
      console.log(dadoJson)
    }
  }

}
</script>

<style scoped>
.home {
  background-color: rgb(255, 255, 255) ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
